import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, type CardColor } from '@/components/slides/SlideCard'
import { NOTEBOOK_VARIABLES, NOTEBOOK_DATATYPES, NOTEBOOK_OPERATORS } from './NotebookLink'

const cards: Array<{ icon: string; title: string; body: React.ReactNode; color: CardColor }> = [
  {
    icon: '📦',
    title: 'Variables',
    color: 'blue',
    body: <>Names that hold values. <span className="font-mono text-white">snake_case</span>, no spaces.</>,
  },
  {
    icon: '🔢',
    title: 'Data types',
    color: 'green',
    body: <><span className="font-mono text-white">int</span>, <span className="font-mono text-white">float</span>, <span className="font-mono text-white">str</span>, <span className="font-mono text-white">bool</span> — each behaves differently.</>,
  },
  {
    icon: '➕',
    title: 'Operators',
    color: 'yellow',
    body: <>Arithmetic on numbers, joining and repeating on strings, comparisons return booleans.</>,
  },
]

export function Slide01Overview() {
  return (
    <>
      <SlideTitle>
        Session 2 — <GradientText>Recap</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-300 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        A quick refresher of the three pillars from <span className="text-white">Lecture 1</span> —
        then straight into the practice notebook.
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
          { url: NOTEBOOK_VARIABLES, label: '02 · Variables & print' },
          { url: NOTEBOOK_DATATYPES, label: '03 · Data types' },
          { url: NOTEBOOK_OPERATORS, label: '04 · Operators & mini-programs' },
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
