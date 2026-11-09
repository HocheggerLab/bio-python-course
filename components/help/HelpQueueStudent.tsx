'use client'

import { useCallback, useEffect, useState } from 'react'
import { MAX_NAME_CHARS, MAX_QUESTION_CHARS, type StudentView } from '@/lib/help/types'

const TOKEN_KEY = 'help.token'
const NAME_KEY = 'help.name'
const REFRESH_MS = 4000

/** A random number so this browser can find its own place — not an identity. */
function browserToken(): string {
  let token = localStorage.getItem(TOKEN_KEY)
  if (!token) {
    token = crypto.randomUUID()
    localStorage.setItem(TOKEN_KEY, token)
  }
  return token
}

const ordinal = (n: number) => {
  const s = ['th', 'st', 'nd', 'rd']
  const v = n % 100
  return `${n}${s[(v - 20) % 10] ?? s[v] ?? s[0]}`
}

export default function HelpQueueStudent() {
  const [view, setView] = useState<StudentView | null>(null)
  const [name, setName] = useState('')
  const [question, setQuestion] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const refresh = useCallback(async () => {
    try {
      const res = await fetch(`/api/help?token=${encodeURIComponent(browserToken())}`, { cache: 'no-store' })
      if (res.ok) {
        setView(await res.json())
        setError(null)
      }
    } catch {
      /* Keep showing the last known place; the next tick will try again. */
    }
  }, [])

  useEffect(() => {
    setName(localStorage.getItem(NAME_KEY) ?? '')
    refresh()
  }, [refresh])

  // Only poll while in the queue and while the tab is visible.
  const inQueue = view?.state === 'waiting' || view?.state === 'helping'
  useEffect(() => {
    if (!inQueue) return
    const tick = () => {
      if (document.visibilityState === 'visible') refresh()
    }
    const id = setInterval(tick, REFRESH_MS)
    document.addEventListener('visibilitychange', tick)
    return () => {
      clearInterval(id)
      document.removeEventListener('visibilitychange', tick)
    }
  }, [inQueue, refresh])

  async function send(method: 'POST' | 'DELETE', body: object) {
    setBusy(true)
    setError(null)
    try {
      const res = await fetch('/api/help', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: browserToken(), ...body }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error ?? 'Something went wrong — please try again.')
      }
      await refresh()
    } catch {
      setError('No connection — please try again.')
    } finally {
      setBusy(false)
    }
  }

  function join(e: React.FormEvent) {
    e.preventDefault()
    localStorage.setItem(NAME_KEY, name.trim())
    send('POST', { name, question })
  }

  if (view === null) {
    return <p className="text-center text-gray-400">Loading…</p>
  }

  if (view.state === 'helping') {
    return (
      <Card tone="green">
        <p className="text-4xl mb-3">🏃</p>
        <p className="text-white text-xl font-semibold mb-2">Someone is on the way</p>
        <p className="text-gray-300">Put your hand up so they can find you.</p>
      </Card>
    )
  }

  if (view.state === 'waiting') {
    return (
      <Card tone="blue">
        <p className="text-gray-300 mb-1">You are</p>
        <p className="text-6xl font-bold text-bio-blue mb-1">{ordinal(view.position)}</p>
        <p className="text-gray-300 mb-6">in the queue</p>
        <p className="text-sm text-gray-400 mb-6">
          Keep trying in the meantime. This page updates by itself.
        </p>
        {error && <p className="text-red-400 mb-4">{error}</p>}
        <button
          type="button"
          disabled={busy}
          onClick={() => send('DELETE', {})}
          className="rounded-full border border-bio-green text-bio-green hover:bg-bio-green hover:text-bio-darkest disabled:opacity-40 px-6 py-2.5 font-semibold transition-colors"
        >
          I sorted it myself
        </button>
      </Card>
    )
  }

  return (
    <form onSubmit={join} className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
      <label className="flex flex-col gap-2">
        <span className="text-gray-100 font-semibold">Your name</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={MAX_NAME_CHARS}
          required
          autoComplete="given-name"
          className="rounded-xl border border-white/15 bg-bio-darker/60 p-3 text-gray-100 focus:border-bio-blue focus:outline-none"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-gray-100 font-semibold">
          What are you stuck on? <span className="font-normal text-gray-400">(optional)</span>
        </span>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          maxLength={MAX_QUESTION_CHARS}
          rows={3}
          placeholder="e.g. Lab 5, exercise 3 — my loop never stops"
          className="rounded-xl border border-white/15 bg-bio-darker/60 p-3 text-gray-100 placeholder-gray-500 focus:border-bio-blue focus:outline-none"
        />
      </label>
      <p className="text-xs text-gray-500">
        Only the people helping in the lab can see your name and question.
      </p>
      {error && <p className="text-red-400 text-center">{error}</p>}
      <button
        type="submit"
        disabled={busy || !name.trim()}
        className="self-center rounded-full bg-bio-blue text-bio-darkest hover:bg-bio-light-blue disabled:opacity-40 disabled:cursor-not-allowed px-8 py-3 font-semibold transition-colors"
      >
        {busy ? 'Joining…' : 'Join the queue'}
      </button>
    </form>
  )
}

function Card({ tone, children }: { tone: 'blue' | 'green'; children: React.ReactNode }) {
  const border = tone === 'green' ? 'border-bio-green/30 bg-bio-green/10' : 'border-bio-blue/30 bg-bio-blue/5'
  return <div className={`rounded-2xl border-2 ${border} p-8 text-center`}>{children}</div>
}
