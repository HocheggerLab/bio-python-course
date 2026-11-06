import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard, CardHeading, CardBody, CardEyebrow } from '@/components/slides/SlideCard'

/* The biology the bet rests on. Without it, "lose its bee visits" reads as if
   honeybees and bumblebees were the same thing: every crop is visited by
   both, honeybees are managed and would stay, wild bumblebees are the ones in
   decline. So a crop's loss depends on how much of its visiting the
   bumblebees do. Deliberately says nothing about which crop. */

export function SlideTwoBees() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Two kinds of bee, <GradientText variant="yellow">one flower</GradientText>
        </>
      }
      lead={
        <>
          Each survey counts who visited a patch of flowers. Two columns matter today:{' '}
          <span className="font-mono text-white">Honeybees</span> and{' '}
          <span className="font-mono text-white">Bumblebees</span>. Both are bees, both carry pollen
          — but they are very different animals.
        </>
      }
      closing={
        <div className="rounded-md border border-bio-blue/30 bg-bio-blue/[0.07] px-4 md:px-7 py-3 md:py-4">
          <p className="font-mono text-center text-sm md:text-xl xl:text-2xl text-gray-200">
            bee visits = <span className="text-bio-blue">honeybee visits</span> +{' '}
            <span className="text-bio-yellow">bumblebee visits</span>
          </p>
          <p className="mt-2 text-center text-gray-300 text-sm md:text-lg xl:text-xl leading-snug">
            Take the bumblebees away and the honeybees are still there. A crop both of them visit
            would cope. A crop that mostly relies on bumblebees would be left with almost no bees at
            all.
          </p>
        </div>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        <SlideCard color="blue" layout="start" padding="compact" className="border-t-4">
          <CardEyebrow color="blue">Apis mellifera</CardEyebrow>
          <CardHeading size="sm" color="blue" className="mb-2 mt-1">
            🐝 Honeybees
          </CardHeading>
          <CardBody>
            One species, mostly <span className="text-white">kept by beekeepers</span>: livestock,
            in hives of tens of thousands. If a colony dies, the beekeeper replaces it.
          </CardBody>
        </SlideCard>
        <SlideCard color="yellow" layout="start" padding="compact" className="border-t-4">
          <CardEyebrow color="yellow">Bombus</CardEyebrow>
          <CardHeading size="sm" color="yellow" className="mb-2 mt-1">
            Bumblebees
          </CardHeading>
          <CardBody>
            About two dozen <span className="text-white">wild</span> species in the UK, six in our
            data. Small nests in the ground and hedges. Big and hairy: they fly in cold, wet weather,
            and their tongues come in different lengths — so they suit different flowers.
          </CardBody>
        </SlideCard>
        <SlideCard color="red" layout="start" padding="compact" className="border-t-4">
          <CardEyebrow color="red">The worry</CardEyebrow>
          <CardHeading size="sm" color="red" className="mb-2 mt-1">
            Why bumblebees?
          </CardHeading>
          <CardBody>
            Wild bumblebees are declining: lost meadows and hedges, pesticides, disease, a warming
            climate. The short-haired bumblebee was last seen in Britain in 1988. No beekeeper can
            restock them.
          </CardBody>
        </SlideCard>
      </div>
    </ConceptSlide>
  )
}
