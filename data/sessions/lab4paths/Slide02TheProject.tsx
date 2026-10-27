import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

export function Slide02TheProject() {
  return (
    <>
      <SlideTitle>
        The project — <GradientText variant="yellow">99 bees, one gene</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 items-start">
        <div className="flex flex-col gap-3 md:gap-4 min-w-0">
          <figure className="min-w-0">
            <div className="rounded-xl overflow-hidden ring-1 ring-white/10">
              <img
                src="/L6-bumblebee.jpg"
                alt="A buff-tailed bumblebee queen, Bombus terrestris, feeding on lime flowers"
                className="w-full h-auto object-cover"
              />
            </div>
            <figcaption className="mt-1.5 text-center text-gray-400 text-[10px] md:text-xs xl:text-sm leading-relaxed">
              <em>Bombus terrestris</em>, the buff-tailed bumblebee — our reference bee.{' '}
              <span className="text-gray-500">Ivar Leidus, Wikimedia Commons, CC BY-SA 4.0</span>
            </figcaption>
          </figure>
          <SlideCard color="purple" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="purple" className="mb-1">
              📊 The goal
            </CardHeading>
            <CardBody>
              One program that turns 99 files into one table you can open in Excel:{' '}
              <span className="font-mono text-white">results/drift.csv</span>.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="green" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-1">
              🌼 Why bees?
            </CardHeading>
            <CardBody>
              Bees pollinate crops and wild flowers, and many species are in decline. To protect a species you
              first have to tell it apart from the others — and some bumblebees look almost identical.
            </CardBody>
          </SlideCard>
          <SlideCard color="blue" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-1">
              🧬 The data
            </CardHeading>
            <CardBody>
              The same stretch of one gene — <span className="text-white">COI</span>, the DNA barcode — from{' '}
              <span className="text-white">99 bee species</span>: 51 bumblebees and 48 other bees. Downloaded
              from GenBank, one FASTA file per species.
            </CardBody>
          </SlideCard>
          <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-1">
              ❓ The question
            </CardHeading>
            <CardBody>
              How far has each bee drifted from the buff-tailed bumblebee — in its{' '}
              <span className="text-white">DNA</span>, and in the <span className="text-white">protein</span> that
              DNA builds?
            </CardBody>
          </SlideCard>
        </div>
      </div>
    </>
  )
}
