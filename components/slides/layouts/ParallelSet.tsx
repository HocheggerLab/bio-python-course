import React from 'react'
import { SlideTitle } from '../SlideTitle'
import { SlideLead, SlideNote } from './SlideLead'

/**
 * Two to four comparable things: lead paragraph, then the set, then a
 * closing note. Codifies the arrangement that already works best in the
 * deck (L2 "Dictionaries Are Everywhere").
 *
 * Children set their own height — the grid never stretches to the
 * viewport, which is what used to leave short cards floating in a void.
 */
export function ParallelSet({
  title,
  lead,
  children,
  columns,
  note,
}: {
  title: React.ReactNode
  lead?: React.ReactNode
  children: React.ReactNode
  columns?: 2 | 3 | 4
  note?: React.ReactNode
}) {
  const count = columns ?? Math.min(4, Math.max(2, React.Children.count(children))) as 2 | 3 | 4
  const cols = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 xl:grid-cols-4',
  }[count]

  return (
    <>
      <SlideTitle>{title}</SlideTitle>
      {lead && <SlideLead>{lead}</SlideLead>}
      <div className={`grid grid-cols-1 ${cols} items-start gap-4 md:gap-6 xl:gap-8 mt-5 md:mt-7`}>
        {children}
      </div>
      {note && <SlideNote>{note}</SlideNote>}
    </>
  )
}
