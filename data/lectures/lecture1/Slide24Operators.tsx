import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
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
    <>
      <SlideTitle>
        Arithmetic <GradientText>Operators</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        {/* LEFT — the four operators */}
        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-3 md:mb-4">
              Numbers in, a number out
            </CardHeading>
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              {ops.map((o) => (
                <div key={o.op} className="bg-bio-dark/60 rounded p-2 md:p-3 font-mono">
                  <div className="text-bio-blue text-lg md:text-2xl xl:text-3xl font-bold">{o.op}</div>
                  <div className="text-[10px] md:text-xs xl:text-sm text-gray-400 mb-1">{o.name}</div>
                  <div className="text-xs md:text-base xl:text-lg text-gray-200">
                    {o.ex} <span className="text-gray-500">→</span>{' '}
                    <span className="text-bio-green">{o.out}</span>
                  </div>
                </div>
              ))}
            </div>
          </SlideCard>
        </div>

        {/* RIGHT — combine them on real values */}
        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              Operators work on variables too
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              Combine values stored in variables exactly as you would raw numbers. This is the
              first half of the GC calculation we&apos;ll finish in a moment.
            </CardBody>
          </SlideCard>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="200px"
              showLineNumbers
              description="Live demo — arithmetic on variables"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
