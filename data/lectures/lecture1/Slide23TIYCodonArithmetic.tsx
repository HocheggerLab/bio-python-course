import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const tasks = [
  'Compute the number of complete codons',
  'Compute the number of leftover bases',
  'Print both with labels exactly as shown',
]

const initialCode = `length = 158

# Fill in the two calculations:
codons   = 0   # how many complete codons in 158 bases?
leftover = 0   # how many bases are left over?

print(f"Codons:   {codons}")
print(f"Leftover: {leftover}")
`

const expectedOutput = `Codons:   52
Leftover: 2`

const hints = [
  'Integer division // gives the codon count.',
  'Modulo % gives the leftover bases.',
  'Replace the 0s: codons = length // 3   and   leftover = length % 3.',
]

export function Slide23TIYCodonArithmetic() {
  return (
    <>
      <SlideTitle>
        Try it Yourself — <GradientText variant="yellow">Codon arithmetic</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <SlideCard color="yellow" layout="middle" padding="compact">
          <CardHeading size="sm" color="yellow" className="mb-3 md:mb-5">
            Your task
          </CardHeading>
          <CardList items={tasks} numbered color="yellow" />
          <p className="text-gray-300 text-xs md:text-sm xl:text-base mt-4 md:mt-6 italic">
            A 158 bp fragment — is it codon-aligned?
          </p>
        </SlideCard>

        <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
          <LazyPythonRunner
            initialCode={initialCode}
            expectedOutput={expectedOutput}
            hints={hints}
            height="280px"
            showLineNumbers
            description="Integer arithmetic — // and %"
            staticOutput={expectedOutput}
          />
        </div>

      </div>
    </>
  )
}
