import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("depmap_lecture.csv")
skin = df[df["oncotree_lineage"] == "Skin"]
rest = df[df["oncotree_lineage"] != "Skin"]

fig, ax = plt.subplots()
ax.scatter(rest["BRAF"], rest["SOX10"], s=8, alpha=0.3,
           color="#9ca3af", label="other lineages")
ax.scatter(skin["BRAF"], skin["SOX10"], s=8, alpha=0.9,
           color="#00d4ff", label="skin (melanoma)")

ax.set_xlabel("BRAF dependency")
ax.set_ylabel("SOX10 dependency")
ax.legend()
plt.show()
`

/**
 * The payoff of the whole lecture: the same scatter from Part 2, with one
 * aesthetic added, and the melanoma cluster separates itself.
 *
 * Also where `label=` and `ax.legend()` are taught — which is exactly what
 * the closing poll asks about.
 */
export function Slide21Colour() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Colour — <GradientText>a third column</GradientText>
        </>
      }
      lead={
        <>
          The same scatter as before, drawn <strong>twice</strong>: once for everything
          else, once for skin on top. Two calls to the same{' '}
          <span className="font-mono">ax</span>, and lineage becomes visible without a
          third axis.
        </>
      }
      note={
        <>
          <span className="font-mono not-italic">label=</span> goes on the{' '}
          <em>scatter</em> call, and <span className="font-mono not-italic">ax.legend()</span>{' '}
          draws whatever has already been labelled. Forget the label and the legend comes
          up empty — remember that for the last question.
        </>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="373px"
        description="One aesthetic added — and the melanoma separates itself"
      />
    </ConceptSlide>
  )
}
