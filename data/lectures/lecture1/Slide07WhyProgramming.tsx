import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

export function Slide07WhyProgramming() {
  return (
    <>
      <SlideTitle>
        Why Should I Learn <GradientText>Programming?</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">

        {/* LEFT: cartoons illustrating Claudia's problem */}
        <div className="flex flex-col justify-center gap-3 md:gap-4 xl:gap-6 min-h-0">
          <div className="flex items-center gap-3 md:gap-4">
            <span className="text-2xl md:text-3xl xl:text-4xl">😰</span>
            <CardHeading size="sm">Claudia has a problem</CardHeading>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 xl:gap-5 items-center justify-items-center">
            <figure className="rounded-xl overflow-hidden bg-white shadow-lg ring-1 ring-white/10 w-full max-w-[17rem] md:max-w-[19rem] xl:max-w-[26rem] 2xl:max-w-[31rem]">
              <img
                src="/1_7_many_seq.png"
                alt="Claudia happily analysing a single sequence"
                className="w-full h-auto object-contain"
              />
            </figure>
            <figure className="rounded-xl overflow-hidden bg-white shadow-lg ring-1 ring-white/10 w-full max-w-[17rem] md:max-w-[19rem] xl:max-w-[26rem] 2xl:max-w-[31rem]">
              <img
                src="/1_7_Single_seq.png"
                alt="Claudia overwhelmed by 1000s of DNA sequences"
                className="w-full h-auto object-contain"
              />
            </figure>
          </div>

          <p className="text-center text-gray-300 text-sm md:text-base xl:text-xl 2xl:text-2xl italic leading-snug">
            She did so well analysing a sequence! Now her supervisor just handed her{' '}
            <span className="text-bio-yellow font-semibold not-italic">10,000 DNA sequences</span> —
            she needs ORFs, GC content and a report{' '}
            <span className="text-bio-yellow font-semibold not-italic">by Friday.</span>
          </p>
        </div>

        {/* RIGHT: three outcome cards */}
        <div className="flex flex-col gap-3 md:gap-4 xl:gap-6 min-h-0">
          <SlideCard color="red" layout="start" padding="compact" className="border-l-4 flex-1">
            <CardHeading size="sm" color="red" className="mb-2 md:mb-3">
              Without programming
            </CardHeading>
            <CardBody>
              One sequence takes ~10 minutes manually. 10,000 sequences ={' '}
              <span className="text-red-400 font-semibold">69 days</span> of non-stop work.
            </CardBody>
          </SlideCard>

          <SlideCard color="green" layout="start" padding="compact" className="border-l-4 flex-1">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              With a Python script
            </CardHeading>
            <CardBody>
              A 30-line program processes all 10,000 sequences in{' '}
              <span className="text-bio-green font-semibold">under a minute.</span>{' '}
              Claudia spends Friday interpreting the results — not counting bases.
            </CardBody>
          </SlideCard>

          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4 flex-1">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              By the end of this module
            </CardHeading>
            <CardBody>
              You will be able to write that program — and adapt it to{' '}
              <span className="text-bio-blue font-semibold">your own research questions.</span>
            </CardBody>
          </SlideCard>
        </div>

      </div>
    </>
  )
}
