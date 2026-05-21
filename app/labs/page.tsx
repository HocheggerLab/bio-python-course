import Link from 'next/link'

interface LabCard {
  href: string
  icon: string
  title: string
  description: string
  cta: string
  color: 'blue' | 'green' | 'yellow' | 'purple'
  external?: boolean
}

const cards: LabCard[] = [
  {
    href: '/labs/sessions',
    icon: '🧪',
    title: 'Lab Sessions',
    description:
      'Guided sessions that recap the lecture material and walk you through hands-on practice. New slide decks each week.',
    cta: 'Open sessions →',
    color: 'blue',
  },
  {
    href: '/notebooks',
    icon: '📓',
    title: 'Notebooks',
    description:
      'Every notebook from every lecture, ready to open in Google Colab. Tutorial walk-throughs and exercise notebooks.',
    cta: 'Browse notebooks →',
    color: 'green',
  },
  {
    href: '/labs/cheatsheets',
    icon: '📄',
    title: 'Cheatsheets',
    description:
      'One-page PDF references for the topics we cover — variables, types, string methods, plotting, and more.',
    cta: 'Get cheatsheets →',
    color: 'yellow',
  },
  {
    href: '/labs/datacamp',
    icon: '🎓',
    title: 'DataCamp Courses',
    description:
      'Curated DataCamp tracks that pair with each lecture — extra structured practice if you want more depth.',
    cta: 'See courses →',
    color: 'purple',
  },
]

const colorClasses: Record<LabCard['color'], string> = {
  blue: 'border-bio-blue/30 bg-bio-blue/10 hover:bg-bio-blue/15 text-bio-blue',
  green: 'border-bio-green/30 bg-bio-green/10 hover:bg-bio-green/15 text-bio-green',
  yellow: 'border-bio-yellow/30 bg-bio-yellow/10 hover:bg-bio-yellow/15 text-bio-yellow',
  purple: 'border-purple-400/30 bg-purple-400/10 hover:bg-purple-400/15 text-purple-400',
}

export default function LabsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bio-dark to-bio-darker pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">

        <Link
          href="/"
          className="inline-flex items-center mb-8 text-bio-blue hover:text-bio-yellow transition-colors text-sm md:text-base"
        >
          ← Back to home
        </Link>

        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-bio-blue mb-4">
            Labs
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need between lectures: guided sessions, exercise notebooks,
            quick references, and external practice tracks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 xl:gap-8">
          {cards.map((card) => {
            const Tag = card.external ? 'a' : Link
            const tagProps = card.external
              ? { href: card.href, target: '_blank', rel: 'noopener noreferrer' }
              : { href: card.href }
            return (
              <Tag
                key={card.title}
                {...tagProps}
                className={`group block rounded-2xl border-2 transition-all duration-300
                            p-6 md:p-8 xl:p-10
                            hover:-translate-y-1 hover:shadow-xl
                            ${colorClasses[card.color].replace(/text-\S+/, '')}`}
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="text-4xl md:text-5xl xl:text-6xl shrink-0">{card.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h2 className={`text-xl md:text-2xl xl:text-3xl font-bold mb-2 md:mb-3 ${colorClasses[card.color].match(/text-\S+/)?.[0] ?? ''}`}>
                      {card.title}
                    </h2>
                    <p className="text-gray-300 text-sm md:text-base xl:text-lg leading-relaxed mb-4 md:mb-5">
                      {card.description}
                    </p>
                    <span
                      className={`inline-flex items-center font-semibold text-sm md:text-base ${colorClasses[card.color].match(/text-\S+/)?.[0] ?? ''} group-hover:translate-x-1 transition-transform`}
                    >
                      {card.cta}
                    </span>
                  </div>
                </div>
              </Tag>
            )
          })}
        </div>

      </div>
    </div>
  )
}
