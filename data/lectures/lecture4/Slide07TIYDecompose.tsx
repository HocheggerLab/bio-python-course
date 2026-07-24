'use client'

import { QRCodeSVG } from 'qrcode.react'
import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'

// Lecturer's permanent Poll Everywhere room.
// Rotate the active poll inside the Poll Everywhere dashboard before class — no redeploy needed.
const POLL_URL = 'https://pollev.com/your-handle'

const tasks = [
  'Write the steps in plain English — no Python',
  'Each step should be one thing you could look up how to do',
  'Stop when every step feels doable',
  'Submit how many steps you ended up with',
]

/* The translator's breakdown, as a worked example of the right granularity */
const exampleSteps = [
  'I have a sequence',
  'I need to isolate the codons',
  'I need to match each codon to an amino acid',
  'I need to assemble them into a protein',
]

export function Slide07TIYDecompose() {
  return (
    <>
      <SlideTitle>
        Try it Yourself — <GradientText variant="yellow">Break It Down</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        {/* LEFT — the problem + task + QR */}
        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
              The problem
            </CardHeading>
            <CardBody className="mb-3 md:mb-4 text-xs md:text-sm xl:text-base">
              You have <strong>10,000 sequences</strong> in list. Report the{' '}
              <strong>mean GC content</strong> of the ones that start with ATG
              <br />
              <span className="text-bio-yellow font-semibold">Do not write any code.</span> Write the
              plan.
            </CardBody>
            <CardList items={tasks} numbered color="yellow" />
          </SlideCard>

          <SlideCard color="blue" layout="start" padding="tight" className="border-l-4">
            <div className="flex items-center gap-3 md:gap-5">
              <div className="bg-white rounded-lg p-2 md:p-3 shrink-0">
                <QRCodeSVG value={POLL_URL} size={96} level="M" marginSize={0} />
              </div>
              <div className="min-w-0">
                <CardHeading size="sm" color="blue" className="mb-1 md:mb-2">
                  Submit your number
                </CardHeading>
                <p className="text-gray-300 text-[11px] md:text-sm xl:text-base leading-snug">
                  Scan with your phone — submit{' '}
                  <span className="text-bio-blue font-semibold">how many steps</span> your plan has.
                </p>
                <p className="font-mono text-[10px] md:text-xs xl:text-sm text-gray-500 mt-1 md:mt-2 break-all">
                  {POLL_URL}
                </p>
              </div>
            </div>
          </SlideCard>
        </div>

        {/* RIGHT — worked example of granularity + the punchline */}
        <div className="flex flex-col justify-center gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            This is what a step looks like — your translator, broken down:
          </p>

          <div className="rounded-xl border border-code-border bg-code-bg p-3 md:p-5">
            <ul className="flex flex-col gap-2 md:gap-3">
              {exampleSteps.map((s, i) => (
                <li key={s} className="flex items-center gap-3 md:gap-4">
                  <span
                    className="shrink-0 inline-flex items-center justify-center rounded-full
                               w-5 h-5 text-[10px] md:w-7 md:h-7 md:text-xs font-bold
                               bg-white/10 text-gray-400"
                  >
                    {i + 1}
                  </span>
                  <span className="text-xs md:text-base xl:text-lg text-gray-400">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              There is no single right answer
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              Some of you will say 3. Some will say 8. <strong>Both can be right.</strong> How finely
              you break a problem down is a <em>judgement</em>, not a rule — and it&apos;s the
              judgement that makes someone good at this.
            </CardBody>
          </SlideCard>
        </div>

      </div>
    </>
  )
}
