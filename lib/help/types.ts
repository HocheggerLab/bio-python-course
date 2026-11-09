/** Shared by the help queue store, its API routes and the client pages. */

export type HelpStatus = 'waiting' | 'helping'

export interface HelpRequest {
  id: number
  name: string
  question: string
  status: HelpStatus
  createdAt: string
}

/** What a student is allowed to know: their own place, nobody else's details. */
export type StudentView =
  | { state: 'none' }
  | { state: 'waiting'; position: number }
  | { state: 'helping' }

/** Well above a lab group; stops a script filling the table. */
export const MAX_QUEUE = 100
export const MAX_NAME_CHARS = 40
export const MAX_QUESTION_CHARS = 280
