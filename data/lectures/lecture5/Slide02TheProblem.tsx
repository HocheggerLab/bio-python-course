import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { Figure } from '@/components/slides/layouts'

export function Slide02TheProblem() {
  return (
    <>
      <SlideTitle>
        What Happens When You Touch a <GradientText variant="purple">Whisker?</GradientText> 🐭
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 xl:gap-10 mt-4 md:mt-6 xl:mt-8 items-start">

        <Figure
          src="/L5-whiskers.png"
          alt="A mouse's face, its whiskers resting against a stimulator paddle"
          maxHeight="52vh"
          caption={
            <>
              Figure from{' '}
              <a
                href="https://doi.org/10.1016/j.cub.2020.10.059"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bio-purple hover:text-bio-blue transition-colors font-semibold not-italic"
              >
                Bale et al., 2021
              </a>{' '}
              — the Maravall Lab, just down the corridor at Sussex (CC BY 4.0)
            </>
          }
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
              While it plays, a microscope watches one neuron. Is that cell firing for the{' '}
              <strong>touch</strong>? For the <strong>decision</strong>? For the{' '}
              <strong>water</strong>? Today you find out — from the numbers.
            </CardBody>
          </SlideCard>

        </div>

      </div>
    </>
  )
}
