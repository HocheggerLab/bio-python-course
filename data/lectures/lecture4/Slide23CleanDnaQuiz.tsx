import { StepQuizOpener, StepQuizQuestion } from '@/components/poll/StepQuiz'

const cleanCode = `def clean_dna(seq):
    """Tidy a DNA string, or raise ValueError if it isn't DNA."""
    ...

clean_dna("  atgcgt  ")   # -> "ATGCGT"
clean_dna("ATGXGT")       # -> ValueError`

export function Slide23CleanDnaQuizOpener() {
  return (
    <StepQuizOpener
      title="A defensive function,"
      accent="one step at a time"
      note={
        <>
          Real sequences arrive messy — lowercase, stray spaces, the odd bad character. One
          function that <strong>tidies</strong> the input and <strong>refuses</strong> anything
          that isn&apos;t DNA, loudly.
        </>
      }
      code={cleanCode}
    />
  )
}

export function Slide23CleanDnaQ1() {
  return (
    <StepQuizQuestion
      n={1}
      topic="Tidy it"
      lead={<>Step 1 — which line tidies the input?</>}
      questionId="l4-t3a"
    />
  )
}

export function Slide23CleanDnaQ2() {
  return (
    <StepQuizQuestion
      n={2}
      topic="Spot bad DNA"
      lead={<>Step 2 — which condition is True when the sequence is <strong>not</strong> clean DNA?</>}
      questionId="l4-t3b"
    />
  )
}

export function Slide23CleanDnaQ3() {
  return (
    <StepQuizQuestion
      n={3}
      topic="Fail loudly"
      lead={<>Inside that if — which line fails loudly?</>}
      questionId="l4-t3c"
    />
  )
}

export function Slide23CleanDnaQ4() {
  return (
    <StepQuizQuestion
      n={4}
      topic="Messy and bad"
      lead={<>What does <span className="font-mono">clean_dna(&quot;atgcn&quot;)</span> do?</>}
      questionId="l4-t3d"
    />
  )
}

export function Slide23CleanDnaQ5() {
  return (
    <StepQuizQuestion
      n={5}
      topic="Catch it"
      lead={<>Calling it safely on a list — what does this print?</>}
      questionId="l4-t3e"
    />
  )
}
