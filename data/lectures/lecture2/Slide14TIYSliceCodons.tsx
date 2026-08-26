import { GradientText } from '@/components/slides/SlideTitle'
import { ExerciseSlide, type Step } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const tasks: Step[] = [
  { label: 'Slice out the first codon (the first 3 bases)', accent: 'yellow' },
  { label: 'Slice out the last codon (the last 3 bases)', accent: 'yellow' },
  { label: 'Reverse the whole sequence', accent: 'yellow' },
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
    <ExerciseSlide
      title={<>Try it Yourself — <GradientText variant="yellow">Slice the codons</GradientText></>}
      steps={tasks}
    >
      <LazyPythonRunner
        initialCode={initialCode}
        expectedOutput={expectedOutput}
        hints={hints}
        height="331px"
        showLineNumbers
        description="Test — slice codons from a sequence"
        staticOutput={expectedOutput}
      />
    </ExerciseSlide>
  )
}
