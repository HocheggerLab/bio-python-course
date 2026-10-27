import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { SplitSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import numpy as np

go = np.loadtxt("neuron_0588_20180828_5_lecture.csv",
                delimiter=",", skiprows=1, usecols=2)

on = np.where(go == 1)[0]   # the frame NUMBERS where go is on
print(on[:12])

starts = on[::9]            # every 9th: each trial's first frame
print(starts[:5])
print(f"go trials: {len(starts)}")
`

const output = `[ 43  44  45  46  47  48  49  50  51 125 126 127]
[ 43 125 166 248 371]
go trials: 254`

/* The first 18 go frames of the real file: two trials of 9. Checked: on[::9]
   gives the same 254 go (and 264 nogo) starts as np.diff, for both neurons,
   because every signal is exactly 9 frames. */
const onFrames = [43, 44, 45, 46, 47, 48, 49, 50, 51, 125, 126, 127, 128, 129, 130, 131, 132, 133]

export function LabOnsets() {
  return (
    <SplitSlide
      ratio="even"
      title={
        <>
          Where Does a Trial <GradientText variant="green">Start?</GradientText>
        </>
      }
      lead={
        <>
          The mask kept every frame where go is on — 2,286 of them, not 254 trials. We want only the
          frame where each trial <span className="text-bio-green font-semibold">starts</span>.
        </>
      }
      left={
        <div className="flex flex-col gap-3 md:gap-4">
          <p className="text-gray-300 text-sm md:text-lg xl:text-xl">
            <span className="font-mono text-white">np.where(go == 1)[0]</span> lists the frame
            numbers where go is on. They come in blocks of 9 — one block per trial:
          </p>
          <div className="w-fit max-w-full mx-auto flex flex-wrap gap-1 md:gap-1.5 font-mono text-xs md:text-base xl:text-lg">
            {onFrames.map((f, i) => (
              <span
                key={f}
                className={`px-1.5 md:px-2 py-0.5 rounded ${
                  i % 9 === 0
                    ? 'bg-bio-green/20 text-white ring-2 ring-bio-green font-semibold'
                    : 'bg-white/5 text-gray-400'
                } ${i === 9 ? 'ml-2 md:ml-3' : ''}`}
              >
                {f}
              </span>
            ))}
            <span className="px-1 py-0.5 text-gray-500">…</span>
          </div>
          <SlideCard color="green" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-1">
              Take every 9th: <span className="font-mono">on[::9]</span>
            </CardHeading>
            <CardBody>
              Remember <span className="font-mono">seq[::3]</span> — every third base? Same slicing,
              step 9. It works because every go signal is exactly 9 frames long.
            </CardBody>
          </SlideCard>
        </div>
      }
      right={
        <LazyPythonRunner
          initialCode={code}
          height="310px"
          description="Every 9th go frame starts a trial"
          staticOutput={output}
        />
      }
    />
  )
}
