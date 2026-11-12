import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

/* Built live in three runs: the code starts with steps 2 and 3 commented out.
   Run it (an empty panel), remove the # in front of step 2 and run again
   (the data), then step 3 (the labels). Two plain lists, no numpy, so the
   only new thing on screen is matplotlib. */

const code = `import matplotlib.pyplot as plt

hours = [0, 1, 2, 3, 4, 5, 6]
cells = [1, 2, 4, 8, 16, 32, 64]    # thousands of cells per mL

# Step 1: an empty figure with one panel
fig, ax = plt.subplots()

# Step 2: put the data on it
# ax.plot(hours, cells, marker="o")

# Step 3: label it
# ax.set_xlabel("Time (hours)")
# ax.set_ylabel("Cells (thousands per mL)")
# ax.set_title("A bacterial culture, doubling every hour")

plt.show()
`

const steps: { n: string; title: string; body: React.ReactNode; color: 'blue' | 'green' | 'yellow' }[] = [
  {
    n: '1',
    title: 'An empty figure',
    body: <><span className="font-mono text-white">plt.subplots()</span> hands you the figure and one empty panel.</>,
    color: 'blue',
  },
  {
    n: '2',
    title: 'Put the data on it',
    body: <><span className="font-mono text-white">ax.plot(hours, cells)</span>: two lists of the same length, x first, then y.</>,
    color: 'green',
  },
  {
    n: '3',
    title: 'Label it',
    body: <>Each label is an <span className="font-mono text-white">ax.set_…()</span> on the same panel. No labels, no result.</>,
    color: 'yellow',
  },
]

export function Slide09Labels() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Build your <GradientText variant="yellow">first plot</GradientText>
        </>
      }
      lead={
        <>
          Three steps, three runs: run it, remove the <span className="font-mono">#</span> in front
          of step 2, run again, then step 3.
        </>
      }
      points={
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 md:gap-3 col-span-full">
          {steps.map((s) => (
            <SlideCard key={s.n} color={s.color} layout="start" padding="tight" className="border-t-4">
              <p className="text-white font-semibold text-sm md:text-base xl:text-lg mb-0.5">
                {s.n} · {s.title}
              </p>
              <p className="text-gray-300 text-xs md:text-sm xl:text-base leading-snug">{s.body}</p>
            </SlideCard>
          ))}
        </div>
      }
      note={
        <>
          Every other plot type works the same way: swap{' '}
          <span className="font-mono not-italic">ax.plot</span> for{' '}
          <span className="font-mono not-italic">ax.scatter</span>,{' '}
          <span className="font-mono not-italic">ax.hist</span> or{' '}
          <span className="font-mono not-italic">ax.boxplot</span>; steps 1 and 3 stay the same.
        </>
      }
    >
      <LazyPythonRunner initialCode={code} height="240px" description="Run, remove a #, run again" />
    </ConceptSlide>
  )
}
