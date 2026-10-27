import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide, SplitSlide } from '@/components/slides/layouts'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import numpy as np
import matplotlib.pyplot as plt

F = "neuron_0588_20180828_5_lecture.csv"
dff = np.loadtxt(F, delimiter=",", skiprows=1, usecols=1)
go  = np.loadtxt(F, delimiter=",", skiprows=1, usecols=2)
starts = np.where(go == 1)[0][::9]
trials = []
for i in starts:
    if i >= 10:
        trials.append(dff[i-10 : i+30])
trials = np.array(trials)
response = trials.mean(axis=0)          # average DOWN the columns
seconds  = np.arange(-10, 30) / 10.8

plt.plot(seconds, trials[0], color="#6b7280", label="one trial")
plt.plot(seconds, response, color="#5fb37a", lw=2.5, label="254 trials averaged")
plt.axvline(0, color="#8fbcfb", lw=1)
plt.xlabel("seconds from go"); plt.ylabel("dF/F"); plt.legend()
plt.show()
`

export function LabAverage() {
  return (
    <ConceptSlide
      maxWidth="full"
      title={
        <>
          The Payoff — <GradientText variant="green">254 Trials, Averaged</GradientText>
        </>
      }
      lead={
        <>
          Grey is one trial. Green is all 254, averaged with{' '}
          <span className="font-mono">mean(axis=0)</span>.
        </>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="450px"
        description="The payoff — one line pulls a response out of noise"
      />
    </ConceptSlide>
  )
}

/* axis=0 on a grid small enough to read: 3 trials x 5 moments. Each trial
   is noisy in a different way; the bump at moment 2 is in all three, so it
   survives the average while the noise cancels. */
const toy = [
  [1, -1, 3, 1, 0],
  [-1, 2, 2, 0, 1],
  [0, -1, 4, 2, -1],
]
const toyMean = [0, 0, 3, 1, 0]

const toyCode = `import numpy as np

trials = np.array([[ 1, -1, 3, 1,  0],    # trial 1
                   [-1,  2, 2, 0,  1],    # trial 2
                   [ 0, -1, 4, 2, -1]])   # trial 3

print(trials.shape)          # (rows, columns)
print(trials.mean(axis=0))   # average DOWN each column
`

const toyOutput = `(3, 5)
[0. 0. 3. 1. 0.]`

export function LabAxisToy() {
  return (
    <SplitSlide
      ratio="even"
      title={
        <>
          <GradientText variant="green">axis=0</GradientText> — Average Down the Columns
        </>
      }
      lead={
        <>
          Three trials, five moments each. <strong className="text-white">Rows are trials, columns
          are time.</strong> <span className="font-mono">mean(axis=0)</span> averages each column.
        </>
      }
      left={
        <div className="flex flex-col gap-3 md:gap-4">
          <div className="w-fit max-w-full mx-auto rounded-md border border-white/10 bg-bio-dark/40 p-3 md:p-4">
            <table className="font-mono text-sm md:text-lg xl:text-xl">
              <thead>
                <tr>
                  <th />
                  {toyMean.map((_, j) => (
                    <th key={j} className="px-2 md:px-3 pb-1 text-gray-500 font-normal text-xs md:text-sm">
                      t{j}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {toy.map((row, r) => (
                  <tr key={r}>
                    <th className="pr-3 text-right text-gray-500 font-normal text-xs md:text-sm">trial {r + 1}</th>
                    {row.map((v, j) => (
                      <td key={j} className={`px-2 md:px-3 py-1 text-center ${j === 2 ? 'text-white' : 'text-gray-400'}`}>
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t-2 border-bio-green/60">
                  <th className="pr-3 pt-1 text-right text-bio-green font-semibold text-xs md:text-sm">mean</th>
                  {toyMean.map((v, j) => (
                    <td
                      key={j}
                      className={`px-2 md:px-3 pt-1 text-center font-semibold ${
                        j === 2 ? 'text-white bg-bio-green/20 rounded' : 'text-bio-green'
                      }`}
                    >
                      {v}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <SlideCard color="green" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-1">
              The noise cancels, the response stays
            </CardHeading>
            <CardBody>
              Each trial wobbles differently, so those columns average out to about 0. All three
              jump at <span className="font-mono">t2</span> — so that column keeps its 3.
            </CardBody>
          </SlideCard>
        </div>
      }
      right={
        <LazyPythonRunner
          initialCode={toyCode}
          height="289px"
          description="axis=0 — one average per column"
          staticOutput={toyOutput}
        />
      }
    />
  )
}
