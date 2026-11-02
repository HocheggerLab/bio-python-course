'use client'

import { useEffect, useState } from 'react'
import {
  AGREEMENT,
  CHOICES,
  COMMENTS,
  MAX_COMMENT_CHARS,
  RATINGS,
  emptyAnswers,
  type FeedbackAnswers,
} from '@/lib/feedback/questions'
import { answersKey, tokenKey } from '@/lib/feedback/rounds'

/**
 * A random number for this round only — not an identity. It lets a second
 * submission replace the first; a new one per round means the two rounds
 * cannot be linked.
 */
function respondentToken(roundId: string): string {
  const key = tokenKey(roundId)
  let token = localStorage.getItem(key)
  if (!token) {
    token = crypto.randomUUID()
    localStorage.setItem(key, token)
  }
  return token
}

type Phase = 'editing' | 'sending' | 'sent' | 'error'

export default function FeedbackForm({ roundId }: { roundId: string }) {
  const [answers, setAnswers] = useState<FeedbackAnswers>(emptyAnswers)
  const [phase, setPhase] = useState<Phase>('editing')
  const [error, setError] = useState<string | null>(null)
  const [sentBefore, setSentBefore] = useState(false)

  // Bring back what this browser sent earlier, so revising starts from it.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(answersKey(roundId))
      if (saved) {
        setAnswers({ ...emptyAnswers(), ...JSON.parse(saved) })
        setSentBefore(true)
      }
    } catch {
      /* A corrupt local copy just means starting from blank. */
    }
  }, [roundId])

  const setRating = (id: string, v: number) =>
    setAnswers((a) => ({ ...a, ratings: { ...a.ratings, [id]: v } }))
  const setChoice = (id: string, v: number) =>
    setAnswers((a) => ({ ...a, choices: { ...a.choices, [id]: v } }))
  const setComment = (id: string, v: string) =>
    setAnswers((a) => ({ ...a, comments: { ...a.comments, [id]: v } }))

  const answered =
    Object.keys(answers.ratings).length +
    Object.keys(answers.choices).length +
    Object.values(answers.comments).filter((c) => c.trim()).length

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setPhase('sending')
    setError(null)
    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roundId, token: respondentToken(roundId), answers }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error ?? 'Something went wrong — please try again.')
        setPhase('error')
        return
      }
      localStorage.setItem(answersKey(roundId), JSON.stringify(answers))
      setSentBefore(true)
      setPhase('sent')
    } catch {
      setError('No connection — your answers are still here, try again.')
      setPhase('error')
    }
  }

  if (phase === 'sent') {
    return (
      <div className="rounded-2xl border-2 border-bio-green/30 bg-bio-green/10 p-8 text-center">
        <p className="text-2xl mb-2">🙏</p>
        <p className="text-white text-lg font-semibold mb-2">Thank you — your feedback is in.</p>
        <p className="text-gray-300 mb-6">It is read in full, and it does change the course.</p>
        <button
          type="button"
          onClick={() => setPhase('editing')}
          className="rounded-full border border-bio-blue text-bio-blue hover:bg-bio-blue hover:text-bio-darkest px-6 py-2.5 font-semibold transition-colors"
        >
          Change my answers
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-8">
      {sentBefore && (
        <p className="rounded-xl border border-bio-green/30 bg-bio-green/10 px-4 py-3 text-sm text-gray-200">
          You have already sent feedback for this round. Sending again replaces it.
        </p>
      )}

      <section className="flex flex-col gap-5">
        <h2 className="text-xl font-bold text-white">How much do you agree?</h2>
        {RATINGS.map((q) => (
          <fieldset key={q.id} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 md:p-5">
            <legend className="sr-only">{q.text}</legend>
            <p className="text-gray-100 mb-3" aria-hidden>{q.text}</p>
            <div className="grid grid-cols-5 gap-1.5 md:gap-2">
              {AGREEMENT.map((label, i) => (
                <Option
                  key={label}
                  name={q.id}
                  label={label}
                  checked={answers.ratings[q.id] === i}
                  onChange={() => setRating(q.id, i)}
                />
              ))}
            </div>
          </fieldset>
        ))}
      </section>

      <section className="flex flex-col gap-5">
        <h2 className="text-xl font-bold text-white">Pace and workload</h2>
        {CHOICES.map((q) => (
          <fieldset key={q.id} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 md:p-5">
            <legend className="sr-only">{q.text}</legend>
            <p className="text-gray-100 mb-3" aria-hidden>{q.text}</p>
            <div className={`grid gap-1.5 md:gap-2 ${q.options.length === 5 ? 'grid-cols-5' : 'grid-cols-2 md:grid-cols-4'}`}>
              {q.options.map((label, i) => (
                <Option
                  key={label}
                  name={q.id}
                  label={label}
                  checked={answers.choices[q.id] === i}
                  onChange={() => setChoice(q.id, i)}
                />
              ))}
            </div>
          </fieldset>
        ))}
      </section>

      <section className="flex flex-col gap-5">
        <h2 className="text-xl font-bold text-white">In your own words</h2>
        {COMMENTS.map((q) => (
          <label key={q.id} className="flex flex-col gap-2">
            <span className="text-gray-100">{q.text}</span>
            <textarea
              value={answers.comments[q.id] ?? ''}
              onChange={(e) => setComment(q.id, e.target.value)}
              maxLength={MAX_COMMENT_CHARS}
              rows={4}
              className="rounded-xl border border-white/15 bg-bio-darker/60 p-3 text-gray-100 placeholder-gray-500 focus:border-bio-blue focus:outline-none"
            />
          </label>
        ))}
        <p className="text-xs text-gray-500">
          Please don&apos;t include names, yours or anyone else&apos;s.
        </p>
      </section>

      {error && <p className="text-red-400 text-center">{error}</p>}

      <button
        type="submit"
        disabled={answered === 0 || phase === 'sending'}
        className="self-center rounded-full bg-bio-blue text-bio-darkest hover:bg-bio-light-blue disabled:opacity-40 disabled:cursor-not-allowed px-8 py-3 font-semibold transition-colors"
      >
        {phase === 'sending' ? 'Sending…' : sentBefore ? 'Update my feedback' : 'Send feedback'}
      </button>
    </form>
  )
}

function Option({
  name,
  label,
  checked,
  onChange,
}: {
  name: string
  label: string
  checked: boolean
  onChange: () => void
}) {
  return (
    <label
      className={`flex items-center justify-center text-center rounded-lg border px-1.5 py-2 text-xs md:text-sm leading-tight cursor-pointer transition-colors
        ${checked
          ? 'border-bio-blue bg-bio-blue/20 text-white'
          : 'border-white/10 text-gray-300 hover:border-bio-blue/50'}`}
    >
      <input type="radio" name={name} checked={checked} onChange={onChange} className="sr-only" />
      {label}
    </label>
  )
}
