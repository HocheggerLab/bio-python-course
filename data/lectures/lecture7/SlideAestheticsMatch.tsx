import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'

const rows = [
  { aes: 'Position (x, y)', good: 'both kinds', note: 'The easiest to read precisely. Put your most important comparison here.' },
  { aes: 'Colour', good: 'categories, or a continuous scale', note: 'Distinct colours for a few groups (six at most); a light-to-dark gradient for a number.' },
  { aes: 'Shape', good: 'categories only', note: 'Circles vs triangles. There is no “bigger” shape, so never use it for a number.' },
  { aes: 'Size', good: 'continuous only', note: 'Bigger means more, but nobody can read the exact value. Use it for a rough third number.' },
]

export function SlideAestheticsMatch() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Match the aesthetic <GradientText>to the data</GradientText>
        </>
      }
      lead={
        <>
          Every aesthetic can show a difference, but not every difference. Some suggest an order
          (size: bigger is more), others don&apos;t (shape: a triangle is not more than a circle).
        </>
      }
      note={<>Rule of thumb: the comparison that matters most goes on position. Colour comes next. Use shape and size sparingly, and check your colours still work for someone who is colour-blind.</>}
    >
      <div className="flex flex-col gap-2 md:gap-3 text-sm md:text-base xl:text-lg">
        {rows.map((r) => (
          <div key={r.aes} className="grid grid-cols-1 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)_minmax(0,2fr)] gap-x-6 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5">
            <span className="text-white font-semibold">{r.aes}</span>
            <span className="text-bio-blue">{r.good}</span>
            <span className="text-gray-300">{r.note}</span>
          </div>
        ))}
      </div>
    </ConceptSlide>
  )
}
