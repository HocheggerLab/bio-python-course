'use client'

import { GradientText } from '@/components/slides/SlideTitle'
import { ExerciseSlide, type Step } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'
import type { StepCheck } from '@/components/python/PythonCodeRunner'


const tasks: Step[] = [
  { label: 'Write one function: def gc_content(seq):', accent: 'yellow' },
  { label: 'Give it a docstring — what goes in, what comes out', accent: 'yellow' },
  { label: 'return the percentage, rounded to 1 decimal place (don’t print it)', accent: 'yellow' },
  { label: 'Replace the three copies with three calls', accent: 'yellow' },
]


const initialCode = `# The GC calculation from Session 1 — copy-pasted THREE times.
# Same four lines, over and over. This is "spaghetti code".
# Refactor it: write gc_content(seq) ONCE, then call it three times.

seq1 = "ATGCGTACGTAGGCTA"
gc1 = (seq1.count("G") + seq1.count("C")) / len(seq1) * 100
gc1 = round(gc1, 1)
print(f"seq1 GC: {gc1}%")

seq2 = "GGGCGCGCGCAATATA"
gc2 = (seq2.count("G") + seq2.count("C")) / len(seq2) * 100
gc2 = round(gc2, 1)
print(f"seq2 GC: {gc2}%")

seq3 = "ATATCGATATTTAAAA"
gc3 = (seq3.count("G") + seq3.count("C")) / len(seq3) * 100
gc3 = round(gc3, 1)
print(f"seq3 GC: {gc3}%")
`

const expectedOutput = `seq1 GC: 50.0%
seq2 GC: 62.5%
seq3 GC: 12.5%`

const solution = `def gc_content(seq):
    """Return the GC content of a DNA sequence as a percentage."""
    gc = (seq.count("G") + seq.count("C")) / len(seq) * 100
    return round(gc, 1)

print(f"seq1 GC: {gc_content('ATGCGTACGTAGGCTA')}%")
print(f"seq2 GC: {gc_content('GGGCGCGCGCAATATA')}%")
print(f"seq3 GC: {gc_content('ATATCGATATTTAAAA')}%")
`

const checks: StepCheck[] = [
  {
    label: 'gc_content(seq) exists',
    test: 'callable(gc_content)',
  },
  {
    label: 'it has a docstring',
    test: 'bool((gc_content.__doc__ or "").strip())',
  },
  {
    label: 'it returns the rounded percentage',
    test: 'gc_content("ATGCGTACGTAGGCTA") == 50.0 and gc_content("GGGCGCGCGCAATATA") == 62.5',
  },
]

const hints = [
  'Start the package: “def gc_content(seq):”, then indent everything the function does underneath it.',
  'Right under the def line, add a docstring in triple quotes: """Return the GC content of a DNA sequence as a percentage.""".',
  'The body is the calculation with “seq” in place of seq1/seq2/seq3: gc = (seq.count("G") + seq.count("C")) / len(seq) * 100.',
  'Hand the number back instead of printing it: “return round(gc, 1)”.',
  'Now the calls are one line each: print(f"seq1 GC: {gc_content(\'ATGCGTACGTAGGCTA\')}%") — repeat for the other two. Same output, far fewer lines.',
]

/**
 * The package-the-spaghetti exercise as revision, for after the lecture. In
 * the room the same steps are asked as polls (Slide17PackageGCQuiz).
 */
export function Slide17RevisionPackageGC() {
  return (
    <ExerciseSlide
      title={<>Revision — <GradientText variant="yellow">Package the Spaghetti</GradientText></>}
      intro={
        <>
          <span className="text-bio-yellow font-semibold">Try this after the lecture.</span>{' '}
          The GC calculation is here <strong>three times over</strong>. Write a proper{' '}
          <span className="font-mono">gc_content(seq)</span> function <strong>once</strong>, with a
          docstring, and call it. Same three answers, far fewer lines.
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
        description="Revision — package the repeated GC calculation into one function"
        staticOutput={expectedOutput}
      />
    </ExerciseSlide>
  )
}
