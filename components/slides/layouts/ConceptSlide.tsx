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
  children,
  note,
  maxWidth = '5xl',
}: {
  title: React.ReactNode
  lead?: React.ReactNode
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
  return (
    <>
      <SlideTitle>{title}</SlideTitle>
      {lead && <SlideLead>{lead}</SlideLead>}
      <div className={`w-full ${widths[maxWidth]} mx-auto mt-5 md:mt-7 xl:mt-9`}>{children}</div>
      {note && <SlideNote>{note}</SlideNote>}
    </>
  )
}
