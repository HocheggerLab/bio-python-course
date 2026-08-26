import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `genomes = [48502, 29903, 9719, 3182]   # λ, SARS-CoV-2, HIV-1, hep B

# How many are larger than 10 kb?
count = 0
for g in genomes:
    if g > 10000:
        count = count + 1
print(count)

# Collect just the large ones into a new list
large = []
for g in genomes:
    if g > 10000:
        large.append(g)
print(large)
`

const demoOutput = `2
[48502, 29903]`

export function Slide12DecisionsInLoop() {
  return (
    <ConceptSlide
      title={<>Decisions Inside a <GradientText>Loop</GradientText></>}
      points={
      <>
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            Count with a condition
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            Put an <span className="font-mono">if</span> <em>inside</em> the loop and bump an
            accumulator only when it&apos;s <span className="font-mono">True</span>. That finally
            answers the question from earlier — <strong>how many are over 10&nbsp;kb?</strong>
          </CardBody>
        </SlideCard>
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            Filter into a new list
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            It&apos;s the transform pattern with a <strong>bouncer at the door</strong>:{' '}
            <span className="font-mono">.append()</span> only the items that pass the test. A
            conditional alone is a toy — inside a loop it&apos;s a tool.
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>Two of the four — the question we asked at the start, answered automatically:</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="247px"
        showLineNumbers
        description="Live demo — if inside a for loop"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
