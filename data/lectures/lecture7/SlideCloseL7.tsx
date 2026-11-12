import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'

const items = [
  ['categorical or continuous?', 'decide what you hold, then choose the plot and the aesthetic'],
  ['fig, ax = plt.subplots()', 'every figure starts here; the axes do the drawing'],
  ['ax.hist · ax.scatter · ax.barh · ax.boxplot', 'pick the plot from the kind of columns you have'],
  ['plt.subplots(2, 2) and a for loop', 'the same figure for several groups'],
  ['df.groupby(...)[genes].mean()', 'a table of means, ready to plot'],
  ['here − rest', 'what one group needs more than the others'],
]

export function SlideCloseL7() {
  return (
    <ConceptSlide
      maxWidth="5xl"
      title={
        <>
          What you can <GradientText>do now</GradientText>
        </>
      }
      note={<>Two questions, two answers: &quot;what does this cancer need most?&quot; and &quot;what does it need more than other cancers?&quot;. Next week: is a difference real, or could it be chance? Statistics.</>}
    >
        <div className="flex flex-col gap-2 md:gap-3">
          {items.map(([code, means]) => (
            <div key={code} className="grid grid-cols-1 md:grid-cols-2 gap-x-6 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5">
              <span className="font-mono [font-variant-ligatures:none] text-white text-sm md:text-base">{code}</span>
              <span className="text-gray-300 text-sm md:text-base">{means}</span>
            </div>
          ))}
        </div>
    </ConceptSlide>
  )
}
