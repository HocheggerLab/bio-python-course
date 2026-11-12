import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide, DefTable, type DefRow } from '@/components/slides/layouts'

const rows: DefRow[] = [
  { term: 'The question', def: <>Does <strong>your gene</strong> respond to loss of p53 in <strong>your cancer type</strong>, and if so, does it go up or down? Each of you gets your own gene and cancer type.</>, extra: 'one sentence answer' },
  { term: 'The data', def: <>Real tumours from TCGA: gene expression in tumours with and without TP53 mutations, and in normal tissue. Two files: a messy patient table and a tidy expression table.</>, extra: 'TCGA' },
  { term: 'The work', def: <>Five functions in a notebook: clean the patient table, describe your gene across cancers, compare two groups, draw the comparison, and put it all together.</>, extra: 'Colab or VS Code' },
  { term: 'The marks', def: <>A complete, well-written and well-explained core is worth about 70. One optional extension takes you higher. The tasks are independent: if one gets stuck, move on to the next.</>, extra: '70 % of the module' },
]

export function SlideProject() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Your final project: <GradientText>does your gene respond to p53 loss?</GradientText>
        </>
      }
      lead={
        <>
          Everything from today comes back: pandas to pick out the groups, a box plot with the
          points on top to show them, and next week&apos;s statistics to say whether the difference
          is real.
        </>
      }
      note={<>The brief, your data files, the dates and the submission are all on Canvas.</>}
    >
      <DefTable rows={rows} accent="blue" />
    </ConceptSlide>
  )
}
