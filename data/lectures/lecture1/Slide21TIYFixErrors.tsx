import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const tasks = [
  'Run it — read the FIRST error message',
  'Fix one bug, then run again',
  'Repeat until you get the clean report below',
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

const expectedOutput = `Gene: TP53
Length: 9 bases
Sequence: ATGGAGGAG`

const hints = [
  'SyntaxError on the print line below? The real problem is the line above — len(seq is missing its closing bracket.',
  'One line prints a literal {length} instead of 9 — it is missing the f that turns it into an f-string.',
  'NameError: \'sequenc\' is not defined — check the spelling against the variable you assigned (seq).',
]

export function Slide21TIYFixErrors() {
  return (
    <>
      <SlideTitle>
        Try it Yourself — <GradientText variant="yellow">Fix the errors</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-3 md:mb-4">
              Three bugs, one clean report
            </CardHeading>
            <CardList items={tasks} numbered color="yellow" />
          </SlideCard>

          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              The golden rule
            </CardHeading>
            <p className="text-gray-300 text-xs md:text-sm xl:text-base leading-snug">
              Fix <span className="text-bio-blue font-semibold">one bug at a time</span> and
              re-run. The error message moves as you go — that&apos;s progress, not a new problem.
            </p>
          </SlideCard>
        </div>

        <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
          <LazyPythonRunner
            initialCode={initialCode}
            expectedOutput={expectedOutput}
            hints={hints}
            height="360px"
            showLineNumbers
            description="Test — fix the three errors"
            staticOutput={expectedOutput}
          />
        </div>

      </div>
    </>
  )
}
