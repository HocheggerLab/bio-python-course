import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `seq = "ATGAAACGCGGCGTTTAA"

# Step through the sequence 3 bases at a time
for i in range(0, len(seq) - 2, 3):
    codon = seq[i:i+3]
    print(codon)
`

const demoOutput = `ATG
AAA
CGC
GGC
GTT
TAA`

export function Slide17CarvingCodons() {
  return (
    <ConceptSlide
      title={<>Carving Out <GradientText>Codons</GradientText></>}
      points={
      <>
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            <span className="font-mono">range</span> with a step
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            A third number makes <span className="font-mono">range</span> jump:{' '}
            <span className="font-mono">range(0, len, 3)</span> gives 0, 3, 6, 9… Each{' '}
            <span className="font-mono">i</span> is the start of the next codon.
          </CardBody>
        </SlideCard>
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            Slice three bases
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            <span className="font-mono">seq[i:i+3]</span> grabs the codon at position{' '}
            <span className="font-mono">i</span> — the same slicing from Session 2. The{' '}
            <span className="font-mono">- 2</span> stops us grabbing a half-codon off the end.
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>One sequence in — every codon out, in order:</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="205px"
        description="Live demo — stepping through codons"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
