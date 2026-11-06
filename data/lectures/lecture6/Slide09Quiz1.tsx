import { StepQuizOpener, StepQuizQuestion } from '@/components/poll/StepQuiz'

const code = `import pandas as pd

df = pd.read_csv("pollinators_lecture.csv")
# 1,620 surveys (rows), 13 columns`

export function Slide09Quiz1Opener() {
  return (
    <StepQuizOpener
      eyebrow="Three questions"
      title="The DataFrame,"
      accent="one question at a time"
      note={<>Same table as on the slides. Pick the line that does the job.</>}
      code={code}
    />
  )
}

export function Slide09Quiz1Q1() {
  return (
    <StepQuizQuestion
      n={1}
      topic="Its shape"
      lead={<>What does df.shape give you?</>}
      questionId="l6-p1a"
    />
  )
}

export function Slide09Quiz1Q2() {
  return (
    <StepQuizQuestion
      n={2}
      topic="One column"
      lead={<>Which line gives you the Bumblebees column as a Series?</>}
      questionId="l6-p1b"
    />
  )
}

export function Slide09Quiz1Q3() {
  return (
    <StepQuizQuestion
      n={3}
      topic="Count with a mask"
      lead={<>How many surveys saw at least one bumblebee? Which line tells you?</>}
      questionId="l6-p1c"
    />
  )
}
