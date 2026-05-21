import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const tasks = [
  'Set gene_name to "TP53"',
  'Set sequence to "ATGGAGGAG"',
  'Set organism to "Homo sapiens"',
  'Print one line using all three',
]

const initialCode = `# Fill in the assignments below
gene_name = ""
sequence  = ""
organism  = ""

# This print line is already written — make it work:
print(f"{gene_name} ({organism}): {sequence}")
`

const expectedOutput = `TP53 (Homo sapiens): ATGGAGGAG`

const hints = [
  'Put each value in quotes — they are strings.',
  'Match the spelling exactly: "TP53", "ATGGAGGAG", "Homo sapiens".',
  'No code change needed in the print line — just fill in the three variables above.',
]

export function Slide17TIYAssign() {
  return (
    <>
      <SlideTitle>
        Try it Yourself — <GradientText variant="yellow">Assign your own</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <SlideCard color="yellow" layout="middle" padding="compact">
          <CardHeading size="sm" color="yellow" className="mb-3 md:mb-5">
            Your task
          </CardHeading>
          <CardList items={tasks} numbered color="yellow" />
          <p className="text-gray-300 text-xs md:text-sm xl:text-base mt-4 md:mt-6 italic">
            Hit <span className="text-bio-green font-semibold not-italic">Run ▶</span> and aim
            for a <span className="text-bio-green font-semibold not-italic">✓ Correct!</span>.
          </p>
        </SlideCard>

        <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
          <LazyPythonRunner
            initialCode={initialCode}
            expectedOutput={expectedOutput}
            hints={hints}
            height="260px"
            showLineNumbers
            description="Variables — assignment"
            staticOutput={expectedOutput}
          />
        </div>

      </div>
    </>
  )
}
