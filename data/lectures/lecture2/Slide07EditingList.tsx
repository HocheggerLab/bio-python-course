import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `genes = ["BRCA1", "TP53", "EGFR", "MYC"]

# Replace an item by its position
genes[1] = "KRAS"
print(genes)

# Remove an item by its position
del genes[0]
print(genes)
`

const demoOutput = `['BRCA1', 'KRAS', 'EGFR', 'MYC']
['KRAS', 'EGFR', 'MYC']`

export function Slide07EditingList() {
  return (
    <ConceptSlide
      title={<>Editing a List — <GradientText>replace &amp; remove</GradientText></>}
      points={
      <>
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            Lists can be changed in place
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            Assign to a position — <span className="font-mono">genes[1] = &quot;KRAS&quot;</span>{' '}
            — and that item is swapped out. The list keeps its identity; only the contents
            change.
          </CardBody>
        </SlideCard>
        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
            <span className="font-mono">del</span> — remove by position
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            <span className="font-mono">del genes[0]</span> drops the first item; everything
            after it shuffles up. The list is now one shorter.
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>Run it — watch the positions shift after <span className="font-mono not-italic">del</span>:</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="205px"
        showLineNumbers
        description="Live demo — replace and delete list items"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
