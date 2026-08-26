import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
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
    <ConceptSlide
      title={<>Slicing Out <GradientText>Codons</GradientText></>}
      points={
      <>
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            A codon is a 3-base slice
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            <span className="font-mono">seq[0:3]</span> grabs the first three bases — one codon.
            The <strong>end is not included</strong>, so <span className="font-mono">0:3</span>{' '}
            gives positions 0, 1, 2. Same slicing you used on lists.
          </CardBody>
        </SlideCard>
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            <span className="font-mono">seq[::-1]</span> reverses it
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            A handy shortcut that runs the sequence backwards — the first step toward building a
            reverse-complement strand later.
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>Run it — then slice the third codon yourself:</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="205px"
        description="Live demo — slicing codons"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
