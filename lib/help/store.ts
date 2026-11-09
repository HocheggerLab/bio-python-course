import { neon } from '@neondatabase/serverless'
import { MAX_QUEUE, type HelpRequest, type HelpStatus, type StudentView } from './types'

export { MAX_NAME_CHARS, MAX_QUESTION_CHARS, type HelpRequest, type HelpStatus, type StudentView } from './types'

/**
 * The lab help queue.
 *
 * A student joins with a name and an optional question, gets a place in the
 * line, and can leave again if they sort it out themselves. Helpers see the
 * whole queue at /teach/help, mark "on my way", then "done" (which removes
 * the entry). "Clear" empties the queue at the end of a lab — nothing here is
 * meant to outlive the session.
 *
 * Same split as the poll and feedback: Postgres whenever DATABASE_URL is set,
 * an in-process map for local development only.
 */

export type JoinResult = 'joined' | 'updated' | 'full'

export interface HelpStore {
  readonly kind: 'memory' | 'postgres'
  join(token: string, name: string, question: string): Promise<JoinResult>
  leave(token: string): Promise<void>
  view(token: string): Promise<StudentView>
  list(): Promise<HelpRequest[]>
  setStatus(id: number, status: HelpStatus): Promise<void>
  remove(id: number): Promise<void>
  clear(): Promise<void>
}

/** Position counts only people still waiting ahead of you, 1-based. */
function studentView(all: HelpRequest[], mine: HelpRequest | undefined): StudentView {
  if (!mine) return { state: 'none' }
  if (mine.status === 'helping') return { state: 'helping' }
  const ahead = all.filter((r) => r.status === 'waiting' && r.id < mine.id).length
  return { state: 'waiting', position: ahead + 1 }
}

class MemoryHelpStore implements HelpStore {
  readonly kind = 'memory' as const
  private rows = new Map<string, HelpRequest>()
  private nextId = 1

  async join(token: string, name: string, question: string) {
    const existing = this.rows.get(token)
    if (existing) {
      existing.name = name
      existing.question = question
      return 'updated' as const
    }
    if (this.rows.size >= MAX_QUEUE) return 'full' as const
    this.rows.set(token, {
      id: this.nextId++,
      name,
      question,
      status: 'waiting',
      createdAt: new Date().toISOString(),
    })
    return 'joined' as const
  }

  async leave(token: string) {
    this.rows.delete(token)
  }

  async view(token: string) {
    return studentView([...this.rows.values()], this.rows.get(token))
  }

  async list() {
    return [...this.rows.values()].sort((a, b) => a.id - b.id)
  }

  async setStatus(id: number, status: HelpStatus) {
    for (const r of this.rows.values()) if (r.id === id) r.status = status
  }

  async remove(id: number) {
    for (const [token, r] of this.rows) if (r.id === id) this.rows.delete(token)
  }

  async clear() {
    this.rows.clear()
  }
}

type Row = {
  id: number | string
  name: string
  question: string
  status: HelpStatus
  created_at: string | Date
}

const toRequest = (r: Row): HelpRequest => ({
  id: Number(r.id),
  name: r.name,
  question: r.question,
  status: r.status,
  createdAt: new Date(r.created_at).toISOString(),
})

class SqlHelpStore implements HelpStore {
  readonly kind = 'postgres' as const
  private sql: ReturnType<typeof neon>
  private ready: Promise<unknown> | null = null

  constructor(connectionString: string) {
    this.sql = neon(connectionString)
  }

  /* Creates the table on first use, so the queue works on a fresh database
     without anyone running the migration by hand. Mirrors
     migrations/003_help_queue.sql. */
  private ensureTable() {
    this.ready ??= this.sql`
      CREATE TABLE IF NOT EXISTS help_request (
        id         BIGSERIAL   PRIMARY KEY,
        token      TEXT        NOT NULL UNIQUE,
        name       TEXT        NOT NULL,
        question   TEXT        NOT NULL DEFAULT '',
        status     TEXT        NOT NULL DEFAULT 'waiting'
                               CHECK (status IN ('waiting', 'helping')),
        created_at TIMESTAMPTZ NOT NULL DEFAULT now()
      )
    `.catch((err: unknown) => {
      this.ready = null // try again on the next request
      throw err
    })
    return this.ready
  }

  async join(token: string, name: string, question: string) {
    await this.ensureTable()
    /* Same shape as the feedback cap: insert only while under the limit, but
       always let someone already in the queue edit their entry. Not atomic
       under a burst — a guard, not a quota. */
    const rows = (await this.sql`
      INSERT INTO help_request (token, name, question)
      SELECT ${token}, ${name}, ${question}
      WHERE (SELECT count(*) FROM help_request) < ${MAX_QUEUE}
         OR EXISTS (SELECT 1 FROM help_request WHERE token = ${token})
      ON CONFLICT (token)
      DO UPDATE SET name = EXCLUDED.name, question = EXCLUDED.question
      RETURNING (xmax = 0) AS is_new
    `) as { is_new: boolean }[]
    if (rows.length === 0) return 'full' as const
    return rows[0].is_new ? ('joined' as const) : ('updated' as const)
  }

  async leave(token: string) {
    await this.ensureTable()
    await this.sql`DELETE FROM help_request WHERE token = ${token}`
  }

  async view(token: string) {
    await this.ensureTable()
    const rows = (await this.sql`
      SELECT status,
             (SELECT count(*) FROM help_request o
               WHERE o.status = 'waiting' AND o.id < m.id) AS ahead
      FROM help_request m
      WHERE token = ${token}
    `) as { status: HelpStatus; ahead: number | string }[]
    if (rows.length === 0) return { state: 'none' } as const
    if (rows[0].status === 'helping') return { state: 'helping' } as const
    return { state: 'waiting', position: Number(rows[0].ahead) + 1 } as const
  }

  async list() {
    await this.ensureTable()
    const rows = (await this.sql`
      SELECT id, name, question, status, created_at
      FROM help_request ORDER BY id
    `) as Row[]
    return rows.map(toRequest)
  }

  async setStatus(id: number, status: HelpStatus) {
    await this.ensureTable()
    await this.sql`UPDATE help_request SET status = ${status} WHERE id = ${id}`
  }

  async remove(id: number) {
    await this.ensureTable()
    await this.sql`DELETE FROM help_request WHERE id = ${id}`
  }

  async clear() {
    await this.ensureTable()
    await this.sql`DELETE FROM help_request`
  }
}

/* On globalThis for the same reason as the feedback store: the dev bundler
   can load this module once per route. */
const holder = globalThis as unknown as { helpStore?: HelpStore }

export function getHelpStore(): HelpStore {
  if (!holder.helpStore) {
    const url = process.env.DATABASE_URL
    holder.helpStore = url ? new SqlHelpStore(url) : new MemoryHelpStore()
  }
  return holder.helpStore
}
