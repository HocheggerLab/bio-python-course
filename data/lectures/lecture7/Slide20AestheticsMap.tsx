import Image from 'next/image'
import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'

type Aesthetic = {
  svg: string
  name: string
  encodes: string
  arg: string
}

const channels: Aesthetic[] = [
  { svg: 'position', name: 'Position', encodes: 'The two main variables', arg: 'x, y' },
  { svg: 'color', name: 'Colour', encodes: 'A group, or a third number', arg: 'color=' },
  { svg: 'size', name: 'Size', encodes: 'Magnitude — area, not radius', arg: 's=' },
  { svg: 'shape', name: 'Shape', encodes: 'A few categories, 3–5 at most', arg: 'marker=' },
  { svg: 'linewidth', name: 'Line width', encodes: 'Emphasis on a line', arg: 'linewidth=' },
  { svg: 'linetype', name: 'Line type', encodes: 'Categories among lines', arg: 'linestyle=' },
]

export function Slide20AestheticsMap() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Visual <GradientText variant="green">aesthetics</GradientText>
        </>
      }
      lead={
        <>
          An aesthetic is a visual property you <strong>map to a column</strong>. Position
          is the one you have been using all lecture; these are the rest, and each is an
          argument you already know how to pass.
        </>
      }
      note={
        <>
          They are not equal. The eye judges <strong>position</strong> most accurately, then
          length, then colour, then size, and shape worst of all. Spend position on what
          matters.
        </>
      }
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {channels.map((c) => (
          <div
            key={c.svg}
            className="rounded-lg border border-bio-green/25 bg-bio-card/60 p-2.5 md:p-3 flex flex-col items-center text-center"
          >
            <Image
              src={`/aesthetics/${c.svg}.svg`}
              alt={`${c.name} aesthetic`}
              width={200}
              height={150}
              className="w-full h-auto max-w-[140px] rounded"
            />
            <div className="mt-1.5 text-white font-semibold text-sm md:text-base xl:text-lg">
              {c.name}
            </div>
            <div className="text-gray-300 text-[11px] md:text-xs xl:text-sm leading-snug">
              {c.encodes}
            </div>
            <code className="mt-1 text-bio-green text-[11px] md:text-xs xl:text-sm">
              {c.arg}
            </code>
          </div>
        ))}
      </div>
    </ConceptSlide>
  )
}
