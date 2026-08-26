import { GradientText } from '@/components/slides/SlideTitle'
import { SplitSlide, StepList, type Step } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const skills: Step[] = [
  { label: 'Write and run real Python', detail: 'In the browser and in Colab notebooks' },
  { label: 'Work with numbers, text, and booleans' },
  { label: 'Store values in variables' },
  { label: 'Perform arithmetic and string operations' },
  { label: 'Display results with print() and f-strings' },
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
    <SplitSlide
      title={<>Session 1 — <GradientText>What You Will Be Able To Do</GradientText></>}
      lead="By the end of today you'll have written a working GC-content calculator — the first step of Claudia's pipeline."
      ratio="even"
      left={<StepList steps={skills} />}
      right={
        <LazyPythonRunner
          initialCode={initialCode}
          height="373px"
          showLineNumbers
          description="Step 1 of Claudia's pipeline"
          staticOutput={`Gene:       BRCA1_exon3\nLength:     16 bases\nGC content: 56.2%`}
        />
      }
      note="Try it now — edit the code and hit Run."
    />
  )
}
