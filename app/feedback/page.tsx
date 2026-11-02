import FeedbackForm from '@/components/feedback/FeedbackForm'
import { FEEDBACK_ROUNDS, formatDay, openRound } from '@/lib/feedback/rounds'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Course feedback',
  robots: { index: false },
}

/**
 * The feedback form, when a round is open. Decided per request on the server
 * so the page and the submit endpoint use the same clock.
 */
export default function FeedbackPage() {
  const round = openRound()
  const now = Date.now()
  const next = FEEDBACK_ROUNDS.find((r) => r.opensAt && Date.parse(r.opensAt) > now)

  return (
    <div className="min-h-screen bg-bio-darkest pt-24 pb-16 px-4">
      <div className="mx-auto w-full max-w-2xl">
        <p className="text-bio-blue/70 text-xs md:text-sm font-semibold uppercase tracking-widest text-center mb-2">
          Course feedback
        </p>
        {round ? (
          <>
            <h1 className="text-3xl md:text-4xl font-bold text-bio-blue text-center mb-4">
              {round.title}
            </h1>
            <p className="text-gray-300 text-center leading-relaxed mb-10">
              Anonymous and about five minutes. Every question is optional, and
              you can come back and change your answers until{' '}
              <span className="text-white font-semibold">{formatDay(round.closesAt!)}</span>.
            </p>
            <FeedbackForm roundId={round.id} />
          </>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center mt-6">
            <p className="text-white text-lg font-semibold mb-2">Feedback is not open right now.</p>
            <p className="text-gray-400">
              {next?.opensAt
                ? `The next round opens on ${formatDay(next.opensAt)}.`
                : 'Thank you to everyone who took part.'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
