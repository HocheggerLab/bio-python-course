import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import PollSlide from '@/components/poll/PollSlide'

export function Slide29PollQ1() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Question 1 — <GradientText>f-strings</GradientText>
        </>
      }
      lead={<>Which line prints  <span className="font-mono">Sample S-014 has pH 7.4</span>?</>}
    >
      <PollSlide
        questionId="l1-r1"
      />
    </ConceptSlide>
  )
}
