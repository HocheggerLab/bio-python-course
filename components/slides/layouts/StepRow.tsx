import React from 'react'

export interface Step {
  label: React.ReactNode
  detail?: React.ReactNode
  /** e.g. "Today" — a small tag pinned to the right. */
  tag?: React.ReactNode
  accent?: 'blue' | 'green' | 'yellow' | 'purple'
}

/**
 * A numbered sequence — a roadmap, a workflow, an ordered method.
 *
 * The number sits in its own gutter so the labels align down the page and
 * the eye can run the sequence without re-finding the left edge on each
 * row. One rule between steps rather than a box around each.
 */
export function StepList({ steps, start = 1 }: { steps: Step[]; start?: number }) {
  const bubble = {
    blue: 'bg-bio-blue/15 text-bio-blue',
    green: 'bg-bio-green/15 text-bio-green',
    yellow: 'bg-bio-yellow/15 text-bio-yellow',
    purple: 'bg-purple-400/15 text-purple-400',
  }
  return (
    <div className="divide-y divide-white/10 border-y border-white/10 w-full">
      {steps.map((s, i) => (
        <div key={i} className="flex items-start gap-4 md:gap-6 py-3.5 md:py-5 px-1 md:px-3">
          <span
            className={`shrink-0 inline-flex items-center justify-center rounded font-semibold
              w-7 h-7 text-xs md:w-9 md:h-9 md:text-sm xl:w-11 xl:h-11 xl:text-base
              ${bubble[s.accent ?? 'blue']}`}
          >
            {start + i}
          </span>
          <div className="min-w-0 flex-1">
            <div className="text-white font-semibold text-base md:text-xl xl:text-2xl leading-snug">
              {s.label}
            </div>
            {s.detail && (
              <div className="text-gray-400 text-sm md:text-lg xl:text-xl leading-relaxed mt-0.5 md:mt-1">
                {s.detail}
              </div>
            )}
          </div>
          {s.tag && (
            <span
              className="shrink-0 text-[10px] md:text-xs xl:text-sm font-semibold uppercase tracking-wider
                text-bio-blue border border-bio-blue/30 rounded px-2 py-1"
            >
              {s.tag}
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
