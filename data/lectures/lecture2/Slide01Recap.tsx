import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'

const covered = [
  'Variables & assignment',
  'print() and f-strings',
  'Built-in functions — len(), type(), round()',
  'Four data types — str, int, float, bool',
  'Arithmetic — +, -, *, /',
  '.count() and a working GC calculator',
]

const gcCalc = `name     = "BRCA1_exon3"
sequence = "ATGCGTACGTAGGCTA"

length   = len(sequence)
gc_count = sequence.count("G") + sequence.count("C")
gc_pct   = round(gc_count / length * 100, 1)

print(f"Gene:       {name}")
print(f"Length:     {length} bases")
print(f"GC content: {gc_pct}%")`

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

        {/* RIGHT — the program they built */}
        <div className="flex flex-col gap-2 md:gap-3 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            …which is everything in the GC calculator you wrote:
          </p>
          <pre className="bg-bio-dark/60 rounded-xl p-3 md:p-5 font-mono text-[11px] md:text-sm xl:text-base text-gray-200 overflow-auto flex-1 min-h-0">
{gcCalc}
          </pre>
        </div>

      </div>
    </>
  )
}
