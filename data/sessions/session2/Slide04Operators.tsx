import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { NotebookLink, NOTEBOOK_OPERATORS } from './NotebookLink'

export function Slide04Operators() {
  return (
    <>
      <SlideTitle>
        Arithmetic &amp; <GradientText>String</GradientText> Operators
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <SlideCard color="blue" layout="start" padding="compact">
          <CardHeading size="sm" color="blue" className="mb-3 md:mb-4">🧮 Numbers</CardHeading>
          <pre className="rounded-xl bg-bio-darkest border border-code-border p-3 md:p-4 text-xs md:text-sm xl:text-base font-mono text-gray-200 overflow-x-auto leading-relaxed">
{`2 + 3      # 5     add
10 - 4     # 6     subtract
6 * 7      # 42    multiply
9 / 2      # 4.5   float divide
9 // 2     # 4     integer divide
9 % 2      # 1     remainder
2 ** 8     # 256   power`}
          </pre>
          <CardBody className="mt-3 md:mt-4">
            <span className="font-mono text-white">/</span> always gives a float;
            <span className="font-mono text-white"> //</span> gives an int.
          </CardBody>
        </SlideCard>

        <SlideCard color="green" layout="start" padding="compact">
          <CardHeading size="sm" color="green" className="mb-3 md:mb-4">🧵 Strings</CardHeading>
          <pre className="rounded-xl bg-bio-darkest border border-code-border p-3 md:p-4 text-xs md:text-sm xl:text-base font-mono text-gray-200 overflow-x-auto leading-relaxed">
{`"ATG" + "CGT"   # 'ATGCGT'   join
"AT" * 4        # 'ATATATAT'  repeat
len("ATGC")     # 4           length
"ATGC".count("G")  # 1        count`}
          </pre>
          <CardBody className="mt-3 md:mt-4">
            Mixing types crashes —
            <span className="font-mono text-white"> &quot;2&quot; + 3</span> raises
            <span className="font-mono text-white"> TypeError</span>.
          </CardBody>
        </SlideCard>

      </div>

      <NotebookLink url={NOTEBOOK_OPERATORS} label="04 · Operators & mini-programs" />
    </>
  )
}
