import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `genome = 29903              # SARS-CoV-2, base pairs

print(genome > 10000)       # a comparison is just True or False

if genome > 10000:
    print("Large genome")
`

const demoOutput = `True
Large genome`

export function Slide09Decision() {
  return (
    <>
      <SlideTitle>
        Making a <GradientText>Decision</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col justify-center gap-4 md:gap-6">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              A comparison is <span className="font-mono">True</span> or <span className="font-mono">False</span>
            </CardHeading>
            <CardBody>
              Earlier we asked: how many genomes are bigger than 10&nbsp;kb? To decide about each one
              we compare:{' '}
              <span className="font-mono text-bio-blue">&gt;&nbsp;&lt;&nbsp;==&nbsp;&gt;=</span> take two
              values and answer with a <span className="font-mono">bool</span> — exactly the type
              from Session&nbsp;1.
            </CardBody>
          </SlideCard>

          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
              <span className="font-mono">if</span> runs a block only when <span className="font-mono">True</span>
            </CardHeading>
            <CardBody>
              Put a condition after <span className="font-mono">if</span>, end the line with{' '}
              <span className="font-mono">:</span>, and indent the body — just like a loop. Those
              lines run <strong>only</strong> when the condition holds; otherwise Python skips them.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Run it — then drop <span className="font-mono">genome</span> below 10000 and watch the
            message vanish:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="260px"
              showLineNumbers
              description="Live demo — your first if"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
