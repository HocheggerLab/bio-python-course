import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { TracebackBox } from './TracebackBox'

export function Slide19Raise() {
  return (
    <>
      <SlideTitle>
        Fail Loudly — <GradientText variant="yellow">raise</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 items-start">

        <div className="flex flex-col gap-3 md:gap-4">
          <SlideCard color="neutral" layout="start" padding="compact">
            <CardBody className="text-xs md:text-sm xl:text-base">
              Skipping bad data is one option. The other is to <strong>stop, on purpose</strong>,
              with a message that says exactly what&apos;s wrong. That&apos;s{' '}
              <span className="font-mono">raise</span>.
            </CardBody>
          </SlideCard>

          <div className="rounded-xl border border-code-border bg-code-bg p-3 md:p-4 font-mono text-[11px] md:text-sm xl:text-base">
            <div className="text-gray-300">def gc_content(seq):</div>
            <div className="text-gray-300 pl-3">if len(seq) == 0:</div>
            <div className="text-gray-300 pl-6">raise ValueError(<span className="text-bio-yellow">&quot;empty sequence&quot;</span>)</div>
            <div className="text-gray-300 pl-3">gc = seq.count(&quot;G&quot;) + seq.count(&quot;C&quot;)</div>
            <div className="text-gray-300 pl-3">return round(gc / len(seq) * 100, 1)</div>
            <div className="text-gray-500 mt-2">gc_content(&quot;ATGC&quot;)  →  50.0</div>
            <div className="text-gray-500">gc_content(&quot;&quot;)      →  raises ↓</div>
          </div>

          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              A meaningful message beats a mystery
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              Without the guard, <span className="font-mono">len(seq)</span> being 0 would throw a
              cryptic <span className="font-mono">ZeroDivisionError</span> deep inside. Your{' '}
              <span className="font-mono">raise</span> stops it early and says <em>why</em> — in
              words the next person (you) will understand.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            The error is now <em>yours</em> — your type, your message:
          </p>
          <TracebackBox
            frames={[
              'Traceback (most recent call last):',
              '  File "analysis.py", line 7, in <module>',
              '    gc_content("")',
              '  File "analysis.py", line 3, in gc_content',
              '    raise ValueError("empty sequence")',
            ]}
            error={'ValueError: empty sequence'}
          />
          <SlideCard color="green" layout="start" padding="tight" className="border-l-4">
            <CardBody className="text-[11px] md:text-sm">
              This is the opposite of a program that quietly returns nonsense. A loud, early failure
              with a clear message is a <strong>gift</strong> — to whoever runs your code next.
            </CardBody>
          </SlideCard>
        </div>

      </div>
    </>
  )
}
