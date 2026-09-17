import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `seq = "ATGCGTACGTAG"   # four codons, read in threes

print(seq[0:3])    # first codon — ATG is a start codon!
print(seq[3:6])    # second codon
print(seq[-3:])    # last codon — TAG is a stop codon!

# Slicing with a step value: seq[start:end:step]
print(seq[::-1])   # the whole sequence, reversed
#                    — same as seq[0:len(seq):-1]
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
            Just like with lists, we use <span className="font-mono">[start:end]</span> to slice 
            — remember that the <strong>end is not included</strong>, so <span className="font-mono">0:3</span>{' '}
            gives positions 0, 1, 2.
          </CardBody>
        </SlideCard>
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            Stepping through a slice
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            What if we want a slice in reverse order? 
            We can set the <strong>step value</strong>. 
            Using <span className="font-mono">[::-1]</span> moves{' '}
            <strong>backwards</strong> through the slice 1 step at a time 
            — perfect for getting the reverse-complement strand.
          </CardBody>
        </SlideCard>
      </>
      }
      note={
      <>Run it — then find out what happens if you step through every 3rd base 
      with <span className="font-mono">seq[::3]</span>. Can you figure out how to slice the 3rd codon?
      </>}
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
