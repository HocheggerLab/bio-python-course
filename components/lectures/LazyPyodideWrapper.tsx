'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { PyodideProvider } from '@/contexts/PyodideContext'
import { useIsSlideActive } from './SlideContext'

const RequestCtx = createContext<() => void>(() => {})

/**
 * Hook for Python-using slides to signal that the page should load Pyodide.
 * Idempotent — calling it after the provider is already mounted is a no-op.
 */
export const useRequestPyodide = () => useContext(RequestCtx)

/**
 * Convenience hook for a slide that wants Python. Returns `{ activated }`,
 * which flips true the first time the slide becomes visible. Use as a gate
 * for rendering the runner (the PyodideProvider only mounts after activation,
 * so don't render usePyodide-consuming components before then).
 */
export function usePythonSlide() {
  const isActive = useIsSlideActive()
  const requestPyodide = useRequestPyodide()
  const [activated, setActivated] = useState(false)

  useEffect(() => {
    if (isActive && !activated) {
      requestPyodide()
      setActivated(true)
    }
  }, [isActive, activated, requestPyodide])

  return { activated }
}

/**
 * Wraps a lecture page. Pyodide is NOT loaded until a slide calls
 * `useRequestPyodide()`. Once requested, the provider mounts and stays
 * mounted for the rest of the lecture session, so subsequent Python slides
 * reuse the same Pyodide instance.
 */
export default function LazyPyodideWrapper({ children }: { children: React.ReactNode }) {
  const [needed, setNeeded] = useState(false)
  const request = useCallback(() => setNeeded(true), [])

  return (
    <RequestCtx.Provider value={request}>
      {needed ? <PyodideProvider>{children}</PyodideProvider> : children}
    </RequestCtx.Provider>
  )
}
