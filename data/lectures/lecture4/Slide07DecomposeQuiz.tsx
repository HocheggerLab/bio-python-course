import { StepQuizOpener, StepQuizQuestion } from '@/components/poll/StepQuiz'

const seqsCode = `# 10,000 sequences in a list
seqs = ["ATGCGC", "TTGACA", "ATGAAT", "GCGCGC", ...]`

export function Slide07DecomposeQuizOpener() {
  return (
    <StepQuizOpener
      title="Break it down,"
      accent="one step at a time"
      note={
        <>
          <strong>10,000 sequences</strong> in a list. Report the <strong>mean GC content</strong> of
          the ones that start with ATG. No code yet: first the plan, then the Python behind each
          step. There is no single right breakdown — but some steps are too big to be steps.
        </>
      }
      code={seqsCode}
    />
  )
}

export function Slide07DecomposeQ1() {
  return (
    <StepQuizQuestion
      n={1}
      label="Question"
      topic="One step"
      lead={<>Which of these is <strong>one</strong> step — small enough to look up how to do?</>}
      questionId="l4-t1a"
    />
  )
}

export function Slide07DecomposeQ2() {
  return (
    <StepQuizQuestion
      n={2}
      label="Question"
      topic="The order"
      lead={<>Which order of steps works?</>}
      questionId="l4-t1b"
    />
  )
}

export function Slide07DecomposeQ3() {
  return (
    <StepQuizQuestion
      n={3}
      label="Question"
      topic="Starts with ATG"
      lead={<>Which test keeps only the sequences that <strong>start</strong> with ATG?</>}
      questionId="l4-t1c"
    />
  )
}

export function Slide07DecomposeQ4() {
  return (
    <StepQuizQuestion
      n={4}
      label="Question"
      topic="GC of each one"
      lead={<>Work out the GC content of <strong>each</strong> one — which Python shape is that?</>}
      questionId="l4-t1d"
    />
  )
}

export function Slide07DecomposeQ5() {
  return (
    <StepQuizQuestion
      n={5}
      label="Question"
      topic="Report the mean"
      lead={<>Which line gives the mean of the ATG starters?</>}
      questionId="l4-t1e"
    />
  )
}
