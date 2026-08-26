import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
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
    <ConceptSlide
      title={<>Two Parameters — and a <GradientText variant="yellow">Default</GradientText></>}
      pointsLayout="rows"
      points={
      <>
        <SlideCard color="blue" layout="start" padding="tight" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-1">
            More than one box
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            Separate parameters with a comma. They fill up{' '}
            <strong>in the order you pass them</strong>:{' '}
            <span className="font-mono">codon_at(&quot;ATGGTACGC&quot;, 3)</span> puts the sequence
            in <span className="font-mono">seq</span> and the 3 in{' '}
            <span className="font-mono">position</span>.
          </CardBody>
        </SlideCard>
        <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-1">
            <span className="font-mono">position=0</span> — a default
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            Give a parameter a value in the <span className="font-mono">def</span> line and it
            becomes <strong>optional</strong>. Say nothing and you get{' '}
            <span className="font-mono">0</span>. It&apos;s a sensible answer to &quot;what if they
            don&apos;t tell me?&quot;
          </CardBody>
        </SlideCard>
        <SlideCard color="green" layout="start" padding="tight" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-1">
            Remember last week?
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
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
      </>
      }
      closing={
        <SlideCard color="neutral" layout="start" padding="tight">
        <CardBody className="text-[11px] md:text-sm">
        No editing. No re-running the whole script. Two proteins,{' '}
        <strong>two lines</strong> — because the thing that changes is now an{' '}
        <em>argument</em>, not a line of code you have to go and find.
        </CardBody>
        </SlideCard>
      }
      note={<>Run it — the first call never mentions a position, and still works:</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="184px"
        description="Live demo — a default parameter"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
