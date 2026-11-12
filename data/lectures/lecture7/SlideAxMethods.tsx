import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'

/* Summary of the ax plot methods, one card each, with thumbnails drawn from
   the lecture data (public/l7/types_*.png). Same three steps for every one:
   make the figure, swap in the method, label it. */

const types: { img: string; call: string; holds: string; example: string }[] = [
  { img: 'hist', call: 'ax.hist(values, bins=40)', holds: 'one continuous column', example: 'how SOX10 is spread across all cell lines' },
  { img: 'scatter', call: 'ax.scatter(x, y)', holds: 'two continuous columns', example: 'BRAF against SOX10, one dot per cell line' },
  { img: 'plot', call: 'ax.plot(x, y)', holds: 'a column in order, like time', example: 'a culture growing hour by hour' },
  { img: 'bar', call: 'ax.bar(names, heights)', holds: 'one number per category', example: 'mean SOX10 in four cancer types' },
  { img: 'barh', call: 'ax.barh(names, widths)', holds: 'the same, with long names', example: 'cell lines per cancer type' },
  { img: 'boxplot', call: 'ax.boxplot(groups)', holds: 'a continuous column, split by category', example: 'SOX10 in four cancer types, every line a dot' },
]

export function SlideAxMethods() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          The <GradientText>ax</GradientText> plot methods you will use most
        </>
      }
      lead={
        <>
          Choose by the data you hold. The other two steps never change: make the figure, then
          label it.
        </>
      }
      note={
        <>
          Many more on the same page:{' '}
          <a
            href="https://matplotlib.org/stable/api/axes_api.html"
            target="_blank"
            rel="noopener noreferrer"
            className="not-italic font-mono text-bio-blue hover:text-bio-green underline"
          >
            matplotlib.org/stable/api/axes_api.html
          </a>
        </>
      }
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 md:gap-3">
        {types.map((t) => (
          <div key={t.img} className="flex gap-3 items-center rounded-lg border border-white/10 bg-white/[0.03] p-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/l7/types_${t.img}.png`} alt={t.example} className="rounded bg-white w-[42%] h-auto shrink-0" />
            <div className="min-w-0">
              <p className="font-mono [font-variant-ligatures:none] text-white text-xs md:text-sm xl:text-base break-words">{t.call}</p>
              <p className="text-bio-yellow text-xs md:text-sm">{t.holds}</p>
              <p className="text-gray-400 text-[11px] md:text-xs xl:text-sm leading-snug">{t.example}</p>
            </div>
          </div>
        ))}
      </div>
    </ConceptSlide>
  )
}
