import { getRound, isRoundOpen } from '@/lib/feedback/rounds'
import { sanitiseAnswers } from '@/lib/feedback/validate'
import { getFeedbackStore, MAX_RESPONSES_PER_ROUND } from '@/lib/feedback/store'

export const dynamic = 'force-dynamic'

/** Three full comments plus the ratings fit well inside this. */
const MAX_BODY_BYTES = 8 * 1024

/**
 * Submit (or revise) one anonymous response.
 *
 * The window is checked here against the server clock, not just on the page:
 * a form left open past the deadline, or a hand-made request, is refused.
 */
export async function POST(request: Request) {
  const raw = await request.text()
  if (raw.length > MAX_BODY_BYTES) {
    return Response.json({ error: 'body too large' }, { status: 413 })
  }

  let body: { roundId?: unknown; token?: unknown; answers?: unknown }
  try {
    body = JSON.parse(raw)
  } catch {
    return Response.json({ error: 'invalid JSON' }, { status: 400 })
  }

  const { roundId, token } = body
  if (typeof roundId !== 'string' || typeof token !== 'string') {
    return Response.json({ error: 'roundId and token must be strings' }, { status: 400 })
  }
  if (token.length < 8 || token.length > 64) {
    return Response.json({ error: 'token out of range' }, { status: 400 })
  }

  const round = getRound(roundId)
  if (!round) {
    return Response.json({ error: 'unknown round' }, { status: 400 })
  }
  if (!isRoundOpen(round)) {
    return Response.json({ error: 'feedback is closed' }, { status: 403 })
  }

  const answers = sanitiseAnswers(body.answers)
  if (answers === 'invalid') {
    return Response.json({ error: 'invalid answers' }, { status: 400 })
  }
  if (answers === 'empty') {
    return Response.json({ error: 'answer at least one question' }, { status: 400 })
  }

  try {
    const result = await getFeedbackStore().save(roundId, token, answers, MAX_RESPONSES_PER_ROUND)
    if (result === 'full') {
      return Response.json({ error: 'this round is full' }, { status: 429 })
    }
    return Response.json({ result })
  } catch {
    return Response.json({ error: 'could not save — please try again' }, { status: 500 })
  }
}
