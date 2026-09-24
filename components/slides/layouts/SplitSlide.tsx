import React from 'react'
import { SlideTitle } from '../SlideTitle'
import { SlideLead, SlideNote } from './SlideLead'

/**
 * Two genuinely parallel things side by side — code vs flowchart, before
 * vs after, claim vs evidence.
 *
 * Both columns are pinned to a common top edge (`items-start`), which is
 * the whole point: the previous hand-rolled grids centred one column
 * against a stretched sibling and drifted by up to 500px.
 *
 * If one side is just commentary on the other, use ConceptSlide instead.
 */
export function SplitSlide({
  title,
  lead,
  left,
  right,
  ratio = 'even',
  note,
}: {
  title: React.ReactNode
  lead?: React.ReactNode
  left: React.ReactNode
  right: React.ReactNode
  /** 'even' = 1:1; 'wide-right' = 2:3, for a narrow caption beside code. */
  ratio?: 'even' | 'wide-right' | 'wide-left'
  note?: React.ReactNode
}) {
  const cols = {
    even: 'lg:grid-cols-2',
    'wide-right': 'lg:grid-cols-[2fr_3fr]',
    'wide-left': 'lg:grid-cols-[3fr_2fr]',
  }
  return (
    <>
      <SlideTitle>{title}</SlideTitle>
      {lead && <SlideLead>{lead}</SlideLead>}
      <div
        className={`grid grid-cols-1 ${cols[ratio]} items-start
          gap-5 md:gap-8 xl:gap-10 mt-5 md:mt-7 xl:mt-9`}
      >
        <div className="min-w-0">{left}</div>
        <div className="min-w-0">{right}</div>
      </div>
      {note && <SlideNote>{note}</SlideNote>}
    </>
  )
}
