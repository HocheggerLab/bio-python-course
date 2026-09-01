import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import {
  NotebookLink,
  NOTEBOOK_ARRAYS_1D_BASICS,
  NOTEBOOK_ARRAYS_1D_ADVANCED,
} from './NotebookLink'

const basics = [
  'np.array — one type, one block of memory',
  '.shape, .dtype, .ndim, .size',
  'indexing & slicing — exactly like a list',
  'arithmetic on every element at once',
]

const advanced = [
  'boolean masks — dff > 1 asks all 21,238 at once',
  'masking one array with another: dff[go == 1]',
  'np.where — from mask to frame numbers',
  'np.diff — finding where an event starts',
]

export function Slide01Arrays1D() {
  return (
    <>
      <SlideTitle>
        Arrays in <GradientText>one dimension</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-400 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        One neuron, 21,238 numbers, and a mouse deciding whether to drink. Everything from the
        lecture — now at full length, on the real recording.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-3 md:mb-4">
            The basics
          </CardHeading>
          <CardList items={basics} bullet="▸" color="blue" />
        </SlideCard>

        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-3 md:mb-4">
            Asking questions
          </CardHeading>
          <CardList items={advanced} bullet="▸" color="yellow" />
        </SlideCard>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-4">
        <NotebookLink url={NOTEBOOK_ARRAYS_1D_BASICS} label="01 · Arrays — basics" />
        <NotebookLink url={NOTEBOOK_ARRAYS_1D_ADVANCED} label="02 · Arrays — asking questions" />
      </div>
    </>
  )
}
