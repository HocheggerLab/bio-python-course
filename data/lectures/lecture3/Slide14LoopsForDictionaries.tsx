import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `genomes = {
    "phage λ": 48_502,
    "SARS-CoV-2": 29_903,
    "HIV-1": 9_719,
    "hep B": 3_182
}

# How many are smaller than 30 kb?
count = 0
for size in genomes.values():
    if size < 30_000:
        count = count + 1
print(count)

# Collect the names of all viruses smaller than 30 kb
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
            Our loop is good, but we might lose track of which virus is which. {' '}
            No problem — just like with lists, <span className="font-mono">for</span> {' '}
            loops can iterate through a dictionary&apos;s {' '}.
          </CardBody>
        </SlideCard>
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            Looking up values and items
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            We can use the <span className="font-mono">.values()</span> method to {' '}
            loop through just the genome sizes, or <span className="font-mono">in</span> to loop through the names. {' '}
            What if we need both keys and names in our loop? With the <span className="font-mono">.items()</span> {' '}
            method, handle key–value pairs in one go using <span className="font-mono">for virus, size in genomes.items():</span>.
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
