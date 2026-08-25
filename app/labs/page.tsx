import Link from 'next/link'
import { labs } from './_shared/labs'

export default function LabsPage() {
  const basics = labs.filter((l) => l.group === 'Python Basics')
  const data = labs.filter((l) => l.group === 'Python & Data')

  return (
    <div className="min-h-screen bg-bio-darkest pt-24 pb-16 px-4">
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
            Eight hands-on labs — one per lecture. Each lab bundles a recap deck
            with practice notebooks you run in Colab.
          </p>
        </div>

        <LabSection title="Python Basics" items={basics} />
        <LabSection title="Python & Data" items={data} className="mt-12 md:mt-16" />

      </div>
    </div>
  )
}

function LabSection({
  title,
  items,
  className = '',
}: {
  title: string
  items: typeof labs
  className?: string
}) {
  return (
    <section className={className}>
      <h2 className="text-xs md:text-sm font-semibold text-bio-blue/70 uppercase tracking-widest mb-4 md:mb-6">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {items.map((lab) => (
          <Link
            key={lab.num}
            href={`/labs/${lab.num}`}
            className={`block rounded-2xl border-2 p-5 md:p-6 transition-all duration-300
              ${lab.available
                ? 'border-bio-blue/30 bg-bio-blue/10 hover:bg-bio-blue/15 hover:-translate-y-1 hover:shadow-xl'
                : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.06]'}
            `}
          >
            <div className="flex items-center gap-3 mb-3">
              <span
                className={`inline-flex items-center justify-center rounded-full font-bold w-10 h-10 text-base
                  ${lab.available ? 'bg-bio-blue/20 text-bio-blue' : 'bg-white/10 text-white/50'}`}
              >
                {lab.num}
              </span>
              <h3 className="text-base md:text-lg font-bold text-white leading-snug">
                {lab.title}
              </h3>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              {lab.blurb}
            </p>

            <span
              className={`inline-block text-xs font-semibold
                ${lab.available ? 'text-bio-blue' : 'text-white/40'}`}
            >
              {lab.available ? 'Open lab →' : 'Coming soon'}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
