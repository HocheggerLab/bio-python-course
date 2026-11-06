import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import PollSlide from '@/components/poll/PollSlide'

/* The bet opens the lecture and the same poll closes it. The first time it is
   shown in `prediction` mode, so the bars only show how the room split; at
   the end the votes are still there, and now broad bean is marked. Every part
   in between can drop a clue. */

export function SlideBet() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Place your <GradientText variant="yellow">bet</GradientText>
        </>
      }
      lead={
        <>
          The bumblebees vanish; the honeybees stay. Which crop would be left with almost no bee
          visits? Go with your gut — by the end of the hour, pandas will tell us who was right.
        </>
      }
      note={<>Remember what you picked. Watch for clues on the way — the data settles it at the end.</>}
    >
      <PollSlide questionId="l6-bet" prediction />
    </ConceptSlide>
  )
}

export function SlideBetResult() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          How did your <GradientText variant="green">bet</GradientText> do?
        </>
      }
      lead={<>The same poll as at the start of the lecture — your votes, now with the answer.</>}
      note={
        <>
          Most money usually goes on raspberry: the biggest number in the table. The answer was the
          biggest <em>share</em>. Picking the right question is half of data analysis.
        </>
      }
    >
      <PollSlide questionId="l6-bet" />
    </ConceptSlide>
  )
}
