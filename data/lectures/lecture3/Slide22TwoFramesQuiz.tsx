import { StepQuizOpener, StepQuizQuestion } from '@/components/poll/StepQuiz'

const phixCode = `# 60 real bases of phiX174, the first genome ever sequenced
seq = "TATGGTACGCTGGACTTTGTGGGATACCCTCGCTTTCCTGCTCCTGTTGAGTTTATTGCT"
codon_table = {"TTT": "F", "TTC": "F", ...}   # the full genetic code
frame = 0`

export function Slide22TwoFramesQuizOpener() {
  return (
    <StepQuizOpener
      title="Two frames,"
      accent="two proteins"
      note={
        <>
          Everything from today, assembled: <strong>loop, range, slice, look up,
          accumulate</strong>. Build the translator step by step, then shift the frame.
        </>
      }
      code={phixCode}
    />
  )
}

export function Slide22TwoFramesQ1() {
  return (
    <StepQuizQuestion
      n={1}
      topic="Codon positions"
      lead={<>Warm-up: which numbers does <span className="font-mono">range(0, 12, 3)</span> give?</>}
      questionId="l3-t3a"
    />
  )
}

export function Slide22TwoFramesQ2() {
  return (
    <StepQuizQuestion
      n={2}
      topic="Carve out the codon"
      lead={<>Inside the loop: which slice gives the codon that starts at <span className="font-mono">i</span>?</>}
      questionId="l3-t3b"
    />
  )
}

export function Slide22TwoFramesQ3() {
  return (
    <StepQuizQuestion
      n={3}
      topic="Look it up"
      lead={<>Which line gives the amino acid for <span className="font-mono">codon</span>?</>}
      questionId="l3-t3c"
    />
  )
}

export function Slide22TwoFramesQ4() {
  return (
    <StepQuizQuestion
      n={4}
      topic="Build the protein"
      lead={<><span className="font-mono">protein</span> starts as <span className="font-mono">&quot;&quot;</span>. Which line adds each amino acid on?</>}
      questionId="l3-t3d"
    />
  )
}

export function Slide22TwoFramesQ5() {
  return (
    <StepQuizQuestion
      n={5}
      topic="Shift the frame"
      lead={<>Set <span className="font-mono">frame = 1</span> and run it again. Which protein falls out?</>}
      questionId="l3-t3e"
    />
  )
}
