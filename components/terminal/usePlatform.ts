'use client'

import { useEffect, useState } from 'react'

export type Platform = 'mac' | 'windows'

const KEY = 'pfb-platform'
const EVT = 'pfb-platform-change'

/**
 * Deck-wide Mac/Windows choice. Every <TerminalBlock> on the page reads and
 * writes the same value (via localStorage + a custom window event), so a student
 * picks their OS once and every command follows — even across slide changes.
 */
export function usePlatform(): [Platform, (p: Platform) => void] {
  const [platform, setPlatformState] = useState<Platform>('mac')

  useEffect(() => {
    const stored = window.localStorage.getItem(KEY)
    if (stored === 'mac' || stored === 'windows') setPlatformState(stored)

    const onChange = (e: Event) => {
      const p = (e as CustomEvent<Platform>).detail
      if (p === 'mac' || p === 'windows') setPlatformState(p)
    }
    window.addEventListener(EVT, onChange)
    return () => window.removeEventListener(EVT, onChange)
  }, [])

  const setPlatform = (p: Platform) => {
    setPlatformState(p)
    window.localStorage.setItem(KEY, p)
    window.dispatchEvent(new CustomEvent<Platform>(EVT, { detail: p }))
  }

  return [platform, setPlatform]
}
