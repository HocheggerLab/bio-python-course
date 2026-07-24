import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `codon_table = {"AAA": "K", "CAT": "H", "CCC": "P", "GCG": "A",
               "GGG": "G", "TAC": "Y", "TTT": "F"}

def reverse_complement(seq):
    complement = {"A": "T", "T": "A", "G": "C", "C": "G"}
    rc = ""
    for base in seq[::-1]:
        rc = rc + complement[base]
    return rc

def translate(seq):
    protein = ""
    for i in range(0, len(seq) - 2, 3):
        codon = seq[i:i+3]
        protein = protein + codon_table.get(codon, "?")
    return protein

# ── written once, above. Never touched again. ──
sequences = ["ATGGTACGC", "TTTGGGCCC", "ATGAAACCC"]

for seq in sequences:
    print(translate(reverse_complement(seq)))
`

const demoOutput = `AYH
GPK
GFH`

export function Slide10WhyFunctions() {
  return (
    <>
      <SlideTitle>
        Why Bother? <GradientText variant="green">Readable · Reusable</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        {/* LEFT — readability */}
        <div className="flex flex-col justify-center gap-3 md:gap-4">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              1 · Readable — the code became the plan
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base mb-2 md:mb-3">
              Read this out loud: <em>&quot;reverse complement the sequence, then translate it.&quot;</em>{' '}
              That&apos;s the plan you wrote on paper. The 15 lines are still there — you just
              don&apos;t have to read them to know what happens.
            </CardBody>
            <div className="bg-bio-dark/60 rounded px-2 py-2 md:px-3 md:py-3 font-mono text-[11px] md:text-sm xl:text-base text-bio-green overflow-x-auto">
              print(translate(reverse_complement(seq)))
            </div>
          </SlideCard>

          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              2 · Reusable — write once, use forever
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              Three sequences or ten thousand — the loop body doesn&apos;t change. This is exactly
              what <strong>Claudia</strong> wanted: not one by one, but{' '}
              <strong>all in one go</strong>.
            </CardBody>
          </SlideCard>

          <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
            <CardBody className="text-[11px] md:text-sm">
              3 · <strong>Fixable</strong> — spot a bug in your translation? Fix it in{' '}
              <span className="font-mono">translate()</span>, once. Every sequence you ever run is
              fixed. Copy-pasted code has to be fixed everywhere you pasted it — and you{' '}
              <em>will</em> miss one.
            </CardBody>
          </SlideCard>
        </div>

        {/* RIGHT — the runner */}
        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Claudia&apos;s problem, solved — scroll past the definitions and look at the{' '}
            <strong>last three lines</strong>:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="440px"
              showLineNumbers
              description="Live demo — the same two functions, on a whole list"
              staticOutput={demoOutput}
            />
          </div>
          <SlideCard color="neutral" layout="start" padding="tight">
            <CardBody className="text-[11px] md:text-sm">
              Add a fourth sequence to the list and run again. Nothing else needs touching — that
              is the whole point.
            </CardBody>
          </SlideCard>
        </div>

      </div>
    </>
  )
}
