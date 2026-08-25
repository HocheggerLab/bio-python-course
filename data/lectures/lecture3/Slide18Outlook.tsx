import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'

const nextSession = [
  'Algorithms — plan the recipe before you write the code',
  'Functions — write the translator once, call it anywhere',
  'Errors — read a traceback and fix the bug yourself',
  'Stop copy-pasting code — start naming it',
]

const practice = [
  'Re-open today’s Colab and rebuild the translator from scratch',
  'Try frame = 2 — is there a third protein hiding in there?',
  'Half an hour of practice beats re-watching the lecture',
]

export function Slide18Outlook() {
  return (
    <>
      <SlideTitle>
        What&apos;s <GradientText>Next</GradientText> — Naming What You Built
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">

        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            Session 4 — algorithms, functions &amp; errors
          </CardHeading>
          <CardBody className="mb-3 md:mb-4">
            Notice what you just did: to read the second frame you <strong>changed a number and ran
            the whole thing again</strong>. That works for two frames. It won&apos;t work for two
            hundred genes. Next time we give your translator a <strong>name</strong> — and then it
            costs one line to use.
          </CardBody>
          <CardList items={nextSession} bullet="▸" color="blue" />
        </SlideCard>

        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
            Between now and then
          </CardHeading>
          <CardBody className="mb-3 md:mb-4">
            You can now write a program that loops, decides, and stops on its own — the three things
            that separate a <em>script</em> from a <em>calculation</em>. Everything after this is
            about doing it more cleanly.
          </CardBody>
          <CardList items={practice} bullet="→" color="yellow" />
          <p className="text-gray-400 text-xs md:text-sm xl:text-base mt-3 md:mt-4 italic">
            See you next week!
          </p>
        </SlideCard>

      </div>
    </>
  )
}
