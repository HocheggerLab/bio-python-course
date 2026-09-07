import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import PollQuestionSlide from '@/components/poll/PollQuestionSlide'
import { POLL_CONTENT } from '@/lib/poll/content'

/**
 * Part 1's one hands-on beat, as a poll rather than a writing exercise.
 *
 * Grown out of the two-strains growth curve: same code, but repairing one
 * line is a lecture-sized task where writing the whole cell was not.
 */
export function Slide11PollLegend() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Your turn — <GradientText variant="green">fix the legend</GradientText>
        </>
      }
      lead={<>{POLL_CONTENT['l7-p1'].prompt}</>}
      note={<>It runs without an error. That is what makes it worth catching.</>}
    >
      <PollQuestionSlide questionId="l7-p1" />
    </ConceptSlide>
  )
}
