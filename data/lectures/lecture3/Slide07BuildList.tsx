import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
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
    <ConceptSlide
      title={<>Building a New List — <GradientText>the transform pattern</GradientText></>}
      points={
      <>
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            Empty list → loop → append
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            An accumulator that&apos;s a <strong>list</strong> instead of a number: start with{' '}
            <span className="font-mono">[ ]</span>, take each item from the old list, change it,
            and <span className="font-mono">.append()</span> it to the new one.
          </CardBody>
        </SlideCard>
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            Remember this shape
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            <em>Take each item → transform it → collect the results.</em> Translating a gene is{' '}
            <strong>exactly</strong> this shape: take each codon, look up its amino acid, collect
            the protein. Hold onto it — we build to it today.
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>One list goes in, a new transformed list comes out:</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="205px"
        description="Live demo — build a new list"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
