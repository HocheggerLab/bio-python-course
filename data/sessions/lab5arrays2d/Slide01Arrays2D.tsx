import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import {
  NotebookLink,
  NOTEBOOK_ARRAYS_2D_BASICS,
  NOTEBOOK_VECTORISATION,
} from './NotebookLink'

const basic = [
  'the same eight steps, now on 21,238 frames',
  '📎 each step points back to notebook 01',
  'fill the ___ blanks; self-checks tell you if it worked',
  'finale: one function, run on a second neuron',
]

const advanced = [
  'four checkpoints — you write the code, hints if stuck',
  'stretch: np.diff onsets, fancy indexing, broadcasting',
  'axis=1 — one score per trial',
  'a shuffle test: is the response real or chance?',
]

export function Slide01Arrays2D() {
  return (
    <>
      <SlideTitle>
        The <GradientText variant="green">full neuron</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-400 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        The real recording: 254 go and 264 no-go trials, a mouse deciding whether to lick. Same question as the
        toy — pick how much guidance you want. Both end with the same answer.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-3 md:mb-4">
            Basic · step by step
          </CardHeading>
          <CardList items={basic} bullet="▸" color="blue" />
        </SlideCard>

        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-3 md:mb-4">
            Advanced · more on your own
          </CardHeading>
          <CardList items={advanced} bullet="▸" color="green" />
        </SlideCard>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-4">
        <NotebookLink url={NOTEBOOK_ARRAYS_2D_BASICS} label="02 · Full neuron — basic" />
        <NotebookLink url={NOTEBOOK_VECTORISATION} label="02 · Full neuron — advanced" />
      </div>
    </>
  )
}
