import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardIcon, CardHeading, CardList, CardBody } from '@/components/slides/SlideCard'

const lists = [
  'Hold many values in order',
  'Index & slice — seq[0], seq[0:3]',
  '.append() to grow, [i] = … to edit',
  'sum() / len() over a list of numbers',
]

const strings = [
  'A string is a sequence too',
  'Slice out codons — seq[3:6]',
  'Immutable — methods return a new string',
  '.upper() .find() .replace() (transcription)',
]

const dicts = [
  'A lookup table — key → value',
  'The codon table: "ATG" → "Met"',
  'Look up with [key]; .get(key, "?") is safe',
  'Add / update by key; test with in',
]

export function Slide25Recap() {
  return (
    <>
      <SlideTitle>
        Recap — <GradientText variant="green">Lists, Strings &amp; Maps</GradientText>
      </SlideTitle>

      <CardBody className="mt-3 md:mt-4 max-w-4xl text-gray-300">
        You started with <strong>one</strong> sequence and ended up translating it by hand —
        slicing out codons and looking each one up in a table. Three new containers got you there.
      </CardBody>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardIcon size="sm" className="mb-2 md:mb-3">📋</CardIcon>
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            Lists
          </CardHeading>
          <CardList items={lists} bullet="✓" color="blue" />
        </SlideCard>

        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardIcon size="sm" className="mb-2 md:mb-3">🧬</CardIcon>
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            Strings
          </CardHeading>
          <CardList items={strings} bullet="✓" color="green" />
        </SlideCard>

        <SlideCard color="purple" layout="start" padding="compact" className="border-l-4">
          <CardIcon size="sm" className="mb-2 md:mb-3">🗺️</CardIcon>
          <CardHeading size="sm" color="purple" className="mb-2 md:mb-3">
            Dictionaries
          </CardHeading>
          <CardList items={dicts} bullet="✓" color="purple" />
        </SlideCard>

      </div>
    </>
  )
}
