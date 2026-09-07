import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import PollResults from '@/components/poll/PollResults'
import { POLL_CONTENT } from '@/lib/poll/content'

/** Teacher-only. Nothing answer-shaped is on screen until you press reveal. */
export function Slide12PollLegendResults() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Responses — <GradientText>coming in</GradientText>
        </>
      }
      lead={<>{POLL_CONTENT['l7-p1'].prompt}</>}
    >
      <PollResults
        questionId="l7-p1"
        answer={
          <>
            The label belongs on the <span className="font-mono">plot</span> call, not the
            legend: <span className="font-mono">ax.legend()</span> only draws what has
            already been labelled. Without it matplotlib warns{' '}
            <em>&ldquo;No artists with labels found&rdquo;</em> and draws an empty box —{' '}
            <span className="font-mono">loc=</span> moves that empty box around.
          </>
        }
      />
    </ConceptSlide>
  )
}
