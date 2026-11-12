import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'

const clues = [
  ['Part 1', 'A picture of SOX10 across every cell line'],
  ['Part 2', 'Your first real figure, and a long tail'],
  ['Part 3', 'Who sits in the tail? Colour, boxes, two panels'],
]

export function SlideMystery() {
  return (
    <ConceptSlide
      maxWidth="5xl"
      title={
        <>
          Today&apos;s case: <GradientText>who needs SOX10?</GradientText>
        </>
      }
      lead={
        <>
          Switch off the gene <span className="font-mono">SOX10</span> and most cancer cells don&apos;t
          care. But some die. <strong>Which ones, and why?</strong> We will solve it with figures,
          one clue at a time.
        </>
      }
      note={<>Write down a guess now. We open the case at the end of the lecture.</>}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 text-sm md:text-base xl:text-lg">
        {clues.map(([part, clue]) => (
          <div key={part} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
            <p className="text-bio-yellow font-semibold">🔍 {part}</p>
            <p className="text-gray-300">{clue}</p>
          </div>
        ))}
      </div>
    </ConceptSlide>
  )
}
