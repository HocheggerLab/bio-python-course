import { GradientText } from '@/components/slides/SlideTitle'
import { ExerciseSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

/**
 * Part 1's hands-on beat: a *silent* bug.
 *
 * `fig.set_label()` is a real method, so nothing throws — it simply labels
 * the wrong object and no label appears. That is the bug this session has to
 * teach: by now the students can read a traceback, and the next failure mode
 * is code that runs and quietly does nothing.
 */
const broken = `import numpy as np
import matplotlib.pyplot as plt

time_h = np.linspace(0, 12, 100)
cells = 1e4 * 2 ** (time_h / 1.5)

fig, ax = plt.subplots()
ax.plot(time_h, cells, color="#00d4ff")

# Meant to label the y axis. It runs — and nothing appears.
fig.set_label("Cells per mL")

plt.show()
`

const solution = `import numpy as np
import matplotlib.pyplot as plt

time_h = np.linspace(0, 12, 100)
cells = 1e4 * 2 ** (time_h / 1.5)

fig, ax = plt.subplots()
ax.plot(time_h, cells, color="#00d4ff")

ax.set_ylabel("Cells per mL")
ax.set_xlabel("Time (hours)")
ax.set_title("Yeast, doubling every 90 min")

plt.show()
`

export function Slide11TIYGrowthCurve() {
  return (
    <ExerciseSlide
      title={
        <>
          Your turn — <GradientText variant="green">the label that never appears</GradientText>
        </>
      }
      intro={
        <>
          A yeast culture this time, doubling every 90 minutes over half a day. The curve
          draws fine. The label does not.
        </>
      }
      steps={[
        {
          label: 'Run it',
          detail: <>No error, no traceback — and no y-axis label either.</>,
        },
        {
          label: 'Work out why',
          detail: (
            <>
              <span className="font-mono">set_label</span> is a real method, so Python is
              happy. But it was called on the wrong object.
            </>
          ),
          accent: 'yellow',
        },
        {
          label: 'Fix it',
          detail: (
            <>
              Axis labels belong to the panel. Add an x label and a title while you are
              there.
            </>
          ),
          accent: 'green',
        },
      ]}
    >
      <LazyPythonRunner
        initialCode={broken}
        solution={solution}
        height="289px"
        description="It runs. That is what makes it worth catching."
      />
    </ExerciseSlide>
  )
}
