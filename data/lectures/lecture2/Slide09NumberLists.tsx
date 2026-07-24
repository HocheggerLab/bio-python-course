import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `# Five replicate OD600 readings from a growth assay
readings = [38, 42, 40, 45, 39]

total = sum(readings)            # add every item for you
n     = len(readings)            # how many readings

mean  = total / n                # the average
print(total)
print(round(mean, 1))
`

const demoOutput = `204
40.8`

export function Slide09NumberLists() {
  return (
    <>
      <SlideTitle>
        Lists of Numbers — <GradientText>sums &amp; means</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              <span className="font-mono">sum()</span> adds the whole list
            </CardHeading>
            <CardBody>
              When a list holds numbers — replicate measurements, read counts, colony numbers —{' '}
              <span className="font-mono">sum()</span> totals them in one step. No need to add
              them by hand.
            </CardBody>
          </SlideCard>

          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              Mean = total ÷ count
            </CardHeading>
            <CardBody>
              Pair <span className="font-mono">sum()</span> with{' '}
              <span className="font-mono">len()</span> and you have the average —{' '}
              <span className="font-mono">sum(readings) / len(readings)</span>. The everyday
              workhorse of any analysis.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Run it — then add a sixth reading and watch the mean shift:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="240px"
              showLineNumbers
              description="Live demo — sum() and mean"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
