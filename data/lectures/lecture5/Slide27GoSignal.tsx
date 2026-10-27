import { GradientText } from '@/components/slides/SlideTitle'
import { SplitSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'
import { CsvExcerpt } from './CsvExcerpt'

/* Frames 41–52: one whole go trial. Checked against the file: every go (and
   nogo) signal is exactly 9 frames, and a trial starts every 41 frames. */
const rows = [
  '41,0.1512,0,0,0,0',
  '42,-0.0538,0,0,0,0',
  '43,-0.3234,1,0,0,0',
  '44,-0.5328,1,0,0,0',
  '45,0.2087,1,0,0,0',
  '46,0.256,1,0,0,0',
  '47,0.1734,1,0,0,0',
  '48,-0.0613,1,0,0,0',
  '49,-0.1694,1,0,0,0',
  '50,0.0704,1,0,1,1',
  '51,0.0193,1,0,0,1',
  '52,-0.1569,0,0,0,1',
]

const notes = { '43': '← go word starts', '51': '← last go frame' }

const code = `import numpy as np

F = "neuron_0588_20180828_5_lecture.csv"
go = np.loadtxt(F, delimiter=",", skiprows=1, usecols=2)

print(go[40:56])      # one trial: off, on for 9 frames, off
print(go.sum())       # frames with the signal on
print(go.sum() / 9)   # every go signal lasts 9 frames
`

const output = `[0. 0. 0. 1. 1. 1. 1. 1. 1. 1. 1. 1. 0. 0. 0. 0.]
2286.0
254.0`

const columns: [string, string][] = [
  ['go', '1 while the go signal is playing — 9 frames in a row, 0 otherwise'],
  ['nogo', 'the same for the nogo signal — also 9 frames in a row'],
]

export function Slide27GoSignal() {
  return (
    <SplitSlide
      ratio="wide-right"
      title={
        <>
          Your Second Array — <GradientText variant="green">the go Signal</GradientText>
        </>
      }
      lead={
        <>
          go and nogo are 0 or 1: is that signal playing at this frame? Here is one go trial,
          frame by frame. <span className="font-mono">usecols=2</span> loads the go column — and every
          go signal is the same length.
        </>
      }
      left={<CsvExcerpt rows={rows} highlight={2} notes={notes} />}
      right={
        <div className="flex flex-col gap-4 md:gap-5">
          <LazyPythonRunner
            initialCode={code}
            height="226px"
            description="Load the go column"
            staticOutput={output}
          />
          <dl className="flex flex-col gap-1.5 md:gap-2 text-sm md:text-base xl:text-lg">
            {columns.map(([term, def]) => (
              <div key={term} className="flex gap-3">
                <dt className="font-mono text-bio-green w-16 md:w-20 shrink-0">{term}</dt>
                <dd className="text-gray-300">{def}</dd>
              </div>
            ))}
          </dl>
        </div>
      }
    />
  )
}
