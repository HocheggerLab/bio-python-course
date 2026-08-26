import { GradientText } from '@/components/slides/SlideTitle'
import { SplitSlide, DefTable } from '@/components/slides/layouts'
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

# help() reads the docs from inside Python — super useful!
help(round)
`

const demoOutput = `10
<class 'str'>
Help on built-in function round in module builtins:

round(number, ndigits=None)
    Round a number to a given precision in decimal digits.
    ...`

export function Slide18BuiltinFunctions() {
  return (
    <SplitSlide
      title={<>Built-in <GradientText>Functions</GradientText></>}
      lead={
        <>
          A <strong>built-in function</strong> works out of the box — no{' '}
          <span className="font-mono">import</span> needed. The pattern is always the same:{' '}
          <span className="font-mono text-bio-blue">function(value)</span>.
        </>
      }
      ratio="even"
      left={<DefTable rows={builtins.map((b) => ({ term: b.fn, def: b.what }))} headers={['Function', 'What it does']} />}
      right={
        <LazyPythonRunner
          initialCode={demoCode}
          height="373px"
          showLineNumbers
          description="Live demo — built-ins and help()"
          staticOutput={demoOutput}
        />
      }
      note={
        <>
          Forgotten what one does? Pass it to <span className="font-mono text-bio-yellow">help()</span>{' '}
          and Python prints the official documentation — for <em>any</em> function.
        </>
      }
    />
  )
}
