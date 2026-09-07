import { MemoryPollStore } from './memory-store'

export type CastResult = 'recorded' | 'updated'

/**
 * Everything the poll needs from storage.
 *
 * Kept deliberately small so swapping the memory implementation for Postgres
 * touches one file. Only one question is ever open at a time — `setOpen(id,
 * true)` is expected to close any other open question, which removes the need
 * for the student page to know which question it should be asking about.
 */
export interface PollStore {
  /** The single open question, or null when nothing is running. */
  current(): Promise<string | null>
  isOpen(questionId: string): Promise<boolean>
  /** Needed so the per-question cap can turn away new voters without
   *  turning away someone changing an answer they already cast. */
  hasVoted(questionId: string, voterToken: string): Promise<boolean>
  setOpen(questionId: string, open: boolean): Promise<void>
  cast(
    questionId: string,
    voterToken: string,
    optionIndex: number
  ): Promise<CastResult>
  counts(questionId: string, optionCount: number): Promise<number[]>
  total(questionId: string): Promise<number>
  reset(questionId: string): Promise<void>
  /** Reported by /api/poll/health so the wrong store can't be used unnoticed. */
  readonly kind: 'memory' | 'postgres'
}

let store: PollStore | null = null

/**
 * The memory store is for local development only.
 *
 * On Vercel each request may be served by a different serverless instance, so
 * votes would land in separate memories and the totals would be quietly wrong
 * — partial counts, no error. Once the Postgres store exists this function
 * picks it whenever DATABASE_URL is set, and /api/poll/health reports which
 * one is live.
 */
export function getStore(): PollStore {
  if (!store) store = new MemoryPollStore()
  return store
}
