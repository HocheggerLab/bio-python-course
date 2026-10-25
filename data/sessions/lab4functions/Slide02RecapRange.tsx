import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardBody } from '@/components/slides/SlideCard'
import { CodeBox } from '../lab4paths/CodeBox'

const BASICS = `list(range(5))          # [0, 1, 2, 3, 4]
list(range(2, 5))       # [2, 3, 4]
list(range(0, 10, 3))   # [0, 3, 6, 9]
#           start stop step

# the start is IN, the stop is OUT
# no start -> 0, no step -> 1`

const CODONS = `seq = "ATGAAAGGC"            # 9 bases

for i in range(0, len(seq) - 2, 3):
    print(i, seq[i:i + 3])

# 0 ATG
# 3 AAA
# 6 GGC`

export function Slide02RecapRange() {
  return (
    <>
      <SlideTitle>
        Recap — <GradientText>range()</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-300 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        <span className="font-mono text-white">translate()</span> stands on one line:{' '}
        <span className="font-mono text-white">range(0, len(seq) - 2, 3)</span>. If that line is a mystery, start here.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6">
        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <CodeBox label="start · stop · step" color="blue">{BASICS}</CodeBox>
          <SlideCard color="purple" layout="start" padding="tight" className="border-l-4">
            <CardBody>
              🧪 <span className="text-white">Next slide:</span> Python right here in the browser — try{' '}
              <span className="font-mono">range()</span> for yourself.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <CodeBox label="one codon at a time" color="green">{CODONS}</CodeBox>
          <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
            <CardBody>
              Why <span className="font-mono text-white">- 2</span>? So the loop never starts a codon that has fewer
              than 3 letters left. Add one base, <span className="font-mono">&quot;ATGAAAGGCT&quot;</span>: without
              it, <span className="font-mono">i = 9</span> slices out just <span className="font-mono">&quot;T&quot;</span>{' '}
              — and the codon table has no idea what that is.
            </CardBody>
          </SlideCard>
        </div>
      </div>

    </>
  )
}
