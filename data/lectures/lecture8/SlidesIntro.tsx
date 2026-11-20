import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide, SectionSlide } from '@/components/slides/layouts'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

/* Opening: last week's figure, and the question it cannot answer by itself. */

export function SlideRecapL8() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Last week you <GradientText>saw it</GradientText>
        </>
      }
      lead={
        <>
          Five figures, one answer: melanoma lines die without SOX10. The skin box sat far
          below every other lineage.
        </>
      }
      points={
        <>
          <SlideCard color="blue" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-1">
              What the eye says
            </CardHeading>
            <CardBody>
              Skin median <span className="font-mono text-white">−1.40</span>, everything else{' '}
              <span className="font-mono text-white">−0.19</span>. That looks like a difference.
            </CardBody>
          </SlideCard>
          <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-1">
              What a reviewer asks
            </CardHeading>
            <CardBody>
              Any two groups of cell lines have different medians. Is this one bigger than
              chance alone would give you?
            </CardBody>
          </SlideCard>
        </>
      }
    >
      <div className="mt-5 md:mt-8 text-center">
        <p className="text-2xl md:text-3xl xl:text-4xl font-bold leading-tight">
          Today you put a number on it.
        </p>
      </div>
    </ConceptSlide>
  )
}

const tiles: { label: string; head: React.ReactNode; body: React.ReactNode; color: 'blue' | 'yellow' | 'green' }[] = [
  {
    label: 'The data',
    head: 'DepMap, again',
    body: <>The same 1,165 cell lines, the same SOX10 column.</>,
    color: 'blue',
  },
  {
    label: 'The question',
    head: 'Real, or chance?',
    body: <>Is the skin difference bigger than a random split of cell lines would give?</>,
    color: 'yellow',
  },
  {
    label: 'The technique',
    head: 'seaborn + scipy.stats',
    body: <>Better figures in fewer lines, then the tests your project needs.</>,
    color: 'green',
  },
]

const headColor = { blue: 'text-bio-blue', yellow: 'text-bio-yellow', green: 'text-bio-green' }

export function SlideTodayL8() {
  return (
    <ConceptSlide maxWidth="6xl" title={<>Today: <GradientText>Is the SOX10 dependency difference real?</GradientText></>}>
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
      <p className="mt-6 md:mt-8 text-center text-gray-400 text-sm md:text-base xl:text-lg">
        Two parts, the final sprint of the course!
      </p>
    </ConceptSlide>
  )
}

export function SlideSeabornSection() {
  return (
    <SectionSlide
      eyebrow="Part 1"
      title="Better figures,"
      accent="fewer lines"
      note="First a map of the plotting libraries you will meet. Then two shortcuts built on matplotlib: pandas, for a quick look, and seaborn, for statistical figures."
    />
  )
}

export function SlideStatsSection() {
  return (
    <SectionSlide
      eyebrow="Part 2"
      title="Real,"
      accent="or chance?"
      note="Chance makes differences too. A test tells you whether yours is bigger than chance would make."
    />
  )
}
