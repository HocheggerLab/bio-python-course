import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'

const covered = [
  'for loops — do the same thing to every item',
  'range(start, stop, step) — loop over positions',
  'if / elif / else — let the program decide',
  'break — stop the moment you’re done',
]

const translator = `seq = "ATGAAACGCGGCGTTTAA"
codon_table = {"ATG": "M", "AAA": "K", "CGC": "R",
               "GGC": "G", "GTT": "V", "TAA": "*"}
stop_codons = {"TAA", "TAG", "TGA"}

protein = ""
for i in range(0, len(seq) - 2, 3):
    codon = seq[i:i+3]
    if codon in stop_codons:
        break
    protein = protein + codon_table.get(codon, "?")

print(protein)        # MKRGV`

export function Slide01Recap() {
  return (
    <>
      <SlideTitle>
        Last Session — <GradientText variant="green">A Quick Recap</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 items-start">

        {/* LEFT — what they already know */}
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-3 md:mb-5">
            You can already…
          </CardHeading>
          <CardList items={covered} bullet="✓" color="green" />
        </SlideCard>

        {/* RIGHT — the translator they built */}
        <div className="flex flex-col gap-2 md:gap-3 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            …so you built a translator that reads a whole gene{' '}
            <strong>on its own</strong>:
          </p>
          <pre className="bg-bio-dark/60 rounded-xl p-3 md:p-5 font-mono text-[11px] md:text-sm xl:text-base text-gray-200 overflow-auto">
{translator}
          </pre>
        </div>

      </div>
    </>
  )
}
