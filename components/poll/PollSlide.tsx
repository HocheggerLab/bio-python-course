'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { getContent } from '@/lib/poll/content'

const POLL_URL = 'https://python-for-biologists.vercel.app/poll'
const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']
/** Only the projector polls, so this is a handful of requests, not a hundred. */
const REFRESH_MS = 2000

interface Results {
  questionId: string
  isOpen: boolean
  total: number
  counts: number[]
  correctIndex: number
}

/**
 * One slide for both audiences.
 *
 * Students see the question, the options and the QR code. A lecturer with the
 * /teach cookie sees the same thing plus a control strip, so the poll opens
 * while the room is still reaching for their phones — the old two-slide split
 * meant the QR was up before anything was accepting votes.
 *
 * The tally is fetched from an endpoint that refuses anyone without the
 * cookie, so a student's browser never receives the counts or the correct
 * answer, whatever they do to the page.
 */
export default function PollSlide({
  questionId,
  answer,
}: {
  questionId: string
  /** Shown only once revealed — the explanation you talk over. */
  answer?: React.ReactNode
}) {
  const content = getContent(questionId)
  const [results, setResults] = useState<Results | null>(null)
  const [teacher, setTeacher] = useState(false)
  const [revealed, setRevealed] = useState(false)
  /* An open that silently failed looks exactly like one that worked — the
     chip just stays "closed". That cost us a demo; it must not cost a
     lecture. */
  const [failed, setFailed] = useState<string | null>(null)
  /* Every slide in the deck stays mounted, so an unconditional interval would
     have three of these polling from every laptop in the room. Only the slide
     actually on screen refreshes, and only for a lecturer. */
  const [onScreen, setOnScreen] = useState(false)
  const root = useRef<HTMLDivElement>(null)

  const refresh = useCallback(async () => {
    try {
      const res = await fetch(
        `/api/poll/results?questionId=${encodeURIComponent(questionId)}`,
        { cache: 'no-store' }
      )
      if (!res.ok) {
        setTeacher(false)
        return
      }
      setTeacher(true)
      setResults(await res.json())
    } catch {
      /* A dropped connection mid-lecture should leave the question on screen,
         not replace it with an error the room has to look at. */
    }
  }, [questionId])

  // One request on mount settles whether this viewer is a lecturer.
  useEffect(() => {
    refresh()
  }, [refresh])

  useEffect(() => {
    const el = root.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting), {
      threshold: 0.2,
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!teacher || !onScreen) return
    refresh()
    const id = setInterval(refresh, REFRESH_MS)
    return () => clearInterval(id)
  }, [teacher, onScreen, refresh])

  async function act(action: 'open' | 'close' | 'reset') {
    try {
      const res = await fetch('/api/poll/admin', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ questionId, action }),
      })
      if (!res.ok) {
        setFailed(
          res.status === 401
            ? `${action} refused — sign in again at /teach`
            : `${action} failed (${res.status})`
        )
        return
      }
      setFailed(null)
    } catch {
      setFailed(`${action} failed — no connection`)
      return
    }
    if (action === 'close') setRevealed(true)
    if (action === 'open' || action === 'reset') setRevealed(false)
    refresh()
  }

  if (!content) return null

  const showBars = teacher && revealed && results !== null
  const max = Math.max(1, ...(results?.counts ?? [1]))

  return (
    <div
      ref={root}
      className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-center"
    >
      <div>
        {content.code && (
          <pre className="mb-4 p-3 rounded-lg bg-bio-dark/70 border border-white/10 font-mono text-sm md:text-lg xl:text-xl text-gray-200 overflow-x-auto">
            {content.code}
          </pre>
        )}

        <div className="flex flex-col gap-2 md:gap-2.5">
          {content.options.map((option, i) => {
            const n = results?.counts[i] ?? 0
            const pct = results?.total ? Math.round((n / results.total) * 100) : 0
            const correct = showBars && i === results?.correctIndex
            return (
              <div
                key={i}
                className={`relative flex items-center gap-3 rounded-lg border px-3 py-2 md:px-4 md:py-2.5 overflow-hidden
                  ${correct
                    ? 'border-bio-green/60 bg-bio-green/10'
                    : 'border-bio-blue/25 bg-bio-blue/10'}`}
              >
                {/* The bar grows inside the option row rather than in a second
                    list below it — same slide height revealed or not. */}
                {showBars && (
                  <div
                    className={`absolute inset-y-0 left-0 transition-all duration-700 ${
                      correct ? 'bg-bio-green/25' : 'bg-bio-blue/20'
                    }`}
                    style={{ width: `${(n / max) * 100}%` }}
                  />
                )}
                <span
                  className={`relative shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full grid place-items-center font-bold text-sm
                    ${correct ? 'bg-bio-green text-black' : 'bg-bio-blue/25 text-bio-blue'}`}
                >
                  {LETTERS[i]}
                </span>
                <code
                  className={`relative flex-1 ${
                    content.optionsAreCode
                      ? 'font-mono text-sm md:text-lg xl:text-xl'
                      : 'text-base md:text-lg'
                  } ${correct ? 'text-bio-green' : 'text-gray-100'}`}
                >
                  {option}
                </code>
                {showBars && (
                  <span className="relative shrink-0 font-mono text-sm md:text-lg text-gray-200 tabular-nums">
                    {n} · {pct}%
                  </span>
                )}
              </div>
            )
          })}
        </div>

        {showBars && answer && (
          <div className="mt-4 md:mt-5 text-gray-100 text-sm md:text-lg leading-relaxed">
            {answer}
          </div>
        )}
      </div>

      <div className="flex flex-col items-center gap-4">
        <figure className="text-center">
          <div className="inline-block bg-white p-3 rounded-xl">
            <QRCodeSVG value={POLL_URL} size={150} level="M" />
          </div>
          <figcaption className="mt-2 font-mono text-sm md:text-base text-bio-blue">
            /poll
          </figcaption>
        </figure>

        {teacher && (
          <div className="w-full rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-3xl font-bold text-bio-blue tabular-nums">
                {results?.total ?? 0}
              </span>
              <span className="text-gray-400 text-xs uppercase tracking-widest">responses</span>
            </div>
            <span
              className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-semibold ${
                results?.isOpen ? 'bg-bio-green/20 text-bio-green' : 'bg-white/10 text-gray-400'
              }`}
            >
              {results?.isOpen ? 'open' : 'closed'}
            </span>
            {failed && (
              <p className="mt-2 text-red-400 text-xs font-semibold leading-snug">{failed}</p>
            )}
            <div className="mt-3 flex flex-col gap-2">
              <button
                onClick={() => act('open')}
                className="px-3 py-1.5 rounded-lg bg-bio-green/20 text-bio-green text-sm font-semibold hover:bg-bio-green/30"
              >
                Open
              </button>
              <button
                onClick={() => act('close')}
                className="px-3 py-1.5 rounded-lg bg-bio-yellow/20 text-bio-yellow text-sm font-semibold hover:bg-bio-yellow/30"
              >
                Close &amp; reveal
              </button>
              <button
                onClick={() => setRevealed((r) => !r)}
                className="px-3 py-1.5 rounded-lg bg-white/10 text-gray-200 text-sm font-semibold hover:bg-white/20"
              >
                {revealed ? 'Hide bars' : 'Reveal bars'}
              </button>
              <button
                onClick={() => act('reset')}
                className="px-3 py-1.5 rounded-lg bg-red-600/20 text-red-400 text-sm font-semibold hover:bg-red-600/30"
              >
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
