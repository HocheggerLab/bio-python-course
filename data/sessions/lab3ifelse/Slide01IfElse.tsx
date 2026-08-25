import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import {
  NotebookLink,
  NOTEBOOK_CONDITIONALS_BASICS,
  NOTEBOOK_CONDITIONALS_ADVANCED,
} from './NotebookLink'

const branch = [
  'if · elif · else — pick one path',
  'Comparisons: >  <  ==  >=  !=',
  'Loop + decide → tally into a dict',
]

const combine = [
  'Combine conditions: and · or · not',
  'Membership & truthiness: in, if count:',
  'Finale: write your own sort',
]

export function Slide01IfElse() {
  return (
    <>
      <SlideTitle>
        If / else — <GradientText variant="purple">making decisions</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <SlideCard color="blue" layout="middle" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-3 md:mb-4">Branch</CardHeading>
          <CardList items={branch} bullet="▸" color="blue" />
        </SlideCard>

        <SlideCard color="purple" layout="middle" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="purple" className="mb-3 md:mb-4">Combine &amp; sort</CardHeading>
          <CardList items={combine} bullet="▸" color="purple" />
        </SlideCard>

      </div>

      <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-4">
        <NotebookLink url={NOTEBOOK_CONDITIONALS_BASICS} label="03 · If / else — basics" />
        <NotebookLink url={NOTEBOOK_CONDITIONALS_ADVANCED} label="04 · If / else — advanced" />
      </div>
    </>
  )
}
