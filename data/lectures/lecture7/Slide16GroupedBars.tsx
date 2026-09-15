import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("depmap_lecture.csv")

n = df["oncotree_lineage"].value_counts()
big = df[df["oncotree_lineage"].isin(n[n >= 40].index)]
means = big.groupby("oncotree_lineage")["SOX10"].mean().sort_values()

fig, ax = plt.subplots()
ax.barh(means.index, means.values)
ax.set_xlabel("mean SOX10 dependency")
plt.show()
`

/**
 * The answer to "how do I group them": last week's `groupby` produces a
 * Series whose index is the group names and whose values are the bar
 * heights — which is exactly what `ax.barh` wants.
 *
 * The `n >= 40` filter is the lesson, not housekeeping: without it the
 * lowest means belong to lineages of one and two cell lines.
 */
export function Slide16GroupedBars() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          One per group — <GradientText variant="green">groupby + ax.barh()</GradientText>
        </>
      }
      lead={
        <>
          Last week&rsquo;s <span className="font-mono">groupby</span> hands back a Series:
          group names in the index, numbers in the values. That is precisely what{' '}
          <span className="font-mono">ax.barh()</span> takes — no conversion needed.
        </>
      }
      note={
        <>
          The <span className="font-mono not-italic">n &gt;= 40</span> line is the real
          lesson: unfiltered, the lowest means belong to lineages of{' '}
          <strong>one and two</strong> cell lines. Skin lands at{' '}
          <span className="font-mono not-italic">−1.26</span>, the next at{' '}
          <span className="font-mono not-italic">−0.25</span>.
        </>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="289px"
        description="Fourteen lineages, one bar each — and one of them is not like the others"
      />
    </ConceptSlide>
  )
}
