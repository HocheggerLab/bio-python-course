import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `genes = ["BRCA1", "TP53"]

# .append() adds one item to the end
genes.append("EGFR")
print(genes)

# + joins two lists into a longer one
more = ["MYC", "KRAS"]
all_genes = genes + more
print(all_genes)
`

const demoOutput = `['BRCA1', 'TP53', 'EGFR']
['BRCA1', 'TP53', 'EGFR', 'MYC', 'KRAS']`

export function Slide06GrowingList() {
  return (
    <>
      <SlideTitle>
        Growing a List — <GradientText>append &amp; join</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              <span className="font-mono">.append()</span> — add one to the end
            </CardHeading>
            <CardBody>
              The most common way a list grows: build it up one item at a time. This is exactly
              how we&apos;ll collect results inside a loop next session.
            </CardBody>
          </SlideCard>

          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              <span className="font-mono">+</span> — join two lists
            </CardHeading>
            <CardBody>
              The same <span className="font-mono">+</span> you used to add numbers also joins
              lists end to end — just like it will join strings.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Run it, then append another gene before joining:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="240px"
              showLineNumbers
              description="Live demo — append and join lists"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
