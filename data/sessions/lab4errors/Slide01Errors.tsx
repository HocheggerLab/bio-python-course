import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import {
  NotebookLink,
  NOTEBOOK_ERRORS_BASICS,
  NOTEBOOK_ERRORS_ADVANCED,
} from './NotebookLink'

const catchIt = [
  'Read a traceback — the last line names the error',
  'try: … except KeyError: … carry on',
  'Catch the specific type, not a bare except:',
]

const survive = [
  'raise ValueError("that isn\'t DNA") on bad input',
  'Your own error types: class NotDNAError(ValueError)',
  'A batch job that records failures and keeps going',
]

export function Slide01Errors() {
  return (
    <>
      <SlideTitle>
        Errors — <GradientText variant="yellow">staying in control</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <SlideCard color="blue" layout="middle" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-3 md:mb-4">Catch it &amp; carry on</CardHeading>
          <CardList items={catchIt} bullet="▸" color="blue" />
        </SlideCard>

        <SlideCard color="yellow" layout="middle" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-3 md:mb-4">Raise &amp; survive</CardHeading>
          <CardList items={survive} bullet="▸" color="yellow" />
        </SlideCard>

      </div>

      <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-4">
        <NotebookLink url={NOTEBOOK_ERRORS_BASICS} label="03 · Errors — basics" />
        <NotebookLink url={NOTEBOOK_ERRORS_ADVANCED} label="04 · Errors — advanced" />
      </div>
    </>
  )
}
