import React from 'react'

export interface DefRow {
  /** Usually a code token — rendered mono and accented. */
  term: React.ReactNode
  /** Plain-language explanation. */
  def: React.ReactNode
  /** Optional third column: an example, a rating, a note. */
  extra?: React.ReactNode
}

/**
 * Reference material as rows, not cards.
 *
 * A list of built-ins or operators is a lookup table; wrapping each entry
 * in its own bordered box makes scanning harder, not easier. Rows share
 * one hairline rule and the term column aligns down the page.
 */
export function DefTable({
  rows,
  headers,
  accent = 'blue',
  className = '',
}: {
  rows: DefRow[]
  /** Optional column headers, small-caps. Omit for a bare list. */
  headers?: [string, string] | [string, string, string]
  accent?: 'blue' | 'green' | 'yellow' | 'purple'
  className?: string
}) {
  const accents = {
    blue: 'text-bio-blue',
    green: 'text-bio-green',
    yellow: 'text-bio-yellow',
    purple: 'text-purple-400',
  }
  const hasExtra = rows.some((r) => r.extra !== undefined)

  /* One grid for the whole table, not one per row — otherwise each row
     sizes its own columns and the terms never line up down the page. */
  const cols = hasExtra
    ? 'grid-cols-[max-content_minmax(0,1fr)_max-content]'
    : 'grid-cols-[max-content_minmax(0,1fr)]'

  return (
    <div className={`w-full grid ${cols} gap-x-5 md:gap-x-10 ${className}`}>
      {headers &&
        headers.map((h, i) => (
          <div
            key={`h${i}`}
            className="px-1 md:px-2 pb-2 md:pb-3 border-b border-white/10
              text-[10px] md:text-xs xl:text-sm 2xl:text-base font-semibold uppercase tracking-widest text-gray-400"
          >
            {h}
          </div>
        ))}
      {rows.map((r, i) => (
        <div key={i} className="contents group">
          <div
            className={`px-1 md:px-2 py-2 md:py-2.5 2xl:py-4 font-mono whitespace-nowrap
              ${accents[accent]} text-sm md:text-lg xl:text-xl 2xl:text-2xl
              ${i ? 'border-t border-white/10' : headers ? '' : ''}`}
          >
            {r.term}
          </div>
          <div
            className={`px-1 md:px-2 py-2 md:py-2.5 2xl:py-4 text-gray-200
              text-sm md:text-lg xl:text-xl 2xl:text-2xl leading-relaxed
              ${i ? 'border-t border-white/10' : ''}`}
          >
            {r.def}
          </div>
          {hasExtra && (
            <div
              className={`px-1 md:px-2 py-2 md:py-2.5 2xl:py-4 text-gray-400
                text-xs md:text-base xl:text-lg 2xl:text-xl whitespace-nowrap
                ${i ? 'border-t border-white/10' : ''}`}
            >
              {r.extra}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
