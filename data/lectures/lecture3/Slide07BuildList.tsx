import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `genomes_bp = [48502, 29903, 9719, 3182]

# Build a NEW list: convert each size to kilobases
genomes_kb = []                 # 1. start empty
for bp in genomes_bp:
    kb = bp / 1000              # 2. transform each item
    genomes_kb.append(kb)       # 3. collect into the new list

print(genomes_kb)
`

const demoOutput = `[48.502, 29.903, 9.719, 3.182]`

export function Slide07BuildList() {
  return (
    <>
      <SlideTitle>
        Building a New List — <GradientText>the transform pattern</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col justify-center gap-4 md:gap-6">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              Empty list → loop → append
            </CardHeading>
            <CardBody>
              An accumulator that&apos;s a <strong>list</strong> instead of a number: start with{' '}
              <span className="font-mono">[ ]</span>, take each item from the old list, change it,
              and <span className="font-mono">.append()</span> it to the new one.
            </CardBody>
          </SlideCard>

          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              Remember this shape
            </CardHeading>
            <CardBody>
              <em>Take each item → transform it → collect the results.</em> Translating a gene is{' '}
              <strong>exactly</strong> this shape: take each codon, look up its amino acid, collect
              the protein. Hold onto it — we build to it today.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            One list goes in, a new transformed list comes out:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="300px"
              showLineNumbers
              description="Live demo — build a new list"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
