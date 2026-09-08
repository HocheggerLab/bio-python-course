import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import PollSlide from '@/components/poll/PollSlide'

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
      <PollSlide
        questionId="l1-r2"
        answer={<>A <span className="font-mono">str</span>. The quotes win over what the characters look like — and arithmetic on it either raises <span className="font-mono">TypeError</span> or, worse, quietly does the wrong thing: <span className="font-mono">&quot;3&quot; * 2</span> is <span className="font-mono">&quot;33&quot;</span>. This is the single most common data-handling bug in biology.</>}
      />
    </ConceptSlide>
  )
}
