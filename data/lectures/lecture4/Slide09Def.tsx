import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
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
    <>
      <SlideTitle>
        Packaging It Up — <GradientText>def</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col justify-center gap-3 md:gap-4">
          <SlideCard color="neutral" layout="start" padding="compact">
            <CardBody className="text-xs md:text-sm xl:text-base">
              That chain did <strong>two separate things</strong> — flip the strand, then read the
              codons. Two things → <strong>two packages</strong>.
            </CardBody>
          </SlideCard>

          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              <span className="font-mono">def name(what_goes_in):</span>
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
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
            <CardBody className="text-xs md:text-sm xl:text-base">
              <span className="font-mono">print</span> shows you a value.{' '}
              <span className="font-mono">return</span> <em>gives</em> it to you, so you can put it in
              a variable and use it — which is why{' '}
              <span className="font-mono">translate(rc)</span> works.
            </CardBody>
          </SlideCard>

          <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
            <CardBody className="text-[11px] md:text-sm">
              Look closely: <strong>not one line inside the loops changed.</strong> You moved the code
              you already wrote and gave it a name. That&apos;s all a function is.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Same sequence, same <span className="font-mono not-italic">PQSPAYH</span> — now in two
            named pieces:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="460px"
              showLineNumbers
              description="Live demo — the same code, packaged into functions"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
