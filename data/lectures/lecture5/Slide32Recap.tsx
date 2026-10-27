import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { StepList, type Step } from '@/components/slides/layouts'

const learned: Step[] = [
  { label: 'Classes bundle data and methods', detail: 'you use them through their API — the reception', accent: 'green' },
  { label: 'import borrows other people\'s classes', detail: 'import random · import numpy as np · from numpy import array', accent: 'green' },
  { label: 'An array does maths on every value at once', detail: 'about a hundred times faster than a for loop', accent: 'green' },
  { label: 'A question filters it', detail: 'readings[readings > 0.4] — boolean filtering', accent: 'green' },
  { label: 'argmax and np.where tell you where', detail: 'positions, not values — and np.where needs its [0]', accent: 'green' },
]

export function Slide32Recap() {
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
              The real analysis: find every go trial, line them up, average — and find out whether
              this neuron tells go from nogo.
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
