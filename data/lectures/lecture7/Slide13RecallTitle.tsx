import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import PollSlide from '@/components/poll/PollSlide'

/**
 * Closing recall block — asked after the teaching, to find out what stuck
 * rather than whether they can follow along.
 */
export function Slide13RecallTitle() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Recall — <GradientText>who owns the title?</GradientText>
        </>
      }
      lead={
        <>
          You have made a figure with{' '}
          <span className="font-mono">fig, ax = plt.subplots()</span>. Which line gives{' '}
          <em>that panel</em> a title?
        </>
      }
    >
      <PollSlide
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
