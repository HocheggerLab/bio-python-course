import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardPill } from '@/components/slides/SlideCard'
import { Figure } from '@/components/slides/layouts'

const facts = ['4 buzzes per word', '550 ms long', '~5 sessions to learn', '80% correct']

export function Slide02TheProblem() {
  return (
    <>
      <SlideTitle>
        Can You Hear a Word With Your <GradientText variant="purple">Whiskers?</GradientText> 🐭
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 xl:gap-10 mt-4 md:mt-6 xl:mt-8 items-start">

        {/* LEFT — the setup, from the paper's own figure */}
        <Figure
          src="/L5-mouse-setup.png"
          alt="A head-fixed mouse with its whiskers resting in a vibrating mesh grid"
          maxHeight="46vh"
          caption={
            <>
              The whiskers sit in a tiny mesh paddle that buzzes them. Figure from{' '}
              <a
                href="https://doi.org/10.1016/j.cub.2020.10.059"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bio-purple hover:text-bio-blue transition-colors font-semibold not-italic"
              >
                Bale et al., 2021
              </a>{' '}
              (CC BY 4.0)
            </>
          }
        />

        {/* RIGHT — the game, built up one beat at a time */}
        <div className="flex flex-col gap-4 md:gap-5">

          <p className="text-lg md:text-2xl xl:text-3xl text-gray-200 leading-relaxed">
            A mouse sits still while a machine buzzes its whiskers —{' '}
            <strong className="text-white">four short bursts in a row</strong>. A tactile
            &ldquo;word&rdquo;.
          </p>

          <SlideCard color="purple" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="purple" className="mb-2 md:mb-3">
              The game
            </CardHeading>
            <CardBody className="text-base md:text-xl xl:text-2xl">
              There are two words, built from the{' '}
              <strong>same four buzzes in a different order</strong>. One means water is coming —{' '}
              <span className="text-bio-green font-semibold">lick</span>. The other means{' '}
              <span className="text-bio-yellow font-semibold">hold still</span>. Lick at the wrong
              word and the next trial is delayed.
            </CardBody>
            <div className="flex flex-wrap gap-2 md:gap-3 mt-3 md:mt-4">
              {facts.map((f) => (
                <CardPill key={f} color="purple">
                  {f}
                </CardPill>
              ))}
            </div>
          </SlideCard>

          <SlideCard color="blue" layout="start" padding="tight" className="border-l-4">
            <CardBody className="text-base md:text-xl xl:text-2xl">
              🏫 Another Sussex lab, down the corridor — the{' '}
              <strong>Maravall Lab</strong>. And while the mouse plays, a microscope is watching a
              single neuron in its brain.
            </CardBody>
          </SlideCard>

        </div>

      </div>
    </>
  )
}
