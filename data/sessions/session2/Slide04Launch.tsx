import { LaunchSlide } from '@/components/slides/layouts'
import { NOTEBOOK_VARIABLES } from './NotebookLink'

export function Slide04Launch() {
  return (
    <LaunchSlide
      notebook="02 · Variables & print"
      url={NOTEBOOK_VARIABLES}
      minutes={15}
      solutionsUrl="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/lab01/solutions/02_variables_and_print_solutions.ipynb"
      core={
        <>
          <span className="text-white font-semibold">Skills 1–3</span>. Each one is the same three
          beats: read the <span className="text-bio-blue">Demo</span>, repair the{' '}
          <span className="text-bio-yellow">Fix it</span>, then do the{' '}
          <span className="text-bio-green">Write it</span> from scratch.
        </>
      }
      doneWhen={
        <>
          Every <span className="font-mono">self-check</span> cell prints a green{' '}
          <span className="text-bio-green">✅</span> — not just &ldquo;no error&rdquo;.
        </>
      }
      goingFurther={<>The <span className="text-white">🧗 Going further</span> section.</>}
    />
  )
}
