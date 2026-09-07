import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import PollQuestionSlide from '@/components/poll/PollQuestionSlide'

export function PollQ3() {
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
      <PollQuestionSlide questionId="l1-r3" />
    </ConceptSlide>
  )
}
