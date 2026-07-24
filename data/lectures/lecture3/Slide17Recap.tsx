import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardIcon, CardHeading, CardList, CardBody } from '@/components/slides/SlideCard'

const loops = [
  'for g in genomes: — repeat for every item',
  'The accumulator — total = total + g',
  'Build a new list with .append()',
  'range(start, stop, step) — loop over positions',
]

const decisions = [
  'Comparisons are just True / False',
  'if / elif / else — pick a branch',
  'if inside a loop — count and filter',
  'break — leave the loop the moment you’re done',
]

const translator = [
  'A string loops too — one base at a time',
  'seq[i:i+3] — carve out each codon',
  '.get(codon, "?") — look it up safely',
  'Shift the frame — a different protein falls out',
]

export function Slide17Recap() {
  return (
    <>
      <SlideTitle>
        Recap — <GradientText variant="green">Programs That Run Themselves</GradientText>
      </SlideTitle>

      <CardBody className="mt-3 md:mt-4 max-w-4xl text-gray-300">
        You arrived able to translate <strong>three</strong> codons by hand. You&apos;re leaving with
        a translator that reads a <strong>whole gene</strong> on its own — and knows where to stop.
      </CardBody>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardIcon size="sm" className="mb-2 md:mb-3">🔁</CardIcon>
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            Loops
          </CardHeading>
          <CardList items={loops} bullet="✓" color="blue" />
        </SlideCard>

        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardIcon size="sm" className="mb-2 md:mb-3">🔀</CardIcon>
          <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
            Decisions
          </CardHeading>
          <CardList items={decisions} bullet="✓" color="yellow" />
        </SlideCard>

        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardIcon size="sm" className="mb-2 md:mb-3">🧬</CardIcon>
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            The translator
          </CardHeading>
          <CardList items={translator} bullet="✓" color="green" />
        </SlideCard>

      </div>
    </>
  )
}
