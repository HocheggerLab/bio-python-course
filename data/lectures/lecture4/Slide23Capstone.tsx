import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `codon_table = {
    "TTT": "F", "TTC": "F", "TTA": "L", "TTG": "L",
    "CTT": "L", "CTC": "L", "CTA": "L", "CTG": "L",
    "ATT": "I", "ATC": "I", "ATA": "I", "ATG": "M",
    "GTT": "V", "GTC": "V", "GTA": "V", "GTG": "V",
    "TCT": "S", "TCC": "S", "TCA": "S", "TCG": "S",
    "CCT": "P", "CCC": "P", "CCA": "P", "CCG": "P",
    "ACT": "T", "ACC": "T", "ACA": "T", "ACG": "T",
    "GCT": "A", "GCC": "A", "GCA": "A", "GCG": "A",
    "TAT": "Y", "TAC": "Y", "TAA": "*", "TAG": "*",
    "CAT": "H", "CAC": "H", "CAA": "Q", "CAG": "Q",
    "AAT": "N", "AAC": "N", "AAA": "K", "AAG": "K",
    "GAT": "D", "GAC": "D", "GAA": "E", "GAG": "E",
    "TGT": "C", "TGC": "C", "TGA": "*", "TGG": "W",
    "CGT": "R", "CGC": "R", "CGA": "R", "CGG": "R",
    "AGT": "S", "AGC": "S", "AGA": "R", "AGG": "R",
    "GGT": "G", "GGC": "G", "GGA": "G", "GGG": "G",
}
stop_codons = {"TAA", "TAG", "TGA"}


def clean_dna(seq):
    """Tidy a sequence and refuse anything that isn't DNA."""
    seq = seq.upper().strip()
    if not all(base in "ATGC" for base in seq):
        raise ValueError(f"not DNA: {seq}")
    return seq


def translate(seq):
    """Read codons from the start, stopping at the first stop codon."""
    protein = ""
    for i in range(0, len(seq) - 2, 3):
        codon = seq[i:i + 3]
        if codon in stop_codons:
            break
        protein = protein + codon_table[codon]   # trusted — no more .get("?")
    return protein


# Claudia's whole folder — and one sequence is broken
sequences = ["ATGGTACGCTGG", "  atgtttgggtaa  ", "ATGNNNGGGTAA"]

for seq in sequences:
    try:
        clean = clean_dna(seq)
        print(clean, "->", translate(clean))
    except ValueError as e:
        print("skipped —", e)
`

const demoOutput = `ATGGTACGCTGG -> MVRW
ATGTTTGGGTAA -> MFG
skipped — not DNA: ATGNNNGGGTAA`

export function Slide23Capstone() {
  return (
    <>
      <SlideTitle>
        Claudia&apos;s Whole Job — <GradientText variant="green">One Program</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        {/* LEFT — a happy Claudia + what's inside */}
        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <figure className="rounded-xl overflow-hidden bg-white shadow-lg ring-1 ring-white/10 w-full max-w-[22rem] md:max-w-none mx-auto">
            <img
              src="/claudia_capstone.png"
              alt="Claudia smiling as her finished program translates a whole folder of sequences at once, cleanly skipping the broken one"
              className="w-full h-auto object-contain"
            />
          </figure>

          <SlideCard color="green" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2">
              Every session, working together
            </CardHeading>
            <CardBody className="text-[11px] md:text-sm xl:text-base">
              A <strong>dictionary</strong> (S2) maps codons · two <strong>functions</strong> (S4)
              name the work · a <strong>loop</strong> with <span className="font-mono">break</span>{' '}
              (S3) reads each gene · and <span className="font-mono">raise</span> +{' '}
              <span className="font-mono">try/except</span> (S4) let one bad sequence be{' '}
              <em>skipped</em>, not crash the batch.
            </CardBody>
          </SlideCard>

          <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
            <CardBody className="text-[11px] md:text-sm">
              The payoff: because <span className="font-mono">clean_dna</span> refuses bad data at the
              door, <span className="font-mono">translate</span> can <strong>trust</strong> every
              codon — <span className="font-mono">codon_table[codon]</span>, no more{' '}
              <span className="font-mono">.get(codon, &quot;?&quot;)</span> quietly lying.
            </CardBody>
          </SlideCard>
        </div>

        {/* RIGHT — the whole program, live */}
        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            The complete ORF translator — clean, translate, and run the whole folder in one go:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="620px"
              showLineNumbers
              description="Live demo — Claudia's complete, defensive ORF translator over many sequences"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
