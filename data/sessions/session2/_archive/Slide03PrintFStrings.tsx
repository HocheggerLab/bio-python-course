import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { NotebookLink, NOTEBOOK_VARIABLES } from '../NotebookLink'

export function Slide03PrintFStrings() {
  return (
    <>
      <SlideTitle>
        Showing Results — <GradientText>print &amp; f-strings</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">

        <SlideCard color="blue" layout="start" padding="compact">
          <CardHeading size="sm" color="blue" className="mb-3 md:mb-4">🖨️ print()</CardHeading>
          <pre className="rounded-xl bg-bio-darkest border border-code-border p-3 md:p-4 text-xs md:text-sm xl:text-base font-mono text-gray-200 overflow-x-auto leading-relaxed">
{`gene = "TP53"
length = 8
print(gene)
print(gene, length)   # space between`}
          </pre>
          <div className="mt-2 md:mt-3 rounded-xl bg-bio-darkest/60 border-l-4 border-l-bio-light-blue p-2 md:p-3 text-xs md:text-sm xl:text-base font-mono text-bio-light-blue leading-relaxed">
            TP53<br />TP53 8
          </div>
          <CardBody className="mt-3 md:mt-4">
            Pass several values separated by commas — <span className="font-mono text-white">print</span>{' '}
            adds a space between each.
          </CardBody>
        </SlideCard>

        <SlideCard color="yellow" layout="start" padding="compact">
          <CardHeading size="sm" color="yellow" className="mb-3 md:mb-4">🏷️ Reporting with f-strings</CardHeading>
          <pre className="rounded-xl bg-bio-darkest border border-code-border p-3 md:p-4 text-xs md:text-sm xl:text-base font-mono text-gray-200 overflow-x-auto leading-relaxed">
{`gene = "TP53"
gc   = 0.482
print(f"{gene}: GC = {gc:.1%}")`}
          </pre>
          <div className="mt-2 md:mt-3 rounded-xl bg-bio-darkest/60 border-l-4 border-l-bio-light-blue p-2 md:p-3 text-xs md:text-sm xl:text-base font-mono text-bio-light-blue">
            TP53: GC = 48.2%
          </div>
          <CardBody className="mt-3 md:mt-4">
            <span className="font-mono text-white">f&quot;...&quot;</span> drops variables straight into text;
            <span className="font-mono text-white"> :.1%</span> formats as a 1-dp percentage.
          </CardBody>
        </SlideCard>

      </div>

      <NotebookLink url={NOTEBOOK_VARIABLES} label="02 · Variables & print" />
    </>
  )
}
