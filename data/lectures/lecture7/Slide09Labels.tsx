import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import numpy as np
import matplotlib.pyplot as plt

time_h = np.linspace(0, 4, 100)
cells = 5e5 * 2 ** (time_h / 0.5)

fig, ax = plt.subplots()
ax.plot(time_h, cells, color="#00d4ff")

ax.set_xlabel("Time (hours)")
ax.set_ylabel("Cells per mL")
ax.set_title("E. coli growth at 37 °C")
plt.show()
`

export function Slide09Labels() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Step 3 — <GradientText variant="yellow">say what it is</GradientText>
        </>
      }
      lead={
        <>
          An unlabelled axis is not a result. Every label is a{' '}
          <span className="font-mono">set_</span> method on the same{' '}
          <span className="font-mono">ax</span>.
        </>
      }
      note={
        <>
          <span className="font-mono not-italic">set_xlim</span>,{' '}
          <span className="font-mono not-italic">set_yscale</span>,{' '}
          <span className="font-mono not-italic">set_xticks</span> — same shape, same object.
          Type <span className="font-mono not-italic">ax.set_</span> and let autocomplete do the rest.
        </>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="373px"
        description="The same plot, now readable by someone else"
      />
    </ConceptSlide>
  )
}
