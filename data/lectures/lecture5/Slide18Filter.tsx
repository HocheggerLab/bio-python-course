import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { SplitSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import numpy as np

readings = np.array([0.1, 0.5, -0.2, 0.8, 0.3, 0.9])

mask = readings > 0.4    # True/False per value
print(mask)

print(readings[mask])    # only the True ones
print(mask.sum())        # how many passed?
print(f"{readings[mask].mean():.3f}")
`

const output = `[False  True False  True False  True]
[0.5 0.8 0.9]
3
0.733`

const values = ['0.1', '0.5', '-0.2', '0.8', '0.3', '0.9']
const mask = [false, true, false, true, false, true]

function Row({ label, cells, highlight }: { label: string; cells: string[]; highlight?: boolean[] }) {
  return (
    <tr>
      <th className="pr-3 md:pr-4 text-right font-mono font-semibold text-gray-400 whitespace-nowrap">{label}</th>
      {cells.map((c, i) => (
        <td
          key={i}
          className={`px-1.5 md:px-2.5 py-1 text-center font-mono ${
            highlight ? (highlight[i] ? 'text-white bg-bio-green/15' : 'text-gray-600') : 'text-gray-300'
          }`}
        >
          {c}
        </td>
      ))}
    </tr>
  )
}

export function Slide18Filter() {
  return (
    <SplitSlide
      ratio="wide-left"
      title={
        <>
          Boolean Filtering — <GradientText variant="green">Keep What Passes</GradientText>
        </>
      }
      lead={
        <>
          Compare an array with a number and you get one True or False per value — a{' '}
          <strong className="text-white">mask</strong>. Put the mask in square brackets and only the
          True values are kept.
        </>
      }
      left={
        <div className="flex flex-col gap-3 md:gap-4">
          <div className="w-fit max-w-full mx-auto rounded-md border border-white/10 bg-bio-dark/40 p-3 md:p-4 overflow-x-auto">
            <table className="text-xs md:text-base xl:text-lg">
              <tbody>
                <Row label="readings" cells={values} />
                <Row label="readings > 0.4" cells={mask.map((m) => (m ? 'True' : 'False'))} highlight={mask} />
                <Row label="readings[mask]" cells={values.map((v, i) => (mask[i] ? v : '·'))} highlight={mask} />
              </tbody>
            </table>
          </div>
          <SlideCard color="green" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-1">
              No loop, no if
            </CardHeading>
            <CardBody>
              With a list you would loop and test each value. With an array, one line asks all of
              them — and <span className="font-mono">mask.sum()</span> counts how many said True.
            </CardBody>
          </SlideCard>
        </div>
      }
      right={
        <LazyPythonRunner
          initialCode={code}
          height="310px"
          description="Filter with a question"
          staticOutput={output}
        />
      }
    />
  )
}
