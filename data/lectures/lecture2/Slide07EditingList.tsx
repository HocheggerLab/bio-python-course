import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
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
    <>
      <SlideTitle>
        Editing a List — <GradientText>replace &amp; remove</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              Lists can be changed in place
            </CardHeading>
            <CardBody>
              Assign to a position — <span className="font-mono">genes[1] = &quot;KRAS&quot;</span>{' '}
              — and that item is swapped out. The list keeps its identity; only the contents
              change.
            </CardBody>
          </SlideCard>

          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
              <span className="font-mono">del</span> — remove by position
            </CardHeading>
            <CardBody>
              <span className="font-mono">del genes[0]</span> drops the first item; everything
              after it shuffles up. The list is now one shorter.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Run it — watch the positions shift after <span className="font-mono not-italic">del</span>:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="240px"
              showLineNumbers
              description="Live demo — replace and delete list items"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
