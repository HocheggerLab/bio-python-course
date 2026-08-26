import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `codon_table = {"ATG": "Met", "GGT": "Gly", "TAA": "Stop"}

# Look up a value by its key — same square brackets as a list,
# but the key is a label, not a position
print(codon_table["ATG"])
print(codon_table["TAA"])
`

const demoOutput = `Met
Stop`

export function Slide21LookupByKey() {
  return (
    <ConceptSlide
      title={<>Looking Up by <GradientText>Key</GradientText></>}
      lead={
        <>
          The same <span className="font-mono">[ ]</span> you used on lists and strings — but
          instead of a position you give the <strong>key</strong>, and Python hands back its{' '}
          <strong>value</strong>. One step, instant answer.
        </>
      }
      note={<>Run it — then look up <span className="font-mono not-italic">&quot;GGT&quot;</span>:</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="247px"
        showLineNumbers
        description="Live demo — lookup by key"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
