'use client'

import React, { createContext, useContext, useEffect, useState, useRef, useCallback } from 'react'
import { checkPyodideSupport, PyodideSupport } from '@/utils/checkPyodideSupport'

/**
 * Pyodide 314.0.x ships CPython 3.14 with pandas 3, numpy 2.4, matplotlib 3.10
 * and scipy 1.18 prebuilt as wasm wheels. Bump this one constant to move the
 * whole site — nothing else hardcodes a version.
 */
const PYODIDE_CDN = 'https://cdn.jsdelivr.net/pyodide/v314.0.6/full/'

/**
 * Course files, served from `public/data/` and copied into Pyodide's virtual
 * filesystem the first time a snippet mentions one.
 *
 * Data files let a slide write the same `pd.read_csv("pollinators.csv")` that
 * students run in Colab — the path is not a browser artefact they have to
 * unlearn. Python modules let an exercise hand out a class whose source the
 * student genuinely cannot read, so exploring it means reading its
 * documentation, exactly as with a real package.
 */
const COURSE_FILES: Record<string, string> = {
  'pollinators.csv': '/data/pollinators.csv',
  'beetable.py': '/data/beetable.py',
}

/** A module is named without its extension at the import site. */
const mentionTokens = (filename: string) =>
  filename.endsWith('.py') ? [filename, filename.slice(0, -3)] : [filename]

// Type definitions for Pyodide (loaded from CDN)
interface PyodideInterface {
  runPython: (code: string) => any
  runPythonAsync: (code: string) => Promise<any>
  loadPackage: (packages: string | string[]) => Promise<void>
  loadPackagesFromImports: (code: string) => Promise<void>
  registerJsModule: (name: string, module: any) => void
  unregisterJsModule: (name: string) => void
  interrupt: () => void
  globals: any
  version: string
  FS: {
    writeFile: (filename: string, content: string) => void
    readFile: (filename: string) => string
    unlink: (filename: string) => void
  }
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

/** A run's result. `images` holds base64 PNGs of any matplotlib figures the
 *  snippet left open, so a plot renders inline instead of vanishing. */
export interface RunResult {
  output: string
  error?: string
  images?: string[]
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
  runCode: (code: string) => Promise<RunResult>
  resetWorkspace: () => Promise<void>
  interruptExecution: () => void
  
  // Utility functions
  getGlobals: () => Record<string, any>
  checkVariable: (name: string) => boolean
}

const PyodideContext = createContext<PyodideContextType | null>(null)

/**
 * Matplotlib's defaults are built for white paper — on a dark deck a plot
 * arrives as a glaring rectangle with unreadable grey tick labels. Applied
 * once per run, before the snippet executes, so students never have to style
 * a figure to make it legible on a slide. Their code stays identical to what
 * they will run in Colab; only the theme differs.
 */
/**
 * Run the student's code the way a notebook cell does, and report failures the
 * way Python does.
 *
 * Two problems this solves. First, Pyodide 314 raises a `PythonError` whose
 * `.message` is empty — only `.type` survives the trip to JS — so a snippet
 * with a typo used to fail completely silently, which is the worst possible
 * behaviour in a teaching tool. Catching inside Python instead gives us the
 * real traceback, the same one students learned to read in Session 4.
 *
 * Second, a notebook echoes the value of a cell's last line. Without that,
 * `df.head()` on its own displays nothing and every slide has to wrap it in a
 * print() that students would not write in Colab. So the last statement is
 * split off and evaluated separately when it is an expression.
 */
const RUN_USER_CODE = `
import ast as _ast, traceback as _traceback

__run_error__ = ""
try:
    _tree = _ast.parse(__user_code__)
    _last = _tree.body.pop() if _tree.body else None
    exec(compile(_tree, "your code", "exec"), globals())
    if isinstance(_last, _ast.Expr):
        _value = eval(
            compile(_ast.Expression(_last.value), "your code", "eval"), globals()
        )
        if _value is not None:
            print(repr(_value))
    elif _last is not None:
        exec(compile(_ast.Module([_last], []), "your code", "exec"), globals())
except BaseException as _exc:
    # Drop the harness's own exec frame — the student's first line should be
    # the first line of their traceback.
    _tb = _exc.__traceback__.tb_next if _exc.__traceback__ else None
    __run_error__ = "".join(_traceback.format_exception(type(_exc), _exc, _tb))
__run_error__
`

const PLOT_THEME = `
import matplotlib as _mpl
_mpl.rcParams.update({
    "figure.facecolor": "#1b1f27",
    "axes.facecolor": "#1b1f27",
    "savefig.facecolor": "#1b1f27",
    "text.color": "#d1d5db",
    "axes.labelcolor": "#d1d5db",
    "axes.titlecolor": "#ffffff",
    "xtick.color": "#9ca3af",
    "ytick.color": "#9ca3af",
    "axes.edgecolor": "#3f4756",
    "grid.color": "#2a2f3a",
    "figure.figsize": (7.0, 4.0),
    "font.size": 11,
})
`

/**
 * Render any matplotlib figures the snippet left open as base64 PNGs.
 *
 * Pyodide has no screen, so matplotlib runs on the Agg backend and `plt.show()`
 * is a no-op — the figures simply stay open. We save each one, hand it back to
 * React as a data URL, then close them so the next run starts clean. The
 * facecolor matches the slide panel so a plot sits on the deck rather than
 * punching a white rectangle through it.
 */
async function collectFigures(pyodide: PyodideInterface): Promise<string[]> {
  try {
    const figs = await pyodide.runPythonAsync(`
import sys as _sys
_figures = []
if "matplotlib.pyplot" in _sys.modules:
    import base64 as _b64, io as _io
    import matplotlib.pyplot as _plt
    for _num in _plt.get_fignums():
        _fig = _plt.figure(_num)
        if not _fig.get_axes():
            continue
        _buf = _io.BytesIO()
        _fig.savefig(_buf, format="png", dpi=110, bbox_inches="tight",
                     facecolor="#1b1f27", edgecolor="none")
        _figures.append(_b64.b64encode(_buf.getvalue()).decode())
    _plt.close("all")
_figures
`)
    return (figs?.toJs?.() ?? []) as string[]
  } catch {
    /* Figure capture must never turn a working snippet into a failed run. */
    return []
  }
}

/**
 * `enabled` gates the CDN download only — the provider itself must always be
 * rendered, or React sees a different element type at that position and
 * unmounts the whole subtree (which used to reset the slide deck to slide 1
 * the moment the first Python slide appeared).
 */
export const PyodideProvider: React.FC<{ children: React.ReactNode; enabled?: boolean }> = ({
  children,
  enabled = true,
}) => {
  const [pyodide, setPyodide] = useState<PyodideInterface | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [browserSupport, setBrowserSupport] = useState<PyodideSupport>({ supported: false, warnings: [], fallbackMessage: '' })
  const outputBuffer = useRef<string[]>([])
  const initializationAttempted = useRef(false)
  const loadedDatasets = useRef<Set<string>>(new Set())

  // Check browser support on mount (client-side only)
  useEffect(() => {
    // Ensure we're running in browser
    if (typeof window === 'undefined') return
    if (!enabled) return

    const support = checkPyodideSupport()
    setBrowserSupport(support)

    if (support.supported && !initializationAttempted.current) {
      initializationAttempted.current = true
      initPyodide()
    }
  }, [enabled])

  const loadPyodideScript = useCallback((): Promise<void> => {
    return new Promise((resolve, reject) => {
      // Check if Pyodide script is already loaded
      if (typeof window.loadPyodide !== 'undefined') {
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
      script.src = `${PYODIDE_CDN}pyodide.js`
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
        indexURL: PYODIDE_CDN,
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
        import os

        # There is no display in a browser tab: matplotlib must render to a
        # buffer. Set before any import of pyplot, or the backend sticks.
        os.environ["MPLBACKEND"] = "agg"

        # plt.show() is the line students must write for Colab, and on Agg it
        # warns that the canvas is non-interactive. The figure is captured and
        # displayed regardless, so the warning is noise — and it would surface
        # in the red error panel.
        import warnings
        warnings.filterwarnings("ignore", message="FigureCanvasAgg is non-interactive")

        # pandas' own plotting calls trip matplotlib 3.10 deprecations that the
        # student neither wrote nor can fix. Library-internal noise, hidden.
        warnings.filterwarnings("ignore", category=DeprecationWarning, module="matplotlib")
        warnings.filterwarnings("ignore", message=".*deprecated in Matplotlib.*")
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

  /**
   * Copy any course file the snippet names into Pyodide's virtual FS.
   * Fetched once per session; `FS.analyzePath` is not exposed on the typed
   * surface, so a module-level Set tracks what has already landed.
   */
  const ensureDatasets = useCallback(async (code: string) => {
    if (!pyodide) return
    for (const [filename, url] of Object.entries(COURSE_FILES)) {
      if (loadedDatasets.current.has(filename)) continue
      if (!mentionTokens(filename).some((t) => code.includes(t))) continue
      const res = await fetch(url)
      if (!res.ok) throw new Error(`Could not load ${filename} (${res.status})`)
      pyodide.FS.writeFile(filename, await res.text())
      loadedDatasets.current.add(filename)
    }
  }, [pyodide])

  const runCode = useCallback(async (code: string): Promise<RunResult> => {
    if (!pyodide) {
      return { output: '', error: 'Pyodide not loaded' }
    }

    try {
      /* Pull in whatever the snippet imports — pandas, numpy, matplotlib —
         before it runs. Each wheel downloads once and is then cached by the
         browser, so only the first pandas slide of a lecture pays for it. */
      await pyodide.loadPackagesFromImports(code)
      await ensureDatasets(code)

      /* Clear only now: Pyodide narrates its wheel downloads ("Loading pandas,
         numpy…") through the same stdout hook, and that chatter is plumbing,
         not the snippet's output. */
      outputBuffer.current = []

      if (code.includes('matplotlib') || code.includes('seaborn') || code.includes('.plot')) {
        await pyodide.runPythonAsync(PLOT_THEME)
      }

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
      pyodide.globals.set('__user_code__', code)
      const pythonError = (await pyodide.runPythonAsync(RUN_USER_CODE)) as string
      
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

      const images = await collectFigures(pyodide)

      // Combine outputs
      let output = ''
      if (stdout) output += stdout
      if (outputBuffer.current.length > 0) {
        output += outputBuffer.current.join('')
      }

      /* A snippet whose whole point is a figure has no stdout — don't label
         that "(no output)" underneath a perfectly good plot, nor above a
         traceback that already explains why nothing was printed. */
      const placeholder = images.length > 0 || pythonError ? '' : '(no output)'

      return {
        output: output || placeholder,
        error: pythonError || stderr || undefined,
        images: images.length > 0 ? images : undefined,
      }
      
    } catch (err) {
      // Restore stdout/stderr on error
      try {
        await pyodide.runPythonAsync(`
          sys.stdout = old_stdout
          sys.stderr = old_stderr
        `)
      } catch {}
      
      /* Python-level failures are caught inside Python now; reaching here
         means the harness itself broke. */
      return {
        output: outputBuffer.current.join('') || '',
        error: (err as Error).message || String(err),
      }
    }
  }, [pyodide, ensureDatasets])

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
    'sys', 'io', 'redirect_stdout', 'redirect_stderr', 'StringIO',
    'old_stdout', 'old_stderr'
}

# Remove user-defined variables
for var_name in list(current_vars):
    if var_name not in keep_vars and not var_name.startswith('_'):
        try:
            del globals()[var_name]
        except:
            pass

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