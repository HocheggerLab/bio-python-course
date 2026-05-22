import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'
import { NotebookLink, NOTEBOOK_VARIABLES } from './NotebookLink'

export function Slide02Variables() {
  return (
    <>
      <SlideTitle>
        Variables &amp; <GradientText>Assignment</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <SlideCard color="blue" layout="start" padding="compact">
          <CardHeading size="sm" color="blue" className="mb-3 md:mb-4">📦 The pattern</CardHeading>
          <CardBody className="mb-3 md:mb-4">
            <span className="text-white font-semibold">name = value</span> — Python stores
            <span className="text-white"> value</span> under the label <span className="text-white">name</span>.
          </CardBody>
          <pre className="rounded-xl bg-bio-darkest border border-code-border p-3 md:p-4 text-xs md:text-sm xl:text-base font-mono text-gray-200 overflow-x-auto">
{`gene_name = "TP53"
sequence  = "ATGCGTAC"
length    = len(sequence)
print(gene_name, length)`}
          </pre>
          <div className="mt-2 md:mt-3 rounded-xl bg-bio-darkest/60 border-l-4 border-l-bio-light-blue p-2 md:p-3 text-xs md:text-sm xl:text-base font-mono text-bio-light-blue">
            TP53 8
          </div>
        </SlideCard>

        <SlideCard color="green" layout="start" padding="compact">
          <CardHeading size="sm" color="green" className="mb-3 md:mb-4">✅ Naming rules</CardHeading>
          <CardList
            color="green"
            items={[
              <>Use <span className="font-mono text-white">snake_case</span> — letters, digits, underscores</>,
              <>Start with a letter, <span className="text-white">never</span> a number</>,
              <>No spaces, no hyphens, no <span className="font-mono text-white">+ - !</span></>,
              <>Be descriptive: <span className="font-mono text-white">gc_count</span>, not <span className="font-mono text-white">x</span></>,
              <>Reassigning is fine — the variable just points to the new value</>,
            ]}
          />
        </SlideCard>

      </div>

      <NotebookLink url={NOTEBOOK_VARIABLES} label="02 · Variables & print" />
    </>
  )
}
