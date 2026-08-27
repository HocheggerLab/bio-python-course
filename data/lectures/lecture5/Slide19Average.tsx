import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import numpy as np
import matplotlib.pyplot as plt

F = "neuron_0588_20180828_5_lecture.csv"
dff = np.loadtxt(F, delimiter=",", skiprows=1, usecols=1)
go  = np.loadtxt(F, delimiter=",", skiprows=1, usecols=2)
starts = np.where(np.diff(go) == 1)[0] + 1
trials = np.array([dff[i-10:i+30] for i in starts if i >= 10 and i+30 <= len(dff)])

response = trials.mean(axis=0)          # average DOWN the columns
seconds  = np.arange(-10, 30) / 10.8

plt.figure(figsize=(8, 2.6))
plt.plot(seconds, trials[0], color="#6b7280", label="one trial")
plt.plot(seconds, response, color="#5fb37a", lw=2.5, label="254 trials averaged")
plt.axvline(0, color="#8fbcfb", lw=1)
plt.xlabel("seconds from go"); plt.ylabel("dF/F"); plt.legend()
plt.show()
`

export function Slide19Average() {
  return (
    <ConceptSlide
      maxWidth="full"
      title={
        <>
          <GradientText variant="green">axis=0</GradientText> — Average Down the Columns
        </>
      }
      lead={
        <>
          Each column is one moment in time, held across 254 trials.{' '}
          <span className="font-mono">mean(axis=0)</span> collapses every column to its average —
          and the grey line becomes the green one.
        </>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="415px"
        description="The payoff — one line pulls a response out of noise"
      />
    </ConceptSlide>
  )
}
