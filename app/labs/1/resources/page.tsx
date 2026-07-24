import Link from 'next/link'

interface Sheet {
  title: string
  icon: string
  desc: string
  href?: string
  status: 'available' | 'coming-soon'
}

const sheets: Sheet[] = [
  {
    title: 'Python 1 Cheat Sheet',
    icon: '🐍',
    desc: 'Everything from Session 1 — variables, data types, printing & f-strings, operators, comparisons, built-in functions, and how to read errors.',
    href: '/cheatsheets/python-1.pdf',
    status: 'available',
  },
  {
    title: 'Terminal — macOS',
    icon: '🍎',
    desc: 'Open Terminal and find your way around a Mac — pwd, ls, cd, mkdir, cat, cp, mv, rm — with how-to-open steps and the Warp pro-tip.',
    href: '/cheatsheets/terminal-mac.pdf',
    status: 'available',
  },
  {
    title: 'Terminal — Windows',
    icon: '🪟',
    desc: 'The same commands, PowerShell-flavoured — how to open it, backslash paths, and the Recycle-Bin warning for rm. Plus the Warp pro-tip.',
    href: '/cheatsheets/terminal-windows.pdf',
    status: 'available',
  },
]

export default function Lab1ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bio-dark to-bio-darker pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-5xl">

        <Link
          href="/labs/1"
          className="inline-flex items-center mb-8 text-bio-blue hover:text-bio-yellow transition-colors text-sm md:text-base"
        >
          ← Back to Lab 1
        </Link>

        <div className="text-center mb-12 md:mb-16">
          <p className="text-bio-yellow/70 text-sm md:text-base font-semibold uppercase tracking-widest mb-2">
            Lab 1 · Resources
          </p>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-4">
            Cheat Sheets
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            One-page references to print out or keep open beside your notebook.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 xl:gap-8">
          {sheets.map((s) => {
            const disabled = s.status === 'coming-soon'
            const inner = (
              <>
                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                  <span className="text-4xl md:text-5xl shrink-0">{s.icon}</span>
                  <h2 className="text-xl md:text-2xl font-bold text-white leading-snug pt-1">
                    {s.title}
                  </h2>
                </div>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-5 md:mb-6">
                  {s.desc}
                </p>
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-4 md:px-5 py-2 text-sm md:text-base font-semibold ${
                    disabled
                      ? 'bg-white/5 text-white/40'
                      : 'bg-bio-green/20 text-bio-green border border-bio-green/40'
                  }`}
                >
                  {disabled ? 'Coming soon' : '⬇ Download PDF'}
                </span>
              </>
            )

            const base =
              'block rounded-2xl border-2 p-6 md:p-8 transition-all duration-300 '
            const look = disabled
              ? 'border-white/10 bg-white/[0.02] opacity-70 cursor-not-allowed'
              : 'border-bio-blue/30 bg-bio-blue/10 hover:bg-bio-blue/15 hover:-translate-y-1 hover:shadow-xl'

            return disabled ? (
              <div key={s.title} className={base + look} aria-disabled>
                {inner}
              </div>
            ) : (
              <a
                key={s.title}
                href={s.href}
                download
                className={base + look}
              >
                {inner}
              </a>
            )
          })}
        </div>

      </div>
    </div>
  )
}
