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
    title: 'Lecture 2 Recap',
    topics: ['Lists', 'Strings as sequences', 'Dictionaries', 'Practice notebooks'],
    status: 'available',
    href: '/labs/2/1',
  },
  {
    num: 2,
    title: 'Local Python & uv',
    topics: ['Why work locally?', 'Installing uv', 'Projects & environments', 'Running your own scripts'],
    status: 'coming-soon',
    href: '/labs/2/2',
  },
]

export default function Lab2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bio-dark to-bio-darker pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">

        <Link
          href="/labs"
          className="inline-flex items-center mb-8 text-bio-blue hover:text-bio-yellow transition-colors text-sm md:text-base"
        >
          ← Back to Labs
        </Link>

        <div className="text-center mb-12 md:mb-16">
          <p className="text-bio-blue/70 text-sm md:text-base font-semibold uppercase tracking-widest mb-2">
            Lab 2
          </p>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-bio-blue mb-4">
            Lists, Strings &amp; Maps
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A recap of Lecture 2 with hands-on notebooks, then your first step
            into running Python on your own machine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 xl:gap-8 max-w-4xl mx-auto">
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
