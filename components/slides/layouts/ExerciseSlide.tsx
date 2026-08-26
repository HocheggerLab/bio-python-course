import React from 'react'
import { SlideTitle } from '../SlideTitle'
import { StepList, Step } from './StepRow'

/**
 * The "Try it Yourself" pattern: what to do on the left, starter code on
 * the right, both pinned to the same top edge.
 *
 * This is the one place a side-by-side split is right by default — the
 * student reads a step, writes it, reads the next. Putting the task list
 * above the editor would push it off-screen the moment they start typing.
 */
export function ExerciseSlide({
  title,
  intro,
  steps,
  children,
  aside,
}: {
  title: React.ReactNode
  intro?: React.ReactNode
  steps: Step[]
  /** The code runner. */
  children: React.ReactNode
  /** Optional extra under the task list — a QR poll, a hint. */
  aside?: React.ReactNode
}) {
  return (
    <>
      <SlideTitle>{title}</SlideTitle>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] items-start gap-5 md:gap-8 xl:gap-10 mt-5 md:mt-7">
        <div className="min-w-0 flex flex-col gap-4 md:gap-6">
          {intro && (
            <p className="text-gray-400 text-sm md:text-lg xl:text-xl leading-relaxed">{intro}</p>
          )}
          <StepList steps={steps} />
          {aside}
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </>
  )
}
