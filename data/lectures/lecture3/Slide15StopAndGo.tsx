import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `seq = "ATGAAACGCGGCGTTTAA"
codon_table = {"ATG": "M", "AAA": "K", "CGC": "R",
               "GGC": "G", "GTT": "V", "TAA": "*"}
stop_codons = {"TAA", "TAG", "TGA"}

protein = ""
for i in range(0, len(seq) - 2, 3):
    codon = seq[i:i+3]
    if codon in stop_codons:      # ribosome reaches the stop...
        break                     # ...and lets go. Nothing more is read.
    protein = protein + codon_table.get(codon, "?")
print(protein)
`

const demoOutput = `MKRGV`

export function Slide15StopAndGo() {
  return (
    <>
      <SlideTitle>
        Stop and Go — <GradientText variant="yellow">break</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col justify-center gap-4 md:gap-6">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              <span className="font-mono">in</span> tests the stop set
            </CardHeading>
            <CardBody>
              The three stop codons live in a set:{' '}
              <span className="font-mono">{'{"TAA", "TAG", "TGA"}'}</span>. Then{' '}
              <span className="font-mono">codon in stop_codons</span> — the same membership test you
              used on dictionaries in Session 2.
            </CardBody>
          </SlideCard>

          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
              <span className="font-mono">break</span> halts the loop
            </CardHeading>
            <CardBody>
              <span className="font-mono">break</span> leaves the loop <strong>immediately</strong> —
              the remaining codons are never read, and the stray{' '}
              <span className="font-mono">*</span> never reaches the protein. That&apos;s{' '}
              <span className="font-mono">MKRGV</span>, not <span className="font-mono">MKRGV*</span>{' '}
              — exactly what a ribosome does when it lets go.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            The same translator — but it now knows where the protein ends:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="320px"
              showLineNumbers
              description="Live demo — break at a stop codon"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
