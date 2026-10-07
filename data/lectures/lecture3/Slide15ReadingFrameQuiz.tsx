import { StepQuizOpener, StepQuizQuestion } from '@/components/poll/StepQuiz'

const sequencesCode = `sequences = {
    "SARS-CoV-2":  "ATTAAAGGTTTATACCTTCCCAGGTAACAA",
    "HIV-1":       "GGTCTCTCTGGTTAGACCAGATCT",
    "hepatitis B": "AATTCCACAACCTTCCACCA",
    "measles":     "ACCAAACAAAGTTGGGTA",
    "phage λ":     "GGGCGGCGACCTCGCG",
    "phiX174":     "GAGTTTTATCGCTTCCATGAC",
}`

export function Slide15ReadingFrameQuizOpener() {
  return (
    <StepQuizOpener
      title="Ready to translate?"
      accent="One step at a time"
      note={
        <>
          To translate a sequence it must be a <strong>whole number of codons</strong>: its
          length divides exactly by 3. Loop through the dictionary, test each length, and collect
          the names of the viruses that pass.
        </>
      }
      code={sequencesCode}
    />
  )
}

export function Slide15ReadingFrameQ1() {
  return (
    <StepQuizQuestion
      n={1}
      topic="The remainder"
      lead={
        <>
          Warm-up: <span className="font-mono">%</span> gives the <strong>remainder</strong> after
          dividing. What is <span className="font-mono">20 % 3</span>?
        </>
      }
      questionId="l3-t2a"
    />
  )
}

export function Slide15ReadingFrameQ2() {
  return (
    <StepQuizQuestion
      n={2}
      topic="Loop through the dictionary"
      lead={<>Which loop gives you each virus&apos;s name <strong>and</strong> its sequence?</>}
      questionId="l3-t2b"
    />
  )
}

export function Slide15ReadingFrameQ3() {
  return (
    <StepQuizQuestion
      n={3}
      topic="Test the length"
      lead={<>Which test is <span className="font-mono">True</span> only for a whole number of codons?</>}
      questionId="l3-t2c"
    />
  )
}

export function Slide15ReadingFrameQ4() {
  return (
    <StepQuizQuestion
      n={4}
      topic="Collect the names"
      lead={<>Inside the <span className="font-mono">if</span>: which line keeps the name of a virus that passes?</>}
      questionId="l3-t2d"
    />
  )
}

export function Slide15ReadingFrameQ5() {
  return (
    <StepQuizQuestion
      n={5}
      topic="How many are ready?"
      lead={<>After the loop, what is <span className="font-mono">len(ready)</span>?</>}
      questionId="l3-t2e"
    />
  )
}
