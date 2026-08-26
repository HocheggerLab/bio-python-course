import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
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
    <ConceptSlide
      title={<>Growing a List — <GradientText>append &amp; join</GradientText></>}
      points={
      <>
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            <span className="font-mono">.append()</span> — add one to the end
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            The most common way a list grows: build it up one item at a time. This is exactly
            how we&apos;ll collect results inside a loop next session.
          </CardBody>
        </SlideCard>
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            <span className="font-mono">+</span> — join two lists
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            The same <span className="font-mono">+</span> you used to add numbers also joins
            lists end to end — just like it will join strings.
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>Run it, then append another gene before joining:</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="205px"
        description="Live demo — append and join lists"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
