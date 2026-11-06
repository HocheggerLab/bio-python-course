import { StepQuizOpener, StepQuizQuestion } from '@/components/poll/StepQuiz'

const code = `df = pd.read_csv("pollinators_lecture.csv")
# columns: Month, Allotment, Crop, Flowers,
#          Honeybees, Bumblebees, ...`

export function Slide24Quiz3Opener() {
  return (
    <StepQuizOpener
      eyebrow="Three questions"
      title="Sort, count, group,"
      accent="one question at a time"
      note={<>The same table again. Think about what each line hands back.</>}
      code={code}
    />
  )
}

export function Slide24Quiz3Q1() {
  return (
    <StepQuizQuestion
      n={1}
      topic="Sort"
      lead={<>Which line shows the five surveys with the most bumblebees?</>}
      questionId="l6-p3a"
    />
  )
}

export function Slide24Quiz3Q2() {
  return (
    <StepQuizQuestion
      n={2}
      topic="Count"
      lead={<>Which line tells you how many surveys were done in each month?</>}
      questionId="l6-p3b"
    />
  )
}

export function Slide24Quiz3Q3() {
  return (
    <StepQuizQuestion
      n={3}
      topic="groupby"
      lead={<>Which line gives the total number of honeybees at each allotment?</>}
      questionId="l6-p3c"
    />
  )
}
