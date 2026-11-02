import Link from 'next/link'
import { isTeacher } from '@/lib/poll/teacher'
import { FEEDBACK_ROUNDS, formatDay, isRoundOpen } from '@/lib/feedback/rounds'
import { AGREEMENT, CHOICES, COMMENTS, RATINGS } from '@/lib/feedback/questions'
import { getFeedbackStore, type StoredResponse } from '@/lib/feedback/store'

export const dynamic = 'force-dynamic'

export const metadata = { title: 'Feedback results', robots: { index: false } }

/**
 * Results for both rounds, behind the teacher cookie from /teach.
 *
 * Comments are rendered as plain React text, never as HTML, so whatever a
 * student typed is shown, not run.
 */
export default async function FeedbackResultsPage() {
  if (!(await isTeacher())) {
    return (
      <div className="min-h-screen bg-bio-darkest pt-32 px-4 text-center text-gray-300">
        Teacher mode only. <Link href="/teach" className="text-bio-blue underline">Sign in at /teach</Link>.
      </div>
    )
  }

  const store = getFeedbackStore()
  const rounds = await Promise.all(
    FEEDBACK_ROUNDS.map(async (round) => ({ round, responses: await store.list(round.id) }))
  )

  return (
    <div className="min-h-screen bg-bio-darkest pt-24 pb-16 px-4">
      <div className="mx-auto w-full max-w-4xl flex flex-col gap-14">
        <h1 className="text-3xl md:text-4xl font-bold text-bio-blue">Feedback results</h1>
        {store.kind === 'memory' && (
          <p className="rounded-xl border border-bio-yellow/40 bg-bio-yellow/10 px-4 py-3 text-sm text-bio-yellow">
            No DATABASE_URL — showing the in-memory development store.
          </p>
        )}
        {rounds.map(({ round, responses }) => (
          <section key={round.id} className="flex flex-col gap-6">
            <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-white/10 pb-3">
              <h2 className="text-2xl font-bold text-white">{round.title}</h2>
              <p className="text-sm text-gray-400">
                {round.opensAt && round.closesAt
                  ? `${formatDay(round.opensAt)} – ${formatDay(round.closesAt)}${isRoundOpen(round) ? ' · open now' : ''}`
                  : 'not scheduled'}
                {' · '}
                <span className="text-white font-semibold">{responses.length}</span> responses
                {responses.length > 0 && (
                  <>
                    {' · '}
                    <a href={`/api/feedback/export?round=${round.id}`} className="text-bio-blue underline">
                      CSV
                    </a>
                  </>
                )}
              </p>
            </div>
            {responses.length > 0 && <RoundSummary responses={responses} />}
          </section>
        ))}
      </div>
    </div>
  )
}

function RoundSummary({ responses }: { responses: StoredResponse[] }) {
  return (
    <>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-400 text-left">
            <th className="py-2 pr-3 font-normal">Agreement (1–5)</th>
            {AGREEMENT.map((a) => (
              <th key={a} className="py-2 px-1 font-normal text-center w-16">{a.replace('Strongly ', 'S. ')}</th>
            ))}
            <th className="py-2 pl-2 font-normal text-right w-14">Mean</th>
          </tr>
        </thead>
        <tbody>
          {RATINGS.map((q) => {
            const counts = tally(responses.map((r) => r.answers.ratings[q.id]), AGREEMENT.length)
            const n = counts.reduce((s, c) => s + c, 0)
            const mean = n ? counts.reduce((s, c, i) => s + c * (i + 1), 0) / n : null
            return (
              <tr key={q.id} className="border-t border-white/5">
                <td className="py-2 pr-3 text-gray-200">{q.text}</td>
                {counts.map((c, i) => (
                  <td key={i} className="py-2 px-1 text-center text-gray-300">{c || '·'}</td>
                ))}
                <td className="py-2 pl-2 text-right font-semibold text-white">{mean?.toFixed(2) ?? '–'}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

      {CHOICES.map((q) => {
        const counts = tally(responses.map((r) => r.answers.choices[q.id]), q.options.length)
        return (
          <div key={q.id}>
            <p className="text-gray-200 mb-2">{q.text}</p>
            <div className="flex flex-wrap gap-2">
              {q.options.map((o, i) => (
                <span key={o} className="rounded-full border border-white/10 px-3 py-1 text-sm text-gray-300">
                  {o}: <span className="text-white font-semibold">{counts[i]}</span>
                </span>
              ))}
            </div>
          </div>
        )
      })}

      {COMMENTS.map((q) => {
        const comments = responses.map((r) => r.answers.comments[q.id]).filter(Boolean)
        return (
          <div key={q.id}>
            <p className="text-gray-200 mb-2">
              {q.text} <span className="text-gray-500">({comments.length})</span>
            </p>
            <ul className="flex flex-col gap-2">
              {comments.map((c, i) => (
                <li key={i} className="whitespace-pre-wrap rounded-lg bg-white/[0.03] border border-white/10 px-4 py-2.5 text-sm text-gray-200">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </>
  )
}

function tally(values: (number | undefined)[], size: number): number[] {
  const out = new Array<number>(size).fill(0)
  for (const v of values) if (v !== undefined && v >= 0 && v < size) out[v]++
  return out
}
