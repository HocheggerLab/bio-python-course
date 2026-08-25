import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

export function Slide02ClaudiaHook() {
  return (
    <>
      <SlideTitle>
        Claudia&apos;s Next <GradientText>Problem</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 items-center">

        {/* LEFT — Claudia at her desk */}
        <div className="flex justify-center min-h-0">
          <figure className="rounded-xl overflow-hidden bg-white shadow-lg ring-1 ring-white/10 w-full max-w-[22rem] md:max-w-[26rem] xl:max-w-[34rem]">
            <img
              src="/claudia_algorithm.png"
              alt="Claudia at her desk with three sequences on screen — one full of Ns — thinking: I could translate them one by one, but I want to do them all in one go"
              className="w-full h-auto object-contain"
            />
          </figure>
        </div>

        {/* RIGHT — the problem */}
        <div className="flex flex-col gap-3 md:gap-4 xl:gap-5">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              Many sequences, not one
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              Your translator handles <strong>one</strong> sequence. Claudia has a folder of them.
              She could copy-paste the loop for each — <span className="font-mono">seq1</span>,{' '}
              <span className="font-mono">seq2</span>, <span className="font-mono">seq3</span>… — but
              she wants to <strong>do them all in one go</strong>.
            </CardBody>
          </SlideCard>

          <SlideCard color="red" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="red" className="mb-2 md:mb-3">
              …and one of them is broken
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              Look at sequence <strong>2</strong> on her screen — it&apos;s full of{' '}
              <span className="font-mono text-red-400">N</span>s. Real sequencing data is like this.
              Her program didn&apos;t crash: it handed back{' '}
              <span className="font-mono text-red-400">MAANNNN…RGPNS*</span> — something that{' '}
              <strong>looks like a protein and isn&apos;t</strong>.
            </CardBody>
          </SlideCard>

          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
              What she needs
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              A <strong>plan</strong> for the whole job · her translator{' '}
              <strong>packaged up</strong> so it runs on any sequence · and a program that{' '}
              <strong>says so</strong> when the data is wrong. Look at the books on her desk — that
              is today.
            </CardBody>
          </SlideCard>
        </div>

      </div>
    </>
  )
}
