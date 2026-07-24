import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const methods = [
  { fn: '.upper() / .lower()', what: 'Normalise case — "atg" → "ATG"' },
  { fn: '.find("GAATTC")',     what: 'Position of a motif, or -1 if absent' },
  { fn: '.startswith("ATG")',  what: 'Does it begin with a start codon? → True/False' },
  { fn: '.count("G")',         what: 'How many times (from Session 1)' },
]

const demoCode = `seq = "atgcgtgaattc"   # messy lower-case data

print(seq.upper())                  # clean it up
print(seq.upper().find("GAATTC"))   # where is the EcoRI site?
print(seq.upper().startswith("ATG")) # coding sequence?
`

const demoOutput = `ATGCGTGAATTC
6
True`

export function Slide16StringMethods() {
  return (
    <>
      <SlideTitle>
        String <GradientText>Methods</GradientText> — clean &amp; search
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              The <span className="font-mono">value.method()</span> pattern
            </CardHeading>
            <CardBody>
              Strings carry their own tools, called with a dot:{' '}
              <span className="font-mono text-bio-blue">seq.upper()</span>. You met{' '}
              <span className="font-mono">.count()</span> last week — here are the ones you&apos;ll
              reach for most.
            </CardBody>
          </SlideCard>

          <SlideCard color="green" layout="start" padding="compact" className="flex-1 min-h-0 overflow-auto">
            <div className="font-mono text-xs md:text-sm xl:text-base">
              {methods.map((m) => (
                <div key={m.fn} className="py-1 md:py-1.5">
                  <div className="text-bio-blue">{m.fn}</div>
                  <div className="text-gray-300 font-sans text-[11px] md:text-sm xl:text-base">
                    {m.what}
                  </div>
                </div>
              ))}
            </div>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Run it — try <span className="font-mono not-italic">.find(&quot;TTT&quot;)</span> on a
            motif that isn&apos;t there:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="240px"
              showLineNumbers
              description="Live demo — string methods"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
