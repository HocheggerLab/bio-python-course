import { GradientText } from '@/components/slides/SlideTitle'
import { SplitSlide, DefTable, type DefRow } from '@/components/slides/layouts'

/* Frames 41–58 of the real file: a whole go trial, start to finish. Chosen
   because you can read the mouse's behaviour straight off the numbers. */
const excerpt = `frame     dff  go  nogo  reward  lick
   41  0.1512   0     0       0     0
   42 -0.0538   0     0       0     0
   43 -0.3234   1     0       0     0   <- go starts
   44 -0.5328   1     0       0     0
   45  0.2087   1     0       0     0
   46  0.2560   1     0       0     0
   47  0.1734   1     0       0     0
   48 -0.0613   1     0       0     0
   49 -0.1694   1     0       0     0
   50  0.0704   1     0       1     1   <- licked, got water
   51  0.0193   1     0       0     1
   52 -0.1569   0     0       0     1
   53  0.1253   0     0       0     0`

const columns: DefRow[] = [
  { term: 'frame', def: 'One reading. The next row is 1/11th of a second later.' },
  { term: 'dff', def: "The neuron's activity, above or below its resting level." },
  { term: 'go', def: '1 for as long as the go signal is being delivered.' },
  { term: 'nogo', def: 'The same, for the other signal.' },
  { term: 'reward', def: '1 at the moment water arrives.' },
  { term: 'lick', def: '1 whenever the mouse licks.' },
]

export function Slide11TheFile() {
  return (
    <SplitSlide
      title={
        <>
          What Is Actually <GradientText>In the File</GradientText>
        </>
      }
      lead={
        <>
          Every row is one moment in time. One column is the neuron; the rest say what was
          happening to the mouse.
        </>
      }
      ratio="wide-left"
      left={
        <pre className="rounded-md border border-white/10 bg-bio-dark/40 p-4 md:p-5 font-mono text-[11px] md:text-sm xl:text-base text-gray-300 overflow-x-auto leading-relaxed">
{excerpt}
        </pre>
      }
      right={<DefTable rows={columns} accent="green" />}
      note={
        <>
          You can read the trial off the page: the signal starts at frame 43, the mouse licks at
          50, water arrives. That is one of 254.
        </>
      }
    />
  )
}
