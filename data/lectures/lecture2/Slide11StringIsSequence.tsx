import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `dna = "ATGCGT"

print(dna[0])     # first base — counting starts at 0
print(dna[-1])    # last base
print(len(dna))   # how many bases
`

const demoOutput = `A
T
6`

export function Slide11StringIsSequence() {
  return (
    <ConceptSlide
      title={<>A String Is a <GradientText>Sequence of Characters</GradientText></>}
      lead={
        <>
          A DNA string is just an <strong>ordered collection of bases</strong>. Reach in by
          position exactly as you did with lists: <span className="font-mono">dna[0]</span> is
          the first base, <span className="font-mono">dna[-1]</span> the last, and{' '}
          <span className="font-mono">len(dna)</span> counts them.
        </>
      }
      note={<>Run it — then try <span className="font-mono not-italic">dna[1]</span> and{' '}
        <span className="font-mono not-italic">dna[-2]</span>:</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="226px"
        showLineNumbers
        description="Live demo — indexing a string"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
