import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardBody } from '@/components/slides/SlideCard'
import { CodeBox } from '../lab4paths/CodeBox'

const BASICS = `seq = "ATGAAAGGC"
#      012345678    <- positions

seq[0]      # 'A'       one letter
seq[0:3]    # 'ATG'     positions 0, 1, 2
seq[3:6]    # 'AAA'
seq[:3]     # 'ATG'     from the start
seq[3:]     # 'AAAGGC'  to the end
seq[-3:]    # 'GGC'     the last three`

const CODON = `i = 3
seq[i:i + 3]    # 'AAA'  -> the codon starting at i

lines = ["> header", "ATG", "AAA"]
lines[1:]       # ['ATG', 'AAA']  -> skip the header`

export function Slide04RecapSlicing() {
  return (
    <>
      <SlideTitle>
        Recap — <GradientText variant="green">slicing</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-300 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        The other half of <span className="font-mono text-white">translate()</span>:{' '}
        <span className="font-mono text-white">seq[i:i + 3]</span>. Same rule as <span className="font-mono">range</span>{' '}
        — the start is in, the stop is out.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6">
        <CodeBox label="seq[start:stop]" color="green">{BASICS}</CodeBox>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <CodeBox label="slices you have already used" color="blue">{CODON}</CodeBox>
          <SlideCard color="green" layout="start" padding="tight" className="border-l-4">
            <CardBody>
              <span className="text-white">stop − start</span> = how many you get back:{' '}
              <span className="font-mono">seq[i:i + 3]</span> is always three letters long — one codon. Strings and
              lists slice exactly the same way.
            </CardBody>
          </SlideCard>
        </div>
      </div>

      <SlideCard color="purple" layout="start" padding="tight" className="mt-4 md:mt-6 border-l-4">
        <CardBody>
          🧪 <span className="text-white">Next slide:</span> Python right here in the browser — slice{' '}
          <span className="font-mono">species_a</span> for yourself.
        </CardBody>
      </SlideCard>
    </>
  )
}
