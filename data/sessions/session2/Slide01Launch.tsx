import { LaunchSlide } from '@/components/slides/layouts'
import { NOTEBOOK_VARIABLES } from './NotebookLink'

export function Slide01Launch() {
  return (
    <LaunchSlide
      notebook="02 · Variables & print"
      url={NOTEBOOK_VARIABLES}
      minutes={15}
      solutionsUrl="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/lab01/solutions/02_variables_and_print_solutions.ipynb"
      recap={
        <>
          <span className="font-mono text-white">name = value</span> stores it;{' '}
          <span className="font-mono text-white">f&quot;...&#123;name&#125;...&quot;</span> shows it.
          Forget the <span className="font-mono text-bio-yellow">f</span> and Python prints the
          braces — no error, wrong output.
        </>
      }
      core={
        <>
          <span className="text-white font-semibold">Skills 1–3</span> — each one{' '}
          <span className="text-bio-blue">Demo</span> →{' '}
          <span className="text-bio-yellow">Fix it</span> →{' '}
          <span className="text-bio-green">Write it</span>.
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
