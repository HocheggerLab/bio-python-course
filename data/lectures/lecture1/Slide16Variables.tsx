import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

// No print() yet — assignment on its own produces no output, which is the
// point: the values are stored, just not shown. print() comes two slides on.
const demoCode = `# The = sign puts the value on the right into the name on the left
gene_name = "BRCA1"    # store text (a string) in gene_name
length    = 16         # store a whole number (an integer) in length

# Any line starting with # is a comment
# Python ignores it, but it's useful for us humans to understand the code.
`

export function Slide16Variables() {
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
      note="Run it — nothing appears. The values are stored; showing them is the next step."
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="310px"
        description="Live demo — variable assignment"
      />
    </ConceptSlide>
  )
}
