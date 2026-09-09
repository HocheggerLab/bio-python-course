import { GradientText } from '@/components/slides/SlideTitle'
import { SplitSlide } from '@/components/slides/layouts'
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

export function Slide12Naming() {
  return (
    <SplitSlide
      title={<>Naming <GradientText>Functions</GradientText></>}
      lead={
        <>
          Same rules as variables. The one difference: a variable holds a thing, so it gets a{' '}
          <strong>noun</strong>; a function performs an action, so it wants a <strong>verb</strong>.
        </>
      }
      ratio="even"
      left={
        <div className="flex flex-col gap-4 md:gap-5">
          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              Nothing new to learn
            </CardHeading>
            <CardList items={rules} bullet="✓" color="green" />
          </SlideCard>

          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardBody className="text-sm md:text-base xl:text-lg">
              <span className="font-mono text-bio-blue">translate()</span>,{' '}
              <span className="font-mono text-bio-blue">reverse_complement()</span>,{' '}
              <span className="font-mono text-bio-blue">count_codons()</span> — each name says what
              the function <em>does</em>.
            </CardBody>
          </SlideCard>
        </div>
      }
      right={
        <div className="flex flex-col gap-3 md:gap-4">
          <p className="text-gray-400 text-sm md:text-base xl:text-lg italic">
            All four of these run. Only one tells you what it does:
          </p>
          <div className="rounded-md border border-code-border bg-code-bg p-3 md:p-5">
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
        </div>
      }
      note={
        <>
          Python doesn&apos;t care — <span className="font-mono not-italic">def f(x):</span> runs
          perfectly. The name is <strong>for humans</strong>, and the human who&apos;ll be most
          confused by <span className="font-mono not-italic">f</span> is{' '}
          <strong>you, in six weeks</strong>.
        </>
      }
    />
  )
}
