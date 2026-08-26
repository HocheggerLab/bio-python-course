import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `def reverse_complement(seq):
    complement = {"A": "T", "T": "A", "G": "C", "C": "G"}
    return "".join(complement[b] for b in seq[::-1])

sequences = ["ATGCGT", "ATGNGT", "TTAGGC", "ATNNGC"]

clean = 0
for seq in sequences:
    # Check BEFORE you act — is every base one we can handle?
    if all(base in "ATGC" for base in seq):
        print(f"{seq} -> {reverse_complement(seq)}")
        clean = clean + 1
    else:
        print(f"{seq} -> skipped (not valid DNA)")

print(f"{clean}/{len(sequences)} sequences were clean")
`

const demoOutput = `ATGCGT -> ACGCAT
ATGNGT -> skipped (not valid DNA)
TTAGGC -> GCCTAA
ATNNGC -> skipped (not valid DNA)
2/4 sequences were clean`

export function Slide18GuardFix() {
  return (
    <ConceptSlide
      title={<>Defensive Programming — <GradientText variant="green">check first</GradientText></>}
      lead={
        <>
          One bad sequence in 1,000 shouldn&apos;t kill the run. The simplest fix is one you
          already own — an <span className="font-mono">if</span>. <strong>Look before you
          leap:</strong> only translate sequences you know are clean.
        </>
      }
      points={
      <>
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            <span className="font-mono">all(base in &quot;ATGC&quot; for base in seq)</span>
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            Reads exactly as it says: is <em>every</em> base one of A, T, G, C?{' '}
            <span className="font-mono">True</span> → safe to run.{' '}
            <span className="font-mono">False</span> → skip it and say so. No crash, and you keep a
            record of what was dropped.
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>Four sequences, two with <span className="font-mono not-italic">N</span>s — it runs to the
        end and reports:</>}
      closing={
        <SlideCard color="neutral" layout="start" padding="compact" className="border-l-4">
          <CardBody className="text-sm md:text-base xl:text-lg">
            This is <strong>defensive programming</strong>: assume the input might be broken, and
        handle it on purpose — rather than being surprised by a crash later.
          </CardBody>
        </SlideCard>
      }
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="247px"
        description="Live demo — guard the loop with an if"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
