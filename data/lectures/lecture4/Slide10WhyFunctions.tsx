import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
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
    <ConceptSlide
      title={<>Why Bother? <GradientText variant="green">Readable · Reusable</GradientText></>}
      points={
        <>
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              1 · Readable — the code became the plan
            </CardHeading>
            <CardBody className="text-sm md:text-base xl:text-lg mb-2 md:mb-3">
              Read this out loud: <em>&quot;reverse complement the sequence, then translate
              it.&quot;</em> That&apos;s the plan you wrote on paper.
            </CardBody>
            <div className="bg-bio-darkest rounded px-2 py-2 md:px-3 md:py-3 font-mono text-[11px] md:text-sm xl:text-base text-bio-green overflow-x-auto">
              print(translate(reverse_complement(seq)))
            </div>
          </SlideCard>

          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              2 · Reusable — write once, use forever
            </CardHeading>
            <CardBody className="text-sm md:text-base xl:text-lg">
              Three sequences or ten thousand — the loop body doesn&apos;t change. This is exactly
              what <strong>Claudia</strong> wanted: not one by one, but{' '}
              <strong>all in one go</strong>.
            </CardBody>
          </SlideCard>

        </>
      }
      closing={
        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
        <CardBody className="text-sm md:text-base xl:text-lg">
        3 · <strong>Fixable</strong> — spot a bug in your translation? Fix it in{' '}
        <span className="font-mono">translate()</span>, once. Every sequence you ever run is
        fixed. Copy-pasted code has to be fixed everywhere you pasted it — and you{' '}
        <em>will</em> miss one.
        </CardBody>
        </SlideCard>
      }
      note={
        <>
          Scroll past the definitions and look at the last three lines. Add a fourth sequence to
          the list and run again — nothing else needs touching. That is the whole point.
        </>
      }
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="247px"
        description="Live demo — the same two functions, on a whole list"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
