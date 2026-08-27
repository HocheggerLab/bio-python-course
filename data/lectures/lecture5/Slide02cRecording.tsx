import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide, Figure } from '@/components/slides/layouts'

export function Slide02cRecording() {
  return (
    <ConceptSlide
      maxWidth="full"
      title={
        <>
          One Neuron, <GradientText>21,238 Numbers</GradientText>
        </>
      }
      lead={
        <>
          One neuron&apos;s activity, measured{' '}
          <span className="text-bio-blue font-semibold">about eleven times a second</span> for half
          an hour, while the animal works through the task.
        </>
      }
      closing={
        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
            Now find the neuron&apos;s response to a go trial.
          </CardHeading>
          <CardBody className="text-base md:text-xl xl:text-2xl">
            You can&apos;t. Neither can I — one trial is buried in noise. But the file holds{' '}
            <strong className="text-white">254 go trials</strong>, and averaging them is two lines
            of code. That is what today is for.
          </CardBody>
        </SlideCard>
      }
      note={
        <>
          One row per reading: <span className="font-mono not-italic">dff</span> — activity above
          the neuron&apos;s resting level — plus a 0 or 1 for each event.
        </>
      }
    >
      <Figure
        src="/L5-trace-example.png"
        alt="Sixty seconds of the neuron's dF/F trace with go and nogo trial onsets marked"
        caption="Sixty seconds of it — 1 minute out of 33. Green lines are go trials, dotted gold are nogo."
      />
    </ConceptSlide>
  )
}
