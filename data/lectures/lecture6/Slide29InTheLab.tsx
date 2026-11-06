import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'

/* The analysis itself is the lab project; this slide only maps it, with the
   pandas tool for each step that this lecture introduced. */
const steps = [
  { n: '✓', what: 'Bumblebee share of each crop’s visits — done together today', tool: 'groupby, a new column, filter, sort' },
  { n: '1', what: 'Make it fair: visits per survey, per flower', tool: 'new columns, .mean()' },
  { n: '2', what: 'Is broad bean’s 92% solid? It rests on 25 visits', tool: 'groupby(...).size(), filter' },
  { n: '3', what: 'Which bumblebee species carry the broad beans?', tool: 'the six species columns' },
  { n: '4', what: 'Does the answer change from month to month?', tool: 'groupby(["Month", "Crop"])' },
]

export function Slide29InTheLab() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          In the Lab — <GradientText variant="green">what would you lose?</GradientText>
        </>
      }
      lead={
        <>
          Today gave you a first answer. The lab tests whether it holds up — same file, the same
          tools, put together.
        </>
      }
      closing={
        <SlideCard color="green" layout="start" padding="tight" className="border-l-4">
          <CardBody className="text-base md:text-xl xl:text-2xl">
            <strong className="text-white">The catch to watch for:</strong> a crop surveyed 269 times
            will always have the biggest totals.{' '}
            <span className="text-bio-green font-semibold">Compare like with like</span> — per survey,
            or per flower — before you crown a winner.
          </CardBody>
        </SlideCard>
      }
    >
      <ol className="flex flex-col gap-2 md:gap-3 max-w-4xl mx-auto w-full">
        {steps.map((s) => (
          <li key={s.n} className="flex items-center gap-3 md:gap-4">
            <span className="inline-flex items-center justify-center rounded-full font-bold shrink-0 w-7 h-7 text-xs md:w-9 md:h-9 md:text-base bg-bio-green/20 text-bio-green">
              {s.n}
            </span>
            <div className="min-w-0">
              <p className="text-white text-sm md:text-lg xl:text-xl leading-tight">{s.what}</p>
              <p className="font-mono text-bio-green text-xs md:text-base xl:text-lg leading-tight">{s.tool}</p>
            </div>
          </li>
        ))}
      </ol>
    </ConceptSlide>
  )
}
