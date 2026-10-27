import { StepQuizOpener, StepQuizQuestion } from '@/components/poll/StepQuiz'

const code = `# 1. ??? -- import numpy so that np works

F = "neuron_0588_20180828_5_lecture.csv"
dff  = np.loadtxt(F, delimiter=",", skiprows=1, usecols=1)
nogo = np.loadtxt(F, delimiter=",", skiprows=1, usecols=3)`

export function Slide28ArrayQuizOpener() {
  return (
    <StepQuizOpener
      eyebrow="Three questions"
      title="Interrogate the array,"
      accent="no loops allowed"
      note={
        <>
          Two columns of one recording: the neuron&apos;s activity, and a 1 while the nogo signal is playing.
          Import numpy, then let the array do the counting.
        </>
      }
      code={code}
    />
  )
}

export function Slide28ArrayQ1() {
  return (
    <StepQuizQuestion
      n={1}
      topic="Import numpy"
      lead={
        <>
          Which line lets you write <span className="font-mono">np.loadtxt(...)</span>?
        </>
      }
      questionId="l5-t2a"
    />
  )
}

export function Slide28ArrayQ2() {
  return (
    <StepQuizQuestion
      n={2}
      topic="Frames or trials?"
      lead={
        <>
          <span className="font-mono">nogo</span> is 1 for each of the 9 frames a nogo signal plays. How many
          nogo trials were there?
        </>
      }
      questionId="l5-t2b"
    />
  )
}

export function Slide28ArrayQ3() {
  return (
    <StepQuizQuestion
      n={3}
      topic="The highest value"
      lead={<>Which line gives the neuron&apos;s highest activity?</>}
      questionId="l5-t2c"
    />
  )
}
