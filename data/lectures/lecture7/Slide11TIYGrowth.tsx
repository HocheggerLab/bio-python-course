import { GradientText } from '@/components/slides/SlideTitle'
import { ExerciseSlide, type Step } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const steps: Step[] = [
  { label: <>Plot <span className="font-mono">fast</span> and <span className="font-mono">slow</span> on the same axes — two <span className="font-mono">ax.plot()</span> calls.</> },
  { label: <>Give each a <span className="font-mono">label=</span>, call <span className="font-mono">ax.legend()</span>, and label both axes.</> },
  { label: <>Bonus: try <span className="font-mono">ax.set_yscale(&quot;log&quot;)</span>. Why does exponential growth become a straight line?</> },
]

const code = `import numpy as np
import matplotlib.pyplot as plt

time_h = np.linspace(0, 4, 100)
fast = 5e5 * 2 ** (time_h / 0.5)   # doubles every 30 min
slow = 5e5 * 2 ** (time_h / 1.0)   # doubles every 60 min

fig, ax = plt.subplots()

# 1. plot both, each with a label=
# 2. axis labels, a title, and ax.legend()

plt.show()
`

export function Slide11TIYGrowth() {
  return (
    <ExerciseSlide
      title={
        <>
          Try it Yourself — <GradientText variant="green">two strains, one axes</GradientText>
        </>
      }
      intro={
        <>
          Same starting density, different doubling times. After four hours the fast one is{' '}
          <strong>16×</strong> ahead — make a figure that shows it.
        </>
      }
      steps={steps}
    >
      <LazyPythonRunner
        initialCode={code}
        height="331px"
        description="Your turn — build it from fig, ax"
      />
    </ExerciseSlide>
  )
}
