import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import numpy as np
import matplotlib.pyplot as plt

F = "neuron_0588_20180828_5_lecture.csv"
dff = np.loadtxt(F, delimiter=",", skiprows=1, usecols=1)
seconds = np.arange(-10, 30) / 10.8

def response_to(column):   # the last three slides, in one function
    marks  = np.loadtxt(F, delimiter=",", skiprows=1, usecols=column)
    starts = np.where(np.diff(marks) == 1)[0] + 1
    windows = [dff[i-10:i+30] for i in starts if i >= 10 and i+30 <= len(dff)]
    return np.array(windows).mean(axis=0)

plt.figure(figsize=(8, 2.4))
for column, name in [(2, "go"), (3, "nogo"), (4, "reward")]:  # three questions
    curve = response_to(column)
    plt.plot(seconds, curve, lw=2, label=name)
    print(f"{name:7s} peak {curve[10:].max():+.3f}")
plt.legend(); plt.xlabel("seconds from event"); plt.show()
`

const output = `go      peak +0.290
nogo    peak +0.057
reward  peak +0.301`

export function Slide20Answer() {
  return (
    <ConceptSlide
      maxWidth="full"
      title={
        <>
          So What Is This Neuron <GradientText variant="purple">Actually For?</GradientText>
        </>
      }
      closing={
        <SlideCard color="purple" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="purple" className="mb-2">
            It is not a touch cell.
          </CardHeading>
          <CardBody className="text-base md:text-xl xl:text-2xl">
            Barely a flicker for <strong>nogo</strong>, which feels the same on the whiskers — and
            the biggest response of all to the{' '}
            <strong className="text-white">reward</strong>. This cell reports{' '}
            <span className="text-purple-300 font-semibold">what happened</span>, not what was
            touched.
          </CardBody>
        </SlideCard>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="415px"
        description="Three questions, one function"
        staticOutput={output}
      />
    </ConceptSlide>
  )
}
