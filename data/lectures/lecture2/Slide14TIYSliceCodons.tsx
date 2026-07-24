import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const tasks = [
  'Slice out the first codon (the first 3 bases)',
  'Slice out the last codon (the last 3 bases)',
  'Reverse the whole sequence',
]

const initialCode = `seq = "ATGGCTTAA"   # three codons: ATG - GCT - TAA

# Fill in each slice:
first_codon  = ""   # bases 0, 1, 2
last_codon   = ""   # the last three bases
reversed_seq = ""   # the whole sequence, backwards

print(f"First codon: {first_codon}")
print(f"Last codon:  {last_codon}")
print(f"Reversed:    {reversed_seq}")
`

const expectedOutput = `First codon: ATG
Last codon:  TAA
Reversed:    AATTCGGTA`

const hints = [
  'First codon: seq[0:3] (the end index is not included).',
  'Last codon: seq[-3:] — start three from the end, go to the end.',
  'Reverse with the step trick: seq[::-1].',
]

export function Slide14TIYSliceCodons() {
  return (
    <>
      <SlideTitle>
        Try it Yourself — <GradientText variant="yellow">Slice the codons</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <SlideCard color="yellow" layout="middle" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-3 md:mb-5">
            Your task
          </CardHeading>
          <CardList items={tasks} numbered color="yellow" />
          <p className="text-gray-300 text-xs md:text-sm xl:text-base mt-4 md:mt-6 italic">
            All three use the same square-bracket slicing — no new tools needed.
          </p>
        </SlideCard>

        <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
          <LazyPythonRunner
            initialCode={initialCode}
            expectedOutput={expectedOutput}
            hints={hints}
            height="340px"
            showLineNumbers
            description="Test — slice codons from a sequence"
            staticOutput={expectedOutput}
          />
        </div>

      </div>
    </>
  )
}
