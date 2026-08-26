import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `# A list: many values in one variable, in square brackets, comma-separated
genes = ["BRCA1", "TP53", "EGFR", "MYC"]

print(genes)

# len() counts the items — just like it counted characters
print(len(genes))
`

const demoOutput = `['BRCA1', 'TP53', 'EGFR', 'MYC']
4`

export function Slide04Lists() {
  return (
    <ConceptSlide
      title={<>Lists — <GradientText>one name, many values</GradientText></>}
      lead={
        <>
          Write the items between <span className="font-mono text-bio-blue">[ ]</span>,
          separated by commas. The order you write them in is the order they keep.{' '}
          <span className="font-mono">len()</span> tells you how many there are.
        </>
      }
      note={<>Run it, then add a gene of your own to the list:</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="268px"
        description="Live demo — making a list"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
