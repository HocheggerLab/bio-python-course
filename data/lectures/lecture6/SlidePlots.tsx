import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

/* One picture at the end of each part: the part's tools, plus .plot().
   Each also drops a clue for the bet. Figures come from the live runner
   (matplotlib in Pyodide); the static fallback is a one-line description.
   Checked against pandas 3 on public/data/pollinators_lecture.csv. */

function PlotSlide({
  title,
  lead,
  code,
  height,
  description,
  fallback,
  clue,
}: {
  title: React.ReactNode
  lead: React.ReactNode
  code: string
  height: string
  description: string
  fallback: string
  clue: React.ReactNode
}) {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={title}
      lead={lead}
      closing={
        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-1">
            🔎 Clue for your bet
          </CardHeading>
          <CardBody>{clue}</CardBody>
        </SlideCard>
      }
    >
      <LazyPythonRunner initialCode={code} height={height} description={description} staticOutput={fallback} />
    </ConceptSlide>
  )
}

export function SlidePlotPart1() {
  return (
    <PlotSlide
      title={
        <>
          One more line: <GradientText>see it</GradientText>
        </>
      }
      lead={
        <>
          Every Series can draw itself. <span className="font-mono">.plot(kind=&quot;hist&quot;)</span>{' '}
          sorts the 1,620 flower counts into bins and counts each bin.
        </>
      }
      code={`df["Flowers"].plot(kind="hist", bins=40)
`}
      height="58px"
      description="How big is a typical patch?"
      fallback="A histogram: a tall bar near zero, a long thin tail out to 2,000."
      clue={
        <>
          Most patches have well under 100 flowers; a few have hundreds. Bees go where the flowers
          are — so &quot;most visits&quot; may just mean &quot;most flowers&quot;.
        </>
      }
    />
  )
}

export function SlidePlotPart2() {
  return (
    <PlotSlide
      title={
        <>
          Filter, then <GradientText variant="yellow">plot</GradientText>
        </>
      }
      lead={
        <>
          Keep the raspberry surveys, then ask a DataFrame for a scatter plot: name the column for
          each axis.
        </>
      }
      code={`rasp = df[df["Crop"] == "Raspberry"]

rasp.plot(kind="scatter", x="Flowers", y="Bumblebees")
`}
      height="100px"
      description="More flowers, more bumblebees?"
      fallback="A scatter plot: more flowers, more bumblebees on average — with lots of zeros."
      clue={
        <>
          Bigger raspberry patches, more bumblebees: raspberry is a bumblebee magnet. Tempting bet…
          but magnets can attract more than one kind of bee.
        </>
      }
    />
  )
}

export function SlidePlotPart3() {
  return (
    <PlotSlide
      title={
        <>
          groupby, then <GradientText variant="green">plot</GradientText>
        </>
      }
      lead={
        <>
          One answer per group is a table — and a table plots as one bar per column.{' '}
          <span className="font-mono">barh</span> lays the bars sideways so the names fit.
        </>
      }
      code={`bees = df.groupby("Allotment")[["Honeybees", "Bumblebees"]].sum()

bees.plot(kind="barh")
`}
      height="100px"
      description="Who visits where?"
      fallback="Two bars per allotment: Weald is honeybee country, Roedale and Moulsecoomb belong to bumblebees."
      clue={
        <>
          Honeybees and bumblebees don&apos;t split the work evenly. Weald is honeybee country;
          Roedale and Moulsecoomb belong to the bumblebees. Would a crop work the same way?
        </>
      }
    />
  )
}
