import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, type CardColor } from '@/components/slides/SlideCard'
import { NOTEBOOK_LISTS, NOTEBOOK_STRINGS, NOTEBOOK_DICTS } from './NotebookLink'

const cards: Array<{ icon: string; title: string; body: React.ReactNode; color: CardColor }> = [
  {
    icon: '📋',
    title: 'Lists',
    color: 'blue',
    body: <>An ordered collection — index, slice, append, edit. <span className="font-mono text-white">sum()</span> / <span className="font-mono text-white">len()</span> for a mean.</>,
  },
  {
    icon: '🧬',
    title: 'Strings',
    color: 'green',
    body: <>A sequence of characters — slice out codons, search and clean with methods.</>,
  },
  {
    icon: '🗺️',
    title: 'Dictionaries',
    color: 'yellow',
    body: <>A key → value lookup table. The codon table, made real, with safe <span className="font-mono text-white">.get()</span>.</>,
  },
]

export function Slide01Overview() {
  return (
    <>
      <SlideTitle>
        Lab 2 — <GradientText>Recap</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-300 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        The three containers from <span className="text-white">Lecture 2</span> — then straight
        into the practice notebooks.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">
        {cards.map((c) => (
          <SlideCard key={c.title} color={c.color} layout="center" padding="compact">
            <div className="text-4xl md:text-6xl xl:text-7xl mb-2 md:mb-4">{c.icon}</div>
            <CardHeading size="sm" color={c.color} className="mb-2 md:mb-3">{c.title}</CardHeading>
            <CardBody>{c.body}</CardBody>
          </SlideCard>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-3 md:mt-4">
        {[
          { url: NOTEBOOK_LISTS, label: '01 · Lists' },
          { url: NOTEBOOK_STRINGS, label: '02 · Strings' },
          { url: NOTEBOOK_DICTS, label: '03 · Dictionaries' },
        ].map((nb) => (
          <a
            key={nb.url}
            href={nb.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-bio-green/20 hover:bg-bio-green/30 border border-bio-green/40 text-bio-green font-semibold px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm transition-colors"
          >
            📓 {nb.label} →
          </a>
        ))}
      </div>
    </>
  )
}
