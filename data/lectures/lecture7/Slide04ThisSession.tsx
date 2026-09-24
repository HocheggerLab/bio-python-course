import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide, DefTable, type DefRow } from '@/components/slides/layouts'

const rows: DefRow[] = [
  { term: 'Part 1', def: <>The two objects every matplotlib figure is made of — and how to build one from nothing.</>, extra: 'fig, ax' },
  { term: 'Part 2', def: <>Which plot answers which question, and how to put more than one on a page.</>, extra: 'hist · scatter · bar · box' },
  { term: 'Part 3', def: <>Colour, size and shape — squeezing a third and fourth column into the same figure.</>, extra: 'aesthetics' },
]

export function Slide04ThisSession() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Todays topic: Generating graphs with <GradientText variant="green">Matplotlib</GradientText>
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
