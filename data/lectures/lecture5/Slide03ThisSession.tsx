import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

export function Slide03ThisSession() {
  return (
    <>
      <SlideTitle>
        This Session — <GradientText>Arrays</GradientText>
      </SlideTitle>

      <div className="flex flex-col gap-6 md:gap-8 xl:gap-10 mt-6 md:mt-10">

        {/* Roadmap — three compact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <SlideCard color="blue" layout="start" padding="compact" className="border-t-4">
            <CardHeading size="sm" color="blue" className="mb-2">
              1 · Borrow code
            </CardHeading>
            <CardBody>Packages — pull in tools other scientists already wrote.</CardBody>
          </SlideCard>

          <SlideCard color="purple" layout="start" padding="compact" className="border-t-4">
            <CardHeading size="sm" color="purple" className="mb-2">
              2 · Under the hood
            </CardHeading>
            <CardBody>Objects &amp; methods — why numpy looks the way it does.</CardBody>
          </SlideCard>

          <SlideCard color="green" layout="start" padding="compact" className="border-t-4">
            <CardHeading size="sm" color="green" className="mb-2">
              3 · One row, then many
            </CardHeading>
            <CardBody>Arrays — pull one neuron&apos;s answer out of the noise.</CardBody>
          </SlideCard>
        </div>

        {/* Bridge to the packages slide */}
        <SlideCard color="yellow" layout="start" padding="normal" className="border-l-4">
          <p className="text-gray-200 text-lg md:text-2xl xl:text-3xl leading-relaxed">
            But how do you even start? Averaging 254 trials of 21,238 numbers, drawing graphs,
            running statistics — that&apos;s{' '}
            <strong className="text-white">well beyond</strong> the loops and lists of Part 1. A
            Python list can&apos;t even add two rows together.
          </p>
          <p className="text-gray-200 text-lg md:text-2xl xl:text-3xl leading-relaxed mt-3 md:mt-4">
            The answer isn&apos;t to build it all yourself. It&apos;s to{' '}
            <span className="text-bio-yellow font-semibold">
              import other people&apos;s code as Python packages.
            </span>
          </p>
        </SlideCard>

      </div>
    </>
  )
}
