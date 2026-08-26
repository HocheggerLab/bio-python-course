import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `def report(seq):
    print(f"This sequence is {len(seq)} bases long")

report("ATGGTACGC")
report("TTT")
`

const demoOutput = `This sequence is 9 bases long
This sequence is 3 bases long`

export function Slide09bParameter() {
  return (
    <ConceptSlide
      title={<>Give It Something to <GradientText>Work On</GradientText></>}
      lead={
        <>
          A function that always does exactly the same thing isn&apos;t much use. Put a name{' '}
          <strong>inside the brackets</strong> and it can work on anything you hand it.
        </>
      }
      points={
      <>
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            <span className="font-mono">seq</span> is a <strong>parameter</strong>
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            It&apos;s a <strong>placeholder</strong> — an empty box with a label. When you write{' '}
            <span className="font-mono">def report(seq):</span> you&apos;re saying: &quot;whatever
            you give me, I&apos;ll call it <span className="font-mono">seq</span> while I work.&quot;
          </CardBody>
        </SlideCard>
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            What you pass in is the <strong>argument</strong>
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            <span className="font-mono">report(&quot;ATGGTACGC&quot;)</span> — that string drops into
            the box called <span className="font-mono">seq</span>, and the body runs with it.
            </CardBody>
            <div className="bg-bio-dark/60 rounded px-2 py-2 font-mono text-[10px] md:text-sm text-gray-300 overflow-x-auto">
            report(<span className="text-bio-green">&quot;TTT&quot;</span>) → seq ={' '}
            <span className="text-bio-green">&quot;TTT&quot;</span>
            </div>
            </SlideCard>
            <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
            <CardBody className="text-[11px] md:text-sm">
            One function, two sequences, two answers — and you wrote the logic{' '}
            <strong>once</strong>. That is the entire reason functions exist.
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>Run it — then add a <span className="font-mono not-italic">report()</span> call with your
        own sequence:</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="205px"
        description="Live demo — a function with a parameter"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
