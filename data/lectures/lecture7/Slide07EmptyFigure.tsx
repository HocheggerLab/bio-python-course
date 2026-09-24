import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import matplotlib.pyplot as plt

fig, ax = plt.subplots()

print(type(fig))
print(type(ax))
plt.show()
`

const output = `<class 'matplotlib.figure.Figure'>
<class 'matplotlib.axes._axes.Axes'>`

/**
 * Text on the left, code on the right.
 *
 * The point of this slide is not the code — it is six lines — but what the
 * two names *are*. So the explanation gets equal billing rather than sitting
 * above the runner as a caption. The runner still splits
 * internally once the figure renders, so code and plot sit side by side inside
 * the right-hand column.
 */
export function Slide07EmptyFigure() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Step 1 — <GradientText>an empty figure</GradientText>
        </>
      }
      lead={
        <>
          <span className="font-mono">plt.subplots()</span> hands you back{' '}
          <strong>two objects</strong>, and they do different jobs.
        </>
      }
      note={
        <>
          Almost every line you write from here starts with{' '}
          <span className="font-mono not-italic">ax.</span> —{' '}
          <span className="font-mono not-italic">fig</span> comes back at the very end,
          when you save.
        </>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-5 md:gap-8 items-start">
        <div className="space-y-4 md:space-y-5">
          <div className="border-l-4 border-bio-blue pl-4">
            <p className="text-gray-200 text-sm md:text-lg xl:text-xl leading-relaxed">
              <span className="font-mono text-bio-blue font-semibold">fig</span> is the{' '}
              <strong className="text-white">sheet of paper</strong>. It owns the canvas —
              how big it is and what gets saved. Its methods are about the sheet:{' '}
              <span className="font-mono">fig.savefig()</span>,{' '}
              <span className="font-mono">fig.set_size_inches()</span>.
            </p>
          </div>
          <div className="border-l-4 border-bio-green pl-4">
            <p className="text-gray-200 text-sm md:text-lg xl:text-xl leading-relaxed">
              <span className="font-mono text-bio-green font-semibold">ax</span> is{' '}
              <strong className="text-white">one panel</strong> on it. It owns the data and
              everything describing it:{' '}
              <span className="font-mono">ax.hist()</span>,{' '}
              <span className="font-mono">ax.set_xlabel()</span>,{' '}
              <span className="font-mono">ax.set_title()</span>.
            </p>
          </div>
          <p className="text-gray-400 text-xs md:text-base xl:text-lg leading-relaxed">
            Ask Python what they are and it tells you plainly: a{' '}
            <span className="font-mono">Figure</span> and an{' '}
            <span className="font-mono">Axes</span>. Two types, two sets of methods —{' '}
            <span className="font-mono">ax.savefig()</span> does not exist.
          </p>
        </div>
        <LazyPythonRunner
          initialCode={code}
          height="168px"
          description="Make the figure and look at what you got"
          staticOutput={output}
        />
      </div>
    </ConceptSlide>
  )
}
