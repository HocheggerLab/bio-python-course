import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `codon_table = {"CCA": "P", "CAA": "Q", "AGT": "S",
               "GCG": "A", "TAC": "Y", "CAT": "H"}

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

# Now the plan reads back, one line each
rc = reverse_complement("ATGGTACGCTGGACTTTGTGG")
print(rc)
print(translate(rc))
`

const demoOutput = `CCACAAAGTCCAGCGTACCAT
PQSPAYH`

export function Slide09Def() {
  return (
    <ConceptSlide
      title={<>Packaging It Up — <GradientText>def</GradientText></>}
      lead={
        <>
          That chain did <strong>two separate things</strong> — flip the strand, then read the
          codons. Two things → <strong>two packages</strong>.
        </>
      }
      points={
      <>
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            <span className="font-mono">def name(what_goes_in):</span>
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            <span className="font-mono">def</span>, a name you choose, and a{' '}
            <span className="text-bio-blue font-semibold">parameter</span> in brackets — a
            placeholder for whatever you hand it. Colon, then the body{' '}
            <strong>indented underneath</strong>. Exactly like a loop.
          </CardBody>
        </SlideCard>
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            <span className="font-mono">return</span> hands the answer back
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            <span className="font-mono">print</span> shows you a value.{' '}
            <span className="font-mono">return</span> <em>gives</em> it to you, so you can put it in
            a variable and use it — which is why{' '}
            <span className="font-mono">translate(rc)</span> works.
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>Same sequence, same <span className="font-mono not-italic">PQSPAYH</span> — now in two
        named pieces:</>}
      closing={
        <SlideCard color="neutral" layout="start" padding="compact" className="border-l-4">
          <CardBody className="text-sm md:text-base xl:text-lg">
            Look closely: <strong>not one line inside the loops changed.</strong> You moved the code
        you already wrote and gave it a name. That&apos;s all a function is.
          </CardBody>
        </SlideCard>
      }
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="247px"
        description="Live demo — the same code, packaged into functions"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
