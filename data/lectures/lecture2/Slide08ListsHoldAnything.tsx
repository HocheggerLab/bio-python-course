import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `# A list can mix types: text, numbers, booleans
record = ["BRCA1", 1863, 0.62, True]
print(record)

# A list can even hold other lists — a small table
plate = [
    ["BRCA1", 0.62],
    ["TP53",  0.48],
    ["EGFR",  0.55],
]
print(plate[1])        # one row
print(plate[1][0])     # row 1, column 0
`

const demoOutput = `['BRCA1', 1863, 0.62, True]
['TP53', 0.48]
TP53`

export function Slide08ListsHoldAnything() {
  return (
    <ConceptSlide
      title={<>Lists Hold <GradientText>Anything</GradientText></>}
      points={
      <>
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            Any type, mixed freely
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            A list doesn&apos;t care what it holds — strings, ints, floats, booleans, all in the
            same list. Often a single record about one gene: name, length, GC fraction, a QC
            flag.
          </CardBody>
        </SlideCard>
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            Lists of lists — a table
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            An item can itself be a list. Stack rows and you have a table; reach in twice —{' '}
            <span className="font-mono">plate[1][0]</span> — to get one cell. This is the shape
            of the data tables we&apos;ll meet later.
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>Run it — try reaching <span className="font-mono not-italic">plate[2][1]</span>:</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="247px"
        showLineNumbers
        description="Live demo — mixed types and lists of lists"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
