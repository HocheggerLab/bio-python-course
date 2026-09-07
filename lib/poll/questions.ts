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
  // All three verified against CPython: only B interpolates, "3.14" is a str,
  // and the other three names are SyntaxErrors (digit first, space, keyword).
  'l1-r1': { lecture: 1, correctIndex: 1 },
  'l1-r2': { lecture: 1, correctIndex: 1 },
  'l1-r3': { lecture: 1, correctIndex: 2 },

  // label= belongs on the plot call; ax.legend() only draws what is labelled.
  'l7-p1': { lecture: 7, correctIndex: 1 },
  'l7-r1': { lecture: 7, correctIndex: 2 },
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
