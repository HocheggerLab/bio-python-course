import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide, DefTable, type DefRow } from '@/components/slides/layouts'

const rows: DefRow[] = [
  { term: 'Part 1', def: <>A quick tour of matplotlib: the two objects every figure is made of, and which plot answers which question.</>, extra: 'fig, ax · hist · scatter · box' },
  { term: 'Part 2', def: <>Which genes does a cancer need? Exploring DepMap with pandas, one figure at a time.</>, extra: 'groupby + plots' },
  { term: 'Project', def: <>Your final project, in five minutes: the question, the data, and what you hand in.</>, extra: 'TCGA' },
]

export function Slide04ThisSession() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Today: figures with <GradientText variant="green">Matplotlib</GradientText>
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
