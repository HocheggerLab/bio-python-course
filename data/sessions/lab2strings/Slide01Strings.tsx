import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import { NotebookLink, NOTEBOOK_STRINGS_BASICS } from './NotebookLink'

const sequence = [
  'A string is a sequence of characters: seq[0], seq[-1]',
  'Slice out a codon: seq[0:3]  ·  reverse: seq[::-1]',
  'Build with + and *  —  but strings are immutable (no seq[0] = …)',
]

const methods = [
  '.upper() / .lower() — clean messy data',
  '.find("GAATTC") — position of a motif (-1 if absent)',
  '.replace("T", "U") — transcription  ·  .startswith("ATG")',
]

export function Slide01Strings() {
  return (
    <>
      <SlideTitle>
        Strings — <GradientText>sequences of characters</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <SlideCard color="blue" layout="middle" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-3 md:mb-4">Index, slice, build</CardHeading>
          <CardList items={sequence} bullet="▸" color="blue" />
        </SlideCard>

        <SlideCard color="green" layout="middle" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-3 md:mb-4">Methods</CardHeading>
          <CardList items={methods} bullet="▸" color="green" />
        </SlideCard>

      </div>

      <NotebookLink url={NOTEBOOK_STRINGS_BASICS} label="Strings — practice notebook" />
    </>
  )
}
