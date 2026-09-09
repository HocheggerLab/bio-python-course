import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardBody } from '@/components/slides/SlideCard'
import { ExerciseSlide, type Step } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const tasks: Step[] = [
  { label: 'Run it', detail: 'Read the FIRST error message', accent: 'yellow' },
  { label: 'Fix one bug', detail: 'Then run again', accent: 'yellow' },
  { label: 'Repeat', detail: 'Until you get the clean report below', accent: 'yellow' },
]

const initialCode = `# This script should print a short gene report — but it has 3 bugs.
# Fix them one at a time, reading each error as you go.

gene_name = "TP53"
seq = "ATGGAGGAG"

length = len(seq

print(f"Gene: {gene_name}")
print("Length: {length} bases")
print(f"Sequence: {sequenc}")
`

const solution = `# All three bugs fixed.

gene_name = "TP53"
seq = "ATGGAGGAG"

length = len(seq)                      # 1. the closing bracket was missing

print(f"Gene: {gene_name}")
print(f"Length: {length} bases")       # 2. the f was missing, so it printed {length}
print(f"Sequence: {seq}")              # 3. 'sequenc' was a typo for 'seq'
`

const expectedOutput = `Gene: TP53
Length: 9 bases
Sequence: ATGGAGGAG`

const hints = [
  'SyntaxError on the print line below? The real problem is the line above — len(seq is missing its closing bracket.',
  'One line prints a literal {length} instead of 9 — it is missing the f that turns it into an f-string.',
  'NameError: \'sequenc\' is not defined — check the spelling against the variable you assigned (seq).',
]

export function Slide23TIYFixErrors() {
  return (
    <ExerciseSlide
      title={<>Try it Yourself — <GradientText variant="yellow">Fix the errors</GradientText></>}
      intro="Three bugs stand between this script and a clean gene report."
      steps={tasks}
      aside={
        <SlideCard color="blue" layout="start" padding="tight" className="border-l-4">
          <CardBody className="text-sm md:text-base xl:text-lg">
            Fix <span className="text-bio-blue font-semibold">one bug at a time</span> and re-run.
            The error message moves as you go — that&apos;s progress, not a new problem.
          </CardBody>
        </SlideCard>
      }
    >
      <LazyPythonRunner
        initialCode={initialCode}
        solution={solution}
        expectedOutput={expectedOutput}
        hints={hints}
        height="415px"
        description="Test — fix the three errors"
        staticOutput={expectedOutput}
      />
    </ExerciseSlide>
  )
}
