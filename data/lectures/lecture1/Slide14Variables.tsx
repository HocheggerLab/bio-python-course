import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `# = puts the value on the right into the name on the left
gene_name = "BRCA1"
length    = 16

print(gene_name)
print(length)
`

const demoOutput = `BRCA1
16`

export function Slide14Variables() {
  return (
    <ConceptSlide
      title={<>Variables — <GradientText>labels for your data</GradientText></>}
      lead={
        <>
          The <span className="font-mono text-bio-blue">=</span> sign means{' '}
          <span className="text-bio-blue font-semibold">assignment</span>, not equality — read it as{' '}
          <em>&ldquo;put this value into this name&rdquo;</em>. Once stored, you reuse the value by
          its name.
        </>
      }
      note="Run it, then change the values and re-run."
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="310px"
        showLineNumbers
        description="Live demo — variable assignment"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
