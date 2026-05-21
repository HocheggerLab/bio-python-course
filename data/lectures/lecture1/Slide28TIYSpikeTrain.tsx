'use client'

import { QRCodeSVG } from 'qrcode.react'
import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

// Lecturer's permanent Poll Everywhere room.
// Rotate the active poll inside the Poll Everywhere dashboard before class — no redeploy needed.
const POLL_URL = 'https://pollev.com/your-handle'

const tasks = [
  'Compute the duration, spike count, and firing rate',
  'Each line has a hint comment telling you which tool to use',
  'Scan the QR and submit your firing rate to the poll',
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
    <>
      <SlideTitle>
        Test Yourself — <GradientText variant="yellow">Neuroscience edition</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        {/* LEFT — task + QR */}
        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
              From a single neuron to a firing rate
            </CardHeading>
            <CardBody className="mb-3 md:mb-4 text-xs md:text-sm xl:text-base">
              A real extracellular recording sampled at 1 kHz — each character is one
              millisecond, <span className="font-mono">1</span> means a spike,{' '}
              <span className="font-mono">0</span> means silence.{' '}
              <span className="text-bio-yellow">Hz means &ldquo;per second&rdquo;</span> —
              spikes per ms × 1000 = Hz.
            </CardBody>
            <CardList items={tasks} numbered color="yellow" />
          </SlideCard>

          <SlideCard color="blue" layout="start" padding="tight" className="border-l-4">
            <div className="flex items-center gap-3 md:gap-5">
              <div className="bg-white rounded-lg p-2 md:p-3 shrink-0">
                <QRCodeSVG value={POLL_URL} size={96} level="M" includeMargin={false} />
              </div>
              <div className="min-w-0">
                <CardHeading size="sm" color="blue" className="mb-1 md:mb-2">
                  Submit your firing rate
                </CardHeading>
                <p className="text-gray-300 text-[11px] md:text-sm xl:text-base leading-snug">
                  Scan with your phone — submit your <span className="text-bio-blue font-semibold">firing rate in Hz</span> to today&apos;s poll.
                </p>
                <p className="font-mono text-[10px] md:text-xs xl:text-sm text-gray-500 mt-1 md:mt-2 break-all">
                  {POLL_URL}
                </p>
              </div>
            </div>
          </SlideCard>
        </div>

        {/* RIGHT — runner */}
        <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
          <LazyPythonRunner
            initialCode={initialCode}
            expectedOutput={expectedOutput}
            hints={hints}
            height="600px"
            showLineNumbers
            description="Test — spike train firing rate"
            staticOutput={expectedOutput}
          />
        </div>

      </div>
    </>
  )
}
