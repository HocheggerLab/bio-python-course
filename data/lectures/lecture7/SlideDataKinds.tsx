import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'

const kinds = [
  {
    name: 'Categorical',
    plain: 'labels you can count',
    examples: 'cancer lineage (Skin, Lung, Bowel…), cell line name, genotype (mutant / wild type), treatment',
    test: 'Is “halfway between” meaningless? A lineage halfway between Skin and Lung does not exist.',
    shows: 'groups: one bar or box per category, one colour or shape per category',
    color: 'border-bio-yellow/40',
  },
  {
    name: 'Continuous',
    plain: 'numbers you measure',
    examples: 'SOX10 gene effect, gene expression, doubling time, temperature',
    test: 'Does every value in between make sense? A gene effect of −0.83 does.',
    shows: 'a position along an axis: histograms, scatter plots, the y-axis of a box plot',
    color: 'border-bio-blue/40',
  },
]

export function SlideDataKinds() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Two kinds of data: <GradientText>categorical and continuous</GradientText>
        </>
      }
      lead={
        <>
          Every column you will ever plot is one of two kinds. Work out which before you choose a
          plot: the plot follows from it.
        </>
      }
      note={<>In DepMap: <span className="font-mono not-italic">oncotree_lineage</span> is categorical; every gene column is continuous.</>}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {kinds.map((k) => (
          <div key={k.name} className={`rounded-lg border-2 ${k.color} bg-white/[0.03] p-4 md:p-5 text-sm md:text-base xl:text-lg`}>
            <p className="text-white text-xl md:text-2xl font-bold">{k.name}</p>
            <p className="text-gray-400 mb-3">{k.plain}</p>
            <p className="text-gray-300 mb-2"><span className="text-white">Examples:</span> {k.examples}</p>
            <p className="text-gray-300 mb-2"><span className="text-white">The test:</span> {k.test}</p>
            <p className="text-gray-300"><span className="text-white">On a figure:</span> {k.shows}</p>
          </div>
        ))}
      </div>
    </ConceptSlide>
  )
}
