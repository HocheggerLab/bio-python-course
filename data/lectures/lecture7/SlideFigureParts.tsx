import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'

export function SlideFigureParts() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Every part of a figure has <GradientText>a method</GradientText>
        </>
      }
      lead={
        <>
          The histogram you just made, taken apart. Each part belongs to the panel, so each is an{' '}
          <span className="font-mono">ax.set_…()</span> call; only the whole sheet is{' '}
          <span className="font-mono">fig</span>.
        </>
      }
      note={
        <>
          Can&apos;t remember the name? Type <span className="font-mono not-italic">ax.set_</span> and
          let VS Code or Colab suggest the rest, or look it up in the{' '}
          <a href="https://matplotlib.org/stable/api/axes_api.html" target="_blank" rel="noopener noreferrer" className="not-italic text-bio-blue hover:text-bio-green underline">Axes API</a>.
        </>
      }
    >
      <div className="flex justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/l7/figure_parts.png"
          alt="The SOX10 histogram with each part labelled by the method that sets it: set_title, set_xlabel, set_ylabel, set_xlim, set_xticks, hist"
          className="rounded-lg bg-white max-h-[44vh] w-auto"
        />
      </div>
    </ConceptSlide>
  )
}
