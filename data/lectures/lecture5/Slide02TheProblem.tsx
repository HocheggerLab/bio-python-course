import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { Figure } from '@/components/slides/layouts'

export function Slide02TheProblem() {
  return (
    <>
      <SlideTitle>
        Today&apos;s Experiment — Touching a{' '}
        <GradientText variant="purple">Whisker</GradientText> 🐭
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 xl:gap-10 mt-4 md:mt-6 xl:mt-8 items-start">

        <Figure
          src="/L5-whiskers.png"
          alt="A mouse's face, its whiskers resting against a stimulator paddle"
          maxHeight="52vh"
          caption="Figure from Bale et al., 2021 (CC BY 4.0) — a lab just down the corridor" 
        />

        <div className="flex flex-col gap-4 md:gap-5">

          <p className="text-lg md:text-2xl xl:text-3xl text-gray-200 leading-relaxed">
            A mouse reads the world with its{' '}
            <strong className="text-white">whiskers</strong>. Brush one and a patch of its brain
            lights up — but what happens next?
          </p>

          <SlideCard color="purple" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="purple" className="mb-2 md:mb-3">
              The set-up
            </CardHeading>
            <CardBody className="text-base md:text-xl xl:text-2xl">
              A mouse learns that one signal on its whiskers means{' '}
              <span className="text-bio-green font-semibold">go — there is water</span>, and a
              different signal means <span className="text-bio-yellow font-semibold">stay put</span>.
              Two signals, two decisions.
            </CardBody>
          </SlideCard>

          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              The question
            </CardHeading>
            <CardBody className="text-base md:text-xl xl:text-2xl">
              We measure <strong>neural activity</strong> while the animal receives the signal.
              Is the neuron responding to the <strong>touch</strong>? To the{' '}
              <strong>decision</strong>? To the <strong>water</strong>? Today you find out — from
              the numbers.
            </CardBody>
          </SlideCard>

          {/* Where this came from — one line, both links, no ceremony. */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm md:text-lg xl:text-xl font-semibold">
            <a
              href="https://www.sussex.ac.uk/lifesci/maravalllab/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bio-green hover:text-bio-blue transition-colors"
            >
              🔬 The Maravall Lab, Sussex →
            </a>
            <a
              href="https://doi.org/10.1016/j.cub.2020.10.059"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bio-green hover:text-bio-blue transition-colors"
            >
              📄 Bale et al., 2021 →
            </a>
          </div>

        </div>

      </div>
    </>
  )
}
