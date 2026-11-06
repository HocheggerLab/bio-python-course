import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide, DefTable, type DefRow } from '@/components/slides/layouts'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

const rows: DefRow[] = [
  { term: 'df · df["Bumblebees"]', def: 'the table is a DataFrame; one column is a Series', extra: 'Part 1' },
  { term: 'df[df["Crop"] == "Bbean"]', def: 'a mask keeps the rows where it is True', extra: 'Step 1' },
  { term: 'df.groupby("Crop")[[...]].sum()', def: 'one row per group', extra: 'Step 2' },
  { term: 'visits["share"] = ...', def: 'make a new column from others', extra: 'Step 3' },
  { term: '.sort_values("share", ascending=False)', def: 'put it in order, biggest first', extra: 'Step 4' },
  { term: 'visits[visits["Bumblebees"] >= 20]', def: 'the same mask, to drop numbers built on too little data', extra: 'Step 5' },
]

export function Slide31Recap() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          What you can <GradientText>do now</GradientText>
        </>
      }
      lead={<>Two ideas and five moves — enough to take a raw survey to an answer.</>}
      note={
        <>
          Next lecture: making these tables into <strong>figures</strong> people can read.
        </>
      }
    >
      <div className="flex flex-col gap-5 md:gap-7">
        <DefTable rows={rows} headers={['the move', 'what it gives you', '']} accent="green" />
        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-2">
            In the lab — where it gets messy
          </CardHeading>
          <CardBody>
            The rest of pandas — .loc, .iloc, value_counts, &amp; and | — and real files that fight back: missing values, and a column
            named <span className="font-mono text-white">&quot;Hortorum&nbsp;&quot;</span> with a
            trailing space, so asking for it raises a <span className="font-mono text-white">KeyError</span>.
          </CardBody>
        </SlideCard>
      </div>
    </ConceptSlide>
  )
}
