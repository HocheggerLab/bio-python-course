import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import PollSlide from '@/components/poll/PollSlide'

/**
 * The payoff of the previous question: having named the data type, pick the
 * method. Each distractor fails for a reason worth saying out loud.
 */
export function Slide25RecallPlotChoice() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Question 4 — <GradientText variant="green">which plot?</GradientText>
        </>
      }
      lead={
        <>
          You have <span className="font-mono">SOX10</span> expression for all{' '}
          <strong>1,165 cell lines</strong> — one column, 1,165 numbers, nothing else to
          split it by. Which method?
        </>
      }
    >
      <PollSlide
        questionId="l7-r3"
        answer={
          <>
            <span className="font-mono">ax.hist()</span> — one continuous column is a{' '}
            <strong>distribution</strong>. Each of the others needs something you were not
            given: <span className="font-mono">scatter</span> a second column,{' '}
            <span className="font-mono">barh</span> a category to label the bars, and{' '}
            <span className="font-mono">boxplot</span> groups to split on.
          </>
        }
      />
    </ConceptSlide>
  )
}
