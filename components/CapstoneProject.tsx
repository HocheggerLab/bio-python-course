import Link from 'next/link'
import { notebooks } from '@/data/capstone'

/**
 * Homepage card for Project 2, the TCGA p53 capstone. Sits under the
 * Section 2 lecture cards; the full brief lives at /projects/tcga-capstone.
 */
export default function CapstoneProject() {
  const startHere = notebooks.find((nb) => nb.file === '00_start_here')

  const points = [
    'One gene and one cancer type each, from real TCGA patient data',
    'Clean a clinical export, test a hypothesis, draw the figure',
    'Six functions, each with self-checks on a worked example',
    'Marked on your analysis, your code quality and your GitHub history',
  ]

  return (
    <section id="final-project" className="pb-20 px-6 bg-bio-dark/40">
      <div className="container mx-auto max-w-6xl">
        <div className="rounded-2xl border-2 border-bio-yellow/40 bg-bio-yellow/10 p-6 md:p-8">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-3">
            <span className="rounded-full bg-bio-yellow/20 text-bio-yellow text-sm font-semibold px-3 py-1">
              Final project
            </span>
            <span className="text-bio-yellow text-2xl font-bold tabular-nums">70%</span>
            <span className="ml-auto rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs md:text-sm text-gray-300">
              Week 11
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            🧬 Does your gene respond to p53 loss?
          </h3>
          <p className="text-gray-300 md:text-lg leading-relaxed mb-5 max-w-3xl">
            Decide whether one gene’s expression responds to loss of p53 function in human
            tumours — and if so, in which direction.
          </p>

          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2 text-gray-200 text-sm md:text-base">
                <span className="text-bio-yellow shrink-0">▸</span>
                <span className="leading-snug">{point}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/projects/tcga-capstone" className="btn-primary text-center">
              Read the full brief →
            </Link>
            {startHere && (
              <a
                href={startHere.colab}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center"
              >
                Start here in Colab
              </a>
            )}
            <Link href="/assessment" className="btn-secondary text-center">
              All assessment
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
