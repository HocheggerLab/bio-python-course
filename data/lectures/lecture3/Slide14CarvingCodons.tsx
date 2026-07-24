import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
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

export function Slide14CarvingCodons() {
  return (
    <>
      <SlideTitle>
        Carving Out <GradientText>Codons</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col justify-center gap-4 md:gap-6">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              <span className="font-mono">range</span> with a step
            </CardHeading>
            <CardBody>
              A third number makes <span className="font-mono">range</span> jump:{' '}
              <span className="font-mono">range(0, len, 3)</span> gives 0, 3, 6, 9… Each{' '}
              <span className="font-mono">i</span> is the start of the next codon.
            </CardBody>
          </SlideCard>

          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              Slice three bases
            </CardHeading>
            <CardBody>
              <span className="font-mono">seq[i:i+3]</span> grabs the codon at position{' '}
              <span className="font-mono">i</span> — the same slicing from Session 2. The{' '}
              <span className="font-mono">- 2</span> stops us grabbing a half-codon off the end.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            One sequence in — every codon out, in order:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="300px"
              showLineNumbers
              description="Live demo — stepping through codons"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
