interface StaticCodeDisplayProps {
  code: string
  output?: string
  error?: string
  title?: string
  description?: string
  showBrowserWarning?: boolean
  browserMessage?: string
}

export default function StaticCodeDisplay({
  code,
  output,
  error,
  title = "Python Code",
  description,
  showBrowserWarning = true,
  browserMessage = "Interactive Python requires a modern browser. Showing static example."
}: StaticCodeDisplayProps) {
  return (
    <div className="bg-bio-card border border-bio-blue/20 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-bio-dark/50">
        <span className="text-sm font-semibold text-bio-blue">{title}</span>
        <span className="text-xs text-gray-500">Static Example</span>
      </div>

      {/* Description */}
      {description && (
        <div className="px-4 py-2 bg-bio-yellow/10 border-b border-bio-yellow/20">
          <p className="text-sm text-gray-300">{description}</p>
        </div>
      )}

      {/* Code */}
      <div className="p-4 border-b border-bio-blue/20">
        <pre className="bg-bio-dark/50 rounded p-3 text-sm text-gray-300 font-mono overflow-x-auto whitespace-pre-wrap">
          {code}
        </pre>
      </div>

      {/* Output */}
      {(output || error) && (
        <div className="p-4 border-b border-bio-blue/20">
          <h3 className="text-sm font-semibold text-gray-400 mb-2">Expected Output</h3>
          
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

      {/* Browser Warning */}
      {showBrowserWarning && (
        <div className="px-4 py-3 bg-yellow-900/20 border-t border-yellow-500/20">
          <div className="flex items-start space-x-2">
            <div className="text-yellow-400 text-lg">⚠️</div>
            <div>
              <p className="text-sm text-yellow-200 font-medium">
                Interactive Python Not Available
              </p>
              <p className="text-xs text-yellow-300/80 mt-1">
                {browserMessage}
              </p>
              <p className="text-xs text-yellow-300/60 mt-2">
                For full interactive experience, use: Chrome 90+, Firefox 89+, or Safari 15+
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}