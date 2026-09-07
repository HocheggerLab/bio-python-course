'use client'

import React, { useRef, useEffect } from 'react'
import { Highlight } from 'prism-react-renderer'
import { bioTheme } from '../syntax/bioTheme'

/** Both layers use Tailwind's `p-4`. Kept as a number so the textarea can add
 *  the gutter to it rather than restating a magic total. */
const EDITOR_PADDING = 16
/** Width of the line-number gutter, wide enough for three digits. */
const GUTTER_WIDTH = 44

interface CodeEditorProps {
  code: string
  onChange: (code: string) => void
  disabled?: boolean
  height?: string
  placeholder?: string
  language?: string
  showLineNumbers?: boolean
}

export default function CodeEditor({
  code,
  onChange,
  disabled = false,
  height = '200px',
  placeholder = '# Your Python code here...',
  language = 'python',
  showLineNumbers = false
}: CodeEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const highlightRef = useRef<HTMLPreElement>(null)

  const handleScroll = () => {
    if (textareaRef.current && highlightRef.current) {
      highlightRef.current.scrollTop = textareaRef.current.scrollTop
      highlightRef.current.scrollLeft = textareaRef.current.scrollLeft
    }
  }

  /** Tab belongs to the code, not to the focus ring.
   *
   *  Python is whitespace-significant, so a textarea that hands Tab straight
   *  to the browser is unusable for editing: the student loses the cell just
   *  as they try to indent a body. Insert four spaces instead, and let
   *  Shift+Tab take them back off. */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key !== 'Tab') return
    e.preventDefault()

    const el = e.currentTarget
    const { selectionStart, selectionEnd } = el
    const INDENT = '    '

    // Whole-line handling, so a multi-line selection indents as a block.
    const lineStart = code.lastIndexOf('\n', selectionStart - 1) + 1
    const lineEndRaw = code.indexOf('\n', selectionEnd)
    const lineEnd = lineEndRaw === -1 ? code.length : lineEndRaw
    const multiline = code.slice(selectionStart, selectionEnd).includes('\n')

    if (!multiline && !e.shiftKey) {
      const next =
        code.slice(0, selectionStart) + INDENT + code.slice(selectionEnd)
      onChange(next)
      const caret = selectionStart + INDENT.length
      requestAnimationFrame(() => el.setSelectionRange(caret, caret))
      return
    }

    const block = code.slice(lineStart, lineEnd)
    const lines = block.split('\n')
    let firstDelta = 0
    let totalDelta = 0

    const shifted = lines.map((line, i) => {
      if (e.shiftKey) {
        const removed = line.match(/^ {1,4}/)?.[0].length ?? 0
        if (i === 0) firstDelta = -removed
        totalDelta -= removed
        return line.slice(removed)
      }
      if (i === 0) firstDelta = INDENT.length
      totalDelta += INDENT.length
      return INDENT + line
    })

    onChange(code.slice(0, lineStart) + shifted.join('\n') + code.slice(lineEnd))
    const start = Math.max(lineStart, selectionStart + firstDelta)
    const end = Math.max(start, selectionEnd + totalDelta)
    requestAnimationFrame(() => el.setSelectionRange(start, end))
  }

  useEffect(() => {
    if (textareaRef.current && highlightRef.current) {
      highlightRef.current.scrollTop = textareaRef.current.scrollTop
      highlightRef.current.scrollLeft = textareaRef.current.scrollLeft
    }
  }, [code])

  return (
    <div className="relative w-full" style={{ height }}>
      <Highlight theme={bioTheme} code={code || placeholder} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            ref={highlightRef}
            className={`${className} absolute top-0 left-0 w-full h-full overflow-auto p-4 m-0 pointer-events-none`}
            style={{
              ...style,
              backgroundColor: 'transparent',
              fontSize: '14px',
              fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
              lineHeight: '1.5',
              whiteSpace: 'pre',
              overflowX: 'auto',
            }}
          >
            <code style={{ whiteSpace: 'pre' }}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })} style={{ whiteSpace: 'pre' }}>
                  {showLineNumbers && (
                    <span
                      className="inline-block text-gray-500 select-none"
                      style={{ width: GUTTER_WIDTH }}
                    >
                      {i + 1}
                    </span>
                  )}
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                  {line.length === 0 && '\n'}
                </div>
              ))}
            </code>
          </pre>
        )}
      </Highlight>
      
      <textarea
        ref={textareaRef}
        value={code}
        onChange={(e) => onChange(e.target.value)}
        onScroll={handleScroll}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        placeholder={placeholder}
        spellCheck={false}
        className="absolute top-0 left-0 w-full h-full bg-transparent text-transparent caret-gray-300 p-4 m-0 outline-none resize-none overflow-auto"
        style={{
          fontSize: '14px',
          fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
          lineHeight: '1.5',
          caretColor: '#d1d5db',
          /* The caret lives in this textarea while the glyphs live in the <pre>
             behind it, so the two must agree on where text starts to the pixel
             — otherwise clicking lands the cursor in the wrong column. The pre
             indents by its own p-4 plus the gutter; the textarea has no gutter,
             so it makes up the difference in padding. */
          paddingLeft: showLineNumbers ? `${EDITOR_PADDING + GUTTER_WIDTH}px` : `${EDITOR_PADDING}px`,
          whiteSpace: 'pre',
          wordWrap: 'normal',
          overflowX: 'auto',
        }}
      />
    </div>
  )
}