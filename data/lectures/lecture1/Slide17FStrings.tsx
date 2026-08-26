import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `name     = "BRCA1"
organism = "Homo sapiens"

# With f — the variables get substituted in:
print(f"{name} ({organism})")

# Without f — the braces are just literal text:
print("{name} ({organism})")
`

const demoOutput = `BRCA1 (Homo sapiens)
{name} ({organism})`

export function Slide17FStrings() {
  return (
    <ConceptSlide
      title={<><GradientText>f-strings</GradientText> — variables inside text</>}
      lead={
        <>
          Prefix a string with <span className="font-mono text-bio-blue">f</span> and wrap any
          variable name in <span className="font-mono text-bio-blue">{'{ }'}</span>. Python
          swaps in the value when the line runs. Forget the{' '}
          <span className="font-mono text-bio-blue">f</span> and the braces stay as plain text.
        </>
      }
      note={<>Spot the difference between the two lines:</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="296px"
        showLineNumbers
        description="Live demo — f-strings"
        staticOutput={demoOutput}
        />
    </ConceptSlide>
  )
}
