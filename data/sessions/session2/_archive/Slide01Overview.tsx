import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import { NotebookLink, NOTEBOOK_VARIABLES } from '../NotebookLink'

export function Slide01Overview() {
  return (
    <>
      <SlideTitle>
        Session 2 — <GradientText>Variables &amp; print</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-300 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        The two things every program does: <span className="text-white">store</span> a value and{' '}
        <span className="text-white">show</span> a result. A quick recap from{' '}
        <span className="text-white">Lecture 1</span>, then straight into the notebook.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">
        <SlideCard color="blue" layout="start" padding="compact">
          <CardHeading size="sm" color="blue" className="mb-3 md:mb-4">📓 In this notebook</CardHeading>
          <CardList
            color="blue"
            items={[
              <>Store values in variables — <span className="font-mono text-white">name = value</span></>,
              <>Naming rules: <span className="font-mono text-white">snake_case</span>, descriptive, no spaces</>,
              <>Show results with <span className="font-mono text-white">print()</span></>,
              <>Slot values into text with <span className="font-mono text-white">f&quot;...&quot;</span> strings</>,
            ]}
          />
        </SlideCard>

        <SlideCard color="green" layout="center" padding="compact">
          <div className="text-5xl md:text-7xl xl:text-8xl mb-3 md:mb-4">📦 → 🖨️</div>
          <p className="text-center text-gray-300 text-sm md:text-base xl:text-lg">
            A label holds a value; <span className="font-mono text-white">print</span> puts it on the
            screen. That&apos;s the whole loop of a first program.
          </p>
        </SlideCard>
      </div>

      <NotebookLink url={NOTEBOOK_VARIABLES} label="02 · Variables & print" />
    </>
  )
}
