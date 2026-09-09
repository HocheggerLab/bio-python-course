import { LaunchSlide } from '@/components/slides/layouts'
import { SESSION1_COLAB_URL } from '../NotebookLink'

export function Slide07Launch() {
  return (
    <LaunchSlide
      notebook="01 · Using notebooks"
      url={SESSION1_COLAB_URL}
      minutes={15}
      core={
        <>
          <span className="text-white font-semibold">Save a copy to your Drive first</span>, then
          work through <span className="text-white font-semibold">Skills 1–5</span>.
        </>
      }
      doneWhen={
        <>
          The <span className="text-white">Checklist before you finish</span> at the bottom is all
          ticked — including deliberately causing a{' '}
          <span className="font-mono">NameError</span> and recovering from it.
        </>
      }
    />
  )
}
