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
  // Try-it-Yourself polls. Answers verified by running each exercise.
  'l2-t1a': { lecture: 2, correctIndex: 1 },  // readings[2]
  'l2-t1b': { lecture: 2, correctIndex: 2 },  // del readings[1]
  'l2-t1c': { lecture: 2, correctIndex: 0 },  // readings.append(19)
  'l2-t1d': { lecture: 2, correctIndex: 2 },  // 20
  'l2-t1e': { lecture: 2, correctIndex: 1 },  // round(sum / len, 1) -> 51.7
  'l2-t2a': { lecture: 2, correctIndex: 2 },  // clean = dna.upper()
  'l2-t2b': { lecture: 2, correctIndex: 0 },  // 21
  'l2-t2c': { lecture: 2, correctIndex: 1 },  // clean[0:3]
  'l2-t2d': { lecture: 2, correctIndex: 3 },  // count G + count C -> 8
  'l2-t2e': { lecture: 2, correctIndex: 2 },  // 9
  'l2-t3a': { lecture: 2, correctIndex: 2 },  // {"ATG": "Met"}
  'l2-t3b': { lecture: 2, correctIndex: 1 },  // 3
  'l2-t3c': { lecture: 2, correctIndex: 0 },  // codon_table["GGT"]
  'l2-t3d': { lecture: 2, correctIndex: 3 },  // .values()
  'l2-t3e': { lecture: 2, correctIndex: 2 },  // Gly
  'l3-t1a': { lecture: 3, correctIndex: 1 },  // for days in incubation_days:
  'l3-t1b': { lecture: 3, correctIndex: 3 },  // round(days * 1440)
  'l3-t1c': { lecture: 3, correctIndex: 1 },  // .append(minutes)
  'l3-t1d': { lecture: 3, correctIndex: 0 },  // before the loop
  'l3-t1e': { lecture: 3, correctIndex: 1 },  // 31392
  'l3-t2a': { lecture: 3, correctIndex: 1 },  // 2
  'l3-t2b': { lecture: 3, correctIndex: 2 },  // .items()
  'l3-t2c': { lecture: 3, correctIndex: 0 },  // len(seq) % 3 == 0
  'l3-t2d': { lecture: 3, correctIndex: 3 },  // ready.append(name)
  'l3-t2e': { lecture: 3, correctIndex: 2 },  // 4
  'l3-t3a': { lecture: 3, correctIndex: 0 },  // 0, 3, 6, 9
  'l3-t3b': { lecture: 3, correctIndex: 1 },  // seq[i:i+3]
  'l3-t3c': { lecture: 3, correctIndex: 3 },  // codon_table[codon]
  'l3-t3d': { lecture: 3, correctIndex: 0 },  // protein = protein + ...
  'l3-t3e': { lecture: 3, correctIndex: 1 },  // MVRWTLWDTLAFLLLLSLL

  // All three verified against CPython: only B interpolates, "3.14" is a str,
  // and the other three names are SyntaxErrors (digit first, space, keyword).
  'l1-r1': { lecture: 1, correctIndex: 1 },
  'l1-r2': { lecture: 1, correctIndex: 1 },
  'l1-r3': { lecture: 1, correctIndex: 2 },

  // label= belongs on the plot call; ax.legend() only draws what is labelled.
  'l7-p1': { lecture: 7, correctIndex: 1 },
  'l7-r1': { lecture: 7, correctIndex: 2 },
  // Lineage is a label you count; the other three are measured on a scale.
  'l7-r2': { lecture: 7, correctIndex: 1 },
  // One continuous column, no groups: scatter needs a second column, barh and
  // boxplot both need a category to split on.
  'l7-r3': { lecture: 7, correctIndex: 2 },
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
