'use client'

import React from 'react'
import { Highlight } from 'prism-react-renderer'
import { bioTheme } from './bioTheme'

interface SyntaxHighlighterProps {
  code: string
  language?: string
  showLineNumbers?: boolean
  className?: string
}

export default function SyntaxHighlighter({ 
  code, 
  language = 'python',
  showLineNumbers = false,
  className = ''
}: SyntaxHighlighterProps) {
  return (
    <Highlight
      theme={bioTheme}
      code={code.trim()}
      language={language}
    >
      {({ className: highlightClass, style, tokens, getLineProps, getTokenProps }) => (
        <pre 
          className={`${highlightClass} ${className} overflow-x-auto rounded-lg p-4 text-sm`}
          style={{
            ...style,
            backgroundColor: 'rgba(26, 26, 46, 0.5)',
            margin: 0
          }}
        >
          <code>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {showLineNumbers && (
                  <span className="inline-block w-8 text-gray-500 select-none">
                    {i + 1}
                  </span>
                )}
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  )
}