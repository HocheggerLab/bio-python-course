import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { SplitSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import numpy as np

F = "neuron_0588_20180828_5_lecture.csv"
dff = np.loadtxt(F, delimiter=",", skiprows=1, usecols=1)
go  = np.loadtxt(F, delimiter=",", skiprows=1, usecols=2)
starts = np.where(go == 1)[0][::9]          # first frame of each trial

trials = []
for i in starts:
    if i >= 10:                              # need 10 frames before the start
        trials.append(dff[i-10 : i+30])      # 10 before, 30 after
trials = np.array(trials)                    # stack them into a grid

print(trials.shape)
print(f"one trial:      {trials[0].shape}")
print(f"one timepoint:  {trials[:, 10].shape}")
`

const output = `(254, 40)
one trial:      (40,)
one timepoint:  (254,)`

export function LabStack() {
  return (
    <SplitSlide
      ratio="wide-left"
      title={
        <>
          Stack Them — Now It Is <GradientText>Two-Dimensional</GradientText>
        </>
      }
      lead={
        <>
          For each start, cut 40 frames — 10 before, 30 after — and stack the pieces.{' '}
          <strong className="text-white">Rows are trials. Columns are time.</strong>
        </>
      }
      left={
        <LazyPythonRunner
          initialCode={code}
          height="415px"
          description="From 1-D to 2-D — 254 trials x 40 timepoints"
          staticOutput={output}
        />
      }
      right={
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4 md:mt-20">
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
    />
  )
}
