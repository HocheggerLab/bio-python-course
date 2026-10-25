import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'
import { SlideNote } from '@/components/slides/layouts'

const gene: React.ReactNode[] = [
  <>
    <span className="text-white">Cytochrome c oxidase I</span> — the heart of the last step of respiration. It hands
    electrons to oxygen: the reason you, and every bee, need to breathe.
  </>,
  <>
    It sits in the <span className="text-white">mitochondrial</span> DNA: hundreds of copies per cell, inherited
    from the mother, easy to sequence.
  </>,
  <>
    Break it and the cell runs out of ATP. So the <span className="text-white">protein</span> can hardly change.
  </>,
]

const evolution: React.ReactNode[] = [
  <>
    The genetic code has spare codons: change the <span className="text-white">3rd base</span> and you often get the
    same amino acid. Those <span className="text-white">silent</span> changes pile up freely.
  </>,
  <>
    So the DNA drifts while the protein stays put. Enough drift to tell species apart — which makes COI the{' '}
    <span className="text-white">DNA barcode</span> of animal life.
  </>,
  <>
    Bumblebees need it: <em>Bombus terrestris</em>, <em>B. lucorum</em> and <em>B. cryptarum</em> look almost
    identical. The barcode tells them apart.
  </>,
]

export function Slide04TheBiology() {
  return (
    <>
      <SlideTitle>
        The biology — <GradientText variant="green">what is this gene?</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-300 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        Before any code: what are these 621 bases, and why compare them across 99 bees?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6">
        <SlideCard color="blue" layout="start" padding="compact">
          <CardHeading size="sm" color="blue" className="mb-3">
            🔋 COI — a gene every animal needs
          </CardHeading>
          <CardList items={gene} bullet="▸" color="blue" />
        </SlideCard>
        <SlideCard color="green" layout="start" padding="compact">
          <CardHeading size="sm" color="green" className="mb-3">
            🧬 Why its evolution is interesting
          </CardHeading>
          <CardList items={evolution} bullet="▸" color="green" />
        </SlideCard>
      </div>

      <SlideCard color="yellow" layout="start" padding="tight" className="mt-4 md:mt-6 border-l-4">
        <CardBody>
          🐝 <span className="text-white">Your question for the homework:</span> across 99 bees, how much has the DNA
          changed — and how much has the protein? Which bees are close cousins of the buff-tailed bumblebee, and which
          are far away?
        </CardBody>
      </SlideCard>

      <SlideNote>
        Expect low GC numbers: bee mitochondria are famously AT-rich — around three quarters A and T.
      </SlideNote>
    </>
  )
}
