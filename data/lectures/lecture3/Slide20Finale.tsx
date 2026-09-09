import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

const FRAGMENT = 'TATGGTACGCTGGACTTTGTGGGATACCCTCGCTTTCCTGCTCCTGTTGAGTTTATTGCT'

export function Slide20Finale() {
  return (
    <>
      <SlideTitle>
        Two Proteins, <GradientText>One Sequence</GradientText>
      </SlideTitle>

      <div className="flex flex-col gap-3 md:gap-4 xl:gap-5 mt-3 md:mt-4">

        {/* the shared fragment */}
        <div>
          <p className="text-gray-400 text-[11px] md:text-sm mb-1 md:mb-2">
            One 60-base stretch of real phiX174 DNA:
          </p>
          <div className="bg-bio-dark/60 rounded-lg px-3 py-2 md:px-4 md:py-3 font-mono text-[10px] md:text-sm xl:text-base text-bio-light-blue overflow-x-auto whitespace-nowrap">
            seq = &quot;{FRAGMENT}&quot;
          </div>
        </div>

        {/* two frames */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">

          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              Frame 0 — read normally
            </CardHeading>
            <div className="bg-bio-dark/60 rounded px-2 py-1 md:px-3 md:py-2 font-mono text-[11px] md:text-sm text-gray-200 mb-2 md:mb-3 overflow-x-auto whitespace-nowrap">
              for i in range(<span className="text-bio-yellow font-bold">0</span>, len(seq) - 2, 3):
            </div>
            <div className="bg-output-bg border-l-4 border-l-bio-light-blue rounded px-3 py-2 font-mono text-xs md:text-base xl:text-lg text-bio-light-blue break-all">
              YGTLDFVGYPRFPAPVEFIA
            </div>
            <CardBody className="mt-2 md:mt-3 text-xs md:text-sm">
              gene <strong>D</strong> · scaffold protein
            </CardBody>
          </SlideCard>

          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              Frame +1 — shift the start one base
            </CardHeading>
            <div className="bg-bio-dark/60 rounded px-2 py-1 md:px-3 md:py-2 font-mono text-[11px] md:text-sm text-gray-200 mb-2 md:mb-3 overflow-x-auto whitespace-nowrap">
              for i in range(<span className="text-bio-yellow font-bold">1</span>, len(seq) - 2, 3):
            </div>
            <div className="bg-output-bg border-l-4 border-l-bio-green rounded px-3 py-2 font-mono text-xs md:text-base xl:text-lg text-bio-green break-all">
              MVRWTLWDTLAFLLLLSLL
            </div>
            <CardBody className="mt-2 md:mt-3 text-xs md:text-sm">
              gene <strong>E</strong> · lysis enzyme
            </CardBody>
          </SlideCard>

        </div>

        {/* punchline */}
        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
            Genome economy, made visible
          </CardHeading>
          <CardBody className="text-xs md:text-sm xl:text-base">
            Same loop, run twice — only the <span className="font-mono text-bio-yellow">0</span> became
            a <span className="font-mono text-bio-yellow">1</span> — and a completely different protein
            falls out of the same letters. This is how phiX174 packs more genes than it has room for.
            Overlapping genes were <em>discovered</em> here, in the first genome ever sequenced
            (Sanger, 1977). Remember the 30&nbsp;kb ceiling? This is the trick that beats it.
          </CardBody>
        </SlideCard>

      </div>
    </>
  )
}
