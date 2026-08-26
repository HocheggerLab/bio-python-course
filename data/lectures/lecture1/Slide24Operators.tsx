import { GradientText } from '@/components/slides/SlideTitle'
import { SplitSlide, DefTable } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const ops = [
  { op: '+', name: 'add',      ex: '3 + 2',  out: '5' },
  { op: '-', name: 'subtract', ex: '10 - 4', out: '6' },
  { op: '*', name: 'multiply', ex: '6 * 7',  out: '42' },
  { op: '/', name: 'divide',   ex: '9 / 4',  out: '2.25' },
]

const demoCode = `g_count = 5
c_count = 4
length  = 16

gc_count = g_count + c_count   # how many G or C bases
print(gc_count)
print(gc_count / length)       # as a fraction of the whole
`

const demoOutput = `9
0.5625`

export function Slide24Operators() {
  return (
    <SplitSlide
      title={<>Arithmetic <GradientText>Operators</GradientText></>}
      lead="Numbers in, a number out — and they work on variables exactly as they do on raw numbers."
      ratio="even"
      left={
        <DefTable
          headers={['Operator', 'Does', 'Example']}
          rows={ops.map((o) => ({
            term: o.op,
            def: o.name,
            extra: (
              <span className="font-mono">
                {o.ex} <span className="text-gray-600">→</span>{' '}
                <span className="text-bio-green">{o.out}</span>
              </span>
            ),
          }))}
        />
      }
      right={
        <LazyPythonRunner
          initialCode={demoCode}
          height="330px"
          showLineNumbers
          description="Live demo — arithmetic on variables"
          staticOutput={demoOutput}
        />
      }
      note="This is the first half of the GC calculation we'll finish in a moment."
    />
  )
}
