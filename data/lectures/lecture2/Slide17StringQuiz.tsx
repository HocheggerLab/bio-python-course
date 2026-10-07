import { StepQuizOpener, StepQuizQuestion } from './StepQuiz'

const dnaCode = `# A sequence straight from a file — messy lower-case
dna = "atgcgtacggaattcaaatag"`

export function Slide17StringQuizOpener() {
  return (
    <StepQuizOpener
      title="Profile a sequence,"
      accent="one step at a time"
      note={
        <>
          One messy sequence in, a tidy summary out. Clean it first, then measure it,
          read its first codon, count its GC and find the EcoRI site.
        </>
      }
      code={dnaCode}
    />
  )
}

export function Slide17StringQ1() {
  return (
    <StepQuizQuestion
      n={1}
      topic="Clean it up"
      lead={<>Which line stores an upper-case copy of the sequence in <span className="font-mono">clean</span>?</>}
      questionId="l2-t2a"
    />
  )
}

export function Slide17StringQ2() {
  return (
    <StepQuizQuestion
      n={2}
      topic="Count the bases"
      lead={<>How many bases long is the sequence?</>}
      questionId="l2-t2b"
    />
  )
}

export function Slide17StringQ3() {
  return (
    <StepQuizQuestion
      n={3}
      topic="The first codon"
      lead={<>Which slice gives you the first codon, ATG?</>}
      questionId="l2-t2c"
    />
  )
}

export function Slide17StringQ4() {
  return (
    <StepQuizQuestion
      n={4}
      topic="GC count"
      lead={<>Which line counts all the G and C bases?</>}
      questionId="l2-t2d"
    />
  )
}

export function Slide17StringQ5() {
  return (
    <StepQuizQuestion
      n={5}
      topic="Find the EcoRI site"
      lead={<>Where does the EcoRI site start?</>}
      questionId="l2-t2e"
    />
  )
}
