import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide, DefTable, type DefRow } from '@/components/slides/layouts'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

const rows: DefRow[] = [
  { term: 'pd.read_csv(...)', def: 'a file becomes a table, types and all', extra: 'Part 1' },
  { term: 'df["Bumblebees"]', def: 'one column — a Series, which is an array with a name', extra: 'Part 1' },
  { term: 'df[["a", "b"]]', def: 'several columns, still a table', extra: 'Part 2' },
  { term: 'df[df["Crop"] == "Bbean"]', def: 'keep the rows a mask says are True', extra: 'Part 2' },
  { term: '.value_counts()', def: 'tally a text column — and check your effort', extra: 'Part 2' },
  { term: '.groupby(...).sum()', def: 'split, add up, combine — the answer', extra: 'Part 3' },
]

export function Slide22Recap() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          What you can <GradientText>do now</GradientText>
        </>
      }
      lead={<>Six lines of pandas, and one real ecological result you did not have an hour ago.</>}
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
            Real files fight back. Missing values. Columns typed as text when they should be
            numbers. Two tables that need joining. And one column in the full dataset is named{' '}
            <span className="font-mono text-white">&quot;Hortorum&nbsp;&quot;</span> — with a
            trailing space — so asking for it politely raises a{' '}
            <span className="font-mono text-white">KeyError</span>.
            <br />
            <br />
            That is a real bug in a real published dataset, and you will fix it yourself.
          </CardBody>
        </SlideCard>
      </div>
    </ConceptSlide>
  )
}
