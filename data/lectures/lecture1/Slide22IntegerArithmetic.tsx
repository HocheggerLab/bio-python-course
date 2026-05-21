import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

const ops = [
  { op: '+', name: 'add',       ex: '3 + 2',   out: '5' },
  { op: '-', name: 'subtract',  ex: '10 - 4',  out: '6' },
  { op: '*', name: 'multiply',  ex: '6 * 7',   out: '42' },
  { op: '//', name: 'floor div', ex: '17 // 3', out: '5' },
  { op: '%', name: 'modulo',    ex: '17 % 3',  out: '2' },
  { op: '**', name: 'power',    ex: '2 ** 10', out: '1024' },
]

export function Slide22IntegerArithmetic() {
  return (
    <>
      <SlideTitle>
        Integer <GradientText>Arithmetic</GradientText>
      </SlideTitle>

      <div className="flex flex-col gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-3 md:mb-4">Operators on whole numbers</CardHeading>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
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

        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            Why a biologist cares about <span className="font-mono">//</span> and <span className="font-mono">%</span>
          </CardHeading>
          <CardBody className="mb-3 md:mb-4">
            DNA is read in <strong>codons</strong> — 3 bases per amino acid. Integer division and modulo
            answer two everyday questions:
          </CardBody>
          <pre className="bg-bio-dark/60 rounded-lg p-3 md:p-5 font-mono text-xs md:text-base xl:text-lg text-gray-200 overflow-x-auto">
{`length = 17

length // 3   #  5  → number of complete codons
length %  3   #  2  → leftover bases (0 means clean codon-aligned)`}
          </pre>
        </SlideCard>

      </div>
    </>
  )
}
