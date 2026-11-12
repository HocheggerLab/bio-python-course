import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'

const items = [
  ['categorical or continuous?', 'decide what you hold, then choose the plot and the aesthetic'],
  ['fig, ax = plt.subplots()', 'every figure starts here; the axes do the drawing'],
  ['ax.hist · ax.scatter · ax.barh · ax.boxplot', 'pick the plot from the kind of columns you have'],
  ['ax.scatter(..., label=) + ax.legend()', 'mark a group and say what it is'],
  ['plt.subplots(1, 2) and axes[0], axes[1]', 'two panels, side by side'],
  ['fig.suptitle() · plt.savefig()', 'finish the figure and save it'],
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
      note={<>One gene, one question, five figures: that is how you will work in your project too. Next week: is a difference real, or could it be chance? Statistics.</>}
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
