/**
 * The feedback rounds for the term. Two only: one mid-course, one at the end.
 *
 * A round opens and closes by the clock — there is no switch to forget. The
 * server checks the window on every submission; the page and the reminder pill
 * read the same dates, so all three agree on whether feedback is open.
 *
 * Times are UTC. Both rounds fall in GMT, so they are also UK clock time.
 * A round without dates is listed but never opens.
 */
export interface FeedbackRound {
  id: string
  title: string
  opensAt?: string
  closesAt?: string
}

export const FEEDBACK_ROUNDS: FeedbackRound[] = [
  {
    id: 'mid-2026',
    title: 'Mid-course feedback',
    opensAt: '2026-11-02T09:00:00Z',
    closesAt: '2026-11-09T09:00:00Z',
  },
  {
    id: 'final-2026',
    title: 'End-of-course feedback',
    // Set to the final session: open at its start, close a week later.
  },
]

export function getRound(id: string): FeedbackRound | undefined {
  return FEEDBACK_ROUNDS.find((r) => r.id === id)
}

export function isRoundOpen(round: FeedbackRound, now: number = Date.now()): boolean {
  if (!round.opensAt || !round.closesAt) return false
  return now >= Date.parse(round.opensAt) && now < Date.parse(round.closesAt)
}

export function openRound(now: number = Date.now()): FeedbackRound | null {
  return FEEDBACK_ROUNDS.find((r) => isRoundOpen(r, now)) ?? null
}

/** "Monday 9 November", in UK time. */
export function formatDay(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    timeZone: 'Europe/London',
  })
}

/** Per-round, so the two rounds' responses cannot be joined up. */
export const tokenKey = (roundId: string) => `feedback.${roundId}.token`
/** The student's own copy of what they sent, so they can revise it. */
export const answersKey = (roundId: string) => `feedback.${roundId}.answers`
