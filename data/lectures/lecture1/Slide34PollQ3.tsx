import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import PollSlide from '@/components/poll/PollSlide'

export function Slide34PollQ3() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Question 3 — <GradientText>Naming</GradientText>
        </>
      }
      lead={<>Which of these will Python accept as a variable name?</>}
    >
      <PollSlide
        questionId="l1-r3"
        answer={<><span className="font-mono">buffer_ph</span>. Names cannot start with a digit, cannot contain a space, and cannot be a word Python already uses — <span className="font-mono">class</span> is reserved. All three of the others are <span className="font-mono">SyntaxError</span>.</>}
      />
    </ConceptSlide>
  )
}
