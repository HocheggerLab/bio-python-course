import { isAuthorised } from '@/lib/poll/admin'
import { getRound } from '@/lib/feedback/rounds'
import { AGREEMENT, CHOICES, COMMENTS, RATINGS } from '@/lib/feedback/questions'
import { getFeedbackStore } from '@/lib/feedback/store'

export const dynamic = 'force-dynamic'

/** RFC 4180 quoting; a leading = + - @ is defused so Excel won't run it as a formula. */
function cell(value: string | number | undefined): string {
  if (value === undefined) return ''
  let s = String(value)
  if (/^[=+\-@]/.test(s)) s = `'${s}`
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
}

/**
 * One row per response, as CSV — teacher only. Ratings are exported 1–5
 * (strongly disagree = 1) and choices as their label.
 */
export async function GET(request: Request) {
  if (!(await isAuthorised(request))) {
    return Response.json({ error: 'unauthorised' }, { status: 401 })
  }
  const round = getRound(new URL(request.url).searchParams.get('round') ?? '')
  if (!round) {
    return Response.json({ error: 'unknown round' }, { status: 400 })
  }

  const responses = await getFeedbackStore().list(round.id)
  const header = ['updated_at', ...RATINGS.map((q) => q.id), ...CHOICES.map((q) => q.id), ...COMMENTS.map((q) => q.id)]
  const rows = responses.map(({ answers, updatedAt }) => [
    updatedAt,
    ...RATINGS.map((q) => {
      const v = answers.ratings[q.id]
      return v === undefined ? undefined : v + 1
    }),
    ...CHOICES.map((q) => {
      const v = answers.choices[q.id]
      return v === undefined ? undefined : q.options[v]
    }),
    ...COMMENTS.map((q) => answers.comments[q.id]),
  ])

  const csv = [header, ...rows].map((r) => r.map(cell).join(',')).join('\r\n')
  return new Response(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="feedback-${round.id}.csv"`,
      'Cache-Control': 'no-store',
    },
  })
}
