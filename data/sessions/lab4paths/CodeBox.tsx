/** A short, non-runnable code sample. These slides teach file handling, so the
 *  code is read and typed in VS Code — not executed in the browser. */
export function CodeBox({
  children,
  label,
  color = 'blue',
}: {
  children: string
  label?: string
  color?: 'blue' | 'green' | 'yellow' | 'red'
}) {
  const accent = {
    blue: 'border-bio-blue/30 text-bio-blue',
    green: 'border-bio-green/30 text-bio-green',
    yellow: 'border-bio-yellow/30 text-bio-yellow',
    red: 'border-red-500/30 text-red-400',
  }[color]

  return (
    <div className={`rounded-md border bg-bio-dark/60 overflow-hidden ${accent.split(' ')[0]}`}>
      {label && (
        <div className={`px-3 md:px-4 py-1.5 border-b border-white/10 bg-bio-dark/60
                         text-[10px] md:text-xs xl:text-sm font-semibold uppercase tracking-widest ${accent.split(' ')[1]}`}>
          {label}
        </div>
      )}
      <pre className="px-3 md:px-4 py-2.5 md:py-3.5 font-mono text-gray-300 overflow-x-auto
                      text-[11px] md:text-sm xl:text-base leading-relaxed">
        {children}
      </pre>
    </div>
  )
}
