import { StepQuizOpener, StepQuizQuestion } from '@/components/poll/StepQuiz'

const spaghettiCode = `seq1 = "ATGCGTACGTAGGCTA"
gc1 = (seq1.count("G") + seq1.count("C")) / len(seq1) * 100
gc1 = round(gc1, 1)
print(f"seq1 GC: {gc1}%")
# …the same four lines again for seq2, and again for seq3`

export function Slide17PackageGCQuizOpener() {
  return (
    <StepQuizOpener
      title="Package the spaghetti,"
      accent="one step at a time"
      note={
        <>
          The Session 1 GC calculation, copy-pasted <strong>three times</strong>. Write it once as{' '}
          <span className="font-mono">gc_content(seq)</span> — with a docstring — and call it.
        </>
      }
      code={spaghettiCode}
    />
  )
}

export function Slide17PackageGCQ1() {
  return (
    <StepQuizQuestion
      n={1}
      topic="Start the function"
      lead={<>Which line starts the function?</>}
      questionId="l4-t2a"
    />
  )
}

export function Slide17PackageGCQ2() {
  return (
    <StepQuizQuestion
      n={2}
      topic="The body"
      lead={<>Which line belongs <strong>inside</strong> the function?</>}
      questionId="l4-t2b"
    />
  )
}

export function Slide17PackageGCQ3() {
  return (
    <StepQuizQuestion
      n={3}
      topic="Hand it back"
      lead={<>Which last line hands the answer back?</>}
      questionId="l4-t2c"
    />
  )
}

export function Slide17PackageGCQ4() {
  return (
    <StepQuizQuestion
      n={4}
      topic="The docstring"
      lead={<>Where does the docstring go?</>}
      questionId="l4-t2d"
    />
  )
}

export function Slide17PackageGCQ5() {
  return (
    <StepQuizQuestion
      n={5}
      topic="print or return?"
      lead={<>What does this print?</>}
      questionId="l4-t2e"
    />
  )
}
