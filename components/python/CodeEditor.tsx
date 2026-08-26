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