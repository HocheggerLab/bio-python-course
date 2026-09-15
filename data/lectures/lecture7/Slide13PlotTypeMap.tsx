import Image from 'next/image'
import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'

type PlotType = {
  svg: string
  name: string
  when: string
  call: string
}

/* Continuous = measured on a scale (expression, score, time). Categorical =
   a label you can count (lineage, treatment, strain). Every choice below is
   really a question about which of the two you are holding. */
const types: PlotType[] = [
  { svg: 'histogram', name: 'Histogram', when: 'One continuous column', call: 'ax.hist(x)' },
  { svg: 'scatter', name: 'Scatter', when: 'Two continuous columns', call: 'ax.scatter(x, y)' },
  { svg: 'line', name: 'Line', when: 'A value along an ordered axis', call: 'ax.plot(x, y)' },
  { svg: 'bar', name: 'Bar', when: 'One number per category', call: 'ax.bar(names, values)' },
  { svg: 'box', name: 'Box', when: 'A distribution per category', call: 'ax.boxplot(groups)' },
  { svg: 'violin', name: 'Violin', when: 'Box, plus the shape', call: 'ax.violinplot(groups)' },
]

export function Slide13PlotTypeMap() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Essential <GradientText>plot types</GradientText>
        </>
      }
      lead={
        <>
          Six methods cover almost everything you will need. Read them as answers to{' '}
          <em>what kind of columns am I holding?</em> — not as a menu.
        </>
      }
      note={
        <>
          <strong>Continuous</strong> is measured on a scale: expression, a dependency
          score, time. <strong>Categorical</strong> is a label you can count: lineage,
          treatment, strain. That one distinction picks the row you need.
        </>
      }
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {types.map((t) => (
          <div
            key={t.svg}
            className="rounded-lg border border-bio-blue/25 bg-bio-card/60 p-2.5 md:p-3 flex flex-col items-center text-center"
          >
            <Image
              src={`/plots/${t.svg}.svg`}
              alt={`${t.name} plot`}
              width={200}
              height={150}
              className="w-full h-auto max-w-[140px] rounded"
            />
            <div className="mt-1.5 text-white font-semibold text-sm md:text-base xl:text-lg">
              {t.name}
            </div>
            <div className="text-gray-300 text-[11px] md:text-xs xl:text-sm leading-snug">
              {t.when}
            </div>
            <code className="mt-1 text-bio-blue text-[11px] md:text-xs xl:text-sm">
              {t.call}
            </code>
          </div>
        ))}
      </div>
    </ConceptSlide>
  )
}
