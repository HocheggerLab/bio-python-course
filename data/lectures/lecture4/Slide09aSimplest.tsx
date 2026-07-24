import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `def start_codon_report():
    print("Looking for ATG...")

print("nothing has happened yet")

start_codon_report()
start_codon_report()
`

const demoOutput = `nothing has happened yet
Looking for ATG...
Looking for ATG...`

export function Slide09aSimplest() {
  return (
    <>
      <SlideTitle>
        The Simplest <GradientText>Function</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col justify-center gap-3 md:gap-4">
          <SlideCard color="neutral" layout="start" padding="compact">
            <CardBody className="text-xs md:text-sm xl:text-base">
              That last slide was where we&apos;re heading. Let&apos;s build it from{' '}
              <strong>nothing</strong>. Here is the smallest function that exists — it takes nothing,
              gives nothing back, and just prints.
            </CardBody>
          </SlideCard>

          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              <span className="font-mono">def name():</span>
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              The word <span className="font-mono">def</span>, a name you choose, empty brackets, a
              colon — then the body <strong>indented underneath</strong>. You already know this
              shape: it&apos;s a loop, it&apos;s an <span className="font-mono">if</span>. Colon,
              indent, body.
            </CardBody>
          </SlideCard>

          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
              Defining is not running
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              This is the bit that catches everyone.{' '}
              <span className="font-mono">def</span> only <strong>teaches Python the recipe</strong> —
              it doesn&apos;t cook it. Look at the output: &quot;nothing has happened yet&quot; comes{' '}
              <em>first</em>, even though the function was written above it.
            </CardBody>
          </SlideCard>

          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              The brackets are the &quot;go&quot; button
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              <span className="font-mono">start_codon_report()</span> — the{' '}
              <strong>brackets call it</strong>. Written once, called twice. Written once, callable
              ten thousand times.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Run it — then delete the two calls at the bottom and run again. Nothing happens:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="300px"
              showLineNumbers
              description="Live demo — defining vs calling"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
