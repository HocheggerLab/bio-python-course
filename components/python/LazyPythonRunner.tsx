'use client'

import dynamic from 'next/dynamic'
import { usePythonSlide } from '@/components/lectures/LazyPyodideWrapper'
import type { PythonCodeRunnerProps } from './PythonCodeRunner'

const PythonCodeRunner = dynamic(() => import('./PythonCodeRunner'), {
  ssr: false,
  loading: () => <RunnerPlaceholder text="Loading editor…" />,
})

function RunnerPlaceholder({ text }: { text: string }) {
  return (
    <div className="bg-bio-card border border-bio-blue/20 rounded-xl p-6 text-center text-gray-400 text-sm">
      <span className="inline-block animate-pulse mr-2">⏳</span>
      {text}
    </div>
  )
}

/**
 * Drop-in for slide content. Renders a placeholder until the parent slide
 * first becomes active; then triggers Pyodide load and mounts the real
 * PythonCodeRunner. Use anywhere inside a slide — no extra wiring required.
 */
export default function LazyPythonRunner(props: PythonCodeRunnerProps) {
  const { activated } = usePythonSlide()

  if (!activated) {
    return <RunnerPlaceholder text="Python editor will load when you reach this slide." />
  }
  return <PythonCodeRunner {...props} />
}
