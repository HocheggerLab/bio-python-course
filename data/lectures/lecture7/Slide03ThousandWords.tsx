import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("depmap_lecture.csv")

print(df["SOX10"].describe()[["mean", "std", "min", "max"]])

fig, ax = plt.subplots()
ax.hist(df["SOX10"], bins=40, color="#00d4ff")
ax.set_xlabel("SOX10 dependency score")
plt.show()
`

const output = `mean   -0.266665
std     0.384825
min    -3.015000
max     0.377000
Name: SOX10, dtype: float64`

export function Slide05ThousandWords() {
  return (
    <ConceptSlide
      maxWidth="full"
      title={
        <>
          A figure is worth <GradientText>a thousand numbers</GradientText>
        </>
      }
      lead={
        <>
          The gene <span className="font-mono">SOX10</span> across all 1,165 cell lines,
          twice: as four numbers, and as a picture.
        </>
      }
      note={
        <>
          The mean says <span className="font-mono not-italic">−0.27</span>: a gene that
          barely matters. The picture says{' '}
          <span className="text-white not-italic">93 cell lines genuinely need it</span> —
          averaged away by a single number.
        </>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="331px"
        description="The same column, summarised and drawn"
        staticOutput={output}
      />
    </ConceptSlide>
  )
}
