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
          <span className="font-mono">plt.subplots()</span> builds both objects and hands
          them back. No data yet — just the paper and one empty panel on it.
        </>
      }
      note={
        <>
          Read the comma: <span className="font-mono not-italic">fig, ax = ...</span>{' '}
          unpacks two return values, like{' '}
          <span className="font-mono not-italic">a, b = 1, 2</span>.
        </>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="247px"
        description="Make the figure and look at what you got"
        staticOutput={output}
      />
    </ConceptSlide>
  )
}
