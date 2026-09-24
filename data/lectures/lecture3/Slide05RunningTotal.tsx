import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `# Viral genome sizes in base pairs: 
#          phage λ,   SARS-CoV-2,   HIV-1,    hep B
genomes = [ 48_502,     29_903,     9_719,    3_182  ]
# Python lets you use underscores to make big numbers easier to read
# — but commas are NOT allowed inside numbers!

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

export function Slide05RunningTotal() {
  return (
    <ConceptSlide
      title={<>A Running Total — <GradientText>the accumulator pattern</GradientText></>}
      points={
      <>
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            Summing numbers: the shortcut
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            <span className="font-mono">sum()</span> totals a list of numbers in one step — you
            used it last session while calculating the mean. Here we'll use it to sum the size of some <strong>viral genomes</strong>.
          </CardBody>
        </SlideCard>
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            Summing with an accumulator loop
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            Combine a <span className="font-mono">for</span> loop with an {' '}
            <span className="text-bio-blue font-semibold">accumulator</span> variable{' '}
            to sum numbers. Start at <span className="font-mono">0</span>, {' '}
            then loop through the list, adding a number each time.{' '}
            A powerful pattern that works for more than just sums.
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>Both totals match — the loop <em>is</em> what <span className="font-mono">sum()</span>{' '}
        does for you.</>}
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
