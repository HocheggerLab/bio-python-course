import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardPill } from '@/components/slides/SlideCard'
import { SlideLead, SlideNote } from '@/components/slides/layouts'

/* One card per session. The question on each is the real one that session
   answers, so this slide doubles as the map students can look back at. */
const sessions = [
  {
    n: '5',
    tag: 'Today',
    emoji: '🐭',
    field: 'Neurobiology',
    question: 'Does one neuron care what the whiskers felt?',
    tool: 'arrays · numpy',
    color: 'purple' as const,
  },
  {
    n: '6',
    emoji: '🐝',
    field: 'Ecology',
    question: 'Can a city feed its own bees?',
    tool: 'tables · pandas',
    color: 'green' as const,
  },
  {
    n: '7',
    emoji: '🧬',
    field: 'Cancer biology',
    question: 'Which genes can a cancer cell not live without?',
    tool: 'statistics · plots',
    color: 'blue' as const,
  },
  {
    n: '8',
    emoji: '🔬',
    field: 'Cell biology',
    question: 'How many cells are there, and what are they doing?',
    tool: 'images as arrays',
    color: 'yellow' as const,
  },
]

export function Slide02Part2() {
  return (
    <>
      <SlideTitle>
        Part 2 — Python Meets <GradientText>Real Data</GradientText>
      </SlideTitle>

      <SlideLead>
        Handling big tables, running statistics, drawing figures, measuring images — Python is
        unusually good at all four, which is why it has become the language biologists reach for.
      </SlideLead>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5 xl:gap-6 mt-5 md:mt-7 xl:mt-9">
        {sessions.map((s) => (
          <SlideCard key={s.n} color={s.color} layout="start" padding="compact" className="border-t-4">
            {/* Session label on its own row: a pill sharing a baseline with a
                heading that wraps to two lines ends up floating mid-card. */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg md:text-xl">{s.emoji}</span>
              <span className="font-mono text-xs md:text-sm text-gray-500">Session {s.n}</span>
              {s.tag && <CardPill color={s.color}>{s.tag}</CardPill>}
            </div>
            {/* Heading is text-only: an emoji in front of a long single word
                like "Neurobiology" wraps and is orphaned on its own line. */}
            <CardHeading size="sm" color={s.color} className="mb-2 md:mb-3">
              {s.field}
            </CardHeading>
            <CardBody className="text-sm md:text-lg xl:text-xl">{s.question}</CardBody>
            <p className="font-mono text-xs md:text-sm xl:text-base text-gray-500 mt-3 md:mt-4">
              {s.tool}
            </p>
          </SlideCard>
        ))}
      </div>

      <SlideNote>
        Four sessions, four real datasets, four real questions — and three of them come from labs in
        this building.
      </SlideNote>
    </>
  )
}
