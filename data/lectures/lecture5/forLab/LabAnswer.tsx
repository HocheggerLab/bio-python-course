import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { SplitSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import numpy as np
import matplotlib.pyplot as plt

F = "neuron_0588_20180828_5_lecture.csv"
dff = np.loadtxt(F, delimiter=",", skiprows=1, usecols=1)
seconds = np.arange(-10, 30) / 10.8

def response_to(column):   # the last three slides, in one function
    marks  = np.loadtxt(F, delimiter=",", skiprows=1, usecols=column)
    starts = np.where(marks == 1)[0][::9]
    trials = []
    for i in starts:
        if i >= 10:
            trials.append(dff[i-10 : i+30])
    return np.array(trials).mean(axis=0)

plt.figure(figsize=(8, 2.4))
for column, name in [(2, "go"), (3, "nogo")]:  # the two words
    curve = response_to(column)
    plt.plot(seconds, curve, lw=2, label=name)
    print(f"{name:7s} peak {curve[10:].max():+.3f}")
plt.legend(); plt.xlabel("seconds from event"); plt.show()
`

const output = `go      peak +0.290
nogo    peak +0.057`

export function LabAnswer() {
  return (
    <SplitSlide
      ratio="wide-left"
      title={
        <>
          So What Is This Neuron <GradientText variant="purple">Actually For?</GradientText>
        </>
      }
      left={
        <LazyPythonRunner
          initialCode={code}
          height="500px"
          description="go or nogo — one function"
          staticOutput={output}
        />
      }
      right={
        <SlideCard color="purple" layout="start" padding="tight" className="border-l-4 md:mt-16">
          <CardHeading size="sm" color="purple" className="mb-1">
            It tells the two words apart.
          </CardHeading>
          <CardBody className="text-base md:text-xl xl:text-2xl">
            A clear response to <strong className="text-bio-green">go</strong> — five times the flicker
            for <strong className="text-bio-yellow">nogo</strong>, though both words use the same
            vibrations. This cell cares about{' '}
            <span className="text-purple-300 font-semibold">the word that means water</span>.
          </CardBody>
        </SlideCard>
      }
    />
  )
}
