import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { CodeBox } from './CodeBox'

const NOTEBOOK = `[1]  dff = np.loadtxt(...)
[2]  dff.mean()
     0.058                ← answer under the cell
[3]  plt.plot(dff)
     [ the figure ]       ← right here, too`

const SCRIPT = `# count_trials.py — runs top to bottom, every time
import numpy as np

go = np.loadtxt("data/neuron.csv", delimiter=",",
                skiprows=1, usecols=2)
starts = np.where(go == 1)[0][::9]
print(len(starts), "go trials")`

export function Slide05PyVsIpynb() {
  return (
    <>
      <SlideTitle>
        Two ways to write Python: <GradientText>.ipynb</GradientText> and{' '}
        <GradientText variant="green">.py</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-3 md:mt-5 items-start">
        <div className="flex flex-col gap-3 md:gap-4">
          <CodeBox label="analysis.ipynb · a notebook" color="blue">{NOTEBOOK}</CodeBox>
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2">
              For data analysis
            </CardHeading>
            <CardBody>
              Cells you run one at a time, with the answer and the figure right underneath. Ideal
              for exploring data and telling the story of an analysis. This lab, and your final
              project.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4">
          <CodeBox label="count_trials.py · a script" color="green">{SCRIPT}</CodeBox>
          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2">
              For programs
            </CardHeading>
            <CardBody>
              Plain text, run top to bottom with{' '}
              <span className="font-mono text-white">uv run count_trials.py</span>. Ideal for tools,
              pipelines and functions you reuse, test and share.
            </CardBody>
          </SlideCard>
        </div>
      </div>

      <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4 mt-3 md:mt-5">
        <CardBody>
          <span className="text-bio-yellow font-semibold">The notebook trap:</span> cells run in any
          order, so a notebook can work today only because of a cell you ran yesterday. Before you
          trust a result: <span className="text-white">Restart → Run All</span>. Curious?{' '}
          <a href="https://marimo.io" target="_blank" rel="noopener noreferrer" className="text-bio-yellow underline">marimo</a>,
          the new kid on the block, is a notebook saved as a .py file that reruns dependent cells
          for you, so it cannot get out of order.
        </CardBody>
      </SlideCard>
    </>
  )
}
