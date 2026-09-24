import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("depmap_lecture.csv")
names = ["Skin", "Lung", "Lymphoid", "Breast"]
groups = [df[df["oncotree_lineage"] == n]["SOX10"] for n in names]

fig, axes = plt.subplots(1, 2)
fig.set_size_inches(10, 3.5)

axes[0].hist(df["SOX10"], bins=40)
axes[0].set_title("All 1,165 cell lines")

axes[1].boxplot(groups, tick_labels=names)
axes[1].set_title("Split by lineage")
plt.show()
`

/**
 * Comes last in Part 2, once every method it uses has been taught: the point
 * is not a new plot type but putting two of them on one sheet, and the pair
 * tells a story neither half can — the tail on the left is the box on the
 * right.
 */
export function Slide18TwoPanels() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Two panels — <GradientText variant="green">plt.subplots(1, 2)</GradientText>
        </>
      }
      lead={
        <>
          Ask for two and you get an <strong>array</strong> of axes back:{' '}
          <span className="font-mono">axes[0]</span> is the left panel,{' '}
          <span className="font-mono">axes[1]</span> the right. Two methods you already
          know, on two panels.
        </>
      }
      note={
        <>
          The long left tail on the histogram <em>is</em> the skin box on the right —
          neither panel says that alone.
        </>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="331px"
        description="Two different plot types, one figure"
      />
    </ConceptSlide>
  )
}
