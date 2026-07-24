import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'

const covered = [
  'Lists — hold many sequences, index & slice',
  'Strings are sequences — slice out codons',
  'Dictionaries — the codon table, key → value',
  'Safe lookup — .get(codon, "?")',
]

const byHand = `seq   = "ATGCGTTAA"
table = {"ATG": "Met", "CGT": "Arg", "TAA": "Stop"}

codon1 = seq[0:3]            # "ATG"
codon2 = seq[3:6]            # "CGT"
codon3 = seq[6:9]            # "TAA"

aa1 = table.get(codon1, "?")   # "Met"
aa2 = table.get(codon2, "?")   # "Arg"
aa3 = table.get(codon3, "?")   # "Stop"

print(f"{aa1}-{aa2}-{aa3}")    # Met-Arg-Stop`

export function Slide01Recap() {
  return (
    <>
      <SlideTitle>
        Last Session — <GradientText variant="green">A Quick Recap</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        {/* LEFT — what they already know */}
        <SlideCard color="green" layout="middle" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-3 md:mb-5">
            You can already…
          </CardHeading>
          <CardList items={covered} bullet="✓" color="green" />
        </SlideCard>

        {/* RIGHT — the by-hand translator they built */}
        <div className="flex flex-col gap-2 md:gap-3 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            …so you translated three codons <strong>by hand</strong>:
          </p>
          <pre className="bg-bio-dark/60 rounded-xl p-3 md:p-5 font-mono text-[11px] md:text-sm xl:text-base text-gray-200 overflow-auto flex-1 min-h-0">
{byHand}
          </pre>
        </div>

      </div>
    </>
  )
}
