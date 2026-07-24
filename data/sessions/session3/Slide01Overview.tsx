import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import { NotebookLink, NOTEBOOK_DATATYPES } from './NotebookLink'

export function Slide01Overview() {
  return (
    <>
      <SlideTitle>
        Session 3 — <GradientText>Data Types</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-300 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        Every value in Python has a <span className="text-white">type</span>, and the type decides
        what you can do with it. A quick recap from <span className="text-white">Lecture 1</span>,
        then straight into the notebook.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">
        <SlideCard color="green" layout="start" padding="compact">
          <CardHeading size="sm" color="green" className="mb-3 md:mb-4">📓 In this notebook</CardHeading>
          <CardList
            color="green"
            items={[
              <>The four core types — <span className="font-mono text-white">int</span>, <span className="font-mono text-white">float</span>, <span className="font-mono text-white">str</span>, <span className="font-mono text-white">bool</span></>,
              <>Check any value with <span className="font-mono text-white">type(value)</span></>,
              <>Convert between them — <span className="font-mono text-white">int()</span>, <span className="font-mono text-white">float()</span>, <span className="font-mono text-white">str()</span></>,
              <>Why <span className="font-mono text-white">&quot;3&quot; + 3</span> crashes — and how to fix it</>,
            ]}
          />
        </SlideCard>

        <SlideCard color="blue" layout="center" padding="compact">
          <div className="text-5xl md:text-7xl xl:text-8xl mb-3 md:mb-4">🔢🌡️🧬🚦</div>
          <p className="text-center text-gray-300 text-sm md:text-base xl:text-lg">
            One value, one type. Get the type right and everything else follows.
          </p>
        </SlideCard>
      </div>

      <NotebookLink url={NOTEBOOK_DATATYPES} label="03 · Data types" />
    </>
  )
}
