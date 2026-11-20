import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

/* After Part 2: correlation (Pearson vs Spearman), then the p53 hook into
   the project, then the close. */

const corrCode = `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from scipy.stats import pearsonr, spearmanr

df = pd.read_csv("depmap_lecture.csv")
skin = df[df["oncotree_lineage"] == "Skin"]

pearson = pearsonr(skin["BRAF"], skin["SOX10"])
spearman = spearmanr(skin["BRAF"], skin["SOX10"])
print("Pearson r: ", round(pearson.statistic, 2))
print("Spearman r:", round(spearman.statistic, 2))

# regplot: the dots, plus the best straight line through them
fig, ax = plt.subplots()
sns.regplot(data=skin, x="BRAF", y="SOX10", ax=ax)
ax.set_title("73 skin cancer lines")
plt.show()
`

export function SlideCorrelation() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Two columns: <GradientText variant="green">do they move together?</GradientText>
        </>
      }
      lead={
        <>
          There is another statistical test that we use a lot in biology: are two distributions following a similar linear trend? This is expressed as a correlation{' '}
          <span className="font-mono">r</span> that runs from −1 (one rises as the other falls) through 0 (no relation) to +1 (they rise together). In DepMap, if two genes show a positive correlation, it means
          a cancer cell that needs gene A is also dependent on gene B. We measure this with the Pearson or Spearman coefficient.
        </>
      }
      note={
        <>
          The line slopes up: skin lines that need BRAF also need SOX10. <strong>Pearson</strong> (0.64)
          measures how close the dots sit to that straight line; <strong>Spearman</strong> (0.67) ranks
          the values first, like Mann–Whitney. They agree, so a few extreme lines are not driving it.
          Unsure? Use Spearman. And r says they move together, not that one causes the other.
        </>
      }
    >
      <LazyPythonRunner initialCode={corrCode} height="360px" description="BRAF against SOX10, skin only" />
    </ConceptSlide>
  )
}

const hookCode = `import pandas as pd
from scipy.stats import mannwhitneyu

df = pd.read_csv("depmap_lecture.csv")
skin = df[df["oncotree_lineage"] == "Skin"]
rest = df[df["oncotree_lineage"] != "Skin"]

def compare(a, b):
    """Compare two groups of numbers with a Mann-Whitney U test."""
    p = mannwhitneyu(a, b).pvalue
    return {
        "median_a": a.median(),
        "median_b": b.median(),
        "difference": a.median() - b.median(),
        "p": p,
        "significant": p < 0.05,
    }

# try any gene: print(df.columns[4:].tolist()) lists them all
for gene in ["MDM2", "TP53"]:
    r = compare(skin[gene], rest[gene])
    print(gene, round(r["difference"], 2), f"p={r['p']:.1g}", r["significant"])
`

export function SlideP53Hook() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          One more clue: skin needs <GradientText>MDM2</GradientText>
        </>
      }
      lead={
        <>
          The same <span className="font-mono">compare()</span>, two more genes. MDM2 keeps the tumour
          suppressor p53 switched off. Run it, then swap in any gene from the table.
        </>
      }
      note={
        <>
          Skin needs MDM2 far more than the rest (difference −0.71), and grows <em>better</em> without
          TP53 (+0.41). Both only happen when p53 is working: most melanomas keep it intact.{' '}
          <strong>Your project asks the reverse question, in patients:</strong> when a tumour{' '}
          <em>loses</em> p53, what happens to your gene?
        </>
      }
    >
      <LazyPythonRunner initialCode={hookCode} height="400px" description="compare() on MDM2 and TP53" />
    </ConceptSlide>
  )
}

const items = [
  ['sns.boxplot · sns.stripplot · sns.histplot', 'give it the table, name the columns: x=, y=, hue=, order='],
  ['sns.boxplot(..., ax=ax)', 'seaborn draws on your panel; fig and ax work as before'],
  ['mannwhitneyu(a, b).pvalue', 'two groups, skewed data: is the gap bigger than chance?'],
  ['pearsonr · spearmanr', 'two columns: do they move together? Unsure? Spearman'],
  ['difference first, then p', 'significant is not the same as big'],
]

export function SlideCloseL8() {
  return (
    <ConceptSlide
      maxWidth="5xl"
      title={
        <>
          What you can <GradientText>do now</GradientText>
        </>
      }
      note={<>That is everything the project needs. The rest is your gene, your cancer type, and what you make of the answer.</>}
    >
      <div className="flex flex-col gap-2 md:gap-3">
        {items.map(([code, means]) => (
          <div key={code} className="grid grid-cols-1 md:grid-cols-2 gap-x-6 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5">
            <span className="font-mono [font-variant-ligatures:none] text-white text-sm md:text-base">{code}</span>
            <span className="text-gray-300 text-sm md:text-base">{means}</span>
          </div>
        ))}
      </div>
    </ConceptSlide>
  )
}
