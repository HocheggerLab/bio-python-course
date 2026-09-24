/**
 * A designed, annotated Python traceback — used across the error slides so the
 * text is exact and readable regardless of the live interpreter's formatting.
 *
 * `frames` are the dim "Traceback / File … / code" lines (shown verbatim, monospace).
 * `error`  is the final line — the bit that actually says what went wrong (red, bold).
 */
export function TracebackBox({
  frames,
  error,
  className = '',
}: {
  frames: string[]
  error: string
  className?: string
}) {
  return (
    <div
      className={`rounded-xl border-l-4 border-red-500/60 bg-code-bg p-3 md:p-4 font-mono text-[10px] md:text-sm xl:text-base overflow-x-auto ${className}`}
    >
      {frames.map((line, i) => (
        <div key={i} className="text-gray-500 whitespace-pre leading-relaxed">
          {line}
        </div>
      ))}
      <div className="text-red-400 font-bold whitespace-pre-wrap leading-relaxed mt-1">
        {error}
      </div>
    </div>
  )
}
