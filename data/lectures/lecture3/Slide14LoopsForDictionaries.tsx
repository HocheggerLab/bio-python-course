import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `genomes = {
    "phage λ":      48_502,
    "SARS-CoV-2":   29_903,
    "HIV-1":        9_719,
    "hep B":        3_182
}

# How many are smaller than 30 kb?
# Get the genome sizes with .values() and loop through them
count = 0
for size in genomes.values():
    if size < 30_000:
        count = count + 1
print(count)

# Collect the names of all viruses smaller than 30 kb
# Here our for loop uses .items() to get both the virus name and genome size
rna = []
for virus, size in genomes.items():
    if size < 30_000:
        rna.append(virus)
print(rna)
`

const demoOutput = `3
["SARS-CoV-2", "HIV-1", "hep B"]`

export function Slide14LoopsForDictionaries() {
  return (
    <ConceptSlide
      title={<>Loops Aren&apos;t Just for <GradientText>Lists</GradientText></>}
      points={
      <>
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            Looping through a dictionary
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            Great — but we lost the names of the viruses along the way. {' '}
            A dictionary would help, and we can loop through it  — {' '}
            just like a list. {' '}
            To count viruses &lt;30 kb, we use <span className="font-mono">.values()</span> to {' '}
            get the sizes from our dictionary. {' '}
          </CardBody>
        </SlideCard>
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            Using both keys and values
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            To get only viruses &lt;30 kb, {' '}
            we need a loop that checks the sizes (values) {' '}
            <strong>and</strong> stores the names (keys). {' '}
            With <span className="font-mono">.items()</span>, {' '}
            we can process both keys and values in one loop, {' '}
            using <span className="font-mono">for key, value in dict.items():</span>
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>With a dictionary, we keep our virus names and sizes <strong>paired together</strong> as keys and values {' '}
        — helpful for processing data without getting confused.</>}
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
