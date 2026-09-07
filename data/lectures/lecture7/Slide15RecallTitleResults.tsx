import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import PollResults from '@/components/poll/PollResults'
import { POLL_CONTENT } from '@/lib/poll/content'

/**
 * Teacher-only, and answer-free until you press reveal.
 *
 * The Open button lives on this slide, so it is on the projector for the whole
 * time students are voting. Anything that gives the answer away — the heading
 * and the explanation as much as the bars — has to stay hidden until then, or
 * the poll measures who can read the screen.
 */
export function Slide15RecallTitleResults() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Responses — <GradientText>coming in</GradientText>
        </>
      }
      lead={<>Which line gives that panel a title?</>}
    >
      <PollResults
        questionId="l7-r1"
        answer={
          <>
            <span className="font-mono">ax.set_title()</span>. Not{' '}
            <span className="font-mono">plt</span>, which has no such method; not{' '}
            <span className="font-mono">fig</span>, which titles the whole sheet with{' '}
            <span className="font-mono">suptitle</span>; and{' '}
            <span className="font-mono">ax.title</span> is an attribute, not a function.
          </>
        }
      />
    </ConceptSlide>
  )
}
