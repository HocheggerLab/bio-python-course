import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `# Genome sizes in base pairs: phage λ, SARS-CoV-2, HIV-1, hep B
genomes = [48502, 29903, 9719, 3182]

# You already know the shortcut from last session:
print(sum(genomes))

# Here is what sum() does inside — an accumulator:
total = 0
for g in genomes:
    total = total + g       # add each genome to the running total
print(total)

mean = total / len(genomes)
print(round(mean, 1))
`

const demoOutput = `91306
91306
22826.5`

export function Slide06RunningTotal() {
  return (
    <ConceptSlide
      title={<>A Running Total — <GradientText>the accumulator</GradientText></>}
      points={
      <>
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            You know the shortcut
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            <span className="font-mono">sum()</span> totals a list of numbers in one step — you
            used it last session for the mean.
          </CardBody>
        </SlideCard>
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            Here&apos;s what&apos;s inside it
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            Start a variable at <span className="font-mono">0</span>, then add each item as the
            loop visits it. A variable that <strong>grows across the loop</strong> is called an{' '}
            <span className="text-bio-blue font-semibold">accumulator</span> — the single most
            useful loop pattern you&apos;ll learn.
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>Both totals match — the loop <em>is</em> what <span className="font-mono">sum()</span>{' '}
        does for you:</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="247px"
        description="Live demo — an accumulator"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
