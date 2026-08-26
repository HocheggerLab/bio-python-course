import React from 'react'
import { SlideTitle } from '../SlideTitle'
import { SlideLead, SlideNote } from './SlideLead'

/**
 * The workhorse: title → short lead → full-width code.
 *
 * This replaces the old "text card beside a runner" arrangement, which
 * halved the code width and left the two columns misaligned. Giving the
 * runner the full width means longer lines stay unwrapped and the lead
 * has to earn its place in a sentence or two.
 */
export function ConceptSlide({
  title,
  lead,
  points,
  closing,
  children,
  note,
  maxWidth = '5xl',
}: {
  title: React.ReactNode
  lead?: React.ReactNode
  /**
   * Two or three short cards that sit between the lead and the code —
   * for slides teaching a couple of distinct moves at once (.append and +,
   * say). Keeps the text above the code rather than beside it.
   */
  points?: React.ReactNode
  /**
   * A closing thought that belongs *after* the code — the "look what just
   * happened" beat. Full width, so it reads as a conclusion rather than a
   * fourth point competing with the others.
   */
  closing?: React.ReactNode
  /** The code runner, figure, or whatever this slide is actually showing. */
  children: React.ReactNode
  note?: React.ReactNode
  maxWidth?: '4xl' | '5xl' | '6xl' | 'full'
}) {
  const widths = {
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    full: 'max-w-none',
  }
  /* Match the column count to the number of points, so three cards never
     leave a ragged orphan on a second row (which also stole the height the
     code runner needed). */
  const n = React.Children.count(
    React.isValidElement(points) && points.type === React.Fragment
      ? (points.props as { children?: React.ReactNode }).children
      : points
  )
  const pointCols = n >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'

  return (
    <>
      <SlideTitle>{title}</SlideTitle>
      {lead && <SlideLead>{lead}</SlideLead>}
      {points && (
        <div
          className={`w-full ${widths[maxWidth]} mx-auto grid grid-cols-1 ${pointCols}
            items-start gap-4 md:gap-6 mt-4 md:mt-6`}
        >
          {points}
        </div>
      )}
      <div className={`w-full ${widths[maxWidth]} mx-auto mt-4 md:mt-6`}>{children}</div>
      {closing && (
        <div className={`w-full ${widths[maxWidth]} mx-auto mt-4 md:mt-6`}>{closing}</div>
      )}
      {note && <SlideNote>{note}</SlideNote>}
    </>
  )
}
