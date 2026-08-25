import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'

const rules = [
  'Same rules as variables — Session 1, all over again',
  'Letters, digits, underscores — no spaces, no dashes',
  'snake_case: reverse_complement, gc_content',
  'Avoid Python words: list, print, sum…',
]

const examples = [
  { code: 'def f(s):', ok: false, why: 'What is f? What is s?' },
  { code: 'def doStuff(s):', ok: false, why: 'camelCase — that’s JavaScript' },
  { code: 'def revcomp2(s):', ok: false, why: 'Why 2? Where’s 1?' },
  { code: 'def reverse_complement(seq):', ok: true, why: 'Reads like English' },
]

export function Slide09cNaming() {
  return (
    <>
      <SlideTitle>
        Naming <GradientText>Functions</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">

        {/* LEFT — the rules, plus the one new idea */}
        <div className="flex flex-col justify-center gap-3 md:gap-4">
          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              Nothing new to learn
            </CardHeading>
            <CardList items={rules} bullet="✓" color="green" />
          </SlideCard>

          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              One difference: a function <em>does</em> something
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              A variable holds a thing, so it gets a <strong>noun</strong>:{' '}
              <span className="font-mono">sequence</span>,{' '}
              <span className="font-mono">protein</span>. A function performs an action, so it
              usually wants a <strong>verb</strong>:{' '}
              <span className="font-mono text-bio-blue">translate()</span>,{' '}
              <span className="font-mono text-bio-blue">reverse_complement()</span>,{' '}
              <span className="font-mono text-bio-blue">count_codons()</span>.
            </CardBody>
          </SlideCard>

          <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
            <CardBody className="text-[11px] md:text-sm">
              Python doesn&apos;t care. <span className="font-mono">def f(x):</span> runs perfectly.
              The name is <strong>for humans</strong> — and the human who&apos;ll be most confused by{' '}
              <span className="font-mono">f</span> is <strong>you, in six weeks</strong>.
            </CardBody>
          </SlideCard>
        </div>

        {/* RIGHT — good vs bad */}
        <div className="flex flex-col justify-center gap-3 md:gap-4">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            All four of these run. Only one tells you what it does:
          </p>

          <div className="rounded-xl border border-code-border bg-code-bg p-3 md:p-5">
            <ul className="flex flex-col gap-3 md:gap-5">
              {examples.map((e) => (
                <li key={e.code} className="flex items-start gap-3 md:gap-4">
                  <span className={`shrink-0 text-base md:text-2xl ${e.ok ? '' : 'opacity-60'}`}>
                    {e.ok ? '✅' : '❌'}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div
                      className={`font-mono text-xs md:text-base xl:text-lg ${
                        e.ok ? 'text-bio-green font-bold' : 'text-gray-500 line-through'
                      }`}
                    >
                      {e.code}
                    </div>
                    <div className="text-gray-500 text-[10px] md:text-xs xl:text-sm mt-0.5 italic">
                      {e.why}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <SlideCard color="neutral" layout="start" padding="tight">
            <CardBody className="text-[11px] md:text-sm">
              💡 If you can&apos;t think of a good name, that&apos;s often a hint the function is
              doing <strong>more than one thing</strong> — and wants breaking down further.
            </CardBody>
          </SlideCard>
        </div>

      </div>
    </>
  )
}
