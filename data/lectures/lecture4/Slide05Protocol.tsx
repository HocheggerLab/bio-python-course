import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

/* The plan — what you actually think, before any protocol exists */
const plan = [
  { n: 1, goal: 'Lyse the cells', steps: '1–2', text: 'text-bio-blue', bubble: 'bg-bio-blue/20 text-bio-blue' },
  { n: 2, goal: 'Get rid of genomic DNA and protein', steps: '3', text: 'text-bio-yellow', bubble: 'bg-bio-yellow/20 text-bio-yellow' },
  { n: 3, goal: 'Isolate the DNA and wash it', steps: '4–5', text: 'text-bio-green', bubble: 'bg-bio-green/20 text-bio-green' },
  { n: 4, goal: 'Collect the pure DNA in a final buffer', steps: '6', text: 'text-purple-400', bubble: 'bg-purple-400/20 text-purple-400' },
]

/* The protocol — the steps, banded to match the plan */
const protocol = [
  { n: 1, text: 'Resuspend the pellet in 250 µl buffer P1', bar: 'border-bio-blue' },
  { n: 2, text: 'Add 250 µl P2, invert 6×, leave ≤ 5 min', bar: 'border-bio-blue' },
  { n: 3, text: 'Add 350 µl N3, invert, spin 10 min', bar: 'border-bio-yellow' },
  { n: 4, text: 'Apply the supernatant to the column, spin 1 min', bar: 'border-bio-green' },
  { n: 5, text: 'Wash with 750 µl PE, spin', bar: 'border-bio-green' },
  { n: 6, text: 'Elute in 50 µl EB', bar: 'border-purple-400' },
]

export function Slide05Protocol() {
  return (
    <>
      <SlideTitle>
        You Already Do This <GradientText variant="green">at the Bench</GradientText>
      </SlideTitle>

      <div className="flex flex-col gap-3 md:gap-4 mt-3 md:mt-4 flex-1 min-h-0">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 flex-1 min-h-0">

          {/* LEFT — the plan */}
          <div className="flex flex-col gap-2 md:gap-3 min-h-0">
            <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
              <strong className="not-italic text-white">The plan</strong> — what you think before any
              protocol exists:
            </p>
            <div className="rounded-xl border border-code-border bg-code-bg p-3 md:p-5 flex-1 flex flex-col justify-center">
              <ul className="flex flex-col gap-3 md:gap-5">
                {plan.map((p) => (
                  <li key={p.n} className="flex items-center gap-3 md:gap-4">
                    <span
                      className={`shrink-0 inline-flex items-center justify-center rounded-full
                                  w-6 h-6 text-[11px] md:w-9 md:h-9 md:text-sm font-bold ${p.bubble}`}
                    >
                      {p.n}
                    </span>
                    <span className={`flex-1 text-xs md:text-base xl:text-lg ${p.text}`}>
                      {p.goal}
                    </span>
                    <span className="shrink-0 text-[10px] md:text-xs text-gray-500 font-mono">
                      steps {p.steps}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT — the protocol */}
          <div className="flex flex-col gap-2 md:gap-3 min-h-0">
            <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
              <strong className="not-italic text-white">The protocol</strong> — the steps that carry
              it out:
            </p>
            <div className="rounded-xl border border-code-border bg-code-bg p-3 md:p-4 flex-1 flex flex-col justify-center">
              <ul className="flex flex-col gap-1 md:gap-2">
                {protocol.map((s) => (
                  <li
                    key={s.n}
                    className={`flex items-start gap-2 md:gap-3 border-l-4 ${s.bar} pl-2 md:pl-3 py-1`}
                  >
                    <span className="shrink-0 font-mono text-[10px] md:text-xs text-gray-500 pt-0.5">
                      {s.n}
                    </span>
                    <span className="text-[11px] md:text-sm xl:text-base text-gray-300 leading-snug">
                      {s.text}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 text-[10px] md:text-xs mt-2 md:mt-3 pl-3 md:pl-4 italic">
                …buffers P1, P2, N3 — <span className="text-bio-yellow">see p. 42</span>
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM — the two payoffs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          <SlideCard color="green" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-1 md:mb-2">
              Nobody starts at step 1
            </CardHeading>
            <CardBody className="text-[11px] md:text-sm">
              You thought in <strong>four goals</strong>, then wrote <strong>six steps</strong>. One
              goal can take two steps, or one. That&apos;s the same two levels as your translator:{' '}
              <em>plan first, then code</em>.
            </CardBody>
          </SlideCard>

          <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-1 md:mb-2">
              &quot;See p. 42&quot; — that&apos;s a function call
            </CardHeading>
            <CardBody className="text-[11px] md:text-sm">
              The protocol never re-prints the recipe for P1. It <strong>names</strong> it and points
              elsewhere — written once, used by every protocol in the book.
            </CardBody>
          </SlideCard>
        </div>

      </div>
    </>
  )
}
