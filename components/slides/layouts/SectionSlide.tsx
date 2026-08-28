import React from 'react'
import { GradientText } from '../SlideTitle'

/**
 * A divider between blocks of a lecture — and the treatment for slides
 * whose content isn't written yet.
 *
 * A deliberate marker reads as structure; a bare title on an empty screen
 * reads as a bug. The eyebrow and rule do that work.
 */
export function SectionSlide({
  eyebrow,
  title,
  accent,
  note,
  status,
  action,
}: {
  /** e.g. "Block 2" or "Coming up". */
  eyebrow?: string
  title: React.ReactNode
  /** Highlighted tail of the title. */
  accent?: React.ReactNode
  note?: React.ReactNode
  /** Marks a slide still to be written, without looking broken. */
  status?: string
  /** An optional call to action — a download, a link to the notebook. */
  action?: React.ReactNode
}) {
  return (
    <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
      {eyebrow && (
        <div className="text-bio-blue/70 text-xs md:text-sm xl:text-base font-semibold uppercase tracking-[0.2em] mb-4 md:mb-6">
          {eyebrow}
        </div>
      )}
      <h2 className="font-bold tracking-tight text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl">
        {title}
        {accent && (
          <>
            {' '}
            <GradientText>{accent}</GradientText>
          </>
        )}
      </h2>
      <div className="w-16 md:w-24 h-px bg-white/20 mt-6 md:mt-8" />
      {note && (
        <p className="text-gray-400 text-base md:text-xl xl:text-2xl leading-relaxed mt-6 md:mt-8 max-w-3xl">
          {note}
        </p>
      )}
      {action && <div className="mt-7 md:mt-9">{action}</div>}
      {status && (
        <div className="mt-6 md:mt-8 inline-flex items-center gap-2 text-gray-500 text-xs md:text-sm xl:text-base border border-white/10 rounded px-3 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-bio-yellow/60" />
          {status}
        </div>
      )}
    </div>
  )
}
