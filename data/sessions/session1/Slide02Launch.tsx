import { LaunchSlide } from '@/components/slides/layouts'
import { SESSION1_COLAB_URL } from './NotebookLink'

/* No solutions link: notebook 01 has no exercises to solve, only a checklist. */
export function Slide02Launch() {
  return (
    <LaunchSlide
      notebook="01 · Using notebooks"
      url={SESSION1_COLAB_URL}
      minutes={15}
      recap={
        <>
          A notebook is cells you run in order — <span className="font-mono text-white">Shift</span>{' '}
          + <span className="font-mono text-white">Enter</span> runs one.{' '}
          <span className="text-bio-yellow">
            Do File → Save a copy in Drive before you type anything
          </span>
          , or your work is gone when you close the tab.
        </>
      }
      core={
        <>
          <span className="text-white font-semibold">Skills 1–5</span> — run a cell, write
          markdown, reuse a variable, cause and fix a <span className="font-mono">NameError</span>,
          look up a function.
        </>
      }
      doneWhen={
        <>
          The <span className="text-white">Checklist before you finish</span> at the bottom is all
          ticked.
        </>
      }
    />
  )
}
