import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import numpy as np
import matplotlib.pyplot as plt

time_h = np.linspace(0, 4, 100)
cells = 5e5 * 2 ** (time_h / 0.5)

fig, ax = plt.subplots()
fig.set_size_inches(7, 3)
ax.plot(time_h, cells)
plt.show()
`

export function Slide08AddData() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Step 2 — <GradientText variant="green">add data </GradientText>
        </>
      }
      lead={
        <>
          <span className="font-mono">np.linspace(0, 4, 100)</span> gives 100 evenly
          spaced time points across four hours, and{' '}
          <span className="font-mono">cells</span> is the growth formula for an{' '}
          <em>E. coli</em> culture doubling every 30 minutes. Plot one against the other and
          you have the curve.
        </>
      }
      note={
        <>
          Watch the two objects do different jobs:{' '}
          <span className="font-mono not-italic">fig.set_size_inches()</span> reshapes the{' '}
          <em>paper</em>, <span className="font-mono not-italic">ax.plot()</span> draws on
          the <em>panel</em>. Neither method exists on the other object.
        </>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="289px"
        description="Delete the fig line, run it again — only the paper changes"
      />
    </ConceptSlide>
  )
}
