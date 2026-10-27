import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide, Figure } from '@/components/slides/layouts'

/* The analysis itself is the lab project; this slide only maps it, with the
   numpy tool for each step that this lecture introduced. */
const steps = [
  { n: '1', what: 'Find where each go signal starts', tool: 'np.where' },
  { n: '2', what: 'Cut the same window around each start', tool: 'slicing' },
  { n: '3', what: 'Stack the windows into a grid', tool: 'np.array' },
  { n: '4', what: 'Average down the columns', tool: 'mean(axis=0)' },
]

export function Slide30InTheLab() {
  return (
    <ConceptSlide
      maxWidth="full"
      title={
        <>
          In the Lab — Does It Tell go <GradientText variant="green">From nogo?</GradientText>
        </>
      }
      lead={
        <>
          One trial is lost in noise. Line up all 254, average them — then do the same for nogo and
          compare the two curves.
        </>
      }
      closing={
        <SlideCard color="green" layout="start" padding="tight" className="border-l-4">
          <CardBody className="text-base md:text-xl xl:text-2xl">
            <strong className="text-white">Why that works:</strong> if the neuron responds to the
            signal, it responds{' '}
            <span className="text-bio-green font-semibold">at the same moment every time</span> — but
            the noise is different every time. Average 254 trials and the noise cancels out. Whatever
            is left is real.
          </CardBody>
        </SlideCard>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-5 md:gap-8 items-center">
        <Figure
          src="/L5-the-plan.png"
          alt="Three panels: single noisy trials, the same trials stacked as a grid, and their average showing a clear response"
          maxHeight="34vh"
        />
        <ol className="flex flex-col gap-2 md:gap-3">
          {steps.map((s) => (
            <li key={s.n} className="flex items-center gap-3">
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
      </div>
    </ConceptSlide>
  )
}
