import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import PollSlide from '@/components/poll/PollSlide'
import { POLL_CONTENT } from '@/lib/poll/content'

/**
 * First of the closing question block. The hands-on beat moved to the DIY
 * slide, so this is pure recall: asked after the teaching, to find out what
 * stuck rather than whether they can follow along.
 */
export function Slide22PollLegend() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Question 1 — <GradientText variant="green">fix the legend</GradientText>
        </>
      }
      lead={<>{POLL_CONTENT['l7-p1'].prompt}</>}
      note={<>It runs without an error. That is what makes it worth catching.</>}
    >
      <PollSlide
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
