import React from 'react'

/**
 * The poll explanations cross the wire from /api/poll/results as plain
 * strings, so their small markup is spelled rather than nested:
 * `code`, **bold**, *italic*.
 */
export function renderProse(text: string): React.ReactNode {
  return text.split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, i) => {
    if (part.startsWith('`') && part.endsWith('`'))
      return <span key={i} className="font-mono">{part.slice(1, -1)}</span>
    if (part.startsWith('**') && part.endsWith('**'))
      return <strong key={i}>{part.slice(2, -2)}</strong>
    if (part.startsWith('*') && part.endsWith('*'))
      return <em key={i}>{part.slice(1, -1)}</em>
    return part
  })
}
