import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardPill } from '@/components/slides/SlideCard'

const stats = ['1,620 surveys', '83 allotment plots', '18 crops', '8 pollinator types']

export function Slide02TheProblem() {
  return (
    <>
      <SlideTitle>
        Today's Question: Can a City Feed Its Own <GradientText variant="green">Bees?</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 xl:gap-10 mt-4 md:mt-6 xl:mt-8 items-start">

        {/* LEFT — bee photo (placeholder until the Nicholls Lab image is added) */}
        <figure className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-br from-bio-green/20 via-bio-dark to-bio-blue/10 min-h-0 flex items-center justify-center">
          {/* TODO: drop the approved photo at public/nicholls_bee.jpg and swap this block for an <img> */}
          <div className="text-center px-6">
            <div className="text-7xl md:text-8xl xl:text-9xl mb-3 md:mb-5">🐝</div>
            <p className="text-gray-300 text-sm md:text-lg xl:text-xl">
              A bumblebee working an allotment crop
            </p>
          </div>
          <figcaption className="absolute bottom-0 inset-x-0 bg-black/50 backdrop-blur px-4 py-2 text-[11px] md:text-sm text-gray-200">
            Photo:{' '}
            <a
              href="https://www.sussex.ac.uk/research/labs/nicholls-lab/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bio-green hover:text-bio-blue transition-colors font-semibold"
            >
              Nicholls Lab, University of Sussex
            </a>
          </figcaption>
        </figure>

        {/* RIGHT — build the question with care, then the study */}
        <div className="flex flex-col gap-4 md:gap-5">

          <p className="text-lg md:text-2xl xl:text-3xl text-gray-200 leading-relaxed">
            Most of our fruit and veg needs an{' '}
            <strong className="text-white">insect to pollinate it</strong> — and pollinators are in
            decline. So a sharp question:{' '}
            <span className="text-bio-yellow font-semibold">
              do our cities still have enough of them to feed themselves?
            </span>
          </p>

          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              One way to find out
            </CardHeading>
            <CardBody className="text-base md:text-xl xl:text-2xl">
              A colleague here at Sussex — the <strong>Nicholls Lab</strong> — spent two summers
              counting every insect visiting crops on Brighton&apos;s allotments.
            </CardBody>
            <div className="flex flex-wrap gap-2 md:gap-3 mt-3 md:mt-4">
              {stats.map((s) => (
                <CardPill key={s} color="blue">
                  {s}
                </CardPill>
              ))}
            </div>
          </SlideCard>

          <a
            href="https://nph.onlinelibrary.wiley.com/doi/full/10.1002/ppp3.10376"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start text-sm md:text-lg xl:text-xl font-semibold text-bio-green hover:text-bio-blue transition-colors"
          >
            📄 Read the paper — Nicholls et al., 2023 →
          </a>

        </div>

      </div>
    </>
  )
}
