import Link from 'next/link'
import { getLab } from './labs'

export default function LabStubPage({ num }: { num: number }) {
  const lab = getLab(num)
  if (!lab) return null

  return (
    <div className="min-h-screen bg-bio-darkest pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">

        <Link
          href="/labs"
          className="inline-flex items-center mb-8 text-bio-blue hover:text-bio-yellow transition-colors text-sm md:text-base"
        >
          ← Back to Labs
        </Link>

        <div className="rounded-2xl border-2 border-bio-blue/30 bg-bio-blue/10 p-8 md:p-12 xl:p-16">
          <p className="text-bio-blue/70 text-sm md:text-base font-semibold uppercase tracking-widest mb-2">
            Lab {lab.num}
          </p>
          <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6">
            {lab.title}
          </h1>

          <p className="text-bio-yellow font-semibold text-sm md:text-base mb-3 md:mb-4">
            🚧 Coming soon
          </p>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            {lab.blurb}
          </p>
        </div>

      </div>
    </div>
  )
}
