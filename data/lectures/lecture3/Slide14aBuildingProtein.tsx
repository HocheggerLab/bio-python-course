import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `seq = "ATGAAACGCGGCGTTTAA"

# The genetic code — a dictionary, exactly as in Session 2
codon_table = {"ATG": "M", "AAA": "K", "CGC": "R",
               "GGC": "G", "GTT": "V", "TAA": "*"}

protein = ""                        # start empty — the accumulator
for i in range(0, len(seq) - 2, 3):
    codon = seq[i:i+3]              # carve out the codon
    amino = codon_table.get(codon, "?")   # look it up
    protein = protein + amino       # add it on
print(protein)
`

const demoOutput = `MKRGV*`

/* codon → amino acid, for the visual */
const steps = [
  { codon: 'ATG', aa: 'M' },
  { codon: 'AAA', aa: 'K' },
  { codon: 'CGC', aa: 'R' },
  { codon: 'GGC', aa: 'G' },
  { codon: 'GTT', aa: 'V' },
  { codon: 'TAA', aa: '*' },
]

export function Slide14aBuildingProtein() {
  return (
    <ConceptSlide
      title={<>Building the <GradientText>Protein</GradientText></>}
      points={
      <>
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            Three ideas, one loop
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            <span className="font-mono">range</span> gives the codon start ·{' '}
            <span className="font-mono">seq[i:i+3]</span> carves it out ·{' '}
            <span className="font-mono">.get()</span> looks it up. Everything from Sessions&nbsp;2
            and 3, finally in one place.
          </CardBody>
        </SlideCard>
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            The accumulator, again
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            Same pattern as the running total — but adding <strong>letters</strong> instead of
            numbers. Start empty, add one each time round.{' '}
            <span className="font-mono">*</span> is the stop codon: it&apos;s in the protein, and
            it shouldn&apos;t be. <span className="text-bio-green font-semibold">Next slide.</span>
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>DNA in, protein out — your first real translator:</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="247px"
        description="Live demo — translating DNA to protein"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
