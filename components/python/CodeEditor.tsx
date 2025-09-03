'use client'

import React, { useRef, useEffect } from 'react'
import { Highlight } from 'prism-react-renderer'
import { bioTheme } from '../syntax/bioTheme'

interface CodeEditorProps {
  code: string
  onChange: (code: string) => void
  disabled?: boolean
  height?: string
  placeholder?: string
  language?: string
}

export default function CodeEditor({
  code,
  onChange,
  disabled = false,
  height = '200px',
  placeholder = '# Your Python code here...',
  language = 'python'
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
            }}
          >
            <code>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
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
        }}
      />
    </div>
  )
}