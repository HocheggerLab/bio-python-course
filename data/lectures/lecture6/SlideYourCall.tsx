import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import PollSlide from '@/components/poll/PollSlide'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

/* Live coding without asking anyone to speak: the room votes on a question
   (anonymous, on their phones), then the lecturer types the winner into an
   almost empty runner. The crib cards stay folded — they are for the
   lecturer, and for a quiet room. Outputs checked against pandas 3. */

export function SlideYourCallVote() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Your call — <GradientText variant="yellow">ask the table</GradientText>
        </>
      }
      lead={
        <>
          You now know enough to ask the survey real questions. Vote for one — I&apos;ll type the
          winner live, typos and all.
        </>
      }
    >
      <PollSlide questionId="l6-call" prediction />
    </ConceptSlide>
  )
}

const START = `import pandas as pd

df = pd.read_csv("pollinators_lecture.csv")

`

const cribs = [
  {
    q: 'A · The busiest single surveys',
    code: `busy = df[df["Bumblebees"] > 5]
print(busy[["Month", "Allotment", "Crop", "Bumblebees"]])`,
    says: '8 surveys — 7 of them raspberry; the record is 13 bumblebees at Roedale in May.',
  },
  {
    q: 'B · Raspberries: May or August?',
    code: `rasp = df[df["Crop"] == "Raspberry"]
print("May:   ", rasp[rasp["Month"] == "May"]["Bumblebees"].sum())
print("August:", rasp[rasp["Month"] == "August"]["Bumblebees"].sum())`,
    says: 'May 36, August 128 — but count the surveys per month before you believe it.',
  },
  {
    q: 'C · Squash and courgette',
    code: `veg = df[df["Crop"].isin(["Squash", "Courgette"])]
print(veg[["Honeybees", "Bumblebees", "Hoverflies"]].sum())`,
    says: 'Honeybees 128, bumblebees 23, hoverflies 13 — the squash family is honeybee food.',
  },
  {
    q: 'D · Moulsecoomb in July',
    code: `july = (df["Allotment"] == "Moulsecoomb") & (df["Month"] == "July")
print(df.loc[july, ["Crop", "Flowers", "Honeybees", "Bumblebees"]])`,
    says: '18 surveys; the raspberries were heaving — 6, 10 and 6 bumblebees on three patches.',
  },
]

export function SlideYourCallLive() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Live: <GradientText variant="yellow">the winning question</GradientText>
        </>
      }
      lead={
        <>
          What do we filter on? Which columns do we keep? Every error on the way is one you will
          meet yourself — so we read it together.
        </>
      }
      closing={
        <details className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 cursor-pointer">
          <summary className="text-gray-400 text-xs md:text-sm">Lecturer&apos;s crib (keep folded)</summary>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
            {cribs.map((c) => (
              <div key={c.q} className="min-w-0">
                <p className="text-bio-yellow font-semibold text-sm">{c.q}</p>
                <pre className="mt-1 p-2 rounded bg-bio-dark/70 border border-white/10 font-mono text-xs text-gray-200 overflow-x-auto">
                  {c.code}
                </pre>
                <p className="mt-1 text-gray-300 text-xs md:text-sm">{c.says}</p>
              </div>
            ))}
          </div>
        </details>
      }
    >
      <LazyPythonRunner
        initialCode={START}
        height="200px"
        description="Type the winning question here"
        staticOutput="(live coding — run it in the lecture)"
      />
    </ConceptSlide>
  )
}
