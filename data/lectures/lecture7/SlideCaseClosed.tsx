import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'

const facts = [
  ['Clue 1', 'A long tail: about 90 of 1,165 cell lines die without SOX10.'],
  ['Clue 2', 'In the scatter, the tail is skin cancer, and those lines need BRAF too.'],
  ['Clue 3', 'Split by lineage: skin needs it most. The skin lines that don’t are mostly not melanoma at all.'],
]

export function SlideCaseClosed() {
  return (
    <ConceptSlide
      maxWidth="5xl"
      title={
        <>
          Case closed: <GradientText>melanoma needs SOX10</GradientText>
        </>
      }
      lead={
        <>
          <strong>62 of the 74 melanoma lines</strong> need SOX10, whether the melanoma grew in the
          skin, the eye or elsewhere. Of the other 1,091 cell lines, only 31 do.
        </>
      }
      closing={
        <p className="text-center text-gray-300">
          Why? SOX10 is the switch that makes a pigment cell (a melanocyte) a pigment cell. Melanoma
          is a cancer of melanocytes, and it still depends on the switch that made it. Each clue was
          one figure.
        </p>
      }
    >
      <div className="flex flex-col gap-2 md:gap-3 text-sm md:text-base xl:text-lg">
        {facts.map(([c, f]) => (
          <div key={c} className="grid grid-cols-[auto_1fr] gap-x-4 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5">
            <span className="text-bio-yellow font-semibold">🔍 {c}</span>
            <span className="text-gray-300">{f}</span>
          </div>
        ))}
      </div>
    </ConceptSlide>
  )
}
