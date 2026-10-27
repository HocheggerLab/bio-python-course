import { GradientText } from '@/components/slides/SlideTitle'
import { SplitSlide } from '@/components/slides/layouts'
import { CsvExcerpt } from './CsvExcerpt'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import numpy as np

dff = np.loadtxt("neuron_0588_20180828_5_lecture.csv",
                 delimiter=",", skiprows=1, usecols=1)

print(dff.shape)
print(dff[:8])
print(f"mean {dff.mean():.3f}   max {dff.max():.3f}   std {dff.std():.3f}")
`

const rows = [
  '0,0.0026,0,0,0,0',
  '1,0.0123,0,0,0,0',
  '2,-0.0593,0,1,0,0',
  '3,-0.1257,0,1,0,0',
  '4,-0.0925,0,1,0,0',
  '5,-0.1758,0,1,0,0',
  '6,-0.3011,0,1,0,0',
  '7,-0.2901,0,1,0,0',
]

const output = `(21238,)
[ 0.0026  0.0123 -0.0593 -0.1257 -0.0925 -0.1758 -0.3011 -0.2901]
mean 0.058   max 4.308   std 0.378`

export function Slide26FirstArray() {
  return (
    <SplitSlide
      ratio="wide-right"
      title={
        <>
          Your First <GradientText>Array</GradientText>
        </>
      }
      lead={
        <>
          The file is a table. <span className="font-mono">usecols=1</span> pulls out a single
          column — <span className="font-mono">dff</span>, the neuron — and hands it back as an
          array of 21,238 numbers.
        </>
      }
      left={
        <>
          <p className="text-center text-gray-400 text-xs md:text-sm xl:text-base mb-2">
            The first 8 of 21,238 rows. Columns are counted from 0.
          </p>
          <CsvExcerpt rows={rows} highlight={1} />
        </>
      }
      right={
        <LazyPythonRunner
          initialCode={code}
          height="289px"
          description="Load one column, summarise it"
          staticOutput={output}
        />
      }
      note={
        <>
          <span className="font-mono not-italic">(21238,)</span> — one number in the shape, so this
          is <strong>one-dimensional</strong>: a single row of values. Same reception as the five
          readings — only now it is the real recording.
        </>
      }
    />
  )
}
