import { LaunchSlide } from '@/components/slides/layouts'
import { NOTEBOOK_OPERATORS } from './NotebookLink'

export function Slide01Launch() {
  return (
    <LaunchSlide
      notebook="04 · Operators"
      url={NOTEBOOK_OPERATORS}
      minutes={15}
      solutionsUrl="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/lab01/solutions/04_operators_and_mini_programs_solutions.ipynb"
      recap={
        <>
          Operators depend on type — and{' '}
          <span className="text-bio-yellow">correct code can still be scientifically wrong</span>.
          Today&apos;s bugs do not crash.
        </>
      }
      core={
        <>
          <span className="text-white font-semibold">Skills 1–3</span>, ending with the molarity
          calculator.
        </>
      }
      doneWhen={
        <>
          Every self-check prints <span className="text-bio-green">✅</span> — and the number is
          <span className="text-white"> biologically sensible</span>, not merely error-free.
        </>
      }
      goingFurther={<>The <span className="text-white">🧗 Going further</span> section.</>}
    />
  )
}
