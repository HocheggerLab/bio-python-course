import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { SplitSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import numpy as np

F = "neuron_0588_20180828_5_lecture.csv"
dff = np.loadtxt(F, delimiter=",", skiprows=1, usecols=1)
go  = np.loadtxt(F, delimiter=",", skiprows=1, usecols=2)

mask = go == 1          # True where go is on, False elsewhere
print(mask[41:47])      # the six frames on the left

print(f"mean while go is on: {dff[mask].mean():.3f}")
print(f"mean overall:        {dff.mean():.3f}")
`

const output = `[False False  True  True  True  True]
mean while go is on: -0.005
mean overall:        0.058`

/* Frames 41–46 of the real file: the start of the first go trial. */
const frames = ['41', '42', '43', '44', '45', '46']
const dff = ['0.15', '-0.05', '-0.32', '-0.53', '0.21', '0.26']
const go = ['0', '0', '1', '1', '1', '1']
const mask = [false, false, true, true, true, true]

function Row({ label, cells, highlight }: { label: string; cells: React.ReactNode[]; highlight?: boolean[] }) {
  return (
    <tr>
      <th className="pr-3 md:pr-4 text-right font-mono font-semibold text-gray-400 whitespace-nowrap">{label}</th>
      {cells.map((c, i) => (
        <td
          key={i}
          className={`px-1.5 md:px-2 py-1 text-center font-mono ${
            highlight ? (highlight[i] ? 'text-white bg-bio-green/15' : 'text-gray-600') : 'text-gray-300'
          }`}
        >
          {c}
        </td>
      ))}
    </tr>
  )
}

export function LabMasking() {
  return (
    <SplitSlide
      ratio="even"
      title={
        <>
          Measuring Neural Activity <GradientText variant="green">While go Is On</GradientText>
        </>
      }
      lead={
        <>
          First question: what is the neuron&apos;s mean activity in the frames where{' '}
          <span className="font-mono">go</span> is 1? We pick those frames out with a trick called{' '}
          <span className="text-bio-green font-semibold">boolean filtering</span>.
        </>
      }
      left={
        <div className="flex flex-col gap-3 md:gap-4">
          <div className="w-fit max-w-full mx-auto rounded-md border border-white/10 bg-bio-dark/40 p-3 md:p-4 overflow-x-auto">
            <table className="text-xs md:text-base xl:text-lg">
              <tbody>
                <Row label="frame" cells={frames} />
                <Row label="dff" cells={dff} />
                <Row label="go" cells={go} />
                <Row
                  label="go == 1"
                  cells={mask.map((m) => (m ? 'True' : 'False'))}
                  highlight={mask}
                />
                <Row label="dff[go == 1]" cells={dff.map((d, i) => (mask[i] ? d : '·'))} highlight={mask} />
              </tbody>
            </table>
          </div>

          <ol className="flex flex-col gap-1.5 md:gap-2 text-sm md:text-lg xl:text-xl text-gray-300">
            <li>
              <span className="font-mono text-white">go == 1</span> asks every frame the same question —
              and gives back a whole row of <span className="font-mono">True</span>/
              <span className="font-mono">False</span>: a <strong className="text-white">mask</strong>.
            </li>
            <li>
              <span className="font-mono text-white">dff[go == 1]</span> lays that mask over{' '}
              <span className="font-mono">dff</span> and keeps only the values under a{' '}
              <span className="font-mono">True</span>.
            </li>
          </ol>
          <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-1">
              But look at the answer.
            </CardHeading>
            <CardBody>
              While go is on, the neuron sits <strong className="text-white">below</strong> its own
              average. Either it ignores go — or we are looking in the wrong place.
            </CardBody>
          </SlideCard>
        </div>
      }
      right={
        <LazyPythonRunner
          initialCode={code}
          height="310px"
          description="Boolean filtering — keep only the go frames"
          staticOutput={output}
        />
      }
    />
  )
}
