import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `seq = "ATGCGTACGTAG"   # four codons, read in threes

print(seq[0:3])    # first codon — ATG is a start codon!
print(seq[3:6])    # second codon
print(seq[-3:])    # last codon — TAG is a stop codon!
print(seq[::-1])   # the whole sequence, reversed
`

const demoOutput = `ATG
CGT
TAG
GATGCATGCGTA`

export function Slide13SlicingCodons() {
  return (
    <>
      <SlideTitle>
        Slicing Out <GradientText>Codons</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              A codon is a 3-base slice
            </CardHeading>
            <CardBody>
              <span className="font-mono">seq[0:3]</span> grabs the first three bases — one codon.
              The <strong>end is not included</strong>, so <span className="font-mono">0:3</span>{' '}
              gives positions 0, 1, 2. Same slicing you used on lists.
            </CardBody>
          </SlideCard>

          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              <span className="font-mono">seq[::-1]</span> reverses it
            </CardHeading>
            <CardBody>
              A handy shortcut that runs the sequence backwards — the first step toward building a
              reverse-complement strand later.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Run it — then slice the third codon yourself:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="240px"
              showLineNumbers
              description="Live demo — slicing codons"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
