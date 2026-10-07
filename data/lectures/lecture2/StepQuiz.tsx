import type { ReactNode } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide, SectionSlide } from '@/components/slides/layouts'
import PollSlide from '@/components/poll/PollSlide'

const POLL_URL = 'https://python-for-biologists.vercel.app/poll'

/**
 * A Try-it-Yourself exercise asked in the room as one poll per step.
 *
 * A single final-answer poll left a student stuck on step one with nothing
 * to answer, and the room's result could not say where it went wrong. One
 * tap per step keeps everyone in; the code itself follows as a revision
 * slide for after the lecture.
 */
export function StepQuizOpener({
  title,
  accent,
  note,
  code,
}: {
  title: ReactNode
  accent: ReactNode
  note: ReactNode
  /** The data every question works on, shown once up front. */
  code: string
}) {
  return (
    <SectionSlide
      eyebrow="Five questions"
      title={title}
      accent={accent}
      note={note}
      action={
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <pre className="p-4 rounded-lg bg-bio-dark/70 border border-white/10 font-mono text-left text-sm md:text-lg xl:text-xl text-gray-200">
            {code}
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

export function StepQuizQuestion({
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
