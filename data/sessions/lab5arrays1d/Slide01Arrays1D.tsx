import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import {
  NotebookLink,
  NOTEBOOK_ARRAYS_1D_BASICS,
} from './NotebookLink'

const firstHalf = [
  'a 50-frame toy neuron — small enough to check by eye',
  '.shape, .max() — attributes vs methods',
  'boolean masks: dff[go == 1]',
  'np.where — from a mask to frame numbers',
]

const secondHalf = [
  '[::3] — one start frame per trial',
  'slice a window around each trial',
  'np.stack — trials become a table; axis=0 averages them',
  'go vs no-go — does this neuron care?',
]

export function Slide01Arrays1D() {
  return (
    <>
      <SlideTitle>
        A <GradientText>simple neuron</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-400 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        Every step of the real analysis, rehearsed on 50 frames you can read with your own eyes.
        Each step is a Write it cell with a self-check — and a few Broken cells to fix.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-3 md:mb-4">
            Steps 1–4 · find the trials
          </CardHeading>
          <CardList items={firstHalf} bullet="▸" color="blue" />
        </SlideCard>

        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-3 md:mb-4">
            Steps 5–8 · line them up and compare
          </CardHeading>
          <CardList items={secondHalf} bullet="▸" color="yellow" />
        </SlideCard>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-4">
        <NotebookLink url={NOTEBOOK_ARRAYS_1D_BASICS} label="01 · numpy on small data — everyone starts here" />
      </div>
    </>
  )
}
