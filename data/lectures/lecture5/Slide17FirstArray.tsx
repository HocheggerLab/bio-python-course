import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import numpy as np

dff = np.loadtxt("neuron_0588_20180828_5_lecture.csv",
                 delimiter=",", skiprows=1, usecols=1)

print(dff.shape)
print(dff[:4])
print(f"mean {dff.mean():.3f}   max {dff.max():.3f}   std {dff.std():.3f}")
`

const output = `(21238,)
[ 0.0026  0.0123 -0.0593 -0.1257]
mean 0.058   max 4.308   std 0.378`

export function Slide17FirstArray() {
  return (
    <ConceptSlide
      title={
        <>
          Your First <GradientText>Array</GradientText>
        </>
      }
      lead={
        <>
          <span className="font-mono">usecols=1</span> pulls out a single column — the{' '}
          <span className="font-mono">dff</span> one — and hands it back as an array of 21,238
          numbers. Then you ask it questions.
        </>
      }
      note={
        <>
          <span className="font-mono not-italic">(21238,)</span> — one number in the shape, so this
          is <strong>one-dimensional</strong>: a single row of values. Remember{' '}
          <span className="font-mono not-italic">trace.mean()</span> from the exercise? Same
          question, asked directly.
        </>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="289px"
        description="Load one column, summarise it"
        staticOutput={output}
      />
    </ConceptSlide>
  )
}
