import Link from 'next/link'

interface Session {
  num: number
  title: string
  topics: string[]
  status: 'available' | 'coming-soon'
  href: string
}

const sessions: Session[] = [
  {
    num: 1,
    title: 'Loops',
    topics: ['for loops', 'count & accumulate', 'modify → new list', 'enumerate → dict'],
    status: 'available',
    href: '/labs/3/1',
  },
  {
    num: 2,
    title: 'If / Else',
    topics: ['if · elif · else', 'and / or / not', 'comprehension filters', 'write your own sort'],
    status: 'available',
    href: '/labs/3/2',
  },
  {
    num: 3,
    title: 'Writing code in VS Code',
    topics: ['What is an IDE?', 'Set up VS Code & Python', 'Run with ▶ and uv run', 'Build spike_detector.py'],
    status: 'available',
    href: '/labs/3/3',
  },
]

/* The homework, named as such. Chapters are numbered because the classroom
   subscription reports per-chapter progress. */
const practice = [
  {
    icon: '🐍',
    title: 'Intermediate Python',
    detail: 'Chapter 3 (Logic, Control Flow and Filtering) and Chapter 4 (Loops) — this lab, from another angle.',
    href: 'https://app.datacamp.com/learn/courses/intermediate-python',
    cta: 'DataCamp →',
  },
  {
    icon: '🎬',
    title: 'Project: Investigating Netflix Movies',
    detail: 'About an hour — loops, filters and a first plot on a real dataset.',
    href: 'https://projects.datacamp.com/projects/1674',
    cta: 'DataCamp →',
  },
  {
    icon: '📖',
    title: 'Revise',
    detail: 'Your Lab 3 notebooks — loops and if / else, basics first, then the advanced ones.',
  },
  {
    icon: '🧑‍💻',
    title: 'Get started with VS Code',
    detail:
      'The official VS Code tutorial: folders, the interface, settings, source control and the debugger. It builds a small web page rather than Python — the editor skills are the same.',
    href: 'https://code.visualstudio.com/docs/editing/getting-started/editor-tutorial',
    cta: 'Tutorial →',
  },
]

export default function Lab3Page() {
  return (
    <div className="min-h-screen bg-bio-darkest pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">

        <Link
          href="/labs"
          className="inline-flex items-center mb-8 text-bio-blue hover:text-bio-yellow transition-colors text-sm md:text-base"
        >
          ← Back to Labs
        </Link>

        <div className="text-center mb-12 md:mb-16">
          <p className="text-bio-blue/70 text-sm md:text-base font-semibold uppercase tracking-widest mb-2">
            Lab 3
          </p>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-bio-blue mb-4">
            Loops, Logic &amp; VS Code
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Iteration and decisions with a neuroscience twist — then your first
            step into a real code editor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 xl:gap-8 max-w-5xl mx-auto">
          {sessions.map((s) => {
            const disabled = s.status === 'coming-soon'
            return (
              <Link
                key={s.num}
                href={disabled ? '#' : s.href}
                aria-disabled={disabled}
                className={`block rounded-2xl border-2 p-6 md:p-8 transition-all duration-300
                  ${disabled
                    ? 'border-white/10 bg-white/[0.02] opacity-60 cursor-not-allowed'
                    : 'border-bio-blue/30 bg-bio-blue/10 hover:bg-bio-blue/15 hover:-translate-y-1 hover:shadow-xl'}
                `}
              >
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <span
                    className={`inline-flex items-center justify-center rounded-full font-bold
                                w-10 h-10 text-base md:w-12 md:h-12 md:text-lg xl:w-14 xl:h-14 xl:text-xl
                                ${disabled
                                  ? 'bg-white/10 text-white/40'
                                  : 'bg-bio-blue/20 text-bio-blue'}`}
                  >
                    {s.num}
                  </span>
                  <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-white leading-snug">
                    {s.title}
                  </h2>
                </div>

                <ul className="flex flex-col gap-1.5 md:gap-2 text-sm md:text-base text-gray-300 mb-4 md:mb-5">
                  {s.topics.map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className={disabled ? 'text-white/30' : 'text-bio-blue'}>→</span>
                      {t}
                    </li>
                  ))}
                </ul>

                <span
                  className={`inline-block text-xs md:text-sm font-semibold
                    ${disabled ? 'text-white/40' : 'text-bio-blue'}`}
                >
                  {disabled ? 'Coming soon' : 'Open session →'}
                </span>
              </Link>
            )
          })}
        </div>

        {/* Independent practice — the homework */}
        <div className="mt-8 md:mt-10 max-w-5xl mx-auto rounded-2xl border-2 border-bio-green/30 bg-bio-green/10 p-6 md:p-8">
          <div className="flex items-center gap-4 md:gap-5 mb-5 md:mb-6">
            <span className="text-4xl md:text-5xl shrink-0">🏋️</span>
            <div className="min-w-0">
              <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-white leading-snug">
                Independent Practice
              </h2>
              <p className="text-sm md:text-base text-gray-300 mt-1">
                In your own time, before next week. Your DataCamp access comes with the
                course — sign in with your Sussex email.
              </p>
            </div>
          </div>

          <ul className="flex flex-col gap-3 md:gap-4">
            {practice.map((p) => (
              <li
                key={p.title}
                className="flex items-start gap-3 md:gap-4 rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 md:px-5 md:py-4"
              >
                <span className="text-2xl md:text-3xl shrink-0">{p.icon}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-white font-semibold text-sm md:text-base xl:text-lg">
                    {p.title}
                  </p>
                  <p className="text-gray-300 text-xs md:text-sm xl:text-base mt-0.5 leading-snug">
                    {p.detail}
                  </p>
                </div>
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 self-center rounded-full bg-bio-green/20 hover:bg-bio-green/30 border border-bio-green/40 text-bio-green font-semibold px-3 md:px-4 py-1.5 text-xs md:text-sm transition-colors"
                  >
                    {p.cta}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <p className="text-gray-400 text-xs md:text-sm mt-4 md:mt-5">
            I can see chapter progress in the classroom, so I will know which parts the
            year found hard — that is what it is for.
          </p>
        </div>

        {/* Resources & cheat sheets */}
        <div className="mt-8 md:mt-10 max-w-5xl mx-auto">
          <Link
            href="/labs/3/resources"
            className="block rounded-2xl border-2 border-bio-yellow/30 bg-bio-yellow/10 hover:bg-bio-yellow/15 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 p-6 md:p-8"
          >
            <div className="flex items-center gap-4 md:gap-5">
              <span className="text-4xl md:text-5xl shrink-0">📄</span>
              <div className="min-w-0">
                <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-white leading-snug">
                  Resources &amp; Cheat Sheets
                </h2>
                <p className="text-sm md:text-base text-gray-300 mt-1">
                  A downloadable one-page VS Code reference — setup, running, shortcuts.
                </p>
              </div>
              <span className="ml-auto shrink-0 text-bio-yellow font-semibold text-sm md:text-base">
                Open →
              </span>
            </div>
          </Link>
        </div>

      </div>
    </div>
  )
}
