import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
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
    <>
      <SlideTitle>
        Building the <GradientText>Protein</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col justify-center gap-3 md:gap-4">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              Three ideas, one loop
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              <span className="font-mono">range</span> gives the codon start ·{' '}
              <span className="font-mono">seq[i:i+3]</span> carves it out ·{' '}
              <span className="font-mono">.get()</span> looks it up. Everything from Sessions&nbsp;2
              and 3, finally in one place.
            </CardBody>
          </SlideCard>

          {/* codon → amino acid chain */}
          <div className="rounded-xl border border-code-border bg-code-bg p-3 md:p-4">
            <p className="text-[10px] md:text-xs text-gray-400 mb-2 font-semibold uppercase tracking-widest">
              each codon looked up, then added on
            </p>
            <div className="flex flex-wrap gap-1 md:gap-2 justify-center font-mono">
              {steps.map((s) => (
                <div key={s.codon} className="flex flex-col items-center">
                  <span className="text-[10px] md:text-sm text-bio-blue">{s.codon}</span>
                  <span className="text-gray-600 text-[10px] md:text-xs leading-none">↓</span>
                  <span
                    className={`text-sm md:text-lg font-bold ${
                      s.aa === '*' ? 'text-red-400' : 'text-bio-green'
                    }`}
                  >
                    {s.aa}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 text-[10px] md:text-xs mt-2">
              protein = <span className="font-mono text-bio-green">&quot;MKRGV&quot;</span>
              <span className="font-mono text-red-400">&quot;*&quot;</span>
            </p>
          </div>

          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              The accumulator, again
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              Same pattern as the running total — but adding <strong>letters</strong> instead of
              numbers. Start empty, add one each time round.{' '}
              <span className="font-mono">*</span> is the stop codon: it&apos;s in the protein, and
              it shouldn&apos;t be. <span className="text-bio-green font-semibold">Next slide.</span>
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            DNA in, protein out — your first real translator:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="380px"
              showLineNumbers
              description="Live demo — translating DNA to protein"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
