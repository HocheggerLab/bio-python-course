import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { Figure } from '@/components/slides/layouts'

export function Slide23TheExperiment() {
  return (
    <>
      <SlideTitle>
        The Experiment — Touching a{' '}
        <GradientText variant="purple">Whisker</GradientText> 🐭
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 xl:gap-10 mt-4 md:mt-6 xl:mt-8 items-start">

        <Figure
          src="/L5-whiskers.jpg"
          alt="A wood mouse seen head-on, its whiskers fanned out to either side"
          maxHeight="52vh"
          caption={
            <>
              Wood mouse. Photo by{' '}
              <a
                href="https://commons.wikimedia.org/wiki/File:Apodemus_sylvaticus_bosmuis.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bio-purple hover:text-bio-blue transition-colors font-semibold not-italic"
              >
                Rasbak
              </a>
              , cropped,{' '}
              <a
                href="https://creativecommons.org/licenses/by-sa/3.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bio-purple hover:text-bio-blue transition-colors font-semibold not-italic"
              >
                CC BY-SA 3.0
              </a>
            </>
          }

        />

        <div className="flex flex-col gap-4 md:gap-5">


          <SlideCard color="purple" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="purple" className="mb-2 md:mb-3">
              The two signals
            </CardHeading>
            <CardBody className="text-base md:text-lg xl:text-xl">
              A mouse feels a short &ldquo;word&rdquo; of vibrations on its whiskers. The two words
              use the same vibrations in a different order — like <em>dog</em> and <em>god</em>.
            </CardBody>
            <ul className="mt-2 md:mt-3 flex flex-col gap-1 text-base md:text-lg xl:text-xl text-gray-300">
              <li>
                <span className="text-bio-green font-semibold">go</span> — lick, and water arrives.
              </li>
              <li>
                <span className="text-bio-yellow font-semibold">nogo</span> — don&apos;t lick; there is no water.
              </li>
            </ul>
          </SlideCard>

          <SlideCard color="blue" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              The question
            </CardHeading>
            <CardBody className="text-base md:text-lg xl:text-xl">
              We record one neuron while the words play. Does it fire for{' '}
              <strong className="text-bio-green">go</strong>? Does it do the same for{' '}
              <strong className="text-bio-yellow">nogo</strong> — or can it tell them apart? You find out
              — from the numbers.
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
