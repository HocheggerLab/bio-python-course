import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `name     = "BRCA1"
organism = "Homo sapiens"

# Commas: a space appears wherever you did not want one
print(name, "(", organism, ")")
# With f: spacing exactly as you typed it
print(f"{name} ({organism})")
# Without f: the braces stay as literal text
print("{name} ({organism})")
`

const demoOutput = `BRCA1 ( Homo sapiens )
BRCA1 (Homo sapiens)
{name} ({organism})`

export function Slide19FStrings() {
  return (
    <ConceptSlide
      title={<><GradientText>f-strings</GradientText> — variables inside text</>}
      lead={
        <>
          Prefix a string with <span className="font-mono text-bio-blue">f</span> and wrap any
          variable name in <span className="font-mono text-bio-blue">{'{ }'}</span> — the value is
          swapped in, with the spacing exactly as you typed it.
        </>
      }
      note={<>Look at the brackets — commas cannot help you there.</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="250px"
        description="Live demo — f-strings"
        staticOutput={demoOutput}
        />
    </ConceptSlide>
  )
}
