import { LaunchSlide } from '@/components/slides/layouts'
import { NOTEBOOK_DATATYPES } from '../NotebookLink'

export function Slide03Launch() {
  return (
    <LaunchSlide
      notebook="03 · Data types"
      url={NOTEBOOK_DATATYPES}
      minutes={15}
      solutionsUrl="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/lab01/solutions/03_data_types_solutions.ipynb"
      core={
        <>
          <span className="text-white font-semibold">Skills 1–4</span>, then{' '}
          <span className="text-white font-semibold">The type trap</span> — where{' '}
          <span className="font-mono">96</span> and <span className="font-mono">&quot;96&quot;</span>{' '}
          part company.
        </>
      }
      doneWhen={
        <>
          Every <span className="font-mono">self-check</span> cell prints a green{' '}
          <span className="text-bio-green">✅</span> — not just &ldquo;no error&rdquo;.
        </>
      }
      goingFurther={<>The <span className="text-white">Going further</span> section at the end.</>}
    />
  )
}
