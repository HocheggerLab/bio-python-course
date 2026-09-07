import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import PollResults from '@/components/poll/PollResults'

/**
 * Teacher-only. Registered with `teacher: true`, so it is absent from the
 * student deck rather than sitting there waiting to be arrowed past.
 */
export function Slide14PollResults() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          The answer — <GradientText variant="green">ax owns the title</GradientText>
        </>
      }
      lead={
        <>
          <span className="font-mono">ax.set_title()</span>. Not{' '}
          <span className="font-mono">plt</span>, which has no such method; not{' '}
          <span className="font-mono">fig</span>, which titles the whole sheet with{' '}
          <span className="font-mono">suptitle</span>; and{' '}
          <span className="font-mono">ax.title</span> is an attribute, not a function.
        </>
      }
      note={<>Every wrong option here is a mistake worth making once.</>}
    >
      <PollResults questionId="l7-q1" />
    </ConceptSlide>
  )
}
