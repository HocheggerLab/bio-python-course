import type { ReactNode } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide, SectionSlide } from '@/components/slides/layouts'
import PollSlide from '@/components/poll/PollSlide'

const POLL_URL = 'https://python-for-biologists.vercel.app/poll'

const readingsCode = `readings = [42, 17, 88, 63, 29, 55, 71, 34, 90, 12,
            47, 68, 23, 81, 59, 36, 74, 50, 28, 65]`

/**
 * The list exercise, asked in the room as one poll per step.
 *
 * The old Try-it-Yourself asked for the final mean only, so a student stuck
 * on step one had nothing to answer and the room's result could not say
 * where it went wrong. One tap per step keeps everyone in, and the code
 * itself moves to the revision slide that follows.
 */
export function Slide10ListQuizOpener() {
  return (
    <SectionSlide
      eyebrow="Five questions"
      title="Clean the data,"
      accent="one step at a time"
      note={
        <>
          You&apos;ve collected <span className="text-bio-yellow font-semibold">20 readings</span> from
          a growth assay. One was a pipetting error and a late replicate has just come in.
          Let&apos;s clean them up and report the mean together.
        </>
      }
      action={
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <pre className="p-4 rounded-lg bg-bio-dark/70 border border-white/10 font-mono text-left text-sm md:text-lg xl:text-xl text-gray-200">
            {readingsCode}
          </pre>
          <figure>
            <div className="inline-block bg-white p-3 rounded-xl">
              <QRCodeSVG value={POLL_URL} size={150} level="M" />
            </div>
            <figcaption className="mt-2 font-mono text-sm md:text-base text-bio-blue">/poll</figcaption>
          </figure>
        </div>
      }
    />
  )
}

function ListQuizQuestion({
  n,
  topic,
  lead,
  questionId,
}: {
  n: number
  topic: string
  lead: ReactNode
  questionId: string
}) {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Step {n} — <GradientText variant="yellow">{topic}</GradientText>
        </>
      }
      lead={lead}
    >
      <PollSlide questionId={questionId} />
    </ConceptSlide>
  )
}

export function Slide10ListQ1() {
  return (
    <ListQuizQuestion
      n={1}
      topic="Find a reading"
      lead={<>Warm-up: which line gives you the third reading, 88?</>}
      questionId="l2-t1a"
    />
  )
}

export function Slide10ListQ2() {
  return (
    <ListQuizQuestion
      n={2}
      topic="Remove the bad reading"
      lead={<>The 2nd reading (17) was a pipetting error. Which line removes it?</>}
      questionId="l2-t1b"
    />
  )
}

export function Slide10ListQ3() {
  return (
    <ListQuizQuestion
      n={3}
      topic="Add the late replicate"
      lead={<>A late replicate came in. Which line adds 19 to the end?</>}
      questionId="l2-t1c"
    />
  )
}

export function Slide10ListQ4() {
  return (
    <ListQuizQuestion
      n={4}
      topic="Count the readings"
      lead={<>We started with 20 readings. After both edits, what does this print?</>}
      questionId="l2-t1d"
    />
  )
}

export function Slide10ListQ5() {
  return (
    <ListQuizQuestion
      n={5}
      topic="Report the mean"
      lead={<>Which line gives the mean, rounded to 1 decimal place?</>}
      questionId="l2-t1e"
    />
  )
}
