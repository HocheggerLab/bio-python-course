'use client'

import { useCallback, useEffect, useState } from 'react'
import { getContent } from '@/lib/poll/content'

interface Results {
  questionId: string
  isOpen: boolean
  total: number
  counts: number[]
  correctIndex: number
}

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']
/** Only the projector polls, so this is a handful of requests, not a hundred. */
const REFRESH_MS = 2000

/**
 * The lecturer's view: live response count, then the distribution on reveal.
 *
 * The distribution is hidden while voting is open by default, because this is
 * on a projector the whole room can see — showing the bars live means
 * latecomers pick whatever is already winning, and the answers stop telling
 * you what anyone understood. The count still ticks up, which is the part that
 * creates the urgency.
 */
export default function PollResults({ questionId }: { questionId: string }) {
  const content = getContent(questionId)
  const [token, setToken] = useState<string | null>(null)
  const [results, setResults] = useState<Results | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setToken(localStorage.getItem('poll.adminToken'))
  }, [])

  const refresh = useCallback(async () => {
    if (!token) return
    try {
      const res = await fetch(
        `/api/poll/results?questionId=${encodeURIComponent(questionId)}`,
        { headers: { authorization: `Bearer ${token}` }, cache: 'no-store' }
      )
      if (res.status === 401) {
        setError('Admin token rejected.')
        return
      }
      setError(null)
      setResults(await res.json())
    } catch {
      setError('Could not reach the server.')
    }
  }, [token, questionId])

  useEffect(() => {
    if (!token) return
    refresh()
    const id = setInterval(refresh, REFRESH_MS)
    return () => clearInterval(id)
  }, [token, refresh])

  async function act(action: 'open' | 'close' | 'reset') {
    if (!token) return
    await fetch('/api/poll/admin', {
      method: 'POST',
      headers: { 'content-type': 'application/json', authorization: `Bearer ${token}` },
      body: JSON.stringify({ questionId, action }),
    })
    /* Closing is the natural moment to show the answer; reopening or clearing
       hides it again so the next cohort is not primed. */
    if (action === 'close') setRevealed(true)
    if (action === 'open' || action === 'reset') setRevealed(false)
    refresh()
  }

  if (!token) {
    return (
      <div className="max-w-lg mx-auto text-center">
        <p className="text-gray-200 text-lg">Paste the poll admin token to control this poll.</p>
        <input
          type="password"
          placeholder="POLL_ADMIN_TOKEN"
          className="mt-4 w-full rounded-lg bg-bio-dark border border-bio-blue/30 px-4 py-3 text-gray-100 font-mono"
          onKeyDown={(e) => {
            if (e.key !== 'Enter') return
            const value = (e.target as HTMLInputElement).value.trim()
            if (!value) return
            localStorage.setItem('poll.adminToken', value)
            setToken(value)
          }}
        />
        <p className="mt-2 text-gray-500 text-sm">Stored in this browser only. Press Enter.</p>
      </div>
    )
  }

  const max = Math.max(1, ...(results?.counts ?? [1]))

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex items-center justify-center gap-4 md:gap-6">
        <div className="text-center">
          <div className="text-4xl md:text-6xl font-bold text-bio-blue tabular-nums">
            {results?.total ?? 0}
          </div>
          <div className="text-gray-300 text-sm md:text-base uppercase tracking-widest mt-1">
            responses
          </div>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-sm md:text-base font-semibold ${
            results?.isOpen ? 'bg-bio-green/20 text-bio-green' : 'bg-white/10 text-gray-400'
          }`}
        >
          {results?.isOpen ? 'open' : 'closed'}
        </span>
      </div>

      {revealed && content && results && (
        /* One line per option: letter, the code itself, the bar, the tally.
           Stacking the label under its bar doubled every row and pushed the
           last option off the bottom of the slide. */
        <div className="mt-5 md:mt-7 flex flex-col gap-2 md:gap-2.5">
          {content.options.map((option, i) => {
            const n = results.counts[i] ?? 0
            const pct = results.total ? Math.round((n / results.total) * 100) : 0
            const correct = i === results.correctIndex
            return (
              <div key={i} className="flex items-center gap-2 md:gap-3">
                <span
                  className={`shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full grid place-items-center font-bold text-xs md:text-sm
                    ${correct ? 'bg-bio-green text-black' : 'bg-white/10 text-gray-300'}`}
                >
                  {LETTERS[i]}
                </span>
                <code
                  className={`shrink-0 w-[38%] truncate font-mono text-sm md:text-lg ${
                    correct ? 'text-bio-green' : 'text-gray-300'
                  }`}
                >
                  {option}
                </code>
                <div className="flex-1 h-7 md:h-9 rounded bg-white/[0.04]">
                  <div
                    className={`h-full rounded transition-all duration-700 ${
                      correct ? 'bg-bio-green/70' : 'bg-bio-blue/40'
                    }`}
                    style={{ width: `${Math.max(2, (n / max) * 100)}%` }}
                  />
                </div>
                <span className="shrink-0 w-20 md:w-24 text-right font-mono text-sm md:text-lg text-gray-200 tabular-nums">
                  {n} · {pct}%
                </span>
              </div>
            )
          })}
        </div>
      )}

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => act('open')}
          className="px-4 py-2 rounded-lg bg-bio-green/20 text-bio-green font-semibold hover:bg-bio-green/30"
        >
          Open
        </button>
        <button
          onClick={() => act('close')}
          className="px-4 py-2 rounded-lg bg-bio-yellow/20 text-bio-yellow font-semibold hover:bg-bio-yellow/30"
        >
          Close &amp; reveal
        </button>
        <button
          onClick={() => setRevealed((r) => !r)}
          className="px-4 py-2 rounded-lg bg-white/10 text-gray-200 font-semibold hover:bg-white/20"
        >
          {revealed ? 'Hide bars' : 'Reveal bars'}
        </button>
        <button
          onClick={() => act('reset')}
          className="px-4 py-2 rounded-lg bg-red-600/20 text-red-400 font-semibold hover:bg-red-600/30"
        >
          Reset
        </button>
      </div>

      {error && <p className="mt-4 text-center text-yellow-300">{error}</p>}
    </div>
  )
}
