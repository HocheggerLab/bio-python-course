import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard } from '@/components/slides/SlideCard'

/* The whole lecture on one slide: the data, the question, the technique. */

const tiles: { label: string; head: React.ReactNode; body: React.ReactNode; color: 'blue' | 'yellow' | 'green' }[] = [
  {
    label: 'The data',
    head: 'DepMap',
    body: <>1,165 cancer cell lines, every gene switched off one at a time.</>,
    color: 'blue',
  },
  {
    label: 'The question',
    head: <>Who needs <span className="font-mono">SOX10</span>?</>,
    body: <>Most cancer cells don&apos;t care when it is gone. Some die. Which ones?</>,
    color: 'yellow',
  },
  {
    label: 'The technique',
    head: 'Figures with matplotlib',
    body: <>One way of plotting, learned slowly and done properly.</>,
    color: 'green',
  },
]

const headColor = { blue: 'text-bio-blue', yellow: 'text-bio-yellow', green: 'text-bio-green' }

export function SlideToday() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={<>Today: <GradientText>plotting figures</GradientText></>}
      note={<>Write down a guess for the question now. We open the case at the end of the lecture.</>}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
        {tiles.map((t) => (
          <SlideCard key={t.label} color={t.color} layout="start" className="border-t-4">
            <p className="uppercase tracking-wider text-gray-400 text-xs md:text-sm mb-1">{t.label}</p>
            <p className={`font-bold text-xl md:text-2xl xl:text-3xl leading-tight mb-2 ${headColor[t.color]}`}>
              {t.head}
            </p>
            <p className="text-gray-300 text-sm md:text-base xl:text-lg leading-snug">{t.body}</p>
          </SlideCard>
        ))}
      </div>
    </ConceptSlide>
  )
}
