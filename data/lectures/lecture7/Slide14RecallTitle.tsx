import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import PollQuestionSlide from '@/components/poll/PollQuestionSlide'

/**
 * Closing recall block — asked after the teaching, to find out what stuck
 * rather than whether they can follow along.
 */
export function Slide14RecallTitle() {
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
      <PollQuestionSlide questionId="l7-r1" />
    </ConceptSlide>
  )
}
