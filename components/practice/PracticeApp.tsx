'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import QuestionCard, { type Attempt } from './QuestionCard'
import { LEVELS, QUESTIONS, SECTIONS, type Level } from '@/lib/practice'

/* Progress lives in the browser only — no accounts. Bump the key if the
   stored shape ever changes, so old data is simply ignored. */
const STORAGE_KEY = 'pfb-practice-v1'

interface Saved {
  /** Each level's questions in this student's random order. */
  orders: Partial<Record<Level, string[]>>
  answers: Record<string, Attempt>
}

const EMPTY: Saved = { orders: {}, answers: {} }

function shuffle<T>(items: T[]): T[] {
  const a = [...items]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const BY_ID = new Map(QUESTIONS.map((q) => [q.id, q]))
const idsFor = (level: Level) => QUESTIONS.filter((q) => q.level === level).map((q) => q.id)

/** A saved order is only trusted if it still holds exactly this level's questions. */
function validOrder(order: string[] | undefined, level: Level) {
  const ids = idsFor(level)
  return !!order && order.length === ids.length && ids.every((id) => order.includes(id))
}

export default function PracticeApp() {
  const [saved, setSaved] = useState<Saved>(EMPTY)
  const [loaded, setLoaded] = useState(false)
  const [level, setLevel] = useState<Level>('easy')
  const [section, setSection] = useState<string>('all')
  const [current, setCurrent] = useState<string | null>(null)

  /* Load once, on the client. Any level without a valid saved order gets a
     fresh shuffle — that is what makes each student's order random. */
  useEffect(() => {
    let data: Saved = EMPTY
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) data = { ...EMPTY, ...JSON.parse(raw) }
    } catch {
      data = EMPTY
    }
    const orders = { ...data.orders }
    for (const { id } of LEVELS) if (!validOrder(orders[id], id)) orders[id] = shuffle(idsFor(id))
    const answers = Object.fromEntries(Object.entries(data.answers ?? {}).filter(([id]) => BY_ID.has(id)))
    setSaved({ orders, answers })
    const params = new URLSearchParams(window.location.search)
    const s = params.get('section')
    if (s && SECTIONS.some((x) => x.slug === s)) setSection(s)
    const l = params.get('level')
    if (l && LEVELS.some((x) => x.id === l)) setLevel(l as Level)
    setLoaded(true)
  }, [])

  const persist = useCallback((next: Saved) => {
    setSaved(next)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {
      /* private browsing or storage full — progress just won't survive a reload */
    }
  }, [])

  /** This level's questions, in the student's random order, filtered by topic. */
  const list = useMemo(() => {
    const order = saved.orders[level] ?? idsFor(level)
    return order.map((id) => BY_ID.get(id)!).filter((q) => section === 'all' || q.section === section)
  }, [saved.orders, level, section])

  /* Whenever the list changes — or nothing is selected, e.g. after a tab click
     or a reset — land on the first unanswered question (or the first question
     if all are done), unless the current one is still in the list. */
  useEffect(() => {
    if (!loaded) return
    if (current && list.some((q) => q.id === current)) return
    const next = list.find((q) => !saved.answers[q.id]) ?? list[0]
    setCurrent(next?.id ?? null)
  }, [list, loaded, current]) // eslint-disable-line react-hooks/exhaustive-deps

  const index = list.findIndex((q) => q.id === current)
  const question = index >= 0 ? list[index] : null

  const levelStats = (lv: Level) => {
    const ids = idsFor(lv)
    const answered = ids.filter((id) => saved.answers[id])
    return { total: ids.length, answered: answered.length, correct: answered.filter((id) => saved.answers[id].correct).length }
  }
  const listAnswered = list.filter((q) => saved.answers[q.id]).length
  const listCorrect = list.filter((q) => saved.answers[q.id]?.correct).length

  const record = (id: string, a: Attempt) => persist({ ...saved, answers: { ...saved.answers, [id]: a } })

  const goNextUnanswered = () => {
    if (index < 0) return
    const after = [...list.slice(index + 1), ...list.slice(0, index)]
    const next = after.find((q) => !saved.answers[q.id]) ?? list[(index + 1) % list.length]
    setCurrent(next.id)
  }

  const resetLevel = () => {
    if (!window.confirm(`Clear your ${level} answers and shuffle the ${level} questions again?`)) return
    const ids = new Set(idsFor(level))
    const answers = Object.fromEntries(Object.entries(saved.answers).filter(([id]) => !ids.has(id)))
    persist({ orders: { ...saved.orders, [level]: shuffle(idsFor(level)) }, answers })
    setCurrent(null)
  }

  const resetAll = () => {
    if (!window.confirm('Clear all your practice answers and start again?')) return
    const orders: Saved['orders'] = {}
    for (const { id } of LEVELS) orders[id] = shuffle(idsFor(id))
    persist({ orders, answers: {} })
    setCurrent(null)
  }

  if (!loaded) {
    return <p className="text-gray-400 text-center py-20">Loading your practice questions…</p>
  }

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      {/* Level tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4" role="tablist" aria-label="Difficulty">
        {LEVELS.map((lv) => {
          const st = levelStats(lv.id)
          const active = lv.id === level
          return (
            <button
              key={lv.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => {
                setLevel(lv.id)
                setCurrent(null)
              }}
              className={`text-left rounded-xl border px-4 py-3 md:px-5 md:py-4 transition-colors ${
                active ? 'border-bio-blue bg-bio-blue/10' : 'border-white/10 hover:border-bio-blue/50'
              }`}
            >
              <span className="flex items-baseline justify-between gap-2">
                <span className={`text-lg md:text-xl font-bold ${active ? 'text-bio-blue' : 'text-white'}`}>{lv.label}</span>
                <span className="text-xs md:text-sm text-gray-400">
                  {st.answered}/{st.total} · {st.correct} correct
                </span>
              </span>
              <span className="block text-xs md:text-sm text-gray-400 mt-1">{lv.blurb}</span>
              <span className="block h-1.5 rounded-full bg-white/10 mt-3 overflow-hidden">
                <span className="block h-full bg-bio-green" style={{ width: `${(st.answered / st.total) * 100}%` }} />
              </span>
            </button>
          )
        })}
      </div>

      {/* Topic filter */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm text-gray-400 mr-1">Topic:</span>
        {[{ slug: 'all', label: 'All topics' }, ...SECTIONS].map((s) => (
          <button
            key={s.slug}
            type="button"
            onClick={() => {
              setSection(s.slug)
              setCurrent(null)
            }}
            className={`rounded-full px-3 py-1 text-xs md:text-sm border transition-colors ${
              section === s.slug ? 'border-bio-blue text-bio-blue bg-bio-blue/10' : 'border-white/10 text-gray-300 hover:border-bio-blue/50'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Question map: one dot per question, in this student's order */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <p className="text-sm text-gray-400">
            {listAnswered} of {list.length} answered · {listCorrect} correct
          </p>
          <div className="flex gap-2">
            <button type="button" onClick={resetLevel} className="btn-secondary !py-1 !px-3 text-xs">
              Reset {level}
            </button>
            <button type="button" onClick={resetAll} className="btn-secondary !py-1 !px-3 text-xs">
              Reset everything
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5" aria-label="Jump to a question">
          {list.map((q, i) => {
            const a = saved.answers[q.id]
            const tone = !a
              ? 'bg-white/5 text-gray-400 border-white/10'
              : a.correct
                ? 'bg-bio-green/20 text-bio-green border-bio-green/40'
                : 'bg-bio-yellow/15 text-bio-yellow border-bio-yellow/40'
            return (
              <button
                key={q.id}
                type="button"
                onClick={() => setCurrent(q.id)}
                aria-label={`Question ${i + 1}${a ? (a.correct ? ', correct' : ', answered') : ''}`}
                aria-current={q.id === current}
                className={`w-8 h-8 rounded-full border text-xs font-semibold transition-colors ${tone} ${
                  q.id === current ? 'ring-2 ring-bio-blue' : ''
                }`}
              >
                {i + 1}
              </button>
            )
          })}
        </div>
      </div>

      {question ? (
        <>
          <QuestionCard
            key={question.id}
            question={question}
            number={index + 1}
            total={list.length}
            attempt={saved.answers[question.id]}
            onAttempt={(a) => record(question.id, a)}
          />
          <div className="flex flex-wrap justify-between gap-3">
            <button
              type="button"
              className="btn-secondary !py-2 !px-5"
              disabled={index <= 0}
              onClick={() => setCurrent(list[index - 1].id)}
            >
              ← Previous
            </button>
            <button type="button" className="btn-primary !py-2 !px-5" onClick={goNextUnanswered}>
              {listAnswered === list.length ? 'Next →' : 'Next unanswered →'}
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-400">No questions for this topic.</p>
      )}

      {listAnswered === list.length && list.length > 0 && (
        <div className="rounded-xl border-l-4 border-bio-green bg-bio-green/10 px-5 py-4">
          <p className="text-white font-semibold">
            All {list.length} done — {listCorrect} correct.
          </p>
          <p className="text-gray-300 text-sm mt-1">
            Revisit the yellow ones, read the <Link href="/practice/concepts" className="text-bio-blue hover:underline">concept pages</Link>, or
            reset to shuffle the questions and go again.
          </p>
        </div>
      )}
    </div>
  )
}
