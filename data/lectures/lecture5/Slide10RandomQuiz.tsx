import { StepQuizOpener, StepQuizQuestion } from '@/components/poll/StepQuiz'

const code = `import random

# random's reception (from the docs):
#   random.randint(a, b)   a whole number from a to b
#   random.choice(seq)     one item picked from seq
#   random.shuffle(x)      shuffle the list x in place`

export function Slide10RandomQuizOpener() {
  return (
    <StepQuizOpener
      eyebrow="Three questions"
      title="Use random's reception,"
      accent="one call at a time"
      note={
        <>
          You can&apos;t see the code behind the desk — like every package you import. The{' '}
          <strong>documentation is the whole interface</strong>.
        </>
      }
      code={code}
    />
  )
}

export function Slide10RandomQ1() {
  return (
    <StepQuizQuestion
      n={1}
      topic="Call a method"
      lead={<>Which line rolls a die?</>}
      questionId="l5-t1a"
    />
  )
}

export function Slide10RandomQ2() {
  return (
    <StepQuizQuestion
      n={2}
      topic="Pass an argument"
      lead={<>Which line picks one random base from the list?</>}
      questionId="l5-t1b"
    />
  )
}

export function Slide10RandomQ3() {
  return (
    <StepQuizQuestion
      n={3}
      topic="Read the docs"
      lead={
        <>
          The docs say <span className="font-mono">shuffle(x)</span> shuffles the list{' '}
          <strong>in place</strong>. What does this print?
        </>
      }
      questionId="l5-t1c"
    />
  )
}
