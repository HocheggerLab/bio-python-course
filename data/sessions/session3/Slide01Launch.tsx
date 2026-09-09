import { LaunchSlide } from '@/components/slides/layouts'
import { NOTEBOOK_DATATYPES } from './NotebookLink'

/**
 * The whole session, on one slide.
 *
 * The notebook teaches the four types perfectly well on its own; what it
 * cannot do is put the room on the same page for thirty seconds first. So the
 * bridge is one idea — the type trap — and then the handover.
 */
export function Slide01Launch() {
  return (
    <LaunchSlide
      notebook="03 · Data types"
      url={NOTEBOOK_DATATYPES}
      minutes={15}
      solutionsUrl="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/lab01/solutions/03_data_types_solutions.ipynb"
      recap={
        <>
          <span className="font-mono text-white">96</span> and{' '}
          <span className="font-mono text-white">&quot;96&quot;</span> print identically and behave
          completely differently — <span className="font-mono">&quot;96&quot; * 3</span> is{' '}
          <span className="font-mono text-bio-yellow">&quot;969696&quot;</span>. The type decides
          what a value can do.
        </>
      }
      core={
        <>
          <span className="text-white font-semibold">Skills 1–4</span> — one per type — then{' '}
          <span className="text-white font-semibold">The type trap</span>.
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
