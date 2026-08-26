import React from 'react'

/**
 * The one or two sentences that carry a slide's point, sitting directly
 * under the title. Constrained to a readable measure and centred, so the
 * eye lands on it before dropping to the code or figure below.
 */
export function SlideLead({
  children,
  align = 'center',
  className = '',
}: {
  children: React.ReactNode
  align?: 'center' | 'start'
  className?: string
}) {
  return (
    <p
      className={`text-gray-400 leading-relaxed max-w-5xl
        text-base md:text-xl xl:text-2xl
        mt-3 md:mt-5
        ${align === 'center' ? 'mx-auto text-center' : ''}
        ${className}`}
    >
      {children}
    </p>
  )
}

/**
 * A short note under the main content — the "and remember…" line.
 * Deliberately not a card: it is an aside, not a peer of the content.
 */
export function SlideNote({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={`text-center text-gray-500 italic
        text-sm md:text-base xl:text-lg
        mt-3 md:mt-5 max-w-4xl mx-auto ${className}`}
    >
      {children}
    </p>
  )
}
