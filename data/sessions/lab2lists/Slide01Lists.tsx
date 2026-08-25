import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import { NotebookLink, NOTEBOOK_LISTS_BASICS } from './NotebookLink'

const access = [
  'Make one: genes = ["BRCA1", "TP53", "EGFR"]',
  'Index by position: genes[0] (first), genes[-1] (last)',
  'Slice a range: genes[1:3] — end not included',
]

const change = [
  'Grow: genes.append("MYC")  /  genes + more',
  'Edit by position: genes[1] = "KRAS"  /  del genes[0]',
  'Numbers: sum(values) / len(values) → the mean',
]

export function Slide01Lists() {
  return (
    <>
      <SlideTitle>
        Lists — <GradientText>collections of data</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <SlideCard color="blue" layout="middle" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-3 md:mb-4">Reaching in</CardHeading>
          <CardList items={access} bullet="▸" color="blue" />
        </SlideCard>

        <SlideCard color="green" layout="middle" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-3 md:mb-4">Changing &amp; summarising</CardHeading>
          <CardList items={change} bullet="▸" color="green" />
        </SlideCard>

      </div>

      <NotebookLink url={NOTEBOOK_LISTS_BASICS} label="01 · Lists — practice notebook" />
    </>
  )
}
