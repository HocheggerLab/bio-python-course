import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading } from '@/components/slides/SlideCard'
import { ExerciseSlide, type Step } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const tasks: Step[] = [
  { label: 'Compute duration, spike count, and firing rate', accent: 'yellow' },
  { label: 'Follow the hint comments', detail: 'Each line names the tool to use', accent: 'yellow' },
  { label: 'Check your answer', detail: 'Compare with a neighbour, then Check solution', accent: 'yellow' },
]

const initialCode = `# Extracellular recording — 1 ms sampling, 1 = spike, 0 = silent
# Hz means "per second". Since 1 char = 1 ms, multiplying by 1000 converts to Hz.
spike_train = (
    "00000010010000000000000000000000000000100000000000"
    "00001000000000000000000000000000000000000000000000"
    "10000000000000000000000000000001000000000000000000"
    "00000000000000000000000000010000000000000010000000"
    "00000000000000000000000000000000000000000000000000"
    "00000000000000000000000000000000000000000000000000"
    "00010000000000000000000000000000000000000000000000"
    "01000000000000000000000000000000000010000000000000"
    "00000000000000000000001000100000000000000000000000"
    "00000000000000000000000000000000000000100000000000"
    "00000000000000000000000000000000000000000001000000"
    "00000000000000000001000100000000000000000000000001"
    "00000000000000000000000000001001000000000000000000"
    "00000000000000000000000001000000000000000000000000"
    "00000000000000000000000000000001000000000000000010"
)

# Replace each 0 with the right expression — the comment tells you how:
duration_ms = 0   # use len() on the spike_train
spike_count = 0   # use .count() to count the "1" characters
firing_rate = 0   # spike_count / duration_ms * 1000, then round to 1 dp

print(f"Spikes:      {spike_count}")
print(f"Duration:    {duration_ms} ms")
print(f"Firing rate: {firing_rate} Hz")
`

const solution = `# The three blanks filled in.
duration_ms = len(spike_train)                              # one character = one ms
spike_count = spike_train.count("1")                        # same .count() as GC content
firing_rate = round(spike_count / duration_ms * 1000, 1)    # per ms -> per second

print(f"Spikes:      {spike_count}")
print(f"Duration:    {duration_ms} ms")
print(f"Firing rate: {firing_rate} Hz")
`

const expectedOutput = `Spikes:      23
Duration:    750 ms
Firing rate: 30.7 Hz`

const hints = [
  'spike_count = spike_train.count("1") — same .count() method as the GC calculator.',
  'Firing rate = spikes per second. Sampling is 1 ms per character, so multiply by 1000: spike_count / duration_ms * 1000.',
  'Wrap the rate with round(..., 1) so it prints as 321.4 Hz instead of 321.42857…',
]

export function Slide28TIYSpikeTrain() {
  return (
    <ExerciseSlide
      title={<>Test Yourself — <GradientText variant="yellow">Neuroscience edition</GradientText></>}
      intro={
        <>
          A real extracellular recording sampled at 1 kHz — each character is one millisecond,{' '}
          <span className="font-mono">1</span> means a spike, <span className="font-mono">0</span>{' '}
          means silence. <span className="text-bio-yellow">Hz means &ldquo;per second&rdquo;</span> —
          spikes per ms × 1000 = Hz.
        </>
      }
      steps={tasks}
      aside={
        <SlideCard color="blue" layout="start" padding="tight" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-1 md:mb-2">
            One character, one millisecond
          </CardHeading>
          <p className="text-gray-300 text-xs md:text-sm xl:text-base leading-snug">
            So the length of the string <em>is</em> the recording duration. That is the
            step people miss.
          </p>
        </SlideCard>
      }
    >
      <LazyPythonRunner
        initialCode={initialCode}
        solution={solution}
        expectedOutput={expectedOutput}
        hints={hints}
        height="457px"
        description="Test — spike train firing rate"
        staticOutput={expectedOutput}
      />
    </ExerciseSlide>
  )
}
