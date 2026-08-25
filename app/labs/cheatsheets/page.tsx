import Link from 'next/link'

interface Cheatsheet {
  title: string
  description: string
  href: string
  status: 'available' | 'coming-soon'
}

const cheatsheets: Cheatsheet[] = [
  {
    title: 'Python basics',
    description: 'Variables, types, arithmetic, f-strings, common built-ins.',
    href: '#',
    status: 'coming-soon',
  },
  {
    title: 'String methods',
    description: 'slice, count, find, replace, split, join — the everyday set.',
    href: '#',
    status: 'coming-soon',
  },
  {
    title: 'Terminal — Mac',
    description: 'Navigating the file system, running Python, package install.',
    href: '#',
    status: 'coming-soon',
  },
  {
    title: 'Terminal — Windows',
    description: 'PowerShell basics, paths, running scripts.',
    href: '#',
    status: 'coming-soon',
  },
]

export default function CheatsheetsPage() {
  return (
    <div className="min-h-screen bg-bio-darkest pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-5xl">

        <Link
          href="/labs"
          className="inline-flex items-center mb-8 text-bio-blue hover:text-bio-yellow transition-colors text-sm md:text-base"
        >
          ← Back to Labs
        </Link>

        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-bio-yellow mb-4">
            Cheatsheets
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            One-page PDF references you can print, pin or keep open in a side tab.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 xl:gap-8">
          {cheatsheets.map((c) => {
            const disabled = c.status === 'coming-soon'
            return (
              <a
                key={c.title}
                href={c.href}
                target={disabled ? undefined : '_blank'}
                rel={disabled ? undefined : 'noopener noreferrer'}
                aria-disabled={disabled}
                onClick={disabled ? (e) => e.preventDefault() : undefined}
                className={`block rounded-2xl border-2 p-6 md:p-8 transition-all duration-300
                  ${disabled
                    ? 'border-white/10 bg-white/[0.02] opacity-60 cursor-not-allowed'
                    : 'border-bio-yellow/30 bg-bio-yellow/10 hover:bg-bio-yellow/15 hover:-translate-y-1'}
                `}
              >
                <div className="flex items-center gap-3 mb-2 md:mb-3">
                  <span className="text-3xl md:text-4xl">📄</span>
                  <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-white">{c.title}</h2>
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                  {c.description}
                </p>
                <span className={`inline-block text-xs md:text-sm font-semibold ${disabled ? 'text-white/40' : 'text-bio-yellow'}`}>
                  {disabled ? 'Coming soon' : 'Open PDF →'}
                </span>
              </a>
            )
          })}
        </div>

      </div>
    </div>
  )
}
