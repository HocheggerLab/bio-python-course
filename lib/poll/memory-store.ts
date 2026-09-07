import type { CastResult, PollStore } from './store'

/**
 * In-process poll storage for local development.
 *
 * Mirrors the eventual SQL shape on purpose: one ballot per
 * (question, voter) pair, so a repeat submission overwrites rather than
 * accumulating — the same thing `ON CONFLICT (question_id, voter_token) DO
 * UPDATE` will do in Postgres.
 */
export class MemoryPollStore implements PollStore {
  readonly kind = 'memory' as const

  /** questionId -> (voterToken -> optionIndex) */
  private ballots = new Map<string, Map<string, number>>()
  private openQuestion: string | null = null

  async current(): Promise<string | null> {
    return this.openQuestion
  }

  async isOpen(questionId: string): Promise<boolean> {
    return this.openQuestion === questionId
  }

  async hasVoted(questionId: string, voterToken: string): Promise<boolean> {
    return this.ballots.get(questionId)?.has(voterToken) ?? false
  }

  async setOpen(questionId: string, open: boolean): Promise<void> {
    if (open) {
      // Only one question runs at a time; opening one closes whatever was.
      this.openQuestion = questionId
    } else if (this.openQuestion === questionId) {
      this.openQuestion = null
    }
  }

  async cast(
    questionId: string,
    voterToken: string,
    optionIndex: number
  ): Promise<CastResult> {
    let q = this.ballots.get(questionId)
    if (!q) {
      q = new Map()
      this.ballots.set(questionId, q)
    }
    const existed = q.has(voterToken)
    q.set(voterToken, optionIndex)
    return existed ? 'updated' : 'recorded'
  }

  async counts(questionId: string, optionCount: number): Promise<number[]> {
    const out = new Array<number>(optionCount).fill(0)
    const q = this.ballots.get(questionId)
    if (!q) return out
    for (const choice of q.values()) {
      if (choice >= 0 && choice < optionCount) out[choice] += 1
    }
    return out
  }

  async total(questionId: string): Promise<number> {
    return this.ballots.get(questionId)?.size ?? 0
  }

  async reset(questionId: string): Promise<void> {
    this.ballots.delete(questionId)
    if (this.openQuestion === questionId) this.openQuestion = null
  }
}
