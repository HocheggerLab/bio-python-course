import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const builtins = [
  { fn: 'print(x)',  what: 'Display a value' },
  { fn: 'len(x)',    what: 'Length of a string (or list, later)' },
  { fn: 'type(x)',   what: 'What kind of value is this?' },
  { fn: 'int(x)',    what: 'Convert to integer' },
  { fn: 'float(x)',  what: 'Convert to floating-point' },
  { fn: 'str(x)',    what: 'Convert to string' },
  { fn: 'round(x, n)', what: 'Round to n decimal places' },
  { fn: 'abs(x)',    what: 'Absolute value' },
  { fn: 'min(a, b)', what: 'Smaller of two values' },
  { fn: 'max(a, b)', what: 'Larger of two values' },
]

const demoCode = `sequence = "ATGCGTACGT"

# The same pattern every time: function(value)
print(len(sequence))      # how long is it?
print(type(sequence))     # what kind of value?
print(sequence.upper())   # method version — same idea

# help() reads the docs from inside Python — super useful!
help(round)
`

const demoOutput = `10
<class 'str'>
ATGCGTACGT
Help on built-in function round in module builtins:

round(number, ndigits=None)
    Round a number to a given precision in decimal digits.
    ...`

export function Slide16BuiltinFunctions() {
  return (
    <>
      <SlideTitle>
        Built-in <GradientText>Functions</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        {/* LEFT — what is a built-in, plus the table */}
        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              Python ships with tools you can just use
            </CardHeading>
            <CardBody>
              A <strong>built-in function</strong> is a tool Python provides out of the box —
              no <span className="font-mono">import</span> needed. You hand it a value, it
              gives you something back. The pattern is always the same:{' '}
              <span className="font-mono text-bio-blue">function(value)</span>.
            </CardBody>
          </SlideCard>

          <SlideCard color="green" layout="start" padding="compact" className="flex-1 min-h-0 overflow-auto">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              Ten you&apos;ll use all the time
            </CardHeading>
            <div className="font-mono text-xs md:text-sm xl:text-base 2xl:text-lg">
              {builtins.map((b) => (
                <div key={b.fn} className="grid grid-cols-2 gap-2 md:gap-4 py-0.5 md:py-1">
                  <div className="text-bio-blue">{b.fn}</div>
                  <div className="text-gray-300 font-sans text-[11px] md:text-sm xl:text-base">
                    {b.what}
                  </div>
                </div>
              ))}
            </div>
          </SlideCard>
        </div>

        {/* RIGHT — pro tip + live runner */}
        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
              💡 <span className="font-mono">help(function)</span> — your built-in tutor
            </CardHeading>
            <CardBody>
              Forgotten what a function does? Pass it to{' '}
              <span className="font-mono text-bio-yellow">help()</span> and Python prints
              the official documentation right there. Works on{' '}
              <em>any</em> function — including ones you write yourself later.
            </CardBody>
          </SlideCard>

          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="260px"
              showLineNumbers
              description="Live demo — built-ins and help()"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
