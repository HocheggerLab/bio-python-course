import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

/* Lecture 5's hotel again: you only ever talk to a reception. matplotlib has
   three, and each line of plotting code goes to one of them. Every name on
   the cards exists in matplotlib 3.9+. */

const code = `import pandas as pd
import matplotlib.pyplot as plt
df = pd.read_csv("depmap_lecture.csv")

# plt: make a figure with one panel
fig, ax = plt.subplots()

# ax: draw the data and label this panel
ax.scatter(df["BRAF"], df["SOX10"], s=6, alpha=0.4)
ax.set_xlabel("BRAF gene effect")
ax.set_ylabel("SOX10 gene effect")
ax.set_title("1,165 cancer cell lines")

# fig: things for the whole figure
fig.set_size_inches(6, 4)
fig.tight_layout()

# plt: save it as a file, then show it
plt.savefig("braf_sox10.png")
plt.show()
`

type Desk = {
  name: string
  what: string
  color: 'blue' | 'green' | 'yellow'
  fns: string[]
}

const desks: Desk[] = [
  {
    name: 'ax.',
    what: 'one panel: draw and label it. Your main reception.',
    color: 'green',
    fns: ['ax.scatter()', 'ax.hist()', 'ax.boxplot()', 'ax.set_xlabel()', 'ax.set_title()', 'ax.legend()'],
  },
  {
    name: 'fig.',
    what: 'the whole figure, all its panels at once.',
    color: 'blue',
    fns: ['fig.set_size_inches()', 'fig.suptitle()', 'fig.tight_layout()'],
  },
  {
    name: 'plt.',
    what: 'the extras: make it, save it, show it.',
    color: 'yellow',
    fns: ['plt.subplots()', 'plt.savefig("fig.png")', 'plt.show()'],
  },
]

export function Slide06Anatomy() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          matplotlib has <GradientText>three receptions</GradientText>
        </>
      }
      lead={
        <>
          Like the hotel in Lecture 5, you only talk to a reception. Every line of plotting code
          goes to one of three.
        </>
      }
      points={
        <div className="grid grid-cols-2 lg:grid-cols-[0.6fr_1fr_1fr_1fr] gap-2.5 md:gap-3 col-span-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/L3-hotel.png"
            alt="Handing a shirt across a hotel front desk"
            className="rounded-lg w-full h-full max-h-[17vh] object-cover object-center"
          />
          {desks.map((d) => (
            <SlideCard key={d.name} color={d.color} layout="start" padding="tight" className="border-t-4">
              <p className="text-xs md:text-sm xl:text-base leading-snug mb-1">
                <span className={`font-mono font-bold text-lg md:text-xl xl:text-2xl mr-1.5 ${d.color === 'green' ? 'text-bio-green' : d.color === 'blue' ? 'text-bio-blue' : 'text-bio-yellow'}`}>{d.name}</span>
                <span className="text-gray-300">{d.what}</span>
              </p>
              <p className="font-mono [font-variant-ligatures:none] text-white text-[11px] md:text-xs xl:text-sm leading-relaxed">
                {d.fns.join('  ')}
              </p>
            </SlideCard>
          ))}
        </div>
      }
    >
      <LazyPythonRunner initialCode={code} height="215px" description="Every line goes to one of the three receptions" />
    </ConceptSlide>
  )
}
