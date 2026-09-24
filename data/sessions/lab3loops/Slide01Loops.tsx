import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import {
  NotebookLink,
  NOTEBOOK_LOOPS_BASICS,
  NOTEBOOK_LOOPS_ADVANCED,
} from './NotebookLink'

const patterns = [
  'for count in spikes: — visit every value',
  'Accumulate: start at 0, add inside the loop',
  'Modify → append to a brand-new list',
]

const levelUp = [
  'enumerate → the index and the value together',
  'while + break — loop until a condition',
  'Comprehensions: the one-line, pythonic version',
]

export function Slide01Loops() {
  return (
    <>
      <SlideTitle>
        Loops — <GradientText>do it to every value</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">

        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-3 md:mb-4">The core patterns</CardHeading>
          <CardList items={patterns} bullet="▸" color="blue" />
        </SlideCard>

        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-3 md:mb-4">Level up</CardHeading>
          <CardList items={levelUp} bullet="▸" color="green" />
        </SlideCard>

      </div>

      <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-4">
        <NotebookLink url={NOTEBOOK_LOOPS_BASICS} label="01 · Loops — basics" />
        <NotebookLink url={NOTEBOOK_LOOPS_ADVANCED} label="02 · Loops — advanced" />
      </div>
    </>
  )
}
