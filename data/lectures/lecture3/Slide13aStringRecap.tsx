import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `seq = "ATGAAACGCGGC"

# A string is a sequence — reach in by position, just like a list
print(seq[0])       # first base
print(seq[0:3])     # first three bases — one codon
print(len(seq))     # how many bases

# Loop over it: one character at a time
for base in seq:
    print(base)
`

const demoOutput = `A
ATG
12
A
T
G
A
A
A
C
G
C
G
G
C`

export function Slide13aStringRecap() {
  return (
    <ConceptSlide
      title={<>A String Is a <GradientText>Sequence</GradientText> — Recap</>}
      points={
      <>
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            Everything you did to lists works on DNA
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            From Session&nbsp;2: <span className="font-mono">seq[0]</span> is the first base,{' '}
            <span className="font-mono">seq[0:3]</span> slices out a codon,{' '}
            <span className="font-mono">len(seq)</span> counts the bases. Same square brackets,
            same rule — <strong>the end of a slice is not included</strong>.
          </CardBody>
        </SlideCard>
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            New: a string loops too
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            <span className="font-mono">for base in seq:</span> works exactly like{' '}
            <span className="font-mono">for g in genomes:</span> — but a string hands you{' '}
            <strong>one character at a time</strong>. Twelve bases in, twelve lines out.
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>Run it — the loop gives you every base, one by one:</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="205px"
        description="Live demo — indexing, slicing and looping a DNA string"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
