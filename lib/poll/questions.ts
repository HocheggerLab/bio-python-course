import { POLL_CONTENT } from './content'

/**
 * The server's view of a question: the option count to validate against, and
 * the answer.
 *
 * `optionCount` is derived from the shared content rather than restated, so
 * the two can never drift apart — a fifth option added to the wording is
 * accepted by the validator automatically.
 */
export interface QuestionDef {
  lecture: number
  optionCount: number
  correctIndex: number
}

const ANSWERS: Record<string, { lecture: number; correctIndex: number }> = {
  'l7-q1': { lecture: 7, correctIndex: 2 },
}

export function getQuestion(id: string): QuestionDef | undefined {
  const answer = Object.prototype.hasOwnProperty.call(ANSWERS, id)
    ? ANSWERS[id]
    : undefined
  const content = Object.prototype.hasOwnProperty.call(POLL_CONTENT, id)
    ? POLL_CONTENT[id]
    : undefined
  if (!answer || !content) return undefined
  return {
    lecture: answer.lecture,
    optionCount: content.options.length,
    correctIndex: answer.correctIndex,
  }
}

export const QUESTION_IDS = Object.keys(ANSWERS)

/** Refuse to grow the table without bound if someone scripts the endpoint. */
export const MAX_BALLOTS_PER_QUESTION = 400
