import { StepQuizOpener, StepQuizQuestion } from '@/components/poll/StepQuiz'

const incubationCode = `# Mean incubation period, in days
# 229E, SARS, SARS-CoV-2, MERS, Omicron
incubation_days = [3.0, 4.7, 4.9, 5.8, 3.4]`

export function Slide08IncubationQuizOpener() {
  return (
    <StepQuizOpener
      title="Total incubation time,"
      accent="one step at a time"
      note={
        <>
          Two loops from today: <strong>transform</strong> each incubation period into whole
          minutes, then <strong>accumulate</strong> them into one grand total.
        </>
      }
      code={incubationCode}
    />
  )
}

export function Slide08IncubationQ1() {
  return (
    <StepQuizQuestion
      n={1}
      topic="Start the loop"
      lead={<>Which line starts a loop over every incubation period?</>}
      questionId="l3-t1a"
    />
  )
}

export function Slide08IncubationQ2() {
  return (
    <StepQuizQuestion
      n={2}
      topic="Days to minutes"
      lead={<>Inside the loop: which line turns one period into <strong>whole</strong> minutes? (1 day = 1440 minutes)</>}
      questionId="l3-t1b"
    />
  )
}

export function Slide08IncubationQ3() {
  return (
    <StepQuizQuestion
      n={3}
      topic="Collect the results"
      lead={<>Still inside the loop: which line adds <span className="font-mono">minutes</span> to the new list?</>}
      questionId="l3-t1c"
    />
  )
}

export function Slide08IncubationQ4() {
  return (
    <StepQuizQuestion
      n={4}
      topic="The running total"
      lead={<>Where does <span className="font-mono">total = 0</span> have to go?</>}
      questionId="l3-t1d"
    />
  )
}

export function Slide08IncubationQ5() {
  return (
    <StepQuizQuestion
      n={5}
      topic="The grand total"
      lead={<>What does the program print?</>}
      questionId="l3-t1e"
    />
  )
}
