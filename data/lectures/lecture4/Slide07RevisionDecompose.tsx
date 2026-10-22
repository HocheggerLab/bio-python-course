'use client'

import { GradientText } from '@/components/slides/SlideTitle'
import { ExerciseSlide, type Step } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'
import type { StepCheck } from '@/components/python/PythonCodeRunner'


const tasks: Step[] = [
  { label: 'Keep only the sequences that start with ATG: loop, test seq[:3], .append() to atg_seqs', accent: 'yellow' },
  { label: 'Work out the GC content (%) of each one and .append() it to gc_values', accent: 'yellow' },
  { label: 'Report the mean: sum(gc_values) / len(gc_values)', accent: 'yellow' },
]


const initialCode = `# Six sequences standing in for the 10,000.
seqs = ["ATGCGC", "TTGACA", "ATGAAT", "GCGCGC", "ATGGCC", "CATATG"]

# 1. Keep only the sequences that START with ATG
atg_seqs = []
# your for loop here

# 2. Work out the GC content (%) of each one
gc_values = []
# your for loop here

# 3. Report the mean
mean_gc = 0
# your line here

print(f"Mean GC of {len(atg_seqs)} ATG sequences: {round(mean_gc, 1)}%")
`

const expectedOutput = `Mean GC of 3 ATG sequences: 50.0%`

const solution = `# Six sequences standing in for the 10,000.
seqs = ["ATGCGC", "TTGACA", "ATGAAT", "GCGCGC", "ATGGCC", "CATATG"]

# 1. Keep only the sequences that START with ATG
atg_seqs = []
for seq in seqs:
    if seq[:3] == "ATG":
        atg_seqs.append(seq)

# 2. Work out the GC content (%) of each one
gc_values = []
for seq in atg_seqs:
    gc = (seq.count("G") + seq.count("C")) / len(seq) * 100
    gc_values.append(gc)

# 3. Report the mean
mean_gc = sum(gc_values) / len(gc_values)

print(f"Mean GC of {len(atg_seqs)} ATG sequences: {round(mean_gc, 1)}%")
`

const checks: StepCheck[] = [
  {
    label: 'atg_seqs holds only the sequences that start with ATG',
    test: 'atg_seqs == [s for s in seqs if s[:3] == "ATG"]',
  },
  {
    label: 'gc_values holds the GC % of each of them',
    test: 'gc_values == [(s.count("G") + s.count("C")) / len(s) * 100 for s in seqs if s[:3] == "ATG"]',
  },
  {
    label: 'mean_gc is their mean',
    test: 'round(mean_gc, 6) == 50.0',
  },
]

const hints = [
  'Step 1 — loop over every sequence: “for seq in seqs:”, and inside it test the first three bases: “if seq[:3] == "ATG":”.',
  'Step 1 — careful: “"ATG" in seq” would let CATATG in, because it has ATG at the end.',
  'Step 2 — a second loop, over atg_seqs this time: “gc = (seq.count("G") + seq.count("C")) / len(seq) * 100”, then “gc_values.append(gc)”.',
  'Step 3 — divide the total by how many values went into it: “mean_gc = sum(gc_values) / len(gc_values)”, not by len(seqs).',
  'Three steps, three blocks of code: that is the plan from the quiz, turned into Python. Expected: 3 sequences, 50.0%.',
]

/**
 * The break-it-down exercise as revision, for after the lecture. In the room
 * the plan is built as polls (Slide07DecomposeQuiz); here it becomes code.
 */
export function Slide07RevisionDecompose() {
  return (
    <ExerciseSlide
      title={<>Revision — <GradientText variant="yellow">From Plan to Code</GradientText></>}
      intro={
        <>
          <span className="text-bio-yellow font-semibold">Try this after the lecture.</span>{' '}
          The plan from the quiz has three steps. Each one becomes a few lines of Python —{' '}
          <strong>filter</strong>, <strong>measure</strong>, <strong>summarise</strong>.
        </>
      }
      steps={tasks}
    >
      <LazyPythonRunner
        initialCode={initialCode}
        expectedOutput={expectedOutput}
        hints={hints}
        checks={checks}
        solution={solution}
        height="562px"
        description="Revision — mean GC of the sequences that start with ATG"
        staticOutput={expectedOutput}
      />
    </ExerciseSlide>
  )
}
