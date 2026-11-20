import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

/* Part 2: chance first, then the logic of a test, then the test, then what
   a small p does not tell you, then the function the project needs. */

const chanceCode = `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv("depmap_lecture.csv")
skin = df[df["oncotree_lineage"] == "Skin"]
rest = df[df["oncotree_lineage"] != "Skin"]

# 73 non-skin lines picked at random: no biology behind this group
fake = rest.sample(73)

# a label column: everyone starts as "everything else",
# then the skin rows and the random rows are relabelled
df["group"] = "everything else"
df.loc[skin.index, "group"] = "skin"
df.loc[fake.index, "group"] = "random 73"
order = ["skin", "random 73", "everything else"]

# median difference from "everything else"
medians = df.groupby("group")["SOX10"].median()
base = medians["everything else"]
print("skin:     ", round(medians["skin"] - base, 2))
print("random 73:", round(medians["random 73"] - base, 2))

fig, ax = plt.subplots()
sns.boxplot(data=df, x="group", y="SOX10",
            order=order, ax=ax, showfliers=False)
sns.stripplot(data=df, x="group", y="SOX10",
              order=order, ax=ax, color="grey", size=2)
ax.set_xlabel("")
ax.set_ylabel("SOX10 gene effect")
plt.show()

# Run it again, and again. Watch the middle box.
`

export function SlideChance() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Chance makes <GradientText variant="yellow">differences too</GradientText>
        </>
      }
      lead={
        <>
          Pick 73 non-skin lines at random and call them a group: the same size as skin, with no
          biology behind it. Plot skin, the random group and everything else side by side.
        </>
      }
      note={
        <>
          The random box is what &ldquo;no real difference&rdquo; looks like (the <strong>null
          hypothesis</strong>): each run, its median moves a little either side of 0. A test asks how
          often a random group lands as far away as skin does. That fraction is the{' '}
          <strong>p-value</strong>.
          <br />
          <a
            href="https://www.youtube.com/watch?v=Iq9DzN6mvYA"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !py-1 !px-4 text-xs md:text-sm not-italic inline-block mt-3"
          >
            ▶ Watch: Statistics for Hackers, Jake VanderPlas (PyCon 2016) →
          </a>
        </>
      }
    >
      <LazyPythonRunner initialCode={chanceCode} height="440px" description="Skin, a random group, and the rest" />
    </ConceptSlide>
  )
}

export function SlidePValue() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          What a <GradientText>p-value</GradientText> is
        </>
      }
      lead={
        <>
          Start by assuming the dull explanation: <strong>skin and the rest come from the same
          population</strong>, and the gap is chance. That is the <em>null hypothesis</em>.
        </>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
          <SlideCard color="blue" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-1">
              The p-value
            </CardHeading>
            <CardBody>
              If the null were true, how often would chance give a gap at least this big? A small p
              means chance is a poor explanation.
            </CardBody>
          </SlideCard>
          <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-1">
              p &lt; 0.05
            </CardHeading>
            <CardBody>
              0.05 is a cut-off you choose before testing, by convention. If p falls below it, we
              call the difference <em>significant</em>.
            </CardBody>
          </SlideCard>
          <SlideCard color="red" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="red" className="mb-1">
              What p is not
            </CardHeading>
            <CardBody>
              Not the chance that the null is true. Not how big the difference is. Not how important
              it is.
            </CardBody>
          </SlideCard>
      </div>
    </ConceptSlide>
  )
}

const tests: [string, string, string][] = [
  ['two groups, roughly bell-shaped values', 't-test', 'ttest_ind(a, b)'],
  ['two groups, skewed, long tails, or unsure', 'Mann–Whitney U', 'mannwhitneyu(a, b)'],
  ['two columns: do they move together?', 'Spearman correlation', 'spearmanr(x, y)'],
]

export function SlideWhichTest() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Which test? <GradientText>Ask the data</GradientText>
        </>
      }
      lead={
        <>
          Same idea as choosing a plot: the kind of data decides. All three live in{' '}
          <span className="font-mono">scipy.stats</span>.
        </>
      }
      note={
        <>
          SOX10 has a long tail out to −3, so we use <strong>Mann–Whitney</strong>. It ranks the values
          and compares the ranks, so one extreme cell line cannot drag the result. Report{' '}
          <strong>medians</strong> with it, not means.
        </>
      }
    >
      <div className="flex flex-col gap-2 md:gap-3">
        {tests.map(([when, name, call]) => (
          <div
            key={name}
            className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-x-6 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 items-baseline"
          >
            <span className="text-gray-300 text-sm md:text-base xl:text-lg">{when}</span>
            <span className="text-white font-semibold text-sm md:text-base xl:text-lg">{name}</span>
            <span className="font-mono text-bio-green text-sm md:text-base xl:text-lg">{call}</span>
          </div>
        ))}
      </div>
    </ConceptSlide>
  )
}

const scipyModules: [string, string][] = [
  ['scipy.stats', 'tests, correlations, distributions: today'],
  ['scipy.optimize', 'fit a curve to your data, e.g. a dose–response'],
  ['scipy.ndimage', 'filter and measure images, e.g. count nuclei'],
  ['scipy.signal', 'peaks and noise in a trace, e.g. a neuron recording'],
  ['scipy.integrate', 'solve differential equations, e.g. a growth model'],
]

const scipyUse = `from scipy.stats import mannwhitneyu

result = mannwhitneyu(a, b)
result.statistic   # the test's U value
result.pvalue      # the p-value`

const scipyLinks: { href: string; label: string }[] = [
  { href: 'https://docs.scipy.org/doc/scipy/reference/stats.html', label: 'scipy.stats documentation' },
  {
    href: 'https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.mannwhitneyu.html',
    label: 'mannwhitneyu reference',
  },
  { href: 'https://docs.scipy.org/doc/scipy/', label: 'SciPy user guide' },
]

export function SlideSciPy() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          SciPy: <GradientText>the scientist&apos;s toolbox</GradientText>
        </>
      }
      lead={
        <>
          numpy gives you arrays; SciPy gives you the maths scientists do with them. Started in 2001,
          written and maintained by volunteers, free, and behind a huge share of published analyses
          (SciPy 1.0 paper: Virtanen et al., <em>Nature Methods</em> 2020).
        </>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2">
            One package, many toolboxes
          </CardHeading>
          <div className="flex flex-col gap-1.5 md:gap-2">
            {scipyModules.map(([mod, what]) => (
              <div key={mod} className="grid grid-cols-[8.5rem_1fr] md:grid-cols-[10rem_1fr] gap-x-3 items-baseline">
                <span className="font-mono text-white text-sm md:text-base">{mod}</span>
                <span className="text-gray-300 text-xs md:text-sm xl:text-base leading-snug">{what}</span>
              </div>
            ))}
          </div>
        </SlideCard>
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2">
            Every test works the same way
          </CardHeading>
          <pre className="code-block text-xs md:text-sm xl:text-base whitespace-pre overflow-x-auto !p-3">{scipyUse}</pre>
          <p className="text-gray-400 text-xs md:text-sm xl:text-base mt-2">
            Import the test, give it your groups, read <span className="font-mono">.pvalue</span>.
            The documentation page of each test says what it assumes. Read it before you trust it.
          </p>
        </SlideCard>
      </div>
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-4 md:mt-6">
        {scipyLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !py-1 !px-4 text-xs md:text-sm"
          >
            {l.label} →
          </a>
        ))}
      </div>
    </ConceptSlide>
  )
}

const mwuCode = `import pandas as pd
from scipy.stats import mannwhitneyu

df = pd.read_csv("depmap_lecture.csv")
skin = df[df["oncotree_lineage"] == "Skin"]["SOX10"]
rest = df[df["oncotree_lineage"] != "Skin"]["SOX10"]

result = mannwhitneyu(skin, rest)

print("skin median:", skin.median())
print("rest median:", rest.median())
print("difference: ", round(skin.median() - rest.median(), 2))
print("p-value:    ", result.pvalue)
`

export function SlideMannWhitney() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Skin vs the rest: <GradientText variant="green">mannwhitneyu</GradientText>
        </>
      }
      lead={
        <>
          Two groups of numbers in, one result out. <span className="font-mono">result.pvalue</span> is the
          p-value.
        </>
      }
      note={
        <>
          <span className="font-mono not-italic">1.3e-27</span> means 1.3 × 10<sup>−27</sup>: chance
          would almost never make a gap this big. Always report the <strong>difference</strong> and the{' '}
          <strong>p-value</strong> together.
        </>
      }
    >
      <LazyPythonRunner initialCode={mwuCode} height="300px" description="Skin vs the rest, SOX10" />
    </ConceptSlide>
  )
}

const nullCode = `import pandas as pd
from scipy.stats import mannwhitneyu

df = pd.read_csv("depmap_lecture.csv")
rest = df[df["oncotree_lineage"] != "Skin"]["SOX10"]

hits = 0
for i in range(200):
    fake = rest.sample(73)            # no biology, just chance
    others = rest.drop(fake.index)
    if mannwhitneyu(fake, others).pvalue < 0.05:
        hits = hits + 1

print(hits, "of 200 random splits came out 'significant'")
`

export function SlideOneInTwenty() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          The 0.05 cut-off: <GradientText variant="yellow">1 false alarm in 20</GradientText>
        </>
      }
      lead={
        <>
          0.05 is not a p-value. It is a <strong>cut-off you choose</strong> before testing. Back to the
          random splits, which have no biology in them: how often does p land below the cut-off anyway?
        </>
      }
      note={
        <>
          About 10 of 200, every time you run it. When there is truly no difference, p falls below 0.05
          one time in 20: that is the <strong>false positive rate</strong> you accept for each test.
          Run 20 tests on nothing and expect one false alarm.
        </>
      }
    >
      <LazyPythonRunner initialCode={nullCode} height="331px" description="200 tests on nothing" />
    </ConceptSlide>
  )
}

const rows: [string, string, string, string][] = [
  ['SOX10', '−1.22', '1e-27', 'big and real: melanoma lines die without it'],
  ['KRAS', '+0.07', '0.0009', 'real, but tiny: no biologist would care'],
  ['PAX8', '−0.02', '0.5', 'no evidence of any difference'],
]

export function SlideSmallButSignificant() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Significant is not the same as <GradientText variant="yellow">big</GradientText>
        </>
      }
      lead={
        <>
          The same test, skin vs the rest, on three genes. Two pass p &lt; 0.05. Only one of them
          matters.
        </>
      }
      note={
        <>
          With 1,165 cell lines a test can detect a shift too small to mean anything. So read the{' '}
          <strong>difference first</strong>: is it big enough to care about? Then the p-value: could it
          be chance?
        </>
      }
    >
      <div className="flex flex-col gap-2 md:gap-3">
        <div className="grid grid-cols-[5rem_6rem_6rem_1fr] md:grid-cols-[7rem_8rem_8rem_1fr] gap-x-4 px-4 text-gray-400 text-xs md:text-sm uppercase tracking-wider">
          <span>gene</span>
          <span>difference</span>
          <span>p</span>
          <span>reading</span>
        </div>
        {rows.map(([gene, diff, p, reading]) => (
          <div
            key={gene}
            className="grid grid-cols-[5rem_6rem_6rem_1fr] md:grid-cols-[7rem_8rem_8rem_1fr] gap-x-4 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 items-baseline"
          >
            <span className="font-mono text-white text-sm md:text-base xl:text-lg">{gene}</span>
            <span className="font-mono text-white text-sm md:text-base xl:text-lg">{diff}</span>
            <span className="font-mono text-white text-sm md:text-base xl:text-lg">{p}</span>
            <span className="text-gray-300 text-sm md:text-base xl:text-lg">{reading}</span>
          </div>
        ))}
      </div>
    </ConceptSlide>
  )
}

const compareCode = `import pandas as pd
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

for gene in ["SOX10", "KRAS", "PAX8"]:
    r = compare(skin[gene], rest[gene])
    print(gene, round(r["difference"], 2), f"p={r['p']:.1g}", r["significant"])
`

export function SlideWriteOnce() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Write it once, <GradientText variant="green">use it everywhere</GradientText>
        </>
      }
      lead={
        <>
          The table on the last slide came from this: one function runs the test and returns
          everything you report, in a dictionary.
        </>
      }
      note={
        <>
          One function, three genes, no copy-paste: the pattern your project asks for.
        </>
      }
    >
      <LazyPythonRunner initialCode={compareCode} height="380px" description="One function, three genes" />
    </ConceptSlide>
  )
}
