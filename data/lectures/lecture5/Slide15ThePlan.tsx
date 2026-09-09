import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide, Figure } from '@/components/slides/layouts'

export function Slide15ThePlan() {
  return (
    <ConceptSlide
      maxWidth="full"
      title={
        <>
          The Plan — Three Steps to an <GradientText variant="green">Answer</GradientText>
        </>
      }
      lead={
        <>
          Find where <span className="font-mono">go</span> turns on. Cut the same window after each
          one. Stack them into a grid, and average down the columns.
        </>
      }
      closing={
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardBody className="text-base md:text-xl xl:text-2xl">
            <strong className="text-white">Why that works:</strong> if the neuron responds to the
            signal, it responds{' '}
            <span className="text-bio-green font-semibold">at the same moment every time</span> —
            but the noise is different every time. Add up 254 trials and the noise cancels itself
            out. Whatever is left is real.
          </CardBody>
        </SlideCard>
      }
    >
      <Figure
        src="/L5-the-plan.png"
        alt="Three panels: single noisy trials, the same trials stacked as a grid, and their average showing a clear response"
        maxHeight="36vh"
      />
    </ConceptSlide>
  )
}
