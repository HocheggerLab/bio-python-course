import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `# A dictionary maps a KEY to a VALUE
codon_table = {
    "ATG": "Met",
    "GGT": "Gly",
    "TAA": "Stop",
}

print(codon_table)
print(len(codon_table))   # how many entries
`

const demoOutput = `{'ATG': 'Met', 'GGT': 'Gly', 'TAA': 'Stop'}
3`

export function Slide19CodonTable() {
  return (
    <ConceptSlide
      title={<>Dictionaries — <GradientText>a lookup table</GradientText></>}
      points={
      <>
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            Key → value pairs
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            A list finds things by <strong>position</strong> (0, 1, 2). A dictionary finds them
            by a <strong>meaningful key</strong> — here, a codon. Write the pairs in{' '}
            <span className="font-mono text-bio-blue">{'{ }'}</span> as{' '}
            <span className="font-mono text-bio-blue">key: value</span>.
          </CardBody>
        </SlideCard>
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            The codon table, made real
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            The genetic code <em>is</em> a lookup table: each three-base codon maps to one amino
            acid. That&apos;s a dictionary, exactly.
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>Run it — then add a fourth codon of your own:</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="205px"
        description="Live demo — building a dictionary"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
