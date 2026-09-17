import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `# Virus genome sizes in a dictionary
virus_sizes = {
    "λ": 48_502,
    "SARS-CoV-2": 29_903,
    "HIV-1": 9_719,
    "hep B": 3_182
}

# How many are smaller than 30 kb?
count = 0
for size in virus_sizes.values():
    if size < 30_000:
        count = count + 1
print(count)

# Collect just the RNA virus names into a new list
rna = []
for virus, size in virus_sizes.items():
    if size < 30_000:
        rna.append(virus)
print(rna)
`

const demoOutput = `3
[29903, 9719, 3182]`

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
            accumulator only when it&apos;s <span className="font-mono">True</span>. {' '}
            Now we can identify just the RNA viruses in our list by asking — {' '}
            <strong>which ones are under 30&nbsp;kb?</strong>
          </CardBody>
        </SlideCard>
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            Filter into a new list
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            It&apos;s the transform pattern with a <strong>bouncer at the door</strong>.{' '}
            The result? We <span className="font-mono">.append()</span> only the items that pass the test. {' '}
            The <span className="font-mono">if</span> makes a decision — the loop turns it into a flexible data-processing tool.
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>Two of the four — the question we asked at the start, answered automatically:</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="247px"
        description="Live demo — if inside a for loop"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
