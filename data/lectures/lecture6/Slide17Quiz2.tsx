import { StepQuizOpener, StepQuizQuestion } from '@/components/poll/StepQuiz'

const code = `df = pd.read_csv("pollinators_lecture.csv")
# columns: Month, Allotment, Crop, Flowers,
#          Honeybees, Bumblebees, ...`

export function Slide17Quiz2Opener() {
  return (
    <StepQuizOpener
      eyebrow="Three questions"
      title="Pick and filter,"
      accent="one question at a time"
      note={<>Each option is one line of pandas. Only one does the job.</>}
      code={code}
    />
  )
}

export function Slide17Quiz2Q1() {
  return (
    <StepQuizQuestion
      n={1}
      topic="Filter rows"
      lead={<>Which line keeps only the Raspberry surveys, as a table?</>}
      questionId="l6-p2a"
    />
  )
}

export function Slide17Quiz2Q2() {
  return (
    <StepQuizQuestion
      n={2}
      topic="Two conditions"
      lead={<>Which line keeps the June surveys that saw at least one bumblebee?</>}
      questionId="l6-p2b"
    />
  )
}

export function Slide17Quiz2Q3() {
  return (
    <StepQuizQuestion
      n={3}
      topic=".loc"
      lead={<>Which line gives only Crop and Flowers, for surveys with more than 100 flowers?</>}
      questionId="l6-p2c"
    />
  )
}
