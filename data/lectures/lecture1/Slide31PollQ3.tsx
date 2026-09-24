import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import PollSlide from '@/components/poll/PollSlide'

export function Slide31PollQ3() {
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
      />
    </ConceptSlide>
  )
}
