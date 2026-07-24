import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

export function Slide02Hook() {
  return (
    <>
      <SlideTitle>
        From Three Codons to a <GradientText>Whole Gene</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0 items-center">

        {/* LEFT — Claudia illustration */}
        <div className="flex justify-center min-h-0">
          <figure className="rounded-xl overflow-hidden bg-white shadow-lg ring-1 ring-white/10 w-full max-w-[24rem] xl:max-w-[30rem]">
            <img src="/codons.png" alt="Claudia facing a long viral gene to translate" className="w-full h-auto object-contain" />
          </figure>
        </div>

        {/* RIGHT — the lesson rationale */}
        <div className="flex flex-col gap-4 md:gap-6">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              Three was fine. Three hundred?
            </CardHeading>
            <CardBody>
              You translated three codons by writing a line for each. But a real gene has{' '}
              <strong>hundreds</strong> of codons —{' '}
              <span className="font-mono text-bio-blue">seq[0:3], seq[3:6], seq[6:9], seq[9:12]…</span>{' '}
              by hand would take all day, and you&apos;d slip up by codon&nbsp;40.
            </CardBody>
          </SlideCard>

          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              The idea behind today
            </CardHeading>
            <CardBody>
              We need a way to tell the computer:{' '}
              <em>do this same step for every codon, on your own.</em> That&apos;s what{' '}
              <span className="text-bio-green font-semibold">control flow</span> gives us — and it
              turns a page of repetitive lines into a few that run themselves.
            </CardBody>
          </SlideCard>
        </div>

      </div>
    </>
  )
}
