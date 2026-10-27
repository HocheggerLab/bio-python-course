import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { Figure } from '@/components/slides/layouts'

/* The intro only says what kind of data we have. The experiment itself is
   explained when the neuron project starts (Slide23TheExperiment). */
export function Slide03TodaysData() {
  return (
    <>
      <SlideTitle>
        Today&apos;s Data — a <GradientText variant="purple">Neuron Firing</GradientText>
      </SlideTitle>

      <p className="text-center text-lg md:text-2xl xl:text-3xl text-gray-200 leading-relaxed mt-3 md:mt-4 max-w-4xl mx-auto">
        We look at a <strong className="text-white">trace</strong> of a neuron firing: its activity,
        measured 11 times a second for half an hour.
      </p>

      <div className="mt-3 md:mt-5">
        <Figure
          src="/L5-trace-example.png"
          alt="Sixty seconds of one neuron's activity trace, rising and falling"
          caption="One minute of one neuron's activity — out of 33 minutes."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-3 md:mt-5">
        <SlideCard color="purple" layout="start" padding="tight" className="border-l-4">
          <CardHeading size="sm" color="purple" className="mb-1 md:mb-2">
            That is 21,238 numbers
          </CardHeading>
          <CardBody className="text-base md:text-xl xl:text-2xl">
            …from a single neuron, in a single session.
          </CardBody>
        </SlideCard>

        <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-1 md:mb-2">
            Lists aren&apos;t built for this
          </CardHeading>
          <CardBody className="text-base md:text-xl xl:text-2xl">
            A list can&apos;t even subtract one number from all its values. We need better tools.
          </CardBody>
        </SlideCard>
      </div>
    </>
  )
}
