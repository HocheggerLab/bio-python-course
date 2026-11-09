'use client'

import { useCallback, useEffect, useState } from 'react'
import type { HelpRequest } from '@/lib/help/types'

const REFRESH_MS = 3000

type Action = 'claim' | 'release' | 'done' | 'clear'

/** "just now", "4 min" — how long someone has been waiting. */
function waited(iso: string, now: number): string {
  const min = Math.floor((now - Date.parse(iso)) / 60000)
  return min < 1 ? 'just now' : `${min} min`
}

export default function HelpQueueAdmin() {
  const [queue, setQueue] = useState<HelpRequest[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [now, setNow] = useState(() => Date.now())

  const refresh = useCallback(async () => {
    try {
      const res = await fetch('/api/help/admin', { cache: 'no-store' })
      if (res.status === 401) {
        setError('Signed out — sign in again at /teach')
        return
      }
      if (!res.ok) throw new Error()
      setQueue((await res.json()).queue)
      setNow(Date.now())
      setError(null)
    } catch {
      setError('Lost connection — retrying…')
    }
  }, [])

  useEffect(() => {
    refresh()
    const tick = () => {
      if (document.visibilityState === 'visible') refresh()
    }
    const id = setInterval(tick, REFRESH_MS)
    document.addEventListener('visibilitychange', tick)
    return () => {
      clearInterval(id)
      document.removeEventListener('visibilitychange', tick)
    }
  }, [refresh])

  async function act(action: Action, id?: number) {
    if (action === 'clear' && !confirm('Clear the whole queue? Everyone in it is removed.')) return
    try {
      const res = await fetch('/api/help/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, id }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error ?? `${action} failed`)
        return
      }
      setQueue((await res.json()).queue)
      setNow(Date.now())
      setError(null)
    } catch {
      setError(`${action} failed — no connection`)
    }
  }

  if (queue === null) {
    return <p className="text-center text-gray-400">{error ?? 'Loading…'}</p>
  }

  const waiting = queue.filter((r) => r.status === 'waiting').length

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <p className="text-gray-300">
          <span className="text-white text-2xl font-bold">{waiting}</span> waiting
          {queue.length > waiting && <> · {queue.length - waiting} being helped</>}
        </p>
        <button
          type="button"
          onClick={() => act('clear')}
          disabled={queue.length === 0}
          className="rounded-full border border-red-400/60 text-red-300 hover:bg-red-400 hover:text-bio-darkest disabled:opacity-30 disabled:cursor-not-allowed px-4 py-1.5 text-sm font-semibold transition-colors"
        >
          Clear queue
        </button>
      </div>

      {error && <p className="text-bio-yellow text-sm">{error}</p>}

      {queue.length === 0 ? (
        <p className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center text-gray-400">
          Nobody is waiting. 🎉
        </p>
      ) : (
        <ol className="flex flex-col gap-3">
          {queue.map((r, i) => {
            const helping = r.status === 'helping'
            return (
              <li
                key={r.id}
                className={`rounded-xl border p-4 ${helping ? 'border-bio-green/40 bg-bio-green/10' : 'border-white/10 bg-white/[0.03]'}`}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-white text-lg font-semibold break-words min-w-0">
                    <span className="text-gray-500 mr-2">{i + 1}.</span>
                    {r.name}
                  </p>
                  <p className="text-xs text-gray-400 shrink-0">{waited(r.createdAt, now)}</p>
                </div>
                {r.question && <p className="text-gray-300 mt-1 break-words">{r.question}</p>}
                <div className="flex gap-2 mt-3">
                  {helping ? (
                    <>
                      <span className="text-bio-green text-sm font-semibold self-center mr-auto">On the way</span>
                      <button
                        type="button"
                        onClick={() => act('release', r.id)}
                        className="rounded-full border border-white/20 text-gray-300 hover:border-white/50 px-4 py-1.5 text-sm transition-colors"
                      >
                        Back to queue
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={() => act('claim', r.id)}
                      className="mr-auto rounded-full bg-bio-blue text-bio-darkest hover:bg-bio-light-blue px-4 py-1.5 text-sm font-semibold transition-colors"
                    >
                      On my way
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => act('done', r.id)}
                    className="rounded-full border border-bio-green text-bio-green hover:bg-bio-green hover:text-bio-darkest px-4 py-1.5 text-sm font-semibold transition-colors"
                  >
                    Done
                  </button>
                </div>
              </li>
            )
          })}
        </ol>
      )}
    </div>
  )
}
