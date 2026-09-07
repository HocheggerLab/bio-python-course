'use client'

import React, { useState, useEffect } from 'react'
import { usePyodide } from '@/contexts/PyodideContext'
import StaticCodeDisplay from './StaticCodeDisplay'
import CodeEditor from './CodeEditor'

export interface PythonCodeRunnerProps {
  initialCode?: string
  height?: string
  editable?: boolean
  autoRun?: boolean
  expectedOutput?: string
  hints?: string[]
  onSuccess?: () => void
  showLineNumbers?: boolean
  /**
   * The worked answer for an exercise.
   *
   * Shown publicly rather than hidden on a teacher-only slide: it keeps the
   * exercise and its answer in one file so they cannot drift apart, and it
   * leaves the deck usable for revision instead of half-blank after the
   * lecture. A student who reveals it immediately has at least read correct
   * code — and hiding it would not have stopped them anyway.
   */
  solution?: string

  // Static fallback props
  staticOutput?: string
  staticError?: string
  description?: string
}

export default function PythonCodeRunner({
  initialCode = '',
  height = '200px',
  editable = true,
  autoRun = false,
  expectedOutput,
  hints = [],
  onSuccess,
  showLineNumbers = false,
  solution,
  staticOutput,
  staticError,
  description
}: PythonCodeRunnerProps) {
  const { 
    runCode, 
    isReady, 
    isLoading, 
    browserSupport, 
    resetWorkspace,
    loadingProgress 
  } = usePyodide()
  
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState('')
  const [images, setImages] = useState<string[]>([])
  const [error, setError] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [currentHint, setCurrentHint] = useState(0)
  /* Holds the student's own attempt while the solution is on screen, so
     revealing it is reversible. It also lets the lecturer show the answer,
     run it, edit a line to demonstrate what breaks, then hand the slide back
     the way it was. */
  const [stashedCode, setStashedCode] = useState<string | null>(null)

  // Update code when initialCode changes
  useEffect(() => {
    setCode(initialCode)
  }, [initialCode])

  // Move useEffect BEFORE any conditional returns (React Hooks rule)
  useEffect(() => {
    // Only auto-run if browser supports Pyodide
    if (autoRun && isReady && browserSupport.supported) {
      // Use a timeout to ensure we don't run during the render phase
      const timer = setTimeout(() => {
        if (!isRunning) {
          handleRun()
        }
      }, 0)

      return () => clearTimeout(timer)
    }
    // We intentionally only want this to run when these specific props change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoRun, isReady, browserSupport.supported])

  const handleRun = async () => {
    if (!isReady) return
    
    setIsRunning(true)
    setError('')
    setOutput('')
    setImages([])
    
    try {
      const result = await runCode(code)
      
      setOutput(result.output)
      setImages(result.images ?? [])
      if (result.error) {
        setError(result.error)
      } else if (expectedOutput && result.output.trim() === expectedOutput.trim()) {
        onSuccess?.()
      }
    } catch (err) {
      setError((err as Error).message)
    }
    
    setIsRunning(false)
  }

  const handleReset = () => {
    setStashedCode(null)
    setCode(initialCode)
    setOutput('')
    setError('')
    setImages([])
    setShowHint(false)
    setCurrentHint(0)
  }

  const handleResetWorkspace = async () => {
    if (!isReady) return
    await resetWorkspace()
    setOutput('')
    setError('')
    setImages([])
  }

  const toggleSolution = () => {
    if (stashedCode === null) {
      setStashedCode(code)
      setCode(solution ?? '')
    } else {
      setCode(stashedCode)
      setStashedCode(null)
    }
    setOutput('')
    setError('')
    setImages([])
  }

  const handleShowHint = () => {
    if (hints.length > 0) {
      setShowHint(true)
      setCurrentHint((prev) => (prev + 1) % hints.length)
    }
  }

  // Check browser support AFTER all hooks (React Hooks rule)
  if (!browserSupport.supported) {
    return (
      <StaticCodeDisplay
        code={initialCode}
        output={staticOutput}
        error={staticError}
        description={description}
        browserMessage={browserSupport.fallbackMessage}
      />
    )
  }

  // Show loading state while Pyodide initializes
  if (isLoading) {
    return (
      <div className="bg-bio-card border border-bio-blue/20 rounded-xl overflow-hidden">
        <div className="p-6 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-bio-blue mb-4"></div>
          <p className="text-gray-400 mb-2">Loading Python Environment...</p>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-bio-blue h-2 rounded-full transition-all duration-300"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">{loadingProgress}%</p>
        </div>
      </div>
    )
  }

  /* Only a rendered figure earns the two-column layout: it is the one output
     tall enough to push itself off the slide. */
  const sideBySide = images.length > 0

  return (
    <div className="bg-bio-card border border-bio-blue/20 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="border-b border-bio-blue/20">
        <div className="flex items-center justify-between px-4 py-2 bg-bio-dark/50">
          <span className="text-sm font-semibold text-bio-blue">
            Interactive Python
            {browserSupport.warnings.length > 0 && (
              <span className="ml-2 text-xs text-yellow-400">⚠️</span>
            )}
          </span>
          <div className="flex gap-2">
            {hints.length > 0 && (
              <button
                onClick={handleShowHint}
                className="px-3 py-1 text-xs bg-bio-yellow/20 text-bio-yellow rounded hover:bg-bio-yellow/30 transition-colors"
              >
                💡 Hint
              </button>
            )}
            {solution && (
              <button
                onClick={toggleSolution}
                className={`px-3 py-1 text-xs rounded transition-colors ${
                  stashedCode !== null
                    ? 'bg-bio-green/30 text-bio-green hover:bg-bio-green/40'
                    : 'bg-bio-blue/20 text-bio-blue hover:bg-bio-blue/30'
                }`}
              >
                {stashedCode !== null ? '← Back to my code' : 'Check solution'}
              </button>
            )}
            <button
              onClick={handleReset}
              className="px-3 py-1 text-xs bg-gray-600 text-gray-300 rounded hover:bg-gray-500 transition-colors"
            >
              Reset Code
            </button>
            <button
              onClick={handleResetWorkspace}
              className="px-3 py-1 text-xs bg-red-600/20 text-red-400 rounded hover:bg-red-600/30 transition-colors"
            >
              Reset Workspace
            </button>
            <button
              onClick={handleRun}
              disabled={!isReady || isRunning}
              className="px-3 py-1 text-xs bg-bio-green text-white rounded hover:bg-bio-green/80 disabled:opacity-50 transition-colors"
            >
              {isRunning ? 'Running...' : 'Run ▶'}
            </button>
          </div>
        </div>
        
        {/* Browser warnings */}
        {browserSupport.warnings.length > 0 && (
          <div className="px-4 py-2 bg-yellow-900/20 border-b border-yellow-500/20">
            <div className="text-xs text-yellow-300">
              {browserSupport.warnings.map((warning, i) => (
                <div key={i}>⚠️ {warning}</div>
              ))}
            </div>
          </div>
        )}
        
      </div>

      {/* Code and output.
          A figure is tall: stacked under the editor it pushes itself off the
          bottom of the slide, so on a wide screen the two sit side by side and
          the plot stays visible next to the code that made it. Text-only runs
          keep the original stacked layout — a paragraph of stdout is short, and
          half-width would only make it wrap. */}
      <div className={sideBySide ? 'xl:flex xl:items-stretch' : ''}>
        <div
          className={`bg-bio-dark border-b border-bio-blue/20 ${
            sideBySide ? 'xl:w-1/2 xl:border-b-0 xl:border-r xl:border-bio-blue/20' : ''
          }`}
        >
          <CodeEditor
            code={code}
            onChange={setCode}
            disabled={!editable || isRunning}
            height={height}
            placeholder="# Your Python code here..."
            language="python"
            showLineNumbers={showLineNumbers}
          />
        </div>

        <div className={sideBySide ? 'xl:w-1/2 xl:overflow-y-auto' : ''}>
      {/* Hint Display */}
      {showHint && hints[currentHint] && (
        <div className="px-4 py-2 bg-bio-yellow/10 border-b border-bio-yellow/20">
          <p className="text-sm text-bio-yellow">
            💡 {hints[currentHint]}
          </p>
        </div>
      )}

      {/* Output Display */}
      {(output || error || images.length > 0) && (
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-400">Output</span>
            {expectedOutput && output.trim() === expectedOutput.trim() && (
              <span className="text-xs text-bio-green">✓ Correct!</span>
            )}
          </div>
          
          {output && (
            <pre className="bg-bio-dark/50 rounded p-3 text-sm text-gray-300 font-mono overflow-x-auto whitespace-pre-wrap">
              {output}
            </pre>
          )}
          
          {/* Figures render under the text output — a plot is the result of the
              snippet, not a decoration beside it.
              Bounded by *height*, not width: `w-full` used to stretch a 690px
              figure across the panel and scale it to ~700px tall, which pushed
              every plotting slide off the bottom of the screen. Capping the
              height instead lets a figure sit inside the slide it belongs to. */}
          {images.map((png, i) => (
            <img
              key={i}
              src={`data:image/png;base64,${png}`}
              alt={`Figure ${i + 1}`}
              className="mt-2 mx-auto max-w-full max-h-[34vh] w-auto object-contain rounded border border-white/10"
            />
          ))}

          {error && (
            <pre className="bg-red-900/20 border border-red-500/30 rounded p-3 text-sm text-red-400 font-mono overflow-x-auto whitespace-pre-wrap mt-2">
              {error}
            </pre>
          )}
        </div>
      )}
        </div>
      </div>

      {/* Status bar */}
      <div className="px-4 py-2 bg-bio-dark/30 border-t border-bio-blue/20">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>
            {isReady ? '🟢 Python Ready' : '🟡 Loading...'}
          </span>
          {description && <span>{description}</span>}
        </div>
      </div>
    </div>
  )
}