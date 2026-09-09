import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardIcon, CardHeading, CardList, CardBody } from '@/components/slides/SlideCard'

const session1 = [
  'Variables & the four types',
  'print(), f-strings, len(), round()',
  'Arithmetic & the .count() method',
  'Read an error, fix it yourself',
]

const session2 = [
  'Lists — hold a folder of sequences',
  'Strings are sequences — slice out codons',
  '.upper() · .replace() · .find()',
  'Dictionaries — the codon table',
]

const session3 = [
  'for loops & the accumulator',
  'if / elif / else — decide',
  'range() + slicing to carve codons',
  'break — stop at the first stop codon',
]

const session4 = [
  'Break a job into steps (an algorithm)',
  'def — name it once, reuse it anywhere',
  'raise — fail loudly on bad data',
  'try / except — skip, don’t crash',
]

export function Slide25RecapCourse() {
  return (
    <>
      <SlideTitle>
        Recap — <GradientText variant="green">Sessions 1&ndash;4</GradientText>
      </SlideTitle>

      <CardBody className="mt-3 md:mt-4 max-w-5xl text-gray-300">
        Four sessions ago a <strong>variable</strong> was a new word. You&apos;re leaving able to write
        a <strong>real, defensive bioinformatics program</strong> — one that reads a whole folder,
        translates every gene, and refuses the data it can&apos;t trust. That&apos;s not a beginner
        exercise. That&apos;s programming.
      </CardBody>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-5 xl:gap-6 mt-4 md:mt-6 xl:mt-8">

        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardIcon size="sm" className="mb-1 md:mb-2">🔢</CardIcon>
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            S1 · Data &amp; Types
          </CardHeading>
          <CardList items={session1} bullet="✓" color="blue" />
        </SlideCard>

        <SlideCard color="purple" layout="start" padding="compact" className="border-l-4">
          <CardIcon size="sm" className="mb-1 md:mb-2">🧬</CardIcon>
          <CardHeading size="sm" color="purple" className="mb-2 md:mb-3">
            S2 · Collections
          </CardHeading>
          <CardList items={session2} bullet="✓" color="purple" />
        </SlideCard>

        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardIcon size="sm" className="mb-1 md:mb-2">🔁</CardIcon>
          <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
            S3 · Control Flow
          </CardHeading>
          <CardList items={session3} bullet="✓" color="yellow" />
        </SlideCard>

        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardIcon size="sm" className="mb-1 md:mb-2">📦</CardIcon>
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            S4 · Functions &amp; Robustness
          </CardHeading>
          <CardList items={session4} bullet="✓" color="green" />
        </SlideCard>

      </div>
    </>
  )
}
