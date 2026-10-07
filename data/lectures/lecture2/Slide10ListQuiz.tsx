import { StepQuizOpener, StepQuizQuestion } from './StepQuiz'

const readingsCode = `readings = [42, 17, 88, 63, 29, 55, 71, 34, 90, 12,
            47, 68, 23, 81, 59, 36, 74, 50, 28, 65]`

export function Slide10ListQuizOpener() {
  return (
    <StepQuizOpener
      title="Clean the data,"
      accent="one step at a time"
      note={
        <>
          You&apos;ve collected <span className="text-bio-yellow font-semibold">20 readings</span> from
          a growth assay. One was a pipetting error and a late replicate has just come in.
          Let&apos;s clean them up and report the mean together.
        </>
      }
      code={readingsCode}
    />
  )
}

export function Slide10ListQ1() {
  return (
    <StepQuizQuestion
      n={1}
      topic="Find a reading"
      lead={<>Warm-up: which line gives you the third reading, 88?</>}
      questionId="l2-t1a"
    />
  )
}

export function Slide10ListQ2() {
  return (
    <StepQuizQuestion
      n={2}
      topic="Remove the bad reading"
      lead={<>The 2nd reading (17) was a pipetting error. Which line removes it?</>}
      questionId="l2-t1b"
    />
  )
}

export function Slide10ListQ3() {
  return (
    <StepQuizQuestion
      n={3}
      topic="Add the late replicate"
      lead={<>A late replicate came in. Which line adds 19 to the end?</>}
      questionId="l2-t1c"
    />
  )
}

export function Slide10ListQ4() {
  return (
    <StepQuizQuestion
      n={4}
      topic="Count the readings"
      lead={<>We started with 20 readings. After both edits, what does this print?</>}
      questionId="l2-t1d"
    />
  )
}

export function Slide10ListQ5() {
  return (
    <StepQuizQuestion
      n={5}
      topic="Report the mean"
      lead={<>Which line gives the mean, rounded to 1 decimal place?</>}
      questionId="l2-t1e"
    />
  )
}
