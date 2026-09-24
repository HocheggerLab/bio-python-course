import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import numpy as np

F = "neuron_0588_20180828_5_lecture.csv"
dff = np.loadtxt(F, delimiter=",", skiprows=1, usecols=1)
go  = np.loadtxt(F, delimiter=",", skiprows=1, usecols=2)
starts = np.where(np.diff(go) == 1)[0] + 1

# too near either end? no room — and dff[-8:32] silently wraps round
windows = [dff[i - 10 : i + 30] for i in starts if i >= 10 and i + 30 <= len(dff)]
trials  = np.array(windows)                 # stack them into a grid

print(trials.shape)
print(f"one trial:      {trials[0].shape}")
print(f"one timepoint:  {trials[:, 10].shape}")
`

const output = `(254, 40)
one trial:      (40,)
one timepoint:  (254,)`

export function Slide21Stack() {
  return (
    <ConceptSlide
      title={
        <>
          Stack Them — Now It Is <GradientText>Two-Dimensional</GradientText>
        </>
      }
      lead={
        <>
          Cut forty frames around each start and stack them.{' '}
          <strong className="text-white">Rows are trials. Columns are time.</strong>
        </>
      }
      closing={
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2">
            Two ways to cut the same grid
          </CardHeading>
          <CardBody className="text-base md:text-xl xl:text-2xl">
            <span className="font-mono">trials[0]</span> is one whole trial.{' '}
            <span className="font-mono">trials[:, 10]</span> is one moment across all 254 of them.
            The comma separates the two directions.
          </CardBody>
        </SlideCard>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="373px"
        description="From 1-D to 2-D — 254 trials x 40 timepoints"
        staticOutput={output}
      />
    </ConceptSlide>
  )
}
