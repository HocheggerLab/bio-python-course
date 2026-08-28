export interface PyodideSupport {
  supported: boolean
  reason?: string
  warnings: string[]
  fallbackMessage: string
}

export const checkPyodideSupport = (): PyodideSupport => {
  const warnings: string[] = []
  
  // Check for WebAssembly support
  if (typeof WebAssembly === 'undefined') {
    return {
      supported: false,
      reason: 'WebAssembly not supported',
      warnings,
      fallbackMessage: 'Your browser doesn\'t support WebAssembly, which is required for Python execution. Please use a modern browser like Chrome 90+, Firefox 89+, or Safari 15+.'
    }
  }

  // Check for BigInt support (required by Pyodide)
  if (typeof BigInt === 'undefined') {
    return {
      supported: false,
      reason: 'BigInt not supported',
      warnings,
      fallbackMessage: 'Your browser doesn\'t support BigInt, which is required for Python execution. Please update to a newer version.'
    }
  }

  /* No SharedArrayBuffer check.
   *
   * The old check warned "some Python packages may not work" whenever
   * SharedArrayBuffer was missing. That was never true here: numpy, pandas,
   * matplotlib and scipy are single-threaded wasm builds and need nothing of
   * the sort. The only thing that would use it is Pyodide's interrupt buffer,
   * and this runner has no stop button.
   *
   * next.config.ts already sends COOP/COEP, so the site is normally
   * cross-origin isolated and SharedArrayBuffer is in fact present — checked
   * in Chrome, with the Pyodide CDN loading fine alongside it. But isolation
   * can be lost for reasons outside our control (a proxy stripping headers, a
   * browser or extension policy), and when that happens nothing about Python
   * execution actually breaks. So there is nothing worth warning about.
   */

  // Check if we're on mobile (warn about performance)
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  if (isMobile) {
    warnings.push('Mobile device detected - Python execution may be slower')
  }

  // Check available memory (if supported)
  if ('memory' in performance && (performance as any).memory) {
    const memory = (performance as any).memory
    const availableMB = memory.jsHeapSizeLimit / (1024 * 1024)
    if (availableMB < 100) {
      warnings.push('Low memory detected - Python environment may be limited')
    }
  }

  // Browser-specific checks
  const userAgent = navigator.userAgent
  
  // Safari-specific warnings
  if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
    const safariVersion = userAgent.match(/Version\/(\d+\.\d+)/)
    if (safariVersion) {
      const version = parseFloat(safariVersion[1])
      if (version < 15) {
        return {
          supported: false,
          reason: 'Safari version too old',
          warnings,
          fallbackMessage: 'Safari 15+ is required for Python execution. Please update your browser.'
        }
      } else if (version < 15.2) {
        warnings.push('Safari version may have compatibility issues - consider updating')
      }
    }
  }

  // Firefox-specific checks
  if (userAgent.includes('Firefox')) {
    const firefoxVersion = userAgent.match(/Firefox\/(\d+)/)
    if (firefoxVersion) {
      const version = parseInt(firefoxVersion[1])
      if (version < 89) {
        return {
          supported: false,
          reason: 'Firefox version too old',
          warnings,
          fallbackMessage: 'Firefox 89+ is required for Python execution. Please update your browser.'
        }
      }
    }
  }

  // Chrome-specific checks
  if (userAgent.includes('Chrome') && !userAgent.includes('Edge')) {
    const chromeVersion = userAgent.match(/Chrome\/(\d+)/)
    if (chromeVersion) {
      const version = parseInt(chromeVersion[1])
      if (version < 90) {
        return {
          supported: false,
          reason: 'Chrome version too old',
          warnings,
          fallbackMessage: 'Chrome 90+ is required for Python execution. Please update your browser.'
        }
      }
    }
  }

  // All checks passed
  return {
    supported: true,
    warnings,
    fallbackMessage: '' // Not used when supported
  }
}