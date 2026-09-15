import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("depmap_lecture.csv")

names = ["Skin", "Lung", "Lymphoid", "CNS/Brain", "Bowel", "Breast"]
groups = [df[df["oncotree_lineage"] == n]["SOX10"] for n in names]

fig, ax = plt.subplots()
fig.set_size_inches(8, 3.5)
ax.boxplot(groups, tick_labels=names)
ax.set_ylabel("SOX10 dependency")
plt.show()
`

/**
 * The bridge from the bar chart: a mean is one number, and one number cannot
 * show you that skin is two populations. The box plot is the same grouping
 * with the spread left in.
 */
export function Slide17Boxplot() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          A mean hides the <GradientText variant="yellow">spread</GradientText>
        </>
      }
      lead={
        <>
          The bar chart gave each lineage <strong>one number</strong>. A{' '}
          <span className="font-mono">boxplot</span> keeps the whole distribution: the box
          is the middle half, the line is the median, the whiskers the rest.
        </>
      }
      note={
        <>
          Same grouping as the bar chart, far more information — and it shows what a mean
          of <span className="font-mono not-italic">−1.26</span> cannot: skin is{' '}
          <strong>not</strong> uniformly dependent, it is a wide spread with a deep tail.
        </>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="331px"
        description="Six lineages, one box each"
      />
    </ConceptSlide>
  )
}
