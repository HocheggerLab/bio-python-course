import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardIcon, CardHeading, CardBody } from '@/components/slides/SlideCard'

export function Slide26ApplySkills() {
  return (
    <>
      <SlideTitle>
        You now have the basic skills to write <GradientText>Python Code</GradientText>
      </SlideTitle>

      <CardBody className="mt-3 md:mt-4 max-w-5xl text-gray-300">
        Every program you wrote had the <strong>same shape</strong>: a list of things → do the same
        job to each → handle the odd broken one. That shape has nothing to do with sequences. Point
        it at <strong>anything you&apos;d otherwise do by hand</strong>.
      </CardBody>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-5 xl:gap-6 mt-4 md:mt-6 xl:mt-8">

        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardIcon size="sm" className="mb-1 md:mb-2">🔬</CardIcon>
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            Images &amp; microscopy
          </CardHeading>
          <CardBody className="text-xs md:text-sm xl:text-base">
            Rename 800 files from their metadata, or pull the cell count out of every one — while
            you get a coffee.
          </CardBody>
        </SlideCard>

        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardIcon size="sm" className="mb-1 md:mb-2">📈</CardIcon>
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            Instrument output
          </CardHeading>
          <CardBody className="text-xs md:text-sm xl:text-base">
            A plate reader dumps 384 wells. The same OD or ΔΔCt calculation, applied to every row, in
            a second.
          </CardBody>
        </SlideCard>

        <SlideCard color="purple" layout="start" padding="compact" className="border-l-4">
          <CardIcon size="sm" className="mb-1 md:mb-2">🗂️</CardIcon>
          <CardHeading size="sm" color="purple" className="mb-2 md:mb-3">
            Messy files
          </CardHeading>
          <CardBody className="text-xs md:text-sm xl:text-base">
            Twelve spreadsheets, twelve layouts. Read each, clean it, flag the rows that don&apos;t
            add up, stack them into one.
          </CardBody>
        </SlideCard>

        <SlideCard color="pink" layout="start" padding="compact" className="border-l-4">
          <CardIcon size="sm" className="mb-1 md:mb-2">🧪</CardIcon>
          <CardHeading size="sm" color="pink" className="mb-2 md:mb-3">
            Bench housekeeping
          </CardHeading>
          <CardBody className="text-xs md:text-sm xl:text-base">
            Lay out a 96-well plate, generate primer names, or work out a whole rack of dilutions —
            no arithmetic by hand.
          </CardBody>
        </SlideCard>

      </div>

      <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4 mt-3 md:mt-4">
        <CardBody className="text-xs md:text-sm xl:text-base">
          <strong>Your turn to think:</strong> what do you do more than ten times a week? If you can
          write down the steps, you can now automate them. That&apos;s the real skill you just
          learned — sequences were only the excuse.
        </CardBody>
      </SlideCard>
    </>
  )
}
