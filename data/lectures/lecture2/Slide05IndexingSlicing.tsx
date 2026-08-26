import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `genes = ["BRCA1", "TP53", "EGFR", "MYC"]
#           0        1       2      3
#          -4       -3      -2     -1

print(genes[0])     # first item — counting starts at 0!
print(genes[-1])    # last item

# A slice [start:end] takes a sub-list — end is NOT included
print(genes[1:3])   # items 1 and 2
`

const demoOutput = `BRCA1
MYC
['TP53', 'EGFR']`

export function Slide05IndexingSlicing() {
  return (
    <ConceptSlide
      title={<>Reaching In — <GradientText>Index &amp; Slice</GradientText></>}
      points={
      <>
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            Position counting starts at 0
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            <span className="font-mono">genes[0]</span> is the first item,{' '}
            <span className="font-mono">genes[-1]</span> the last. This trips up everyone at
            first — the first item is at position <strong>zero</strong>.
          </CardBody>
        </SlideCard>
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            A slice takes a range
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            <span className="font-mono">genes[1:3]</span> gives items 1 and 2 — the{' '}
            <strong>end is not included</strong>. Remember the same square-bracket idea: we&apos;ll
            use it on strings next.
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>Run it — then try <span className="font-mono not-italic">genes[2]</span> and{' '}
        <span className="font-mono not-italic">genes[:2]</span>:</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="205px"
        showLineNumbers
        description="Live demo — indexing and slicing a list"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
