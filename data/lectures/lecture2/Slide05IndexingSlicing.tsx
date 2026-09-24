import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `genes =        ["BRCA1", "TP53", "EGFR", "MYC"]
# Index of gene in list:
# from start       0        1       2      3
# from end        -4       -3      -2     -1

print(genes[0])     # first item — counting starts at 0!
print(genes[-1])    # last item

# A slice [start:end] takes a sub-list — end is NOT included
print(genes[1:3])   # items 1 and 2

# Leave out start or end to slice from the beginning or to the end
print(genes[:2])    # items 0 and 1 — same as genes[0:2]
print(genes[2:])    # items 2 and 3 — same as genes[2:4]
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
            <strong>end is not included</strong>. 
            <br/>Leave out the 
            start (<span className="font-mono">genes[:2]</span>)
            or end (<span className="font-mono">genes[2:]</span>) to slice 
            from the beginning or to the end of the list.
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>Run it — then try <span className="font-mono not-italic">genes[2]</span> and{' '}
        <span className="font-mono not-italic">genes[1:-1]</span></>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="205px"
        description="Live demo — indexing and slicing a list"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
