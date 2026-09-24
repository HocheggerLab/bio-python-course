import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { StepList, type Step } from '@/components/slides/layouts'

const learned: Step[] = [
  { label: 'An array does arithmetic to every value at once', detail: 'arr - 0.1, arr * 2, arr.mean()', accent: 'green' },
  { label: 'A question filters it', detail: 'dff[go == 1] — masking', accent: 'green' },
  { label: 'np.diff finds where something changed', detail: '2,286 frames became 254 trials', accent: 'green' },
  { label: 'Stacking slices makes a 2-D grid', detail: '(254, 40) — rows are trials, columns are time', accent: 'green' },
  { label: 'mean(axis=0) averages down the columns', detail: 'and the noise cancels out', accent: 'green' },
]

export function Slide26Recap() {
  return (
    <>
      <SlideTitle>
        What You Can Do <GradientText variant="green">Now</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-5 md:gap-8 xl:gap-10 mt-5 md:mt-7 items-start">
        <StepList steps={learned} />

        <div className="flex flex-col gap-4 md:gap-5">
          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-2">
              In the lab
            </CardHeading>
            <CardBody className="text-base md:text-xl xl:text-2xl">
              Five neurons instead of one, all the columns back, and the raw{' '}
              <span className="font-mono">.mat</span> files they arrived in — because real data
              never comes as a tidy CSV.
            </CardBody>
          </SlideCard>

          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2">
              Next week
            </CardHeading>
            <CardBody className="text-base md:text-xl xl:text-2xl">
              Put names on the columns and the grid becomes a{' '}
              <span className="font-mono text-bio-green">DataFrame</span>. Same idea, and suddenly
              you can ask it about bees.
            </CardBody>
          </SlideCard>
        </div>
      </div>
    </>
  )
}
