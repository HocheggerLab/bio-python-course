import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
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
    <>
      <SlideTitle>
        A String Is a <GradientText>Sequence</GradientText> — Recap
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col justify-center gap-4 md:gap-6">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              Everything you did to lists works on DNA
            </CardHeading>
            <CardBody>
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
            <CardBody>
              <span className="font-mono">for base in seq:</span> works exactly like{' '}
              <span className="font-mono">for g in genomes:</span> — but a string hands you{' '}
              <strong>one character at a time</strong>. Twelve bases in, twelve lines out.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Run it — the loop gives you every base, one by one:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="320px"
              showLineNumbers
              description="Live demo — indexing, slicing and looping a DNA string"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
