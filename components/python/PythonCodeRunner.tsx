'use client'

import React, { useState, useEffect } from 'react'
import { usePyodide } from '@/contexts/PyodideContext'
import StaticCodeDisplay from './StaticCodeDisplay'

// We'll use a simple textarea for now, can upgrade to CodeMirror later
interface PythonCodeRunnerProps {
  initialCode?: string
  height?: string
  showLineNumbers?: boolean
  editable?: boolean
  autoRun?: boolean
  expectedOutput?: string
  hints?: string[]
  onSuccess?: () => void
  
  // Static fallback props
  staticOutput?: string
  staticError?: string
  description?: string
}

export default function PythonCodeRunner({
  initialCode = '',
  height = '200px',
  showLineNumbers = true,
  editable = true,
  autoRun = false,
  expectedOutput,
  hints = [],
  onSuccess,
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
  const [error, setError] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [currentHint, setCurrentHint] = useState(0)

  // If browser doesn't support Pyodide, show static fallback
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

  const handleRun = async () => {
    if (!isReady) return
    
    setIsRunning(true)
    setError('')
    setOutput('')
    
    try {
      const result = await runCode(code)
      
      setOutput(result.output)
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
    setCode(initialCode)
    setOutput('')
    setError('')
    setShowHint(false)
    setCurrentHint(0)
  }

  const handleResetWorkspace = async () => {
    if (!isReady) return
    await resetWorkspace()
    setOutput('')
    setError('')
  }

  const handleShowHint = () => {
    if (hints.length > 0) {
      setShowHint(true)
      setCurrentHint((prev) => (prev + 1) % hints.length)
    }
  }

  useEffect(() => {
    if (autoRun && isReady && !isRunning) {
      handleRun()
    }
  }, [isReady, autoRun])

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
        
        {/* Code Editor - Simple textarea for now */}
        <div className="relative">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            disabled={!editable || isRunning}
            className="w-full bg-bio-dark text-gray-300 font-mono text-sm p-4 border-none outline-none resize-none"
            style={{ height }}
            spellCheck={false}
          />
        </div>
      </div>

      {/* Hint Display */}
      {showHint && hints[currentHint] && (
        <div className="px-4 py-2 bg-bio-yellow/10 border-b border-bio-yellow/20">
          <p className="text-sm text-bio-yellow">
            💡 {hints[currentHint]}
          </p>
        </div>
      )}

      {/* Output Display */}
      {(output || error) && (
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
          
          {error && (
            <pre className="bg-red-900/20 border border-red-500/30 rounded p-3 text-sm text-red-400 font-mono overflow-x-auto whitespace-pre-wrap mt-2">
              {error}
            </pre>
          )}
        </div>
      )}

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