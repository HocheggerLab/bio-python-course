import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `sequence = "ATGCGTACGTAGGCTA"

# A string is more than just text — it carries useful methods.
# .count() returns how many times something appears.

print(sequence.count("A"))    # number of As
print(sequence.count("G"))    # number of Gs
print(sequence.count("AT"))   # also works on substrings

# Combine with arithmetic — this is the GC count we need:
gc_count = sequence.count("G") + sequence.count("C")
print(gc_count)
`

const demoOutput = `4
5
2
8`

export function Slide26CountMethod() {
  return (
    <ConceptSlide
      title={<>Counting Characters — <GradientText><span className="font-mono">.count()</span></GradientText></>}
      lead={
        <>
          You&apos;ve seen <span className="font-mono">function(value)</span> — Python also
          has <em>methods</em>, written as{' '}
          <span className="font-mono text-bio-blue">value.method()</span>. Same idea,
          attached to the value. We&apos;ll meet more next week — but for the GC calculator
          you only need one:
        </>
      }
      note={<>Live demo — try counting other letters or pairs:</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="394px"
        showLineNumbers
        description="Live demo — string .count() method"
        staticOutput={demoOutput}
        />
    </ConceptSlide>
  )
}
