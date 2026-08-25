import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { NotebookLink } from './NotebookLink'

export function Slide03Cells() {
  return (
    <>
      <SlideTitle>
        Two Kinds of <GradientText>Cells</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">

        <SlideCard color="blue" layout="start" padding="compact">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">💻 Code cell</CardHeading>
          <CardBody className="mb-3 md:mb-4">
            Runs Python. The output appears just below when you press
            <span className="font-mono text-white"> Shift + Enter</span>.
          </CardBody>
          <pre className="rounded-xl bg-bio-darkest border border-code-border p-3 md:p-4 text-xs md:text-sm xl:text-base font-mono text-gray-200 overflow-x-auto">
{`# Code cell
sequence = "ATGCGTAC"
print("Length:", len(sequence))`}
          </pre>
          <div className="mt-2 md:mt-3 rounded-xl bg-bio-darkest/60 border-l-4 border-l-bio-light-blue p-2 md:p-3 text-xs md:text-sm xl:text-base font-mono text-bio-light-blue">
            Length: 8
          </div>
        </SlideCard>

        <SlideCard color="yellow" layout="start" padding="compact">
          <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">📝 Text (Markdown) cell</CardHeading>
          <CardBody className="mb-3 md:mb-4">
            Notes, headings, equations and images — written in
            <span className="font-mono text-white"> Markdown</span>. No code is run.
          </CardBody>
          <pre className="rounded-xl bg-bio-darkest border border-code-border p-3 md:p-4 text-xs md:text-sm xl:text-base font-mono text-gray-200 overflow-x-auto">
{`## GC content
We calculate **GC fraction**
for the test sequence.`}
          </pre>
          <div className="mt-2 md:mt-3 rounded-xl bg-white/5 p-2 md:p-3 text-gray-300 text-xs md:text-sm xl:text-base">
            <div className="font-bold text-white text-base md:text-lg">GC content</div>
            <div>We calculate <strong className="text-white">GC fraction</strong> for the test sequence.</div>
          </div>
        </SlideCard>

      </div>

      <p className="text-center text-gray-400 mt-3 md:mt-4 text-xs md:text-sm xl:text-base">
        Add a new cell with the <span className="font-mono text-white">+ Code</span> /
        <span className="font-mono text-white"> + Text</span> buttons at the top of the notebook.
      </p>

      <NotebookLink />
    </>
  )
}
