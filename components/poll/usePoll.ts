'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

/** Only the projector polls, so this is a handful of requests, not a hundred. */
const REFRESH_MS = 2000

export interface PollResults {
  questionId: string
  isOpen: boolean
  total: number
  counts: number[]
  correctIndex: number
  /** The worked explanation. Arrives with the tally, behind the same gate. */
  explanation: string | null
}

/**
 * Everything a poll slide needs: whether this viewer is a lecturer, the live
 * tally, and the open/close/reset controls.
 *
 * Extracted from PollSlide so the compact Try-it-Yourself variant can reuse it
 * rather than keeping a second copy of the polling and authorisation logic in
 * step with it.
 *
 * Attach `rootRef` to the slide's outermost element: every slide in a deck
 * stays mounted, so without the visibility check an unconditional interval
 * would have every poll on the page refreshing from every laptop in the room.
 */
export function usePoll(questionId: string) {
  const [results, setResults] = useState<PollResults | null>(null)
  const [teacher, setTeacher] = useState(false)
  const [revealed, setRevealed] = useState(false)
  /* An open that silently failed looks exactly like one that worked — the
     chip just stays "closed". That cost us a demo; it must not cost a
     lecture. */
  const [failed, setFailed] = useState<string | null>(null)
  const [onScreen, setOnScreen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

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
    const el = rootRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setOnScreen(entry.isIntersecting),
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!teacher || !onScreen) return
    refresh()
    const id = setInterval(refresh, REFRESH_MS)
    return () => clearInterval(id)
  }, [teacher, onScreen, refresh])

  const act = useCallback(
    async (action: 'open' | 'close' | 'reset') => {
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
    },
    [questionId, refresh]
  )

  return { rootRef, results, teacher, revealed, setRevealed, failed, act }
}
