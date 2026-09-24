import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import { NotebookLink, NOTEBOOK_OPERATORS } from '../NotebookLink'

export function Slide01Overview() {
  return (
    <>
      <SlideTitle>
        Session 4 — <GradientText>Operators</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-300 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        Now you can <span className="text-white">do</span> something with your values — calculate,
        join, compare. A recap from <span className="text-white">Lecture 1</span>, then you build
        your first complete mini-program.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">
        <SlideCard color="blue" layout="start" padding="compact">
          <CardHeading size="sm" color="blue" className="mb-3 md:mb-4">📓 In this notebook</CardHeading>
          <CardList
            color="blue"
            items={[
              <>Arithmetic — <span className="font-mono text-white">+ - * /</span>, plus <span className="font-mono text-white">// % **</span></>,
              <>String operators — join with <span className="font-mono text-white">+</span>, repeat with <span className="font-mono text-white">*</span></>,
              <>Comparisons that return <span className="font-mono text-white">True</span>/<span className="font-mono text-white">False</span></>,
              <>Your first full mini-program — a molarity calculator</>,
            ]}
          />
        </SlideCard>

        <SlideCard color="yellow" layout="center" padding="compact">
          <div className="text-5xl md:text-7xl xl:text-8xl mb-3 md:mb-4">🧮</div>
          <p className="text-center text-gray-300 text-sm md:text-base xl:text-lg">
            Values in, calculation, a formatted result out — the shape of every program you&apos;ll
            write from here.
          </p>
        </SlideCard>
      </div>

      <NotebookLink url={NOTEBOOK_OPERATORS} label="04 · Operators & mini-programs" />
    </>
  )
}
