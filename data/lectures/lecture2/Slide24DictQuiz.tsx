import { StepQuizOpener, StepQuizQuestion } from './StepQuiz'

const tableCode = `codon_table = {"ATG": "Met", "GGT": "Gly", "TAA": "Stop"}
seq = "ATGGGTTAA"`

/* Unlike the list and string blocks this set checks the dictionary ideas
   one by one rather than walking a single exercise, so the slides say
   "Question", not "Step". The last one fuses both halves of the lecture:
   slice a codon out, then look it up. */
export function Slide24DictQuizOpener() {
  return (
    <StepQuizOpener
      title="Codon lookup,"
      accent="five quick checks"
      note={
        <>
          Every question uses this codon table. The last one puts today together: slice a codon
          out of the sequence, then look it up.
        </>
      }
      code={tableCode}
    />
  )
}

export function Slide24DictQ1() {
  return (
    <StepQuizQuestion
      label="Question"
      n={1}
      topic="Make a dictionary"
      lead={<>Which line makes a dictionary that maps &quot;ATG&quot; to &quot;Met&quot;?</>}
      questionId="l2-t3a"
    />
  )
}

export function Slide24DictQ2() {
  return (
    <StepQuizQuestion
      label="Question"
      n={2}
      topic="How many entries?"
      lead={<>What does this print?</>}
      questionId="l2-t3b"
    />
  )
}

export function Slide24DictQ3() {
  return (
    <StepQuizQuestion
      label="Question"
      n={3}
      topic="Look up a value"
      lead={<>Which line gives you &quot;Gly&quot;?</>}
      questionId="l2-t3c"
    />
  )
}

export function Slide24DictQ4() {
  return (
    <StepQuizQuestion
      label="Question"
      n={4}
      topic="Keys or values?"
      lead={<>Which line shows all the amino acids in the table?</>}
      questionId="l2-t3d"
    />
  )
}

export function Slide24DictQ5() {
  return (
    <StepQuizQuestion
      label="Question"
      n={5}
      topic="Translate a codon"
      lead={<>Slice, then look up. What does this print?</>}
      questionId="l2-t3e"
    />
  )
}
