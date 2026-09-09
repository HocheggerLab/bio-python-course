import Link from 'next/link'
import { assessment } from '@/data/assessment'

export const metadata = { title: 'Assessment — Python for Biologists' }

const accent: Record<string, { border: string; text: string; bg: string }> = {
  test: { border: 'border-bio-yellow/40', text: 'text-bio-yellow', bg: 'bg-bio-yellow/10' },
  'project-1': { border: 'border-bio-green/40', text: 'text-bio-green', bg: 'bg-bio-green/10' },
  'project-2': { border: 'border-bio-blue/40', text: 'text-bio-blue', bg: 'bg-bio-blue/10' },
}

export default function AssessmentPage() {
  return (
    <div className="min-h-screen bg-bio-darkest pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-5xl">

        <Link
          href="/"
          className="inline-flex items-center mb-8 text-bio-blue hover:text-bio-yellow transition-colors text-sm md:text-base"
        >
          ← Back to home
        </Link>

        <div className="text-center mb-10 md:mb-14">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-bio-blue mb-4">
            Assessment
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Three pieces across the term — one test and two programming projects. Each
            builds on the one before, so nothing arrives without a run-up.
          </p>
        </div>

        <div className="flex flex-col gap-5 md:gap-6">
          {assessment.map((a) => {
            const c = accent[a.id]
            return (
              <section
                key={a.id}
                className={`rounded-2xl border-2 ${c.border} ${c.bg} p-6 md:p-8`}
              >
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-4">
                  <h2 className="text-xl md:text-2xl xl:text-3xl font-bold text-white">
                    {a.name}
                  </h2>
                  <span className={`${c.text} text-2xl md:text-3xl font-bold tabular-nums`}>
                    {a.weight}%
                  </span>
                  <span className="ml-auto rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs md:text-sm text-gray-300">
                    Week {a.week}
                  </span>
                </div>

                <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-5 mb-4">
                  <Field label="Format" value={a.format} />
                  <Field label="Covers" value={a.covers} />
                  <Field label="Submission" value={a.submission} />
                </dl>

                <ul className="flex flex-col gap-2">
                  {a.detail.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-gray-200 text-sm md:text-base">
                      <span className={`${c.text} shrink-0`}>→</span>
                      <span className="leading-snug">{d}</span>
                    </li>
                  ))}
                </ul>

                {a.tbc && (
                  <p className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs md:text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-bio-yellow/60" />
                    {a.tbc}
                  </p>
                )}
              </section>
            )
          })}
        </div>

        <p className="text-center text-gray-400 text-sm md:text-base mt-8 md:mt-10">
          Everything is submitted through{' '}
          <a
            href="https://canvas.sussex.ac.uk/courses/34489"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bio-blue hover:text-bio-yellow underline underline-offset-4 transition-colors"
          >
            Canvas
          </a>
          , where you will also find the deadlines and your marks.
        </p>

      </div>
    </div>
  )
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-gray-500 text-xs uppercase tracking-widest mb-0.5">{label}</dt>
      <dd className="text-gray-200 text-sm md:text-base leading-snug">{value}</dd>
    </div>
  )
}
