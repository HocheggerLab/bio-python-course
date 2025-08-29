'use client'

import React, { createContext, useContext, useEffect, useState, useRef, useCallback } from 'react'
import { checkPyodideSupport, PyodideSupport } from '@/utils/checkPyodideSupport'

// Type definitions for Pyodide (loaded from CDN)
interface PyodideInterface {
  runPython: (code: string) => any
  runPythonAsync: (code: string) => Promise<any>
  loadPackage: (packages: string | string[]) => Promise<void>
  registerJsModule: (name: string, module: any) => void
  unregisterJsModule: (name: string) => void
  interrupt: () => void
  globals: any
  version: string
}

// Global Pyodide loader function (will be available after CDN script loads)
declare global {
  interface Window {
    loadPyodide: (config?: {
      indexURL?: string
      stdout?: (text: string) => void
      stderr?: (text: string) => void
    }) => Promise<PyodideInterface>
  }
}

interface PyodideContextType {
  // Core state
  pyodide: PyodideInterface | null
  isLoading: boolean
  error: Error | null
  loadingProgress: number
  isReady: boolean
  
  // Browser support
  browserSupport: PyodideSupport
  
  // Core functions
  runCode: (code: string) => Promise<{ output: string; error?: string }>
  resetWorkspace: () => Promise<void>
  interruptExecution: () => void
  
  // Utility functions
  getGlobals: () => Record<string, any>
  checkVariable: (name: string) => boolean
}

const PyodideContext = createContext<PyodideContextType | null>(null)

export const PyodideProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pyodide, setPyodide] = useState<PyodideInterface | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [browserSupport, setBrowserSupport] = useState<PyodideSupport>({ supported: false, warnings: [], fallbackMessage: '' })
  const outputBuffer = useRef<string[]>([])
  const initializationAttempted = useRef(false)

  // Check browser support on mount (client-side only)
  useEffect(() => {
    // Ensure we're running in browser
    if (typeof window === 'undefined') return
    
    const support = checkPyodideSupport()
    setBrowserSupport(support)
    
    if (support.supported && !initializationAttempted.current) {
      initializationAttempted.current = true
      initPyodide()
    }
  }, [])

  const loadPyodideScript = useCallback((): Promise<void> => {
    return new Promise((resolve, reject) => {
      // Check if Pyodide script is already loaded
      if (window.loadPyodide) {
        resolve()
        return
      }

      // Check if script is already being loaded
      const existingScript = document.querySelector('script[src*="pyodide.js"]')
      if (existingScript) {
        existingScript.addEventListener('load', () => resolve())
        existingScript.addEventListener('error', reject)
        return
      }

      // Load Pyodide script from CDN
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js'
      script.async = true
      script.onload = () => resolve()
      script.onerror = () => reject(new Error('Failed to load Pyodide script'))
      document.head.appendChild(script)
    })
  }, [])

  const initPyodide = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    setLoadingProgress(0)

    try {
      setLoadingProgress(10)
      
      // Load Pyodide script from CDN
      await loadPyodideScript()
      
      setLoadingProgress(30)
      
      // Initialize Pyodide
      const pyodideInstance = await window.loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/",
        stdout: (text: string) => {
          outputBuffer.current.push(text)
        },
        stderr: (text: string) => {
          outputBuffer.current.push(`stderr: ${text}`)
        }
      })
      
      setLoadingProgress(50)
      
      // Pre-load biology-specific setup
      await pyodideInstance.runPythonAsync(`
        import sys
        import io
        from contextlib import redirect_stdout, redirect_stderr
        
        # Genetic code dictionary (DNA codons to amino acids)
        dna_codon_table = {
            'TTT': 'F', 'TTC': 'F', 'TTA': 'L', 'TTG': 'L',
            'TCT': 'S', 'TCC': 'S', 'TCA': 'S', 'TCG': 'S',
            'TAT': 'Y', 'TAC': 'Y', 'TAA': '*', 'TAG': '*',
            'TGT': 'C', 'TGC': 'C', 'TGA': '*', 'TGG': 'W',
            'CTT': 'L', 'CTC': 'L', 'CTA': 'L', 'CTG': 'L',
            'CCT': 'P', 'CCC': 'P', 'CCA': 'P', 'CCG': 'P',
            'CAT': 'H', 'CAC': 'H', 'CAA': 'Q', 'CAG': 'Q',
            'CGT': 'R', 'CGC': 'R', 'CGA': 'R', 'CGG': 'R',
            'ATT': 'I', 'ATC': 'I', 'ATA': 'I', 'ATG': 'M',
            'ACT': 'T', 'ACC': 'T', 'ACA': 'T', 'ACG': 'T',
            'AAT': 'N', 'AAC': 'N', 'AAA': 'K', 'AAG': 'K',
            'AGT': 'S', 'AGC': 'S', 'AGA': 'R', 'AGG': 'R',
            'GTT': 'V', 'GTC': 'V', 'GTA': 'V', 'GTG': 'V',
            'GCT': 'A', 'GCC': 'A', 'GCA': 'A', 'GCG': 'A',
            'GAT': 'D', 'GAC': 'D', 'GAA': 'E', 'GAG': 'E',
            'GGT': 'G', 'GGC': 'G', 'GGA': 'G', 'GGG': 'G'
        }
        
        # RNA codon table
        rna_codon_table = {
            'UUU': 'F', 'UUC': 'F', 'UUA': 'L', 'UUG': 'L',
            'UCU': 'S', 'UCC': 'S', 'UCA': 'S', 'UCG': 'S',
            'UAU': 'Y', 'UAC': 'Y', 'UAA': '*', 'UAG': '*',
            'UGU': 'C', 'UGC': 'C', 'UGA': '*', 'UGG': 'W',
            'CUU': 'L', 'CUC': 'L', 'CUA': 'L', 'CUG': 'L',
            'CCU': 'P', 'CCC': 'P', 'CCA': 'P', 'CCG': 'P',
            'CAU': 'H', 'CAC': 'H', 'CAA': 'Q', 'CAG': 'Q',
            'CGU': 'R', 'CGC': 'R', 'CGA': 'R', 'CGG': 'R',
            'AUU': 'I', 'AUC': 'I', 'AUA': 'I', 'AUG': 'M',
            'ACU': 'T', 'ACC': 'T', 'ACA': 'T', 'ACG': 'T',
            'AAU': 'N', 'AAC': 'N', 'AAA': 'K', 'AAG': 'K',
            'AGU': 'S', 'AGC': 'S', 'AGA': 'R', 'AGG': 'R',
            'GUU': 'V', 'GUC': 'V', 'GUA': 'V', 'GUG': 'V',
            'GCU': 'A', 'GCC': 'A', 'GCA': 'A', 'GCG': 'A',
            'GAU': 'D', 'GAC': 'D', 'GAA': 'E', 'GAG': 'E',
            'GGU': 'G', 'GGC': 'G', 'GGA': 'G', 'GGG': 'G'
        }
        
        # Helper functions for biology
        def complement_dna(sequence):
            """Return complement of DNA sequence"""
            complement_map = {'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C'}
            return ''.join(complement_map.get(base, base) for base in sequence.upper())
        
        def reverse_complement(sequence):
            """Return reverse complement of DNA sequence"""
            return complement_dna(sequence)[::-1]
        
        def transcribe(dna_sequence):
            """Transcribe DNA to RNA"""
            return dna_sequence.replace('T', 'U')
        
        def translate_dna(dna_sequence, table=None):
            """Translate DNA sequence to protein"""
            if table is None:
                table = dna_codon_table
            
            protein = []
            for i in range(0, len(dna_sequence) - 2, 3):
                codon = dna_sequence[i:i+3]
                if len(codon) == 3:
                    aa = table.get(codon, 'X')  # X for unknown
                    protein.append(aa)
                    if aa == '*':  # Stop codon
                        break
            return ''.join(protein)
        
        def gc_content(sequence):
            """Calculate GC content percentage"""
            sequence = sequence.upper()
            gc_count = sequence.count('G') + sequence.count('C')
            return (gc_count / len(sequence)) * 100 if len(sequence) > 0 else 0
        
        print("🧬 Python for Biologists - Interactive Environment Ready!")
        print("Available tools: complement_dna(), reverse_complement(), transcribe(), translate_dna(), gc_content()")
        print("Codon tables: dna_codon_table, rna_codon_table")
      `)
      
      setLoadingProgress(90)
      
      // Test basic functionality
      const testResult = await pyodideInstance.runPythonAsync(`
        test_dna = "ATGCGTAAA"
        result = f"Test: {test_dna} -> GC: {gc_content(test_dna):.1f}%"
        result
      `)
      
      console.log('Pyodide test result:', testResult)
      
      setLoadingProgress(100)
      setPyodide(pyodideInstance)
      setIsLoading(false)
      
    } catch (err) {
      console.error('Failed to initialize Pyodide:', err)
      setError(err as Error)
      setIsLoading(false)
    }
  }, [loadPyodideScript])

  const runCode = useCallback(async (code: string): Promise<{ output: string; error?: string }> => {
    if (!pyodide) {
      return { output: '', error: 'Pyodide not loaded' }
    }

    outputBuffer.current = []
    
    try {
      // Capture stdout and stderr
      await pyodide.runPythonAsync(`
        import sys
        from io import StringIO
        
        # Capture stdout
        old_stdout = sys.stdout
        sys.stdout = StringIO()
        
        # Capture stderr
        old_stderr = sys.stderr
        sys.stderr = StringIO()
      `)
      
      // Run user code
      const result = await pyodide.runPythonAsync(code)
      
      // Get captured output
      const captured = await pyodide.runPythonAsync(`
        stdout_content = sys.stdout.getvalue()
        stderr_content = sys.stderr.getvalue()
        
        # Restore original stdout/stderr
        sys.stdout = old_stdout
        sys.stderr = old_stderr
        
        # Return both outputs
        (stdout_content, stderr_content)
      `)
      
      const [stdout, stderr] = captured.toJs()
      
      // Combine outputs
      let output = ''
      if (stdout) output += stdout
      if (outputBuffer.current.length > 0) {
        output += outputBuffer.current.join('')
      }
      if (result !== undefined && result !== null && stdout === '') {
        output += String(result)
      }
      
      return { 
        output: output || '(no output)', 
        error: stderr || undefined 
      }
      
    } catch (err) {
      // Restore stdout/stderr on error
      try {
        await pyodide.runPythonAsync(`
          sys.stdout = old_stdout
          sys.stderr = old_stderr
        `)
      } catch {}
      
      return { 
        output: outputBuffer.current.join('') || '', 
        error: (err as Error).message 
      }
    }
  }, [pyodide])

  const resetWorkspace = useCallback(async (): Promise<void> => {
    if (!pyodide) return
    
    try {
      // Clear all user-defined variables except built-ins and our biology functions
      await pyodide.runPythonAsync(`
        # Get list of current variables
        current_vars = list(globals().keys())
        
        # Define variables to keep (built-ins + our biology tools)
        keep_vars = {
            '__name__', '__doc__', '__package__', '__loader__', '__spec__',
            '__annotations__', '__builtins__', '__file__', '__cached__',
            'dna_codon_table', 'rna_codon_table', 
            'complement_dna', 'reverse_complement', 'transcribe', 'translate_dna', 'gc_content',
            'sys', 'io', 'redirect_stdout', 'redirect_stderr'
        }
        
        # Remove user-defined variables
        for var_name in current_vars:
            if var_name not in keep_vars and not var_name.startswith('_'):
                del globals()[var_name]
        
        print("🔄 Workspace reset - biology tools still available!")
      `)
    } catch (err) {
      console.error('Failed to reset workspace:', err)
    }
  }, [pyodide])

  const interruptExecution = useCallback(() => {
    pyodide?.interrupt()
  }, [pyodide])

  const getGlobals = useCallback((): Record<string, any> => {
    if (!pyodide) return {}
    
    try {
      const globals = pyodide.runPython(`
        {k: v for k, v in globals().items() 
         if not k.startswith('_') and not callable(v)}
      `)
      return globals.toJs()
    } catch {
      return {}
    }
  }, [pyodide])

  const checkVariable = useCallback((name: string): boolean => {
    if (!pyodide) return false
    
    try {
      const exists = pyodide.runPython(`'${name}' in globals()`)
      return Boolean(exists)
    } catch {
      return false
    }
  }, [pyodide])

  const value: PyodideContextType = {
    pyodide,
    isLoading,
    error,
    loadingProgress,
    isReady: !!pyodide && !isLoading && !error,
    browserSupport,
    runCode,
    resetWorkspace,
    interruptExecution,
    getGlobals,
    checkVariable
  }

  return (
    <PyodideContext.Provider value={value}>
      {children}
    </PyodideContext.Provider>
  )
}

export const usePyodide = (): PyodideContextType => {
  const context = useContext(PyodideContext)
  if (!context) {
    throw new Error('usePyodide must be used within a PyodideProvider')
  }
  return context
}