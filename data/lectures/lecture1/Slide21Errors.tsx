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

export function Slide21Errors() {
  return (
    <ConceptSlide
      title={<>Errors Are <GradientText>Normal</GradientText></>}
      lead={
        <>
          When Python hits something it can&apos;t do, it stops and prints a{' '}
          <strong>traceback</strong>.
          
          <br/><br/>Don&apos;t panic — <strong>read the last line</strong>.
          It names the error type and tells you exactly what went wrong. Every programmer
          reads these all day long.
        </>
      }
      note={<>Run your code — did you get an error? Read the last line of the traceback for the <strong>error type</strong>. Above that, Python tells you <strong>exactly which line</strong> the error occurred on.</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="205px"
        description="Live demo — reading a traceback"
        staticOutput={demoOutput}
        />
    </ConceptSlide>
  )
}
