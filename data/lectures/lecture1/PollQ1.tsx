import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import PollSlide from '@/components/poll/PollSlide'

export function PollQ1() {
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
        answer={<>Only <span className="font-mono">f"..."</span> substitutes. Without the <span className="font-mono">f</span> Python prints the braces literally — no error, wrong output, and it will sit in a script for weeks. Doubled braces <span className="font-mono">&#123;&#123; &#125;&#125;</span> are how you ask for a literal brace, and <span className="font-mono">$name</span> is a different language altogether.</>}
      />
    </ConceptSlide>
  )
}
