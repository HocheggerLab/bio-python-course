import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { SplitSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import numpy as np

readings = np.array([0.1, 0.5, -0.2, 0.8, 0.3, 0.9])

print(readings.max())        # the largest VALUE
print(readings.argmax())     # WHERE it is: its position

found = np.where(readings > 0.4)
print(found)                 # a tuple, with one array inside
print(found[0])              # take the array out: the positions
`

const output = `0.9
5
(array([1, 3, 5]),)
[1 3 5]`

const values = ['0.1', '0.5', '-0.2', '0.8', '0.3', '0.9']
const pass = [false, true, false, true, false, true]

export function Slide19Where() {
  return (
    <SplitSlide
      ratio="even"
      title={
        <>
          Where Is It? — <GradientText variant="purple">argmax and np.where</GradientText>
        </>
      }
      lead={
        <>
          Filtering tells you <em>what</em> passed. Often you need <em>where</em> — the positions.
        </>
      }
      left={
        <div className="flex flex-col gap-3 md:gap-4">
          <div className="w-fit max-w-full mx-auto rounded-md border border-white/10 bg-bio-dark/40 p-3 md:p-4">
            <table className="font-mono text-sm md:text-lg xl:text-xl">
              <tbody>
                <tr>
                  <th className="pr-3 md:pr-4 text-right text-gray-500 font-semibold">position</th>
                  {values.map((_, i) => (
                    <td
                      key={i}
                      className={`px-2 md:px-3 py-1 text-center ${pass[i] ? 'text-purple-300 font-semibold' : 'text-gray-500'}`}
                    >
                      {i}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th className="pr-3 md:pr-4 text-right text-gray-400 font-semibold">readings</th>
                  {values.map((v, i) => (
                    <td
                      key={i}
                      className={`px-2 md:px-3 py-1 text-center ${
                        i === 5 ? 'text-white ring-2 ring-purple-400 rounded' : pass[i] ? 'text-white' : 'text-gray-500'
                      }`}
                    >
                      {v}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <SlideCard color="purple" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="purple" className="mb-1 font-mono">
              .max() vs .argmax()
            </CardHeading>
            <CardBody>
              <span className="font-mono">max()</span> gives the value, 0.9.{' '}
              <span className="font-mono">argmax()</span> gives its position, 5.
            </CardBody>
          </SlideCard>
          <SlideCard color="blue" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-1">
              np.where — and why the <span className="font-mono">[0]</span>
            </CardHeading>
            <CardBody>
              <span className="font-mono">np.where</span> gives the positions of every True. It answers
              for each dimension, so it hands back a tuple — for a 1-D array, a tuple with one array
              in it. <span className="font-mono">[0]</span> takes that array out.
            </CardBody>
          </SlideCard>
        </div>
      }
      right={
        <LazyPythonRunner
          initialCode={code}
          height="310px"
          description="Values vs positions"
          staticOutput={output}
        />
      }
    />
  )
}
