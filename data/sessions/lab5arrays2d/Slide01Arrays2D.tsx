import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import {
  NotebookLink,
  NOTEBOOK_ARRAYS_2D_BASICS,
  NOTEBOOK_VECTORISATION,
} from './NotebookLink'

const twoD = [
  'np.stack — a list of trials becomes a table',
  'shape as (rows, columns) = (trials, frames)',
  'trials[row, col] — and : for a whole column',
  'axis=0 vs axis=1 — which dimension disappears',
]

const vector = [
  'the same job as a loop, in one line',
  'time it yourself — tens of times faster',
  'broadcasting, and the shape error you will hit',
  'baseline-correct 254 trials without a loop',
]

export function Slide01Arrays2D() {
  return (
    <>
      <SlideTitle>
        Two dimensions, and <GradientText variant="green">no more loops</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-400 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        Stack 254 single trials into one table, average down the columns, and find out what this
        neuron is actually for — then find out why numpy is worth the trouble.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-3 md:mb-4">
            The second dimension
          </CardHeading>
          <CardList items={twoD} bullet="▸" color="blue" />
        </SlideCard>

        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-3 md:mb-4">
            Vectorisation
          </CardHeading>
          <CardList items={vector} bullet="▸" color="green" />
        </SlideCard>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-4">
        <NotebookLink url={NOTEBOOK_ARRAYS_2D_BASICS} label="03 · Two dimensions" />
        <NotebookLink url={NOTEBOOK_VECTORISATION} label="04 · Vectorisation" />
      </div>
    </>
  )
}
