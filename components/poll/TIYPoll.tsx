'use client'

import { QRCodeSVG } from 'qrcode.react'
import { getContent } from '@/lib/poll/content'
import { usePoll } from './usePoll'
import { renderProse } from './prose'

const POLL_URL = 'https://python-for-biologists.vercel.app/poll'
const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']

/**
 * A poll sized to sit in a Try-it-Yourself slide's aside column.
 *
 * Same question bank, same gated endpoint and same teacher controls as
 * PollSlide — only the layout differs, because here it has a third of the
 * width and shares the slide with a task list and a code editor.
 *
 * Students see a QR and the options. A lecturer additionally sees the tally,
 * the controls, and the explanation once revealed. The options are listed for
 * everyone so the room can answer from the slide rather than squinting at
 * their phone, which matters when the answer is a number they just computed.
 */
export default function TIYPoll({ questionId }: { questionId: string }) {
  const content = getContent(questionId)
  const { rootRef, results, teacher, revealed, setRevealed, failed, act } =
    usePoll(questionId)

  if (!content) return null

  const showBars = teacher && revealed && results !== null
  const max = Math.max(1, ...(results?.counts ?? [1]))

  return (
    <div
      ref={rootRef}
      className="rounded-xl border border-bio-blue/25 bg-bio-blue/[0.07] p-3 md:p-4"
    >
      <div className="flex items-start gap-3 md:gap-4">
        <div className="bg-white rounded p-1.5 md:p-2 shrink-0">
          <QRCodeSVG value={POLL_URL} size={76} level="M" />
        </div>
        <div className="min-w-0">
          <p className="text-bio-blue font-semibold text-sm md:text-base leading-snug">
            {content.prompt}
          </p>
          <p className="text-gray-400 text-xs md:text-sm mt-1">
            Scan and answer at <span className="font-mono">/poll</span>
          </p>
        </div>
      </div>

      <div className="mt-3 flex flex-col gap-1.5">
        {content.options.map((option, i) => {
          const n = results?.counts[i] ?? 0
          const pct = results?.total ? Math.round((n / results.total) * 100) : 0
          const correct = showBars && i === results?.correctIndex
          return (
            <div
              key={i}
              className={`relative flex items-center gap-2 rounded border px-2 py-1 overflow-hidden
                ${correct
                  ? 'border-bio-green/60 bg-bio-green/10'
                  : 'border-white/10 bg-white/[0.03]'}`}
            >
              {showBars && (
                <div
                  className={`absolute inset-y-0 left-0 transition-all duration-700 ${
                    correct ? 'bg-bio-green/25' : 'bg-bio-blue/15'
                  }`}
                  style={{ width: `${(n / max) * 100}%` }}
                />
              )}
              <span
                className={`relative shrink-0 w-5 h-5 rounded-full grid place-items-center font-bold text-[0.65rem]
                  ${correct ? 'bg-bio-green text-black' : 'bg-bio-blue/25 text-bio-blue'}`}
              >
                {LETTERS[i]}
              </span>
              <span
                className={`relative flex-1 text-xs md:text-sm ${
                  content.optionsAreCode ? 'font-mono' : ''
                } ${correct ? 'text-bio-green' : 'text-gray-200'}`}
              >
                {option}
              </span>
              {showBars && (
                <span className="relative shrink-0 font-mono text-xs text-gray-300 tabular-nums">
                  {n} · {pct}%
                </span>
              )}
            </div>
          )
        })}
      </div>

      {showBars && results?.explanation && (
        <p className="mt-2.5 text-gray-200 text-xs md:text-sm leading-relaxed">
          {renderProse(results.explanation)}
        </p>
      )}

      {teacher && (
        <div className="mt-3 pt-2.5 border-t border-white/10">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs text-gray-400">
              <span className="text-bio-blue font-bold tabular-nums">
                {results?.total ?? 0}
              </span>{' '}
              responses
            </span>
            <span
              className={`px-1.5 py-0.5 rounded-full text-[0.65rem] font-semibold ${
                results?.isOpen
                  ? 'bg-bio-green/20 text-bio-green'
                  : 'bg-white/10 text-gray-400'
              }`}
            >
              {results?.isOpen ? 'open' : 'closed'}
            </span>
          </div>
          {failed && (
            <p className="mb-2 text-red-400 text-[0.7rem] font-semibold">{failed}</p>
          )}
          <div className="grid grid-cols-2 gap-1.5">
            <button
              onClick={() => act('open')}
              className="px-2 py-1 rounded bg-bio-green/20 text-bio-green text-xs font-semibold hover:bg-bio-green/30"
            >
              Open
            </button>
            <button
              onClick={() => act('close')}
              className="px-2 py-1 rounded bg-bio-yellow/20 text-bio-yellow text-xs font-semibold hover:bg-bio-yellow/30"
            >
              Close &amp; reveal
            </button>
            <button
              onClick={() => setRevealed((r) => !r)}
              className="px-2 py-1 rounded bg-white/10 text-gray-200 text-xs font-semibold hover:bg-white/20"
            >
              {revealed ? 'Hide' : 'Reveal'}
            </button>
            <button
              onClick={() => act('reset')}
              className="px-2 py-1 rounded bg-red-600/20 text-red-400 text-xs font-semibold hover:bg-red-600/30"
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
