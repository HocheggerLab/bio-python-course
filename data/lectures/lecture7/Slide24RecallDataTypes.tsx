import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import PollSlide from '@/components/poll/PollSlide'

/**
 * The distinction the whole of Part 2 hangs on. Asked at the end because it
 * is the thing they should still be able to do next week, when the method
 * names have faded.
 */
export function Slide24RecallDataTypes() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Question 3 — <GradientText variant="green">what kind of data?</GradientText>
        </>
      }
      lead={
        <>
          Before you can pick a plot you have to know what you are holding. Which of these
          columns is <strong>categorical</strong>?
        </>
      }
    >
      <PollSlide
        questionId="l7-r2"
        answer={
          <>
            <strong>Cancer lineage.</strong> It is a <em>label</em> you can count — there
            are 73 skin lines and 124 lung. The other three are{' '}
            <strong>continuous</strong>: measured on a scale, and any value in between is
            possible. A score of <span className="font-mono">−0.83</span> means something;
            a lineage halfway between Skin and Lung does not.
          </>
        }
      />
    </ConceptSlide>
  )
}
