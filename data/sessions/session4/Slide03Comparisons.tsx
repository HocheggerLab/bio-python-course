import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { NotebookLink, NOTEBOOK_OPERATORS } from './NotebookLink'

export function Slide03Comparisons() {
  return (
    <>
      <SlideTitle>
        Comparisons &amp; a <GradientText>Mini-Program</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <SlideCard color="purple" layout="start" padding="compact">
          <CardHeading size="sm" color="purple" className="mb-3 md:mb-4">🚦 Comparisons return bools</CardHeading>
          <pre className="rounded-xl bg-bio-darkest border border-code-border p-3 md:p-4 text-xs md:text-sm xl:text-base font-mono text-gray-200 overflow-x-auto leading-relaxed">
{`gc = 0.48
gc > 0.5       # False
gc == 0.48     # True
gc != 0        # True
gc >= 0.4 and gc <= 0.6   # True`}
          </pre>
          <CardBody className="mt-3 md:mt-4">
            Combine with <span className="font-mono text-white">and</span>,
            <span className="font-mono text-white"> or</span>,
            <span className="font-mono text-white"> not</span>. You&apos;ll lean on these hard once
            we reach <span className="text-white">if</span> statements.
          </CardBody>
        </SlideCard>

        <SlideCard color="yellow" layout="start" padding="compact">
          <CardHeading size="sm" color="yellow" className="mb-3 md:mb-4">🧪 Putting it together</CardHeading>
          <pre className="rounded-xl bg-bio-darkest border border-code-border p-3 md:p-4 text-xs md:text-sm xl:text-base font-mono text-gray-200 overflow-x-auto leading-relaxed">
{`mass  = 5.84      # grams of NaCl
mw    = 58.44     # g/mol
vol   = 0.5       # litres

moles = mass / mw
conc  = moles / vol
print(f"{conc:.2f} mol/L")`}
          </pre>
          <div className="mt-2 md:mt-3 rounded-xl bg-bio-darkest/60 border-l-4 border-l-bio-light-blue p-2 md:p-3 text-xs md:text-sm xl:text-base font-mono text-bio-light-blue">
            0.20 mol/L
          </div>
          <CardBody className="mt-3 md:mt-4">
            Values in → calculation → a formatted result. In the notebook you&apos;ll adapt it to a
            Tris buffer.
          </CardBody>
        </SlideCard>

      </div>

      <p className="text-center text-gray-400 mt-3 md:mt-4 text-xs md:text-sm xl:text-base">
        That&apos;s the toolbox — now open the notebook and put it to work.
      </p>

      <NotebookLink url={NOTEBOOK_OPERATORS} label="04 · Operators & mini-programs" />
    </>
  )
}
