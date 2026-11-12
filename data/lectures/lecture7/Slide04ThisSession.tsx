import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide, DefTable, type DefRow } from '@/components/slides/layouts'

const rows: DefRow[] = [
  { term: 'Part 1', def: <>How a figure shows data: categorical vs continuous, and showing differences with position, colour, shape and size.</>, extra: 'quiz 1' },
  { term: 'Part 2', def: <>Building a basic figure: the three receptions, your first plot, and every part of a figure.</>, extra: 'quiz 2' },
  { term: 'Part 3', def: <>Extending a basic figure: marking a group, colour and legends, box plots, two panels, saving.</>, extra: 'quiz 3' },
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
