import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `seq = "ATGGTACGC"

# Step 1 — reverse it (Session 2 showed you this)
reversed_seq = seq[::-1]
print(reversed_seq)

# Step 2 — swap each base for its partner
complement = {"A": "T", "T": "A", "G": "C", "C": "G"}

# Step 3 — assemble the new strand
rc = ""
for base in reversed_seq:
    rc = rc + complement[base]
print(rc)
`

const demoOutput = `CGCATGGTA
GCGTACCAT`

const steps = [
  { n: 1, text: 'Reverse the sequence', color: 'text-bio-blue' },
  { n: 2, text: 'Swap each base for its complement', color: 'text-bio-yellow' },
  { n: 3, text: 'Assemble it into a new strand', color: 'text-bio-green' },
]

export function Slide06ReverseComplement() {
  return (
    <ConceptSlide
      title={<>Break Down: the <GradientText>Other Strand</GradientText></>}
      lead={
        <>
          &quot;Give me the <strong>reverse complement</strong> of this sequence.&quot; DNA is
          double-stranded — genes are read off both strands. Sounds like a real piece of
          software. Break it down first:
        </>
      }
      points={
      <>
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            Three steps — and you can already do all three
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            <span className="font-mono">[::-1]</span> from Session 2 · a{' '}
            <strong>dictionary</strong> lookup · the <strong>accumulator</strong> from Session 3.
            Nothing new. Breaking down turned &quot;write a reverse complement&quot; into three
            things you&apos;ve already done.
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>Session 2 promised you&apos;d build this one day. It took three steps:</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="247px"
        showLineNumbers
        description="Live demo — reverse complement, one step at a time"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
