import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

export function Slide02ClaudiaHook() {
  return (
    <>
      <SlideTitle>
        From One Sequence to <GradientText>Many</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 items-center">

        {/* LEFT — Claudia's new problem */}
        <div className="flex justify-center min-h-0">
          <figure className="rounded-xl overflow-hidden bg-white shadow-lg ring-1 ring-white/10 w-full max-w-[20rem] md:max-w-[24rem] xl:max-w-[30rem]">
            <img
              src="/1_7_Single_seq.png"
              alt="Claudia facing a large collection of DNA sequences to analyse"
              className="w-full h-auto object-contain"
            />
          </figure>
        </div>

        {/* RIGHT — the motivation that leads to lists */}
        <div className="flex flex-col gap-4 md:gap-6">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              Claudia&apos;s next task
            </CardHeading>
            <CardBody>
              She can analyse <strong>one</strong> sequence. Now her supervisor hands her a whole
              <strong> folder</strong> of them. Making a separate variable —{' '}
              <span className="font-mono">seq1, seq2, seq3…</span> — for each one would be madness.
            </CardBody>
          </SlideCard>

          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              The question
            </CardHeading>
            <CardBody>
              How do we move from handling <strong>one</strong> piece of data to handling{' '}
              <strong>many similar pieces</strong> at once? Python&apos;s answer is a{' '}
              <span className="text-bio-green font-semibold">container</span> — and the simplest
              one is a <span className="text-bio-green font-semibold">list</span>.
            </CardBody>
          </SlideCard>
        </div>

      </div>
    </>
  )
}
