'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

interface OpenQuestion {
  questionId: string
  prompt: string
  code: string | null
  optionsAreCode: boolean
  options: string[]
}

type Phase = 'loading' | 'idle' | 'open' | 'error'

/** How often to ask whether a poll has opened. Cheap: one small JSON per phone. */
const WATCH_MS = 3000

/**
 * A ballot number, not an identity.
 *
 * Kept in localStorage so a refresh, or a second tap, lands on the same ballot
 * rather than creating another one. We never learn who this is — which is why
 * the whole system holds no personal data.
 */
function voterToken(): string {
  const KEY = 'poll.voterToken'
  let token = localStorage.getItem(KEY)
  if (!token) {
    token = crypto.randomUUID()
    localStorage.setItem(KEY, token)
  }
  return token
}

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']

export default function PollForm() {
  const [phase, setPhase] = useState<Phase>('loading')
  const [question, setQuestion] = useState<OpenQuestion | null>(null)
  const [chosen, setChosen] = useState<number | null>(null)
  const [sending, setSending] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const activeId = useRef<string | null>(null)

  const poll = useCallback(async () => {
    try {
      const res = await fetch('/api/poll/current', { cache: 'no-store' })
      const data = await res.json()
      if (!data.questionId) {
        activeId.current = null
        setQuestion(null)
        setChosen(null)
        setPhase('idle')
        return
      }
      /* A new question means a fresh ballot: clear the previous choice so the
         student is not shown last question's answer as still selected. */
      if (activeId.current !== data.questionId) {
        activeId.current = data.questionId
        setChosen(null)
        setMessage(null)
      }
      setQuestion(data as OpenQuestion)
      setPhase('open')
    } catch {
      setPhase('error')
    }
  }, [])

  useEffect(() => {
    poll()
    const id = setInterval(poll, WATCH_MS)
    return () => clearInterval(id)
  }, [poll])

  async function submit(optionIndex: number) {
    if (!question || sending) return
    setSending(true)
    setMessage(null)
    try {
      const res = await fetch('/api/poll/vote', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          questionId: question.questionId,
          optionIndex,
          voterToken: voterToken(),
        }),
      })
      if (res.ok) {
        setChosen(optionIndex)
        setMessage('Answer recorded — you can change it while the poll is open.')
      } else if (res.status === 403) {
        setMessage('That poll has just closed.')
        poll()
      } else {
        setMessage('Could not record that — try again.')
      }
    } catch {
      setMessage('No connection — try again.')
    }
    setSending(false)
  }

  if (phase === 'loading') {
    return <p className="text-gray-400 text-center">Checking for a poll…</p>
  }

  if (phase === 'error') {
    return (
      <p className="text-center text-yellow-300">
        Could not reach the server. This page will keep trying.
      </p>
    )
  }

  if (phase === 'idle' || !question) {
    return (
      <div className="text-center">
        <p className="text-xl md:text-2xl text-gray-200">No poll open right now.</p>
        <p className="mt-3 text-gray-400">
          Leave this page open — it will appear here when your lecturer starts one.
        </p>
      </div>
    )
  }

  return (
    <div>
      <p className="text-lg md:text-2xl text-white leading-relaxed">{question.prompt}</p>

      {question.code && (
        <pre className="mt-4 p-3 rounded-lg bg-bio-dark/70 border border-white/10 text-sm md:text-base font-mono text-gray-200 overflow-x-auto">
          {question.code}
        </pre>
      )}

      <div className="mt-6 flex flex-col gap-3">
        {question.options.map((option, i) => {
          const isChosen = chosen === i
          return (
            <button
              key={i}
              onClick={() => submit(i)}
              disabled={sending}
              /* Large targets: this is used one-handed, on a phone, in a dark
                 lecture theatre, in about five seconds. */
              className={`flex items-start gap-3 text-left rounded-xl border-2 px-4 py-4 transition-colors
                min-h-[64px] disabled:opacity-60
                ${isChosen
                  ? 'border-bio-green bg-bio-green/20'
                  : 'border-bio-blue/30 bg-bio-blue/10 active:bg-bio-blue/25'}`}
            >
              <span
                className={`shrink-0 w-8 h-8 rounded-full grid place-items-center font-bold
                  ${isChosen ? 'bg-bio-green text-black' : 'bg-bio-blue/25 text-bio-blue'}`}
              >
                {isChosen ? '✓' : LETTERS[i]}
              </span>
              <span
                className={`${question.optionsAreCode ? 'font-mono text-sm md:text-base' : 'text-base md:text-lg'} text-gray-100 pt-1`}
              >
                {option}
              </span>
            </button>
          )
        })}
      </div>

      {message && <p className="mt-5 text-center text-bio-green">{message}</p>}
    </div>
  )
}
