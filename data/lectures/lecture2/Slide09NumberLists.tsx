import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
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
    <ConceptSlide
      title={<>Lists of Numbers — <GradientText>sums &amp; means</GradientText></>}
      points={
      <>
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            <span className="font-mono">sum()</span> adds the whole list
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            When a list holds numbers — replicate measurements, read counts, colony numbers —{' '}
            <span className="font-mono">sum()</span> totals them in one step. No need to add
            them by hand.
          </CardBody>
        </SlideCard>
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            Mean = total ÷ count
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            Pair <span className="font-mono">sum()</span> with{' '}
            <span className="font-mono">len()</span> and you have the average —{' '}
            <span className="font-mono">sum(readings) / len(readings)</span>. The everyday
            workhorse of any analysis.
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>Run it — then add a sixth reading and watch the mean shift:</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="205px"
        description="Live demo — sum() and mean"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
