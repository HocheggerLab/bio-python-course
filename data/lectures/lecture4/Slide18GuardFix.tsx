import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
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
    <>
      <SlideTitle>
        Defensive Programming — <GradientText variant="green">check first</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col justify-center gap-3 md:gap-4">
          <SlideCard color="neutral" layout="start" padding="compact">
            <CardBody className="text-xs md:text-sm xl:text-base">
              One bad sequence in 1,000 shouldn&apos;t kill the run. The simplest fix is one you
              already own — an <span className="font-mono">if</span>. <strong>Look before you
              leap:</strong> only translate sequences you know are clean.
            </CardBody>
          </SlideCard>

          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              <span className="font-mono">all(base in &quot;ATGC&quot; for base in seq)</span>
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              Reads exactly as it says: is <em>every</em> base one of A, T, G, C?{' '}
              <span className="font-mono">True</span> → safe to run.{' '}
              <span className="font-mono">False</span> → skip it and say so. No crash, and you keep a
              record of what was dropped.
            </CardBody>
          </SlideCard>

          <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
            <CardBody className="text-[11px] md:text-sm">
              This is <strong>defensive programming</strong>: assume the input might be broken, and
              handle it on purpose — rather than being surprised by a crash later.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Four sequences, two with <span className="font-mono not-italic">N</span>s — it runs to the
            end and reports:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="420px"
              showLineNumbers
              description="Live demo — guard the loop with an if"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
