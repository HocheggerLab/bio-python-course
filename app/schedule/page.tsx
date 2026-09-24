import Link from 'next/link'
import { scheduleData } from '@/data/schedule'

export const metadata = { title: 'Schedule — Python for Biologists' }

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-bio-darkest pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">

        <Link
          href="/"
          className="inline-flex items-center mb-8 text-bio-blue hover:text-bio-yellow transition-colors text-sm md:text-base"
        >
          ← Back to home
        </Link>

        <div className="text-center mb-8 md:mb-10">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-bio-blue mb-4">
            Schedule
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Eight lectures in weeks 1–8, workshops in weeks 2–11. A lecture introduces a
            topic and <span className="text-white">the following week&apos;s workshop
            practises it</span> — so Lecture 1 is worked through in the week 2 lab.
          </p>
        </div>

        {/* Cards on a phone, table from md up: eleven rows of four columns is
            unreadable on a narrow screen. */}
        <div className="flex flex-col gap-3 md:hidden">
          {scheduleData.map((w) => (
            <div key={w.week} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-bio-blue font-bold">Week {w.week}</span>
                {w.projectWork && (
                  <span className="text-xs text-gray-400">{w.projectWork}</span>
                )}
              </div>
              {w.lecture && (
                <p className="text-sm text-gray-200">
                  <span className="text-gray-500">Lecture {w.lecture.num}: </span>
                  {w.lecture.title}
                </p>
              )}
              {w.workshop && (
                <p className="text-sm text-gray-200 mt-1">
                  <span className="text-gray-500">
                    {w.workshop.num ? `Lab ${w.workshop.num}: ` : 'Workshop: '}
                  </span>
                  {w.workshop.title}
                </p>
              )}
              {w.assessment && (
                <p className="mt-2 text-sm font-semibold text-bio-yellow">{w.assessment}</p>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:block concept-box">
          <table className="bio-table">
            <thead>
              <tr>
                <th>Week</th>
                <th>Lecture</th>
                <th>Workshop</th>
                <th>Project time</th>
                <th>Assessment</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((w) => (
                <tr key={w.week}>
                  <td className="font-bold text-bio-blue">{w.week}</td>
                  <td>
                    {w.lecture ? (
                      <>
                        <span className="text-gray-500">{w.lecture.num}. </span>
                        {w.lecture.title}
                      </>
                    ) : (
                      <span className="text-gray-600">—</span>
                    )}
                  </td>
                  <td>
                    {w.workshop ? (
                      <>
                        {w.workshop.num && (
                          <span className="text-gray-500">Lab {w.workshop.num}. </span>
                        )}
                        {w.workshop.title}
                      </>
                    ) : (
                      <span className="text-gray-600">—</span>
                    )}
                  </td>
                  <td className="text-gray-400">{w.projectWork ?? ''}</td>
                  <td className="font-semibold text-bio-yellow">{w.assessment ?? ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          <Note title="In a workshop">
            20–30 minute topic blocks, each with a basic and an advanced notebook. Exercises
            are a mix of writing code, debugging it, and reading it.
          </Note>
          <Note title="Beyond Colab">
            The labs also build the tooling around the code: terminal, <span className="font-mono">uv</span>,
            VS Code, GitHub repositories and commits, and keeping a project tidy.
          </Note>
          <Note title="Project time">
            Workshop time is set aside for the projects — Project 1 from week 4, Project 2
            from week 6 — so you are never doing them entirely alone.
          </Note>
        </div>

        <p className="text-center text-gray-400 text-sm md:text-base mt-6 md:mt-8">
          Deadlines and submission are on{' '}
          <a
            href="https://canvas.sussex.ac.uk/courses/34489"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bio-blue hover:text-bio-yellow underline underline-offset-4 transition-colors"
          >
            Canvas
          </a>
          . See{' '}
          <Link
            href="/assessment"
            className="text-bio-blue hover:text-bio-yellow underline underline-offset-4 transition-colors"
          >
            Assessment
          </Link>{' '}
          for what each piece involves.
        </p>

      </div>
    </div>
  )
}

function Note({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-bio-blue/20 bg-bio-blue/[0.06] p-4 md:p-5">
      <h2 className="text-bio-blue font-bold text-sm md:text-base mb-1.5">{title}</h2>
      <p className="text-gray-300 text-xs md:text-sm leading-snug">{children}</p>
    </div>
  )
}
