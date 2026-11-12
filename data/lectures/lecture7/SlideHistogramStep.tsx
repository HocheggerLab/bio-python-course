import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import pandas as pd
import matplotlib.pyplot as plt
df = pd.read_csv("depmap_lecture.csv")

# 1. the figure and one panel
fig, ax = plt.subplots()

# 2. the data: one column, cut into 40 bins
ax.hist(df["SOX10"], bins=40)

# 3. the labels
ax.set_xlabel("SOX10 gene effect")
ax.set_ylabel("Number of cell lines")
ax.set_title("SOX10 in 1,165 cancer cell lines")
plt.show()

# Try: change bins=40 to bins=5, then bins=200, and run again
`

export function SlideHistogramStep() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Your first real figure: <GradientText>the SOX10 histogram</GradientText>
        </>
      }
      lead={
        <>
          The same three steps, now on a DataFrame column. A histogram cuts the range of values
          into <strong>bins</strong> and counts how many cell lines fall into each: one bar per bin.
        </>
      }
      closing={
        <p className="text-center text-gray-300">
          <span className="text-bio-yellow font-semibold">🔍 Clue 1.</span> Most cell lines sit near{' '}
          <span className="font-mono text-white">0</span>: switching SOX10 off does nothing to them.
          But a <strong className="text-white">long tail</strong> runs out to −3: about 90 cell lines die
          without it. Who are they?
        </p>
      }
      note={<>Too few bins hide the tail; too many turn it into noise. There is no right number, only one that shows the shape.</>}
    >
      <LazyPythonRunner initialCode={code} height="260px" description="One column, cut into bins" />
    </ConceptSlide>
  )
}
