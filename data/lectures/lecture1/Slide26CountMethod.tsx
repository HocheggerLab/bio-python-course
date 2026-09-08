import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

// The + / - pair is the hook: one works, one is a TypeError. The minus stays
// commented so the cell runs — uncomment it live and read the error together.
const demoCode = `# What do you expect? Then uncomment the second line and run again.
print("Hello" + "World")
# print("Hello" - "World")

sequence = "ATGCGTACGTAGGCTA"

# Strings also carry their own methods: value.method()
print(sequence.count("A"))    # number of As
print(sequence.count("AT"))   # also works on substrings

# Combine with arithmetic — this is the GC count we need:
gc_count = sequence.count("G") + sequence.count("C")
print(gc_count)
`

const demoOutput = `HelloWorld
4
1
8`

export function Slide26CountMethod() {
  return (
    <ConceptSlide
      title={<>Counting Characters — <GradientText><span className="font-mono">.count()</span></GradientText></>}
      lead={
        <>
          Beyond <span className="font-mono">function(value)</span>, every value carries its own
          toolkit — <em>methods</em>, written{' '}
          <span className="font-mono text-bio-blue">value.method()</span>.
        </>
      }
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="300px"
        description="Live demo — string .count() method"
        staticOutput={demoOutput}
        />
    </ConceptSlide>
  )
}
