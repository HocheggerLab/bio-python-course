import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `# A list: many values in one variable, in square brackets, comma-separated
genes = ["BRCA1", "TP53", "EGFR", "MYC"]

print(genes)

# len() counts the items — just like it counted characters
print(len(genes))
`

const demoOutput = `['BRCA1', 'TP53', 'EGFR', 'MYC']
4`

export function Slide04Lists() {
  return (
    <>
      <SlideTitle>
        Lists — <GradientText>one name, many values</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col justify-center gap-4 md:gap-6">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              An ordered collection of values
            </CardHeading>
            <CardBody>
              Write the items between <span className="font-mono text-bio-blue">[ ]</span>,
              separated by commas. The order you write them in is the order they keep.{' '}
              <span className="font-mono">len()</span> tells you how many there are.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Run it, then add a gene of your own to the list:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="220px"
              showLineNumbers
              description="Live demo — making a list"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
