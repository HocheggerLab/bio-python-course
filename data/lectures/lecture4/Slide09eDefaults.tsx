import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `def codon_at(seq, position=0):
    return seq[position:position+3]

print(codon_at("ATGGTACGC"))       # no position given → uses 0
print(codon_at("ATGGTACGC", 3))
print(codon_at("ATGGTACGC", 6))
`

const demoOutput = `ATG
GTA
CGC`

export function Slide09eDefaults() {
  return (
    <>
      <SlideTitle>
        Two Parameters — and a <GradientText variant="yellow">Default</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col justify-center gap-3 md:gap-4">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              More than one box
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              Separate parameters with a comma. They fill up{' '}
              <strong>in the order you pass them</strong>:{' '}
              <span className="font-mono">codon_at(&quot;ATGGTACGC&quot;, 3)</span> puts the sequence
              in <span className="font-mono">seq</span> and the 3 in{' '}
              <span className="font-mono">position</span>.
            </CardBody>
          </SlideCard>

          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
              <span className="font-mono">position=0</span> — a default
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              Give a parameter a value in the <span className="font-mono">def</span> line and it
              becomes <strong>optional</strong>. Say nothing and you get{' '}
              <span className="font-mono">0</span>. It&apos;s a sensible answer to &quot;what if they
              don&apos;t tell me?&quot;
            </CardBody>
          </SlideCard>

          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              Remember last week?
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base mb-2 md:mb-3">
              To read the second reading frame you <strong>edited the file</strong> —{' '}
              <span className="font-mono">frame = 0</span> became{' '}
              <span className="font-mono">frame = 1</span> — and re-ran everything. With a default,
              you just <em>ask</em>:
            </CardBody>
            <div className="bg-bio-dark/60 rounded px-2 py-2 font-mono text-[10px] md:text-sm text-gray-300 overflow-x-auto">
              <div>translate(seq)<span className="text-gray-500"># frame 0 — gene D</span></div>
              <div>translate(seq, 1)<span className="text-gray-500"># frame 1 — gene E</span></div>
            </div>
          </SlideCard>

          <SlideCard color="neutral" layout="start" padding="tight">
            <CardBody className="text-[11px] md:text-sm">
              No editing. No re-running the whole script. Two proteins,{' '}
              <strong>two lines</strong> — because the thing that changes is now an{' '}
              <em>argument</em>, not a line of code you have to go and find.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Run it — the first call never mentions a position, and still works:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="260px"
              showLineNumbers
              description="Live demo — a default parameter"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
