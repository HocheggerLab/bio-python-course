import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `sequence = "ATGCGTACGTAGGCTA"

# A string is more than just text — it carries useful methods.
# .count() returns how many times something appears.

print(sequence.count("A"))    # number of As
print(sequence.count("G"))    # number of Gs
print(sequence.count("AT"))   # also works on substrings

# Combine with arithmetic — this is the GC count we need:
gc_count = sequence.count("G") + sequence.count("C")
print(gc_count)
`

const demoOutput = `4
5
2
8`

export function Slide26CountMethod() {
  return (
    <>
      <SlideTitle>
        Counting Characters — <GradientText><span className="font-mono">.count()</span></GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              Strings carry their own tools
            </CardHeading>
            <CardBody>
              You&apos;ve seen <span className="font-mono">function(value)</span> — Python also
              has <em>methods</em>, written as{' '}
              <span className="font-mono text-bio-blue">value.method()</span>. Same idea,
              attached to the value. We&apos;ll meet more next week — but for the GC calculator
              you only need one:
            </CardBody>
          </SlideCard>

          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              <span className="font-mono">sequence.count(&quot;G&quot;)</span>
            </CardHeading>
            <CardBody>
              Returns the number of times the given substring appears in the sequence — an{' '}
              <span className="font-mono">int</span>. Add the G count to the C count and you have
              the raw input for GC fraction.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Live demo — try counting other letters or pairs:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="280px"
              showLineNumbers
              description="Live demo — string .count() method"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
