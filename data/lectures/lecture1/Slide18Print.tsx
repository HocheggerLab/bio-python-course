import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `name   = "BRCA1"
length = 16

# print() displays one value...
print(name)

# ...or several at once — separated by commas, joined with spaces
print("Length:", length, "bases")
`

const demoOutput = `BRCA1
Length: 16 bases`

export function Slide18Print() {
  return (
    <ConceptSlide
      title={<><span className="font-mono">print()</span> — <GradientText>see your data</GradientText></>}
      lead={
        <>
          Hand any value to <span className="font-mono">print()</span> and Python displays it.
          Pass several values separated by commas and it prints them on one line, with spaces
          in between. This is how you check a variable holds what you expect.
        </>
      }
      note={<>Run it, then try printing your own values:</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="289px"
        description="Live demo — print()"
        staticOutput={demoOutput}
        />
    </ConceptSlide>
  )
}
