import { neon } from '@neondatabase/serverless'
import type { CastResult, PollStore } from './store'

/**
 * Neon-backed poll storage.
 *
 * Uses the HTTP driver rather than a TCP pool: every request here is one
 * short query, which is exactly what `neon()` is for, and it avoids a hundred
 * serverless invocations each opening a Postgres connection during a
 * thirty-second burst of votes.
 *
 * `DATABASE_URL` must be the *pooled* Neon endpoint. The direct one is for
 * running migrations.
 */
export class SqlPollStore implements PollStore {
  readonly kind = 'postgres' as const
  private sql: ReturnType<typeof neon>

  constructor(connectionString: string) {
    this.sql = neon(connectionString)
  }

  async current(): Promise<string | null> {
    const rows = (await this.sql`
      SELECT question_id FROM poll_state WHERE is_open LIMIT 1
    `) as { question_id: string }[]
    return rows[0]?.question_id ?? null
  }

  async isOpen(questionId: string): Promise<boolean> {
    const rows = (await this.sql`
      SELECT is_open FROM poll_state WHERE question_id = ${questionId}
    `) as { is_open: boolean }[]
    return rows[0]?.is_open ?? false
  }

  async setOpen(questionId: string, open: boolean): Promise<void> {
    if (!open) {
      await this.sql`
        UPDATE poll_state SET is_open = false WHERE question_id = ${questionId}
      `
      return
    }
    /* Close the previous question and open this one in one transaction: a
       partial unique index enforces at most one open question, so doing these
       as two separate round trips would transiently violate it. */
    await this.sql.transaction([
      this.sql`
        UPDATE poll_state SET is_open = false
        WHERE is_open AND question_id <> ${questionId}
      `,
      this.sql`
        INSERT INTO poll_state (question_id, is_open, opened_at)
        VALUES (${questionId}, true, now())
        ON CONFLICT (question_id)
        DO UPDATE SET is_open = true, opened_at = now()
      `,
    ])
  }

  async hasVoted(questionId: string, voterToken: string): Promise<boolean> {
    const rows = (await this.sql`
      SELECT 1 FROM poll_ballot
      WHERE question_id = ${questionId} AND voter_token = ${voterToken}
    `) as unknown[]
    return rows.length > 0
  }

  async cast(
    questionId: string,
    voterToken: string,
    optionIndex: number
  ): Promise<CastResult> {
    /* One statement does both jobs. On insert, created_at and updated_at are
       set from the same now(), so they are exactly equal; a later change makes
       them differ, which is how we tell a new ballot from a changed one
       without a second query. */
    const rows = (await this.sql`
      INSERT INTO poll_ballot (question_id, voter_token, option_index)
      VALUES (${questionId}, ${voterToken}, ${optionIndex})
      ON CONFLICT (question_id, voter_token)
      DO UPDATE SET option_index = EXCLUDED.option_index, updated_at = now()
      RETURNING (created_at = updated_at) AS is_new
    `) as { is_new: boolean }[]
    return rows[0]?.is_new ? 'recorded' : 'updated'
  }

  async counts(questionId: string, optionCount: number): Promise<number[]> {
    const rows = (await this.sql`
      SELECT option_index, count(*)::int AS n
      FROM poll_ballot WHERE question_id = ${questionId}
      GROUP BY option_index
    `) as { option_index: number; n: number }[]

    const out = new Array<number>(optionCount).fill(0)
    for (const row of rows) {
      // A question edited down to fewer options must not throw on old ballots.
      if (row.option_index >= 0 && row.option_index < optionCount) {
        out[row.option_index] = row.n
      }
    }
    return out
  }

  async total(questionId: string): Promise<number> {
    // count(*) is bigint, which the driver hands back as a string unless cast.
    const rows = (await this.sql`
      SELECT count(*)::int AS n FROM poll_ballot WHERE question_id = ${questionId}
    `) as { n: number }[]
    return rows[0]?.n ?? 0
  }

  async reset(questionId: string): Promise<void> {
    await this.sql.transaction([
      this.sql`DELETE FROM poll_ballot WHERE question_id = ${questionId}`,
      this.sql`UPDATE poll_state SET is_open = false WHERE question_id = ${questionId}`,
    ])
  }
}
