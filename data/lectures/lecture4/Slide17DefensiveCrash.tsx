import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { TracebackBox } from './TracebackBox'

export function Slide17DefensiveCrash() {
  return (
    <>
      <SlideTitle>
        Real Data Is <GradientText variant="yellow">Messy</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">

        <div className="flex flex-col justify-center gap-3 md:gap-4">
          <SlideCard color="neutral" layout="start" padding="compact">
            <CardBody className="text-xs md:text-sm xl:text-base">
              Here&apos;s our <span className="font-mono">reverse_complement</span> from earlier — it
              worked perfectly. Then a sequencer hands you an{' '}
              <span className="font-mono text-red-400">N</span>: an{' '}
              <strong>ambiguous base</strong>, where the machine wasn&apos;t sure. It&apos;s
              everywhere in real data.
            </CardBody>
          </SlideCard>

          <div className="rounded-xl border border-code-border bg-code-bg p-3 md:p-4 font-mono text-[11px] md:text-sm xl:text-base">
            <div className="text-gray-300">def reverse_complement(seq):</div>
            <div className="text-gray-300 pl-3">complement = {'{'}&quot;A&quot;:&quot;T&quot;, &quot;T&quot;:&quot;A&quot;, &quot;G&quot;:&quot;C&quot;, &quot;C&quot;:&quot;G&quot;{'}'}</div>
            <div className="text-gray-300 pl-3">rc = &quot;&quot;</div>
            <div className="text-gray-300 pl-3">for base in seq[::-1]:</div>
            <div className="text-gray-300 pl-6">rc = rc + complement[base]<span className="text-red-400 font-bold">  ← no key &apos;N&apos;</span></div>
            <div className="text-gray-300 pl-3">return rc</div>
            <div className="text-gray-500 mt-2">reverse_complement(&quot;ATGC<span className="text-red-400">N</span>GTA&quot;)</div>
          </div>

          <SlideCard color="red" layout="start" padding="tight" className="border-l-4">
            <CardBody className="text-[11px] md:text-sm">
              <span className="font-mono">complement[&quot;N&quot;]</span> has no entry, so the lookup
              throws. One bad base and the <strong>whole program stops</strong>.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col justify-center gap-3 md:gap-4">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            The traceback traces <em>into</em> the function — two frames, then the cause:
          </p>
          <TracebackBox
            frames={[
              'Traceback (most recent call last):',
              '  File "analysis.py", line 8, in <module>',
              '    print(reverse_complement("ATGCNGTA"))',
              '  File "analysis.py", line 5, in reverse_complement',
              '    rc = rc + complement[base]',
            ]}
            error={"KeyError: 'N'"}
          />
          <SlideCard color="blue" layout="start" padding="tight" className="border-l-4">
            <CardBody className="text-[11px] md:text-sm">
              <span className="font-mono text-red-400">KeyError: &apos;N&apos;</span> = a key that
              isn&apos;t in the dict. The <strong>second frame</strong> points at the exact line{' '}
              <em>inside</em> the function — that&apos;s the traceback doing its job.
            </CardBody>
          </SlideCard>
        </div>

      </div>
    </>
  )
}
