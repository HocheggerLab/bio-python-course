import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard, CardHeading } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

/* Part 1: the landscape, then seaborn as matplotlib with the table in mind. */

type Lib = { name: string; what: string; course?: boolean }

const staticLibs: Lib[] = [
  { name: 'matplotlib', what: 'the foundation: every panel, line and label under your control', course: true },
  { name: 'seaborn', what: 'statistical plots on top of matplotlib; give it a table, name the columns', course: true },
  { name: 'pandas .plot()', what: 'a quick look straight from a DataFrame; matplotlib underneath' },
  { name: 'plotnine', what: 'R’s ggplot2 grammar in Python, if you come from R' },
]

const webLibs: Lib[] = [
  { name: 'Plotly', what: 'hover, zoom and click in the browser; plotly.express is one line per plot' },
  { name: 'Bokeh', what: 'interactive plots and dashboards served from Python' },
  { name: 'Altair', what: 'describe the plot, not the drawing; rendered by Vega-Lite in the browser' },
]

function LibList({ libs }: { libs: Lib[] }) {
  return (
    <div className="flex flex-col gap-2 md:gap-2.5">
      {libs.map((l) => (
        <div key={l.name} className="grid grid-cols-[8.5rem_1fr] md:grid-cols-[10rem_1fr] gap-x-3 items-baseline">
          <span className="font-mono text-white text-sm md:text-base xl:text-lg">
            {l.name}
            {l.course && <span className="ml-1.5 text-bio-green text-xs align-middle">●</span>}
          </span>
          <span className="text-gray-300 text-xs md:text-sm xl:text-base leading-snug">{l.what}</span>
        </div>
      ))}
    </div>
  )
}

export function SlideLandscape() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          The plotting <GradientText>landscape</GradientText>
        </>
      }
      lead={
        <>
          Python has many plotting libraries. They split by <strong>where the picture ends up</strong>:
          a file for a paper, or a page in a browser.
        </>
      }
      note={
        <>
          <span className="text-bio-green not-italic">●</span> this course. For a report, a thesis or
          your project, matplotlib and seaborn are the standard. Reach for the browser libraries when
          someone needs to explore the data themselves.
        </>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-1">
            Static: a picture in a file
          </CardHeading>
          <p className="text-gray-400 text-xs md:text-sm mb-3">PNG, PDF, SVG. Python draws it.</p>
          <LibList libs={staticLibs} />
        </SlideCard>
        <SlideCard color="purple" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="purple" className="mb-1">
            Interactive: a page in a browser
          </CardHeading>
          <p className="text-gray-400 text-xs md:text-sm mb-3">
            Python writes a description; JavaScript draws it.
          </p>
          <LibList libs={webLibs} />
        </SlideCard>
      </div>
    </ConceptSlide>
  )
}

const pandasCode = `import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("depmap_lecture.csv")

fig, axes = plt.subplots(1, 2)
fig.set_size_inches(9, 3.5)

# a column can plot itself
df["SOX10"].plot.hist(bins=40, ax=axes[0])

# so can a groupby result: the 8 lowest medians
medians = df.groupby("oncotree_lineage")["SOX10"].median()
medians.sort_values().head(8).plot.barh(ax=axes[1])
fig.tight_layout()
plt.show()
`

export function SlidePandasPlot() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          pandas: <GradientText variant="green">the table plots itself</GradientText>
        </>
      }
      lead={
        <>
          Every Series and DataFrame has a <span className="font-mono">.plot</span>:{' '}
          <span className="font-mono">.plot.hist()</span>, <span className="font-mono">.plot.barh()</span>,{' '}
          <span className="font-mono">.plot.scatter()</span>. The labels come from the index and the
          column names.
        </>
      }
      note={
        <>
          The fastest way to look at a result while you explore: one line after a{' '}
          <span className="font-mono not-italic">groupby</span>. It is matplotlib underneath, so{' '}
          <span className="font-mono not-italic">ax=</span> puts it in your panel.
        </>
      }
    >
      <LazyPythonRunner initialCode={pandasCode} height="360px" description="Two plots straight from pandas" />
    </ConceptSlide>
  )
}

const byHand = `# Lab 7: box plot plus dots, by hand
names = ["Skin", "Lung", "Bowel"]
groups = [df[df["oncotree_lineage"] == n]["SOX10"]
          for n in names]
fig, ax = plt.subplots()
ax.boxplot(groups, tick_labels=names)
for i, g in enumerate(groups):
    x = np.random.normal(i + 1, 0.08, len(g))
    ax.scatter(x, g, s=4, color="black")`

const withSeaborn = `# seaborn: name the columns
fig, ax = plt.subplots()
sns.boxplot(data=df, x="oncotree_lineage",
            y="SOX10", order=names, ax=ax)
sns.stripplot(data=df, x="oncotree_lineage",
              y="SOX10", order=names, ax=ax)`

export function SlideSeabornIdea() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          seaborn: <GradientText variant="green">name the columns</GradientText>
        </>
      }
      lead={
        <>
          matplotlib wants the numbers, already split into groups. seaborn wants the whole table and
          the names of the columns: <span className="font-mono">x=</span> the groups,{' '}
          <span className="font-mono">y=</span> the values. It does the splitting for you.
        </>
      }
      note={
        <>
          It is still matplotlib underneath: pass <span className="font-mono not-italic">ax=ax</span> and
          seaborn draws on your panel, so <span className="font-mono not-italic">ax.set_ylabel()</span> and
          everything from last week still works.
        </>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <pre className="code-block text-xs md:text-sm xl:text-base whitespace-pre overflow-x-auto">{byHand}</pre>
        <pre className="code-block text-xs md:text-sm xl:text-base whitespace-pre overflow-x-auto border-l-4 !border-l-bio-green">
          {withSeaborn}
        </pre>
      </div>
    </ConceptSlide>
  )
}

const boxCode = `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv("depmap_lecture.csv")

# a label column: everyone starts as "everything else",
# then the skin rows and the melanoma rows are relabelled
is_skin = df["oncotree_lineage"] == "Skin"
is_melanoma = df["oncotree_primary_disease"].str.contains("Melanoma")
df["group"] = "everything else"
df.loc[is_skin, "group"] = "other skin"
df.loc[is_melanoma, "group"] = "melanoma"
order = ["melanoma", "other skin", "everything else"]

fig, ax = plt.subplots()
sns.boxplot(data=df, x="group", y="SOX10",
            order=order, ax=ax, showfliers=False)
sns.stripplot(data=df, x="group", y="SOX10",
              order=order, ax=ax, color="grey", size=2)
ax.set_xlabel("")
ax.set_ylabel("SOX10 gene effect")
plt.show()
`

export function SlideSeabornBox() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Three groups, <GradientText variant="green">every cell line shown</GradientText>
        </>
      }
      lead={
        <>
          Make a column that says which group each row belongs to, then let seaborn split by it.{' '}
          <span className="font-mono">order=</span> fixes the left-to-right order, so the figure reads
          as a story.
        </>
      }
      note={
        <>
          <span className="font-mono not-italic">showfliers=False</span> hides the box&apos;s own outlier
          dots, because the strip plot already shows every point. Your project figure has the same
          shape: three groups, in an order that tells the story, every sample visible.
        </>
      }
    >
      <LazyPythonRunner initialCode={boxCode} height="440px" description="Box plus strip, in seaborn" />
    </ConceptSlide>
  )
}
