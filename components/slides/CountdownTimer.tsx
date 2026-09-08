'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * A lab countdown, started by the demonstrator when the room is released.
 *
 * A slide that reads "suggested time: 20 minutes" is furniture — nobody paces
 * against it. A running clock changes the room: students see the core work
 * has to land before it hits zero, and it saves the demonstrator asking "how
 * are we doing for time?" every few minutes.
 */
export default function CountdownTimer({ minutes = 20 }: { minutes?: number }) {
  const total = minutes * 60
  const [left, setLeft] = useState(total)
  const [running, setRunning] = useState(false)
  /* Count against the wall clock, not ticks: a background tab throttles
     setInterval, and a timer that quietly runs slow is worse than none. */
  const endAt = useRef<number | null>(null)

  useEffect(() => {
    if (!running) return
    const id = setInterval(() => {
      if (endAt.current === null) return
      const remaining = Math.max(0, Math.round((endAt.current - Date.now()) / 1000))
      setLeft(remaining)
      if (remaining === 0) setRunning(false)
    }, 250)
    return () => clearInterval(id)
  }, [running])

  function start() {
    endAt.current = Date.now() + left * 1000
    setRunning(true)
  }

  function pause() {
    setRunning(false)
  }

  function reset() {
    setRunning(false)
    endAt.current = null
    setLeft(total)
  }

  const mm = Math.floor(left / 60)
  const ss = left % 60
  const tone =
    left === 0 ? 'text-red-400' : left <= 300 ? 'text-bio-yellow' : 'text-bio-blue'

  return (
    /* Digits and controls on one line: the clock lives above the slide title,
       where vertical space is the scarce thing. */
    <div className="flex items-center gap-3 md:gap-4">
      <div className={`font-mono font-bold tabular-nums text-4xl md:text-6xl xl:text-7xl ${tone}`}>
        {mm}:{String(ss).padStart(2, '0')}
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={running ? pause : start}
          className="px-3 py-1 rounded-lg bg-bio-blue/20 text-bio-blue text-xs md:text-sm font-semibold hover:bg-bio-blue/30"
        >
          {running ? 'Pause' : left === total ? 'Start' : 'Resume'}
        </button>
        <button
          onClick={reset}
          className="px-3 py-1 rounded-lg bg-white/10 text-gray-300 text-xs md:text-sm font-semibold hover:bg-white/20"
        >
          Reset
        </button>
      </div>
    </div>
  )
}
