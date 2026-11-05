'use client'

import { useState } from 'react'
import { usePlatform } from '@/components/terminal/usePlatform'
import { LAB5_ZIP_URL } from './download'

/* The seven setup steps with the *full* command on each card. Click a command
   and it is on the clipboard, with a pop-up saying so. A step that needs
   several commands is one line joined with `;`, which zsh and PowerShell both
   accept (PowerShell 5.1 has no `&&`). Windows differs only in curl.exe. */

interface Step {
  title: string
  mac?: string
  windows?: string
  /** shown instead of a command for the one step done by clicking */
  action?: string
  check: string
}

const steps: Step[] = [
  { title: 'Check uv', mac: 'uv --version', check: 'a version number' },
  { title: 'Update uv', mac: 'uv self update', check: 'success' },
  { title: 'Install uv-start', mac: 'uv tool install uv-start', check: 'Installed 1 executable: uv-start' },
  { title: 'Make the project', mac: 'cd ~; uv-start lab5-neurons --data', check: '… copied successfully.' },
  {
    title: 'Get the notebooks',
    mac: `cd lab5-neurons; curl -O ${LAB5_ZIP_URL}; tar -xf lab5.zip; ls`,
    windows: `cd lab5-neurons; curl.exe -O ${LAB5_ZIP_URL}; tar -xf lab5.zip; ls`,
    check: 'three notebooks + a data folder',
  },
  { title: 'Open in VS Code', mac: 'code .', check: 'trust: Yes · extensions: Install' },
  {
    title: 'Kernel → .venv, run cell 1',
    action: '01_numpy_small_data.ipynb → Select Kernel → .venv → Shift+Enter',
    check: 'prints frame: [0 1 2 …',
  },
]

export default function StepByStepList() {
  const [platform, setPlatform] = usePlatform()
  const [copied, setCopied] = useState<number | null>(null)

  const copy = async (i: number, text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(i)
      setTimeout(() => setCopied((c) => (c === i ? null : c)), 1800)
    } catch {
      /* clipboard blocked — the command is still there to select by hand */
    }
  }

  return (
    <div className="max-w-5xl mx-auto w-full mt-2 md:mt-3">
      <div className="flex justify-center gap-2 mb-2">
        {(['mac', 'windows'] as const).map((p) => (
          <button
            key={p}
            onClick={() => setPlatform(p)}
            className={`px-3 py-1 rounded-full text-xs md:text-sm font-semibold transition-colors ${
              platform === p ? 'bg-bio-blue text-black' : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            {p === 'mac' ? 'Mac' : 'Windows'}
          </button>
        ))}
      </div>

      <ol className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-2.5">
        {steps.map((s, i) => {
          const cmd = platform === 'windows' ? (s.windows ?? s.mac) : s.mac
          const wide = (cmd?.length ?? 0) > 40
          return (
            <li
              key={s.title}
              className={`relative flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 md:px-4 md:py-2.5 ${
                wide ? 'md:col-span-2' : ''
              }`}
            >
              <span className="inline-flex items-center justify-center rounded-full bg-bio-blue/20 text-bio-blue font-bold w-7 h-7 md:w-8 md:h-8 shrink-0 text-sm">
                {i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-white font-semibold text-sm md:text-base xl:text-lg leading-tight">{s.title}</p>
                {cmd ? (
                  <button
                    onClick={() => copy(i, cmd)}
                    title="Click to copy"
                    className="group mt-1 w-full text-left rounded-md bg-black/40 border border-white/10 hover:border-bio-yellow/50 px-2 py-1 flex items-start gap-2"
                  >
                    {/* each command is one unbreakable chunk, so a line only
                        wraps between commands, never inside `tar -xf` */}
                    <code className="flex-1 font-mono text-bio-yellow text-xs md:text-sm xl:text-base">
                      {cmd.split('; ').map((part, j, all) => (
                        <span key={j} className="inline-block whitespace-nowrap mr-2 max-w-full overflow-x-auto align-top">
                          {part}
                          {j < all.length - 1 ? ';' : ''}
                        </span>
                      ))}
                    </code>
                    <span className="shrink-0 text-[10px] md:text-xs text-gray-400 group-hover:text-bio-yellow mt-0.5">
                      📋 copy
                    </span>
                  </button>
                ) : (
                  <p className="mt-1 text-gray-200 text-xs md:text-sm xl:text-base">{s.action}</p>
                )}
                <p className="text-gray-400 text-xs md:text-sm mt-0.5">✅ {s.check}</p>
              </div>
              {copied === i && (
                <div className="absolute -top-3 right-3 z-10 rounded-md bg-bio-green text-black text-xs md:text-sm font-semibold px-2.5 py-1 shadow-lg">
                  Copied ✓ — paste it in your terminal
                </div>
              )}
            </li>
          )
        })}
      </ol>
    </div>
  )
}
