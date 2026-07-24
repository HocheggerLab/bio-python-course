import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `dna = "ATGCGT"

print(dna[0])     # first base — counting starts at 0
print(dna[-1])    # last base
print(len(dna))   # how many bases
`

const demoOutput = `A
T
6`

export function Slide11StringIsSequence() {
  return (
    <>
      <SlideTitle>
        A String Is a <GradientText>Sequence of Characters</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              The same bracket idea as a list
            </CardHeading>
            <CardBody>
              A DNA string is just an <strong>ordered collection of bases</strong>. Reach in by
              position exactly as you did with lists: <span className="font-mono">dna[0]</span> is
              the first base, <span className="font-mono">dna[-1]</span> the last, and{' '}
              <span className="font-mono">len(dna)</span> counts them.
            </CardBody>
          </SlideCard>

          <SlideCard color="neutral" layout="start" padding="tight">
            <p className="text-gray-400 text-[11px] md:text-xs xl:text-sm leading-snug">
              💡 Each base is one character — but how much space does a character actually take?{' '}
              <span className="text-bio-blue font-semibold">That&apos;s the next slide.</span>
            </p>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Run it — then try <span className="font-mono not-italic">dna[1]</span> and{' '}
            <span className="font-mono not-italic">dna[-2]</span>:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="220px"
              showLineNumbers
              description="Live demo — indexing a string"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
