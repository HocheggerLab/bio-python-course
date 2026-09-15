import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide, DefTable, type DefRow } from '@/components/slides/layouts'

const rows: DefRow[] = [
  { term: 'Part 1', def: <>The two objects every matplotlib figure is made of — and how to build one from nothing.</>, extra: 'fig, ax' },
  { term: 'Part 2', def: <>More than one panel, and making a figure say what you mean.</>, extra: 'subplots' },
  { term: 'Part 3', def: <>Let pandas do the typing, now that you know what it is doing for you.</>, extra: 'df.plot(ax=ax)' },
]

export function Slide03ThisSession() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          This session — <GradientText variant="green">three moves</GradientText>
        </>
      }
      lead={
        <>
          matplotlib is a big, old library with more than one way to do everything.
          We are going to learn <strong>one</strong> way, slowly, and do it properly.
        </>
      }
      note={<>Next week: statistics, and putting a number on what you can see today.</>}
    >
      <DefTable rows={rows} accent="blue" />
    </ConceptSlide>
  )
}
