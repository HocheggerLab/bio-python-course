import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `# Our codon map — each ITEM contains a KEY and a VALUE
codon_table = {
    "ATG": "Met",
    "GGT": "Gly",
    "TAA": "Stop",
}

print(codon_table.keys())     # what are the keys?
print(codon_table.values())   # what are the values?
print(codon_table.items())    # what are the key-value pairs?
`

const demoOutput = `{'ATG': 'Met', 'GGT': 'Gly', 'TAA': 'Stop'}
3`

export function Slide20DictKeysAndValues() {
  return (
    <ConceptSlide
      title={<>What&apos;s in my dictionary? <GradientText>Keys, values & items</GradientText></>}
      points={
      <>
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            Keys and values
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            What if we want to look up just the <strong>keys</strong> or the {' '}
            <strong>values</strong> in our codon table? We can use the {' '}
            <span className="font-mono">.keys()</span> and {' '}
            <span className="font-mono">.values()</span> methods to do that.
          </CardBody>
        </SlideCard>
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            Items: Key–value pairs
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            Sometimes we want to see both the key and the value together. The {' '}
            <span className="font-mono">.items()</span> method returns all of the {' '}
            <strong>key–value pairs</strong> in the dictionary. We'll be using it {' '}
            in the next lecture.
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>Remember, each item in a dictionary maps a key to a value.</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="205px"
        description="Live demo — keys, values & items"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}