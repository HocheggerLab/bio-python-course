import { neon } from '@neondatabase/serverless'
import type { FeedbackAnswers } from './questions'

export type SaveResult = 'recorded' | 'updated' | 'full'

export interface StoredResponse {
  answers: FeedbackAnswers
  updatedAt: string
}

/**
 * Feedback storage — the same split as the poll: Postgres whenever
 * DATABASE_URL is set, an in-process map for local development only (on
 * Vercel each instance would hold its own map and responses would scatter).
 */
export interface FeedbackStore {
  readonly kind: 'memory' | 'postgres'
  /** Upsert one respondent's answers, unless the round is at its cap. */
  save(roundId: string, token: string, answers: FeedbackAnswers, cap: number): Promise<SaveResult>
  list(roundId: string): Promise<StoredResponse[]>
}

class MemoryFeedbackStore implements FeedbackStore {
  readonly kind = 'memory' as const
  private rows = new Map<string, Map<string, StoredResponse>>()

  async save(roundId: string, token: string, answers: FeedbackAnswers, cap: number) {
    const round = this.rows.get(roundId) ?? new Map<string, StoredResponse>()
    this.rows.set(roundId, round)
    const existed = round.has(token)
    if (!existed && round.size >= cap) return 'full' as const
    round.set(token, { answers, updatedAt: new Date().toISOString() })
    return existed ? ('updated' as const) : ('recorded' as const)
  }

  async list(roundId: string) {
    return [...(this.rows.get(roundId)?.values() ?? [])]
  }
}

class SqlFeedbackStore implements FeedbackStore {
  readonly kind = 'postgres' as const
  private sql: ReturnType<typeof neon>

  constructor(connectionString: string) {
    this.sql = neon(connectionString)
  }

  async save(roundId: string, token: string, answers: FeedbackAnswers, cap: number) {
    /* One statement: insert only while the round is under its cap, but always
       allow an existing respondent to revise. The count check and the insert
       are not atomic, so the cap can be overshot by a few under a burst — it
       is a guard against scripted flooding, not an exact quota. */
    const rows = (await this.sql`
      INSERT INTO feedback_response (round_id, respondent_token, answers)
      SELECT ${roundId}, ${token}, ${JSON.stringify(answers)}::jsonb
      WHERE (SELECT count(*) FROM feedback_response WHERE round_id = ${roundId}) < ${cap}
         OR EXISTS (
           SELECT 1 FROM feedback_response
           WHERE round_id = ${roundId} AND respondent_token = ${token}
         )
      ON CONFLICT (round_id, respondent_token)
      DO UPDATE SET answers = EXCLUDED.answers, updated_at = now()
      RETURNING (created_at = updated_at) AS is_new
    `) as { is_new: boolean }[]
    if (rows.length === 0) return 'full' as const
    return rows[0].is_new ? ('recorded' as const) : ('updated' as const)
  }

  async list(roundId: string) {
    const rows = (await this.sql`
      SELECT answers, updated_at FROM feedback_response
      WHERE round_id = ${roundId}
      ORDER BY updated_at
    `) as { answers: FeedbackAnswers; updated_at: string | Date }[]
    return rows.map((r) => ({
      answers: r.answers,
      updatedAt: new Date(r.updated_at).toISOString(),
    }))
  }
}

/* Kept on globalThis because the dev bundler can load this module once per
   route; a module-level variable would give the form and the results page
   separate memory stores. */
const holder = globalThis as unknown as { feedbackStore?: FeedbackStore }

export function getFeedbackStore(): FeedbackStore {
  if (!holder.feedbackStore) {
    const url = process.env.DATABASE_URL
    holder.feedbackStore = url ? new SqlFeedbackStore(url) : new MemoryFeedbackStore()
  }
  return holder.feedbackStore
}

/** Comfortably above the cohort; stops the table growing without bound. */
export const MAX_RESPONSES_PER_ROUND = 400
