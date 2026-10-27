import { StepQuizOpener, StepQuizQuestion } from '@/components/poll/StepQuiz'

const code = `F = "neuron_0588_20180828_5_lecture.csv"   # neuron one

for column, name in [(2, "go"), (3, "nogo")]:
    curve = response_to(column)     # mean of dff[i-10:i+30]
    print(f"{name:7s} peak {curve[10:].max():+.3f}")`

export function LabSecondNeuronQuizOpener() {
  return (
    <StepQuizOpener
      eyebrow="Three questions"
      title="A second neuron,"
      accent="the same code"
      note={
        <>
          Real analysis is rerunning the same thing on the next cell. Does neuron two have the same taste as
          neuron one?
        </>
      }
      code={code}
    />
  )
}

export function LabSecondNeuronQ1() {
  return (
    <StepQuizQuestion
      n={1}
      topic="One change"
      lead={<>What do you change to analyse the next neuron?</>}
      questionId="l5-t3a"
    />
  )
}

export function LabSecondNeuronQ2() {
  return (
    <StepQuizQuestion
      n={2}
      topic="Read the window"
      lead={
        <>
          Each window is <span className="font-mono">dff[i-10:i+30]</span>, with the event starting at{' '}
          <span className="font-mono">i</span>. Why search from <span className="font-mono">curve[10:]</span>?
        </>
      }
      questionId="l5-t3b"
    />
  )
}

export function LabSecondNeuronQ3() {
  return (
    <StepQuizQuestion
      n={3}
      topic="The verdict"
      lead={
        <>
          Neuron one: go <span className="font-mono">+0.29</span>, nogo <span className="font-mono">+0.06</span>.
          Neuron two: go <span className="font-mono">+1.28</span>, nogo <span className="font-mono">+1.04</span>. Does
          neuron two tell go from nogo?
        </>
      }
      questionId="l5-t3c"
    />
  )
}
