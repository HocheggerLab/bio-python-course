import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const skills = [
  'Write and run real Python code (in the browser and in google collab notebooks!)',
  'Work with numbers, text, and booleans',
  'Store values in variables',
  'Perform arithmetic and string operations',
  'Display results with print() and f-strings',
]

const initialCode = `# Step 1 of Claudia's pipeline
sequence = "ATGCGTACGTAGGCTA"
name = "BRCA1_exon3"

length = len(sequence)
gc_frac = (sequence.count("G") + sequence.count("C")) / length
gc_pct  = round(gc_frac * 100, 1)

print(f"Gene:       {name}")
print(f"Length:     {length} bases")
print(f"GC content: {gc_pct}%")
`

export function Slide10TodaysGoal() {
  return (
    <>
      <SlideTitle>
        Session 1 — <GradientText>What You Will Be Able To Do</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        {/* LEFT: skills checklist */}
        <SlideCard color="blue" layout="middle" padding="compact">
          <CardHeading size="sm" color="blue" className="mb-3 md:mb-5 xl:mb-6">
            By the end of today, you&apos;ll be able to…
          </CardHeading>
          <CardList items={skills} numbered color="blue" />
        </SlideCard>

        {/* RIGHT: interactive Python — Pyodide loads only when this slide is reached */}
        <div className="flex flex-col gap-2 md:gap-3 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Try it now — edit the code and hit{' '}
            <span className="text-bio-green font-semibold not-italic">Run ▶</span>:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={initialCode}
              height="260px"
              showLineNumbers
              description="Step 1 of Claudia's pipeline"
              staticOutput={`Gene:       BRCA1_exon3\nLength:     16 bases\nGC content: 56.2%`}
            />
          </div>
        </div>

      </div>
    </>
  )
}
