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
    topics: ['What is an IDE?', 'Install & the workflow', 'Run with uv run', 'Build spike_detector.py'],
    status: 'available',
    href: '/labs/3/3',
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

      </div>
    </div>
  )
}
