import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

/* The finale: one tool from every part — groupby (3), a new column (3), a
   filter (2), a sort (3). The question is the *share* of visits, not
   the total, which is what turns the obvious bet (raspberry) into the wrong
   one. Checked against pandas 3 on public/data/pollinators_lecture.csv. */

const code = `visits = df.groupby("Crop")[["Honeybees", "Bumblebees"]].sum()
visits["share"] = visits["Bumblebees"] / (visits["Honeybees"] + visits["Bumblebees"])

enough = visits[visits["Bumblebees"] >= 20]     # enough visits to trust
print(enough.sort_values("share", ascending=False).round(2))
`

const output = `            Honeybees  Bumblebees  share
Crop
Bbean               2          23   0.92
Raspberry         245         311   0.56
Rbean              81          46   0.36
Blackberry        128          71   0.36
Apple              48          23   0.32`

export function SlideTheAnswer() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Not the most visits — the biggest <GradientText variant="green">share</GradientText>
        </>
      }
      lead={
        <>
          &quot;What would you lose?&quot; asks what fraction of a crop&apos;s visitors are
          bumblebees. One tool from every part of today, four lines.
        </>
      }
      closing={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <details className="group rounded-lg border-l-4 border-bio-green/60 bg-bio-green/[0.07] px-4 md:px-5 py-3 cursor-pointer">
            <summary className="list-none text-bio-green font-bold text-lg md:text-2xl xl:text-3xl">
              <span className="group-open:hidden">Run it, then read the top row → click</span>
              <span className="hidden group-open:inline">Broad bean — 92%</span>
            </summary>
            <p className="mt-1 text-gray-200 text-sm md:text-lg xl:text-xl leading-snug">
              23 bumblebee visits, 2 from honeybees. Take the bumblebees away and almost nothing is
              left. Raspberry has the most bumblebees, but 245 honeybees would carry on.
            </p>
          </details>
          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-1">
              Why the &gt;= 20 filter?
            </CardHeading>
            <CardBody>
              Blueberry scores 100% — from a single bumblebee. A share needs enough visits behind it
              to mean anything. Odd thing 2 again: always check the effort.
            </CardBody>
          </SlideCard>
        </div>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="121px"
        description="Share of bee visits that are bumblebees"
        staticOutput={output}
      />
    </ConceptSlide>
  )
}
