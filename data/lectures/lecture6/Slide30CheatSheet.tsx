import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import type { CardColor } from '@/components/slides/SlideCard'

interface Group {
  heading: string
  color: CardColor
  lines: [string, string][]
}

/* Everything in today's lecture, plus a few close relatives worth trying in
   the revision exercises. Each line is runnable on df as loaded on slide 5. */
const groups: Group[] = [
  {
    heading: 'Open & look',
    color: 'blue',
    lines: [
      ['pd.read_csv("file.csv")', 'file → DataFrame'],
      ['df.head(10) / df.tail()', 'first / last rows'],
      ['df.shape · df.columns', 'size · column names'],
      ['df.info() · df.dtypes', 'types, missing values'],
      ['df.describe()', 'summary of number columns'],
    ],
  },
  {
    heading: 'Pick',
    color: 'yellow',
    lines: [
      ['df["Crop"]', 'one column → Series'],
      ['df[["Crop", "Flowers"]]', 'several → DataFrame'],
      ['df.loc[mask, ["Crop"]]', 'rows and columns'],
      ['df.loc[588]', 'one row, by its label'],
    ],
  },
  {
    heading: 'Filter',
    color: 'yellow',
    lines: [
      ['df[df["Flowers"] > 100]', 'rows where True'],
      ['df[(a) & (b)] · df[(a) | (b)]', 'both · either'],
      ['df[df["Crop"].isin([...])]', 'one of a list'],
      ['df[~mask]', 'everything else'],
    ],
  },
  {
    heading: 'Sort & count',
    color: 'green',
    lines: [
      ['df.sort_values("Flowers", ascending=False)', 'biggest first'],
      ['df.nlargest(5, "Honeybees")', 'top five'],
      ['df["Crop"].value_counts()', 'tally a text column'],
      ['df["Crop"].unique() · .nunique()', 'the values · how many'],
    ],
  },
  {
    heading: 'Make & group',
    color: 'green',
    lines: [
      ['df["Total"] = df["A"] + df["B"]', 'a new column'],
      ['df.groupby("Month")["Bumblebees"].sum()', 'one answer per group'],
      ['.mean() · .max() · .count()', 'other things to do per group'],
      ['s.sort_values(ascending=False)', 'rank the answer'],
    ],
  },
  {
    heading: 'Column maths',
    color: 'purple',
    lines: [
      ['s.sum() · s.mean() · s.median()', 'one number'],
      ['s.min() · s.max() · s.std()', 'spread'],
      ['(s > 0).sum()', 'count with a mask'],
      ['s.idxmax()', 'label of the biggest'],
    ],
  },
]

export function Slide30CheatSheet() {
  return (
    <ConceptSlide
      maxWidth="full"
      title={
        <>
          The pandas <GradientText>cheat sheet</GradientText>
        </>
      }
      lead={
        <>
          Everything from today, and a few relatives. Practise them on{' '}
          <span className="font-mono">df</span> in the revision slides — this is the list for later.
        </>
      }
      note={
        <>
          <span className="font-mono not-italic">s</span> is any one column, e.g.{' '}
          <span className="font-mono not-italic">s = df[&quot;Bumblebees&quot;]</span>. Full docs:
          pandas.pydata.org → User Guide.
        </>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4">
        {groups.map((g) => (
          <SlideCard key={g.heading} color={g.color} layout="start" padding="tight" className="border-t-4">
            <CardHeading size="sm" color={g.color} className="mb-1.5">
              {g.heading}
            </CardHeading>
            <ul className="flex flex-col gap-1">
              {g.lines.map(([code, what]) => (
                <li key={code} className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <span className="font-mono text-white text-[11px] md:text-sm">{code}</span>
                  <span className="text-gray-400 text-[11px] md:text-sm">{what}</span>
                </li>
              ))}
            </ul>
          </SlideCard>
        ))}
      </div>
    </ConceptSlide>
  )
}
