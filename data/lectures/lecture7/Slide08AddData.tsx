import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import numpy as np
import matplotlib.pyplot as plt

time_h = np.linspace(0, 4, 100)
cells = 5e5 * 2 ** (time_h / 0.5)

fig, ax = plt.subplots()
ax.plot(time_h, cells)
plt.show()
`

export function Slide08AddData() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Step 2 — <GradientText variant="green">put data on it</GradientText>
        </>
      }
      lead={
        <>
          <span className="font-mono">ax.plot(x, y)</span> takes two arrays and draws one
          against the other — here an <em>E. coli</em> culture doubling every 30 minutes.
        </>
      }
      note={
        <>
          The method belongs to <span className="font-mono not-italic">ax</span>, not{' '}
          <span className="font-mono not-italic">plt</span> — you are telling{' '}
          <em>that panel</em> to draw. In Part 2 that is what lets you have two.
        </>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="289px"
        description="One line of data on one set of axes"
      />
    </ConceptSlide>
  )
}
