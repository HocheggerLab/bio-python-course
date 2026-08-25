import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import {
  NotebookLink,
  NOTEBOOK_FUNCTIONS_BASICS,
  NOTEBOOK_FUNCTIONS_ADVANCED,
} from './NotebookLink'

const define = [
  'def gc_content(seq): … return answer',
  'Parameters feed it different inputs',
  'Defaults you can override: translate(seq, frame=0)',
]

const compose = [
  'Document it: type hints + a docstring',
  'Functions calling functions → an analysis',
  'Finale: is a mutation silent, or missense?',
]

export function Slide01Functions() {
  return (
    <>
      <SlideTitle>
        Functions — <GradientText variant="green">reusable tools</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <SlideCard color="blue" layout="middle" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-3 md:mb-4">Write it once</CardHeading>
          <CardList items={define} bullet="▸" color="blue" />
        </SlideCard>

        <SlideCard color="green" layout="middle" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-3 md:mb-4">Compose &amp; document</CardHeading>
          <CardList items={compose} bullet="▸" color="green" />
        </SlideCard>

      </div>

      <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-4">
        <NotebookLink url={NOTEBOOK_FUNCTIONS_BASICS} label="01 · Functions — basics" />
        <NotebookLink url={NOTEBOOK_FUNCTIONS_ADVANCED} label="02 · Functions — advanced" />
      </div>
    </>
  )
}
