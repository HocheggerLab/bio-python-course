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
    title: 'Paths & Files',
    topics: ['check Python runs', 'download & read a FASTA file', 'one file, then all 99', 'cwd vs __file__'],
    status: 'available',
    href: '/labs/4/1',
  },
  {
    num: 2,
    title: 'Functions',
    topics: ['def & return', 'parameters & defaults', 'build translate()', 'compose a drift analysis'],
    status: 'available',
    href: '/labs/4/2',
  },
  {
    num: 3,
    title: 'Errors',
    topics: ['read a traceback', 'try / except', 'raise & custom errors', 'a batch job that survives'],
    status: 'available',
    href: '/labs/4/3',
  },
]

/* The homework, named as such. Chapters are numbered because the classroom
   subscription reports per-chapter progress. */
const practice = [
  {
    icon: '🐝',
    title: 'Homework: finish fasta_loop.py',
    detail:
      'Three levels — GC content, write a CSV, then the drift analysis as a stretch. Every step has a hint at the bottom of the file.',
  },
  {
    icon: '📥',
    title: 'Introduction to Importing Data in Python',
    detail: 'Chapter 1 only (Introduction and flat files) — open(), with, and reading text files, from another angle.',
    href: 'https://app.datacamp.com/learn/courses/introduction-to-importing-data-in-python',
    cta: 'DataCamp →',
  },
  {
    icon: '🗂️',
    title: "How to Use Python's Pathlib",
    detail:
      'Short tutorial: Path objects, exists(), glob() and mkdir() — every pathlib move in fasta_loop.py. Free, no sign-in.',
    href: 'https://www.datacamp.com/tutorial/comprehensive-tutorial-on-using-pathlib-in-python-for-file-system-manipulation',
    cta: 'Tutorial →',
  },
  {
    icon: '✍️',
    title: 'Python Write to File: Text, CSV and JSON',
    detail: 'Short tutorial on writing files with open() and with — handy for Level 2, your bee_summary.csv. Free, no sign-in.',
    href: 'https://www.datacamp.com/tutorial/python-write-to-file',
    cta: 'Tutorial →',
  },
  {
    icon: '📖',
    title: 'Revise',
    detail: 'Your Lab 4 notebooks — functions and errors, basics first, then the advanced ones.',
  },
]

export default function Lab4Page() {
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
            Lab 4
          </p>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-bio-blue mb-4">
            Functions, Errors &amp; Files
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Wrap your code in reusable tools, keep it standing when the data is
            messy — then set it loose on a folder of real sequences and watch
            evolution happen.
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

        {/* Lab notes */}
        <div className="mt-8 md:mt-10 max-w-5xl mx-auto">
          <Link
            href="/labs/4/notes"
            className="block rounded-2xl border-2 border-bio-blue/30 bg-bio-blue/10 hover:bg-bio-blue/15 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 p-6 md:p-8"
          >
            <div className="flex items-center gap-4 md:gap-5">
              <span className="text-4xl md:text-5xl shrink-0">📚</span>
              <div className="min-w-0">
                <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-white leading-snug">
                  Lab Notes — Reading &amp; Writing Files
                </h2>
                <p className="text-sm md:text-base text-gray-300 mt-1">
                  Paths, open() and with, reading, writing, and the errors you will meet — everything from today,
                  in one place.
                </p>
              </div>
              <span className="ml-auto shrink-0 text-bio-blue font-semibold text-sm md:text-base">
                Read →
              </span>
            </div>
          </Link>
        </div>

        {/* Resources & cheat sheets */}
        <div className="mt-8 md:mt-10 max-w-5xl mx-auto">
          <Link
            href="/labs/4/resources"
            className="block rounded-2xl border-2 border-bio-yellow/30 bg-bio-yellow/10 hover:bg-bio-yellow/15 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 p-6 md:p-8"
          >
            <div className="flex items-center gap-4 md:gap-5">
              <span className="text-4xl md:text-5xl shrink-0">📄</span>
              <div className="min-w-0">
                <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-white leading-snug">
                  Resources &amp; Cheat Sheets
                </h2>
                <p className="text-sm md:text-base text-gray-300 mt-1">
                  A one-page reading & writing files reference to print or keep open.
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
