import { StepQuizOpener, StepQuizQuestion } from '@/components/poll/StepQuiz'

const code = `import numpy as np

readings = np.array([0.1, 0.5, -0.2, 0.8, 0.3, 0.9])
#   position:          0    1     2    3    4    5`

export function Slide20NumpyQuizOpener() {
  return (
    <StepQuizOpener
      eyebrow="Three questions"
      title="The numpy toolbox,"
      accent="one tool at a time"
      note={
        <>
          Six readings, three questions: filter them, find where they are, find the biggest.
        </>
      }
      code={code}
    />
  )
}

export function Slide20NumpyQ1() {
  return (
    <StepQuizQuestion
      n={1}
      topic="Filter"
      lead={<>Which line keeps only the readings above 0.4?</>}
      questionId="l5-n1"
    />
  )
}

export function Slide20NumpyQ2() {
  return (
    <StepQuizQuestion
      n={2}
      topic="Where?"
      lead={<>Which line gives the positions of the readings above 0.4, as a plain array?</>}
      questionId="l5-n2"
    />
  )
}

export function Slide20NumpyQ3() {
  return (
    <StepQuizQuestion
      n={3}
      topic="Where is the biggest?"
      lead={<>At which position is the largest reading? Which line tells you?</>}
      questionId="l5-n3"
    />
  )
}
