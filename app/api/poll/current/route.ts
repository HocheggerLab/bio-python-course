import { getStore } from '@/lib/poll/store'
import { getQuestion } from '@/lib/poll/questions'
import { getContent } from '@/lib/poll/content'

/* Never cached: a cached "nothing open" would leave the whole room unable to
   vote, with no error to show why. */
export const dynamic = 'force-dynamic'

/**
 * What should the /poll page render right now?
 *
 * Returns the wording so a student at the back can read the question on their
 * own phone rather than squinting at the projector. Never returns the tally or
 * the correct answer.
 */
export async function GET() {
  const store = getStore()
  const questionId = await store.current()
  if (!questionId) return Response.json({ questionId: null })

  const def = getQuestion(questionId)
  const content = getContent(questionId)
  if (!def || !content) return Response.json({ questionId: null })

  return Response.json({
    questionId,
    optionCount: def.optionCount,
    prompt: content.prompt,
    code: content.code ?? null,
    optionsAreCode: content.optionsAreCode ?? false,
    options: content.options,
  })
}
