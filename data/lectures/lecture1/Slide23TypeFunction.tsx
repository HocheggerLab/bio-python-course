import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `# Hand any value to type() — Python tells you what it is
print(type("ATGCGT"))
print(type(16))
print(type(0.5625))
print(type(True))

# A gotcha: quotes make it text, even if it looks like a number
print(type("16"))
`

const demoOutput = `<class 'str'>
<class 'int'>
<class 'float'>
<class 'bool'>
<class 'str'>`

export function Slide23TypeFunction() {
  return (
    <ConceptSlide
      title={<><span className="font-mono">type()</span> — <GradientText>ask Python what it is</GradientText></>}
      lead={
        <>
          Pass any value to <span className="font-mono">type()</span> and Python reports its
          type. The classic trap:{' '}
          <span className="font-mono text-bio-blue">&quot;16&quot;</span> (a string) is not{' '}
          <span className="font-mono text-bio-blue">16</span> (an integer) — and you can&apos;t
          do maths on text.
        </>
      }
      note={<>Run it — then try <span className="font-mono not-italic">9 / 16</span> vs{' '}
        <span className="font-mono not-italic">16 &gt; 0</span>:</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="296px"
        showLineNumbers
        description="Live demo — exploring types"
        staticOutput={demoOutput}
        />
    </ConceptSlide>
  )
}
