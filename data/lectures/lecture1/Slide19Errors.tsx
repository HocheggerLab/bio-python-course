import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `sequence = "ATGCGT"

# Spot the typo — Python can't find a name it was never given
print(squence)
`

const demoOutput = `Traceback (most recent call last):
  File "<stdin>", line 4, in <module>
NameError: name 'squence' is not defined`

export function Slide19Errors() {
  return (
    <ConceptSlide
      title={<>Errors Are <GradientText>Normal</GradientText></>}
      lead={
        <>
          When Python hits something it can&apos;t do, it stops and prints a{' '}
          <strong>traceback</strong>. Don&apos;t panic — <strong>read the last line</strong>.
          It names the error type and tells you exactly what went wrong. Every programmer
          reads these all day long.
        </>
      }
      note={<>Run it — read the last line before anything else:</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="208px"
        showLineNumbers
        description="Live demo — reading a traceback"
        staticOutput={demoOutput}
        />
    </ConceptSlide>
  )
}
