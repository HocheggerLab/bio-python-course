import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
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

export function Slide19StopAndGo() {
  return (
    <ConceptSlide
      title={<>Stop and Go — <GradientText variant="yellow">break</GradientText></>}
      points={
      <>
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            <span className="font-mono">in</span> tests the stop set
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
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
          <CardBody className="text-sm md:text-base xl:text-lg">
            <span className="font-mono">break</span> leaves the loop <strong>immediately</strong> —
            the remaining codons are never read, and the stray{' '}
            <span className="font-mono">*</span> never reaches the protein. That&apos;s{' '}
            <span className="font-mono">MKRGV</span>, not <span className="font-mono">MKRGV*</span>{' '}
            — exactly what a ribosome does when it lets go.
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>The same translator — but it now knows where the protein ends:</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="247px"
        description="Live demo — break at a stop codon"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
