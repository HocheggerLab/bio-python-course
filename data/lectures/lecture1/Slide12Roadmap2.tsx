import { GradientText } from '@/components/slides/SlideTitle'
import { SplitSlide, Figure, StepList, type Step } from '@/components/slides/layouts'

const sessions: Step[] = [
  {
    label: 'NumPy & Pandas',
    detail: 'Wrangle large biological datasets — gene expression matrices, clinical tables',
    accent: 'blue',
  },
  {
    label: 'Data Visualisation',
    detail: 'Build publication-ready plots: histograms, scatterplots, heatmaps',
    accent: 'green',
  },
  {
    label: 'Image Analysis',
    detail: 'Segment cells from microscopy images and extract quantitative features',
    accent: 'purple',
  },
  {
    label: 'Statistics & ML',
    detail: 'Test hypotheses and build predictive models from your data',
    accent: 'yellow',
  },
]

export function Slide12Roadmap2() {
  return (
    <SplitSlide
      title={<>2nd course half — <GradientText>Python for Data Science</GradientText></>}
      ratio="wide-right"
      left={
        <Figure
          src="/1_10_python_proficient.png"
          alt="A Python-proficient Claudia analysing complex biological data"
          caption={
            <>
              From Python <span className="text-bio-blue font-semibold not-italic">basics</span> to a
              working{' '}
              <span className="text-bio-yellow font-semibold not-italic">data-science toolkit</span>.
            </>
          }
        />
      }
      right={<StepList steps={sessions} start={5} />}
    />
  )
}
