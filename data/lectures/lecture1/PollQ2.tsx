import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import PollQuestionSlide from '@/components/poll/PollQuestionSlide'

export function PollQ2() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Question 2 — <GradientText>Types</GradientText>
        </>
      }
      lead={<>A reading arrives from a file as <span className="font-mono">&quot;3.14&quot;</span>, quotes included. What is it?</>}
    >
      <PollQuestionSlide questionId="l1-r2" />
    </ConceptSlide>
  )
}
