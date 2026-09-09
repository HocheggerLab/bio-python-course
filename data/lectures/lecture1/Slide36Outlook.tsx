import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'

const sessionTwo = [
  'Lists — hold a whole folder of sequences at once',
  'Strings are sequences too — indexing & slicing to pull out codons',
  'More string methods — .replace() (transcription), .find()',
  'Dictionaries — map each codon to its amino acid',
]

const homework = [
  'Open the Session 1 Colab notebook',
  'Re-do today’s exercises in your own words',
  'Try the calculator on a sequence you choose',
]

export function Slide36Outlook() {
  return (
    <>
      <SlideTitle>
        What&apos;s <GradientText>Next</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">

        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            Session 2 — from one sequence to many
          </CardHeading>
          <CardBody className="mb-3 md:mb-4">
            Today you analysed <strong>one</strong> sequence. But Claudia has a whole{' '}
            <strong>folder</strong> of them — first we need a way to hold many at once, and
            to look inside each one.
          </CardBody>
          <CardList items={sessionTwo} bullet="▸" color="blue" />
        </SlideCard>

        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
            Between now and then
          </CardHeading>
          <CardBody className="mb-3 md:mb-4">
            Coding is a muscle — it grows by use. Half an hour of practice between sessions is
            worth more than re-watching the lecture.
          </CardBody>
          <CardList items={homework} bullet="→" color="yellow" />
          <p className="text-gray-400 text-xs md:text-sm xl:text-base mt-3 md:mt-4 italic">
            See you next week!
          </p>
        </SlideCard>

      </div>
    </>
  )
}
