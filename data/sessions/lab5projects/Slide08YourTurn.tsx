import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'
import { SlideNote } from '@/components/slides/layouts'
import { CodeBox } from './CodeBox'

const steps: React.ReactNode[] = [
  <>
    Open <span className="font-mono text-white">01_numpy_small_data.ipynb</span> — pick the{' '}
    <span className="font-mono text-white">.venv</span> kernel again (once per notebook)
  </>,
  <>Work through it top to bottom — every ✅ should turn green</>,
  <>
    Then choose: <span className="font-mono text-white">02_…_basics</span> (the same tasks, on the real neuron) or{' '}
    <span className="font-mono text-white">02_…_advanced</span> (fewer hints, plus a stretch)
  </>,
  <>
    Save your final figure into <span className="font-mono text-white">results/</span>
  </>,
]

const SAVE = `plt.savefig("results/go_vs_nogo.png", dpi=150)`

const NUMBERS = `01            go 1.0   nogo 0.2     go ÷ nogo 5.0
02 basics     go 0.29  nogo 0.057   go ÷ nogo 5.1
02 advanced   neuron 1: 5.1   neuron 2: 1.2`

export function Slide08YourTurn() {
  return (
    <>
      <SlideTitle>
        Your turn — <GradientText variant="green">locally</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-3 md:mt-5 items-start">
        <div className="flex flex-col gap-3 md:gap-4">
          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-3">
              The job
            </CardHeading>
            <CardList items={steps} numbered color="green" />
          </SlideCard>
          <CodeBox label="add this after your last plot" color="blue">{SAVE}</CodeBox>
        </div>

        <div className="flex flex-col gap-3 md:gap-4">
          <CodeBox label="numbers to check against" color="yellow">{NUMBERS}</CodeBox>
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2">
              Advanced: why the two neurons differ
            </CardHeading>
            <CardBody>
              Neuron 1 fires five times harder for <span className="text-white">go</span> than for{' '}
              <span className="text-white">nogo</span> — it carries the mouse&apos;s decision. Neuron 2
              barely tells them apart. Same code, opposite biology.
            </CardBody>
          </SlideCard>
        </div>
      </div>

      <SlideNote>
        Nothing here needs the internet any more. Close Colab — this is where your final project will
        live too.
      </SlideNote>
    </>
  )
}
