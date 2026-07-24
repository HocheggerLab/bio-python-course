import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
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
    <>
      <SlideTitle>
        Lists Hold <GradientText>Anything</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              Any type, mixed freely
            </CardHeading>
            <CardBody>
              A list doesn&apos;t care what it holds — strings, ints, floats, booleans, all in the
              same list. Often a single record about one gene: name, length, GC fraction, a QC
              flag.
            </CardBody>
          </SlideCard>

          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              Lists of lists — a table
            </CardHeading>
            <CardBody>
              An item can itself be a list. Stack rows and you have a table; reach in twice —{' '}
              <span className="font-mono">plate[1][0]</span> — to get one cell. This is the shape
              of the data tables we&apos;ll meet later.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Run it — try reaching <span className="font-mono not-italic">plate[2][1]</span>:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="280px"
              showLineNumbers
              description="Live demo — mixed types and lists of lists"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
