import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'

export function SlideBetGene() {
  return (
    <ConceptSlide
      maxWidth="5xl"
      title={
        <>
          Place your bet: what does <GradientText>melanoma</GradientText> need most?
        </>
      }
      lead={
        <>
          The skin cancer lines in DepMap are almost all melanomas: cancers of the cells that
          make skin pigment. If you could switch off one gene to kill them, which would you pick?
        </>
      }
      note={<>Write your guess down. The data answers it in the next ten minutes, and the answer depends on how you ask.</>}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 text-sm md:text-base xl:text-lg">
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4 text-gray-300">
            A gene that is <strong className="text-white">mutated in melanoma</strong>, such as BRAF?
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4 text-gray-300">
            A gene that makes pigment cells <strong className="text-white">what they are</strong>?
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4 text-gray-300">
            Something <strong className="text-white">every cell</strong> needs, cancer or not?
          </div>
      </div>
    </ConceptSlide>
  )
}
