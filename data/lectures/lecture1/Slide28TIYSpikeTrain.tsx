'use client'

import { QRCodeSVG } from 'qrcode.react'
import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading } from '@/components/slides/SlideCard'
import { ExerciseSlide, type Step } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

// Lecturer's permanent Poll Everywhere room.
// Rotate the active poll inside the Poll Everywhere dashboard before class — no redeploy needed.
const POLL_URL = 'https://pollev.com/your-handle'

const tasks: Step[] = [
  { label: 'Compute duration, spike count, and firing rate', accent: 'yellow' },
  { label: 'Follow the hint comments', detail: 'Each line names the tool to use', accent: 'yellow' },
  { label: 'Submit your rate', detail: 'Scan the QR and add it to the poll', accent: 'yellow' },
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
          <div className="flex items-center gap-3 md:gap-5">
            <div className="bg-white rounded p-2 md:p-3 shrink-0">
              <QRCodeSVG value={POLL_URL} size={96} level="M" includeMargin={false} />
            </div>
            <div className="min-w-0">
              <CardHeading size="sm" color="blue" className="mb-1 md:mb-2">
                Submit your firing rate
              </CardHeading>
              <p className="text-gray-400 text-xs md:text-sm xl:text-base leading-snug">
                Scan with your phone — submit your{' '}
                <span className="text-bio-blue font-semibold">firing rate in Hz</span> to
                today&apos;s poll.
              </p>
            </div>
          </div>
        </SlideCard>
      }
    >
      <LazyPythonRunner
        initialCode={initialCode}
        expectedOutput={expectedOutput}
        hints={hints}
        height="460px"
        showLineNumbers
        description="Test — spike train firing rate"
        staticOutput={expectedOutput}
      />
    </ExerciseSlide>
  )
}
