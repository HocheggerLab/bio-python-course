'use client'

import { useState } from 'react'
import { usePlatform, type Platform } from './usePlatform'

/* ────────────────────────────────────────────────────────────
   A NON-interactive, copy-along terminal panel.
   Unlike <PracticeTerminal>, nothing runs here — it shows the exact
   command to type and the output you should expect, so students can
   mirror it in their OWN terminal. A shared Mac/Windows toggle swaps
   the commands per-OS across the whole deck.
   ──────────────────────────────────────────────────────────── */

export type TermLine =
  | { cmd: string } //         a command you type (copyable)
  | { out: string } //         output the machine prints back
  | { comment: string } //     a muted annotation / prompt (>>> etc.)

export interface TerminalBlockProps {
  /** the session as seen on macOS/Linux */
  mac: TermLine[]
  /** the session on Windows PowerShell — falls back to `mac` if omitted */
  windows?: TermLine[]
  /** small label in the title bar, e.g. "Terminal" or "Python" */
  label?: string
  /** show the Mac/Windows toggle (default true) */
  showToggle?: boolean
}

const macPrompt = 'you@mac ~ %'
const winPrompt = 'PS C:\\Users\\you>'

export default function TerminalBlock({
  mac,
  windows,
  label = 'Terminal',
  showToggle = true,
}: TerminalBlockProps) {
  const [platform, setPlatform] = usePlatform()
  const lines = platform === 'windows' ? (windows ?? mac) : mac
  const prompt = platform === 'windows' ? winPrompt : macPrompt
  const promptTone = platform === 'windows' ? 'text-bio-blue' : 'text-bio-green'

  const toggleBtn = (p: Platform) =>
    `rounded-full px-2.5 py-1 text-[11px] md:text-xs font-semibold border transition-colors ${
      platform === p
        ? 'border-bio-blue/40 bg-bio-blue/20 text-bio-blue'
        : 'border-transparent text-gray-400 hover:text-gray-200'
    }`

  return (
    <div className="flex flex-col rounded-xl border border-code-border bg-code-bg overflow-hidden font-mono">
      {/* header */}
      <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-code-border bg-bio-darkest/70">
        <div className="flex items-center gap-2">
          <span className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </span>
          <span className="text-[11px] md:text-xs text-gray-500">{label}</span>
        </div>
        {showToggle && (
          <div className="flex items-center gap-1.5">
            <button type="button" onClick={() => setPlatform('mac')} className={toggleBtn('mac')}>
              🍎 macOS
            </button>
            <button type="button" onClick={() => setPlatform('windows')} className={toggleBtn('windows')}>
              ⊞ Windows
            </button>
          </div>
        )}
      </div>

      {/* body */}
      <div className="p-3 text-xs md:text-sm leading-relaxed overflow-x-auto">
        {lines.map((line, i) => {
          if ('cmd' in line) {
            return <CommandRow key={i} prompt={prompt} promptTone={promptTone} text={line.cmd} />
          }
          if ('comment' in line) {
            return (
              <div key={i} className="text-gray-500 whitespace-pre-wrap">
                {line.comment}
              </div>
            )
          }
          return (
            <div key={i} className="text-gray-300 whitespace-pre-wrap">
              {line.out}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function CommandRow({
  prompt,
  promptTone,
  text,
}: {
  prompt: string
  promptTone: string
  text: string
}) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1400)
    } catch {
      /* clipboard blocked — no-op */
    }
  }

  return (
    <div className="group flex items-start gap-2 whitespace-pre-wrap break-words">
      <span className={`${promptTone} select-none shrink-0`}>{prompt}</span>
      <span className="text-white flex-1 min-w-0">{text}</span>
      <button
        type="button"
        onClick={copy}
        aria-label="copy command"
        title="copy"
        className={`shrink-0 rounded-md px-2 py-0.5 text-[10px] md:text-[11px] font-semibold border transition-colors ${
          copied
            ? 'border-bio-green/40 bg-bio-green/20 text-bio-green'
            : 'border-white/10 text-gray-400 hover:text-gray-200 hover:border-white/20 opacity-0 group-hover:opacity-100 focus:opacity-100'
        }`}
      >
        {copied ? '✓ copied' : 'copy'}
      </button>
    </div>
  )
}
