'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

/* ────────────────────────────────────────────────────────────
   A tiny, safe, in-browser terminal sandbox.
   Supports exactly the commands we teach: pwd · ls · cd · mkdir · clear · help.
   Backed by a fake in-memory filesystem — nothing here touches the real machine.
   A Mac/Windows toggle re-renders the prompt + path style so students SEE that
   the command is the same and only the path differs.
   ──────────────────────────────────────────────────────────── */

type FsNode = { [name: string]: FsNode | null } // object = folder, null = file

export interface MissionStep {
  instruction: string
  /** command that satisfies this step, e.g. "ls" or "mkdir bio-python" */
  expect: string
  /** if true, only the first word must match (args ignored) */
  matchPrefix?: boolean
  hint?: string
  success?: string
}

type Platform = 'mac' | 'windows'

type Line =
  | { kind: 'command'; prompt: string; text: string; platform: Platform }
  | { kind: 'text'; text: string; tone?: 'normal' | 'error' | 'muted' | 'success' }
  | { kind: 'ls'; dirs: string[]; files: string[] }

const DEFAULT_SEED: FsNode = {
  Desktop: {},
  Downloads: { 'sequences.fasta': null, 'reads.fastq.gz': null },
  Documents: { 'lab-notes.txt': null },
}

/* ── fake-FS helpers ─────────────────────────────────────── */

function getDir(fs: FsNode, segs: string[]): FsNode | null {
  let cur: FsNode = fs
  for (const s of segs) {
    const next = cur[s]
    if (next === undefined || next === null) return null
    cur = next
  }
  return cur
}

function buildPrompt(platform: Platform, cwd: string[]): string {
  if (platform === 'windows') {
    return `PS ${['C:\\Users\\you', ...cwd].join('\\')}> `
  }
  const path = cwd.length ? `~/${cwd.join('/')}` : '~'
  return `you@mac ${path} % `
}

function absolutePath(platform: Platform, cwd: string[]): string {
  if (platform === 'windows') return ['C:\\Users\\you', ...cwd].join('\\')
  return ['/Users/you', ...cwd].join('/')
}

/* ── platform-flavoured messages ─────────────────────────── */

const unknownCmd = (p: Platform, cmd: string): Line => ({
  kind: 'text',
  tone: 'error',
  text:
    p === 'windows'
      ? `${cmd} : The term '${cmd}' is not recognized. Type 'help' to see commands.`
      : `zsh: command not found: ${cmd} — type 'help' to see commands.`,
})

const cdMissing = (p: Platform, name: string): Line => ({
  kind: 'text',
  tone: 'error',
  text:
    p === 'windows'
      ? `cd : Cannot find path '${name}' — it doesn't exist here.`
      : `cd: no such file or directory: ${name}`,
})

const cdNotDir = (p: Platform, name: string): Line => ({
  kind: 'text',
  tone: 'error',
  text:
    p === 'windows'
      ? `cd : '${name}' is a file, not a folder.`
      : `cd: not a directory: ${name}`,
})

const mkdirExists = (p: Platform, name: string): Line => ({
  kind: 'text',
  tone: 'error',
  text:
    p === 'windows'
      ? `mkdir : A folder named '${name}' already exists.`
      : `mkdir: ${name}: File exists`,
})

const helpLines = (): Line[] => [
  { kind: 'text', tone: 'muted', text: 'Commands you can use here:' },
  { kind: 'text', text: '  pwd            where am I?  (print working directory)' },
  { kind: 'text', text: '  ls             list what\u2019s in this folder' },
  { kind: 'text', text: '  cd <folder>    go into a folder      (cd ..  goes back)' },
  { kind: 'text', text: '  mkdir <name>   make a new folder' },
  { kind: 'text', text: '  clear          clear the screen' },
  { kind: 'text', tone: 'muted', text: 'Nothing here can harm your computer — experiment freely.' },
]

/* ── component ───────────────────────────────────────────── */

interface Props {
  mission?: MissionStep[]
  seed?: FsNode
  defaultPlatform?: Platform
  showPlatformToggle?: boolean
  height?: string
}

export default function PracticeTerminal({
  mission,
  seed = DEFAULT_SEED,
  defaultPlatform = 'mac',
  showPlatformToggle = true,
  height = '460px',
}: Props) {
  const introLine = useMemo<Line>(
    () => ({
      kind: 'text',
      tone: 'muted',
      text: "practice sandbox — type 'help' to see what you can do. You can't break anything here.",
    }),
    [],
  )

  const [platform, setPlatform] = useState<Platform>(defaultPlatform)
  const [fs, setFs] = useState<FsNode>(() => structuredClone(seed))
  const [cwd, setCwd] = useState<string[]>([])
  const [lines, setLines] = useState<Line[]>([introLine])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [histIdx, setHistIdx] = useState<number | null>(null)
  const [missionIndex, setMissionIndex] = useState(0)
  const [missionDone, setMissionDone] = useState(false)
  const [showHint, setShowHint] = useState(false)

  const bodyRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [lines])

  const promptTone = (p: Platform) => (p === 'windows' ? 'text-bio-blue' : 'text-bio-green')

  function reset() {
    setFs(structuredClone(seed))
    setCwd([])
    setLines([introLine])
    setInput('')
    setHistory([])
    setHistIdx(null)
    setMissionIndex(0)
    setMissionDone(false)
    setShowHint(false)
  }

  function run(raw: string) {
    const echoPrompt = buildPrompt(platform, cwd)
    const trimmed = raw.trim()

    if (trimmed) setHistory((h) => [...h, trimmed])
    setHistIdx(null)
    setInput('')

    if (trimmed === 'clear') {
      setLines([])
      return
    }

    const out: Line[] = [{ kind: 'command', prompt: echoPrompt, text: raw, platform }]
    let nextCwd = cwd
    let nextFs = fs

    if (trimmed) {
      const parts = trimmed.split(/\s+/)
      const cmd = parts[0]
      const arg = parts[1]

      switch (cmd) {
        case 'pwd':
          out.push({ kind: 'text', text: absolutePath(platform, cwd) })
          break
        case 'ls': {
          const node = getDir(fs, cwd)
          const names = node ? Object.keys(node) : []
          const dirs = names.filter((n) => node && node[n] !== null).sort()
          const files = names.filter((n) => node && node[n] === null).sort()
          if (names.length) out.push({ kind: 'ls', dirs, files })
          else out.push({ kind: 'text', tone: 'muted', text: '(this folder is empty)' })
          break
        }
        case 'cd': {
          if (!arg || arg === '~') nextCwd = []
          else if (arg === '.') nextCwd = cwd
          else if (arg === '..') nextCwd = cwd.slice(0, -1)
          else {
            const node = getDir(fs, cwd)
            const target = node ? node[arg] : undefined
            if (target === undefined) out.push(cdMissing(platform, arg))
            else if (target === null) out.push(cdNotDir(platform, arg))
            else nextCwd = [...cwd, arg]
          }
          break
        }
        case 'mkdir': {
          if (!arg)
            out.push({
              kind: 'text',
              tone: 'error',
              text: 'mkdir: missing folder name — try:  mkdir my-folder',
            })
          else {
            const node = getDir(fs, cwd)
            if (node && node[arg] !== undefined) out.push(mkdirExists(platform, arg))
            else {
              nextFs = structuredClone(fs)
              const dir = getDir(nextFs, cwd)
              if (dir) dir[arg] = {}
            }
          }
          break
        }
        case 'help':
          out.push(...helpLines())
          break
        default:
          out.push(unknownCmd(platform, cmd))
      }
    }

    setLines((prev) => [...prev, ...out])
    if (nextCwd !== cwd) setCwd(nextCwd)
    if (nextFs !== fs) setFs(nextFs)

    if (mission && !missionDone && trimmed) {
      const step = mission[missionIndex]
      const first = trimmed.split(/\s+/)[0]
      const ok = step.matchPrefix
        ? first === step.expect
        : trimmed.replace(/\s+/g, ' ') === step.expect.replace(/\s+/g, ' ')
      if (ok) {
        setLines((prev) => [
          ...prev,
          { kind: 'text', tone: 'success', text: '\u2713 ' + (step.success ?? 'Done.') },
        ])
        setShowHint(false)
        if (missionIndex + 1 >= mission.length) setMissionDone(true)
        else setMissionIndex((i) => i + 1)
      }
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      run(input)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (!history.length) return
      const idx = histIdx === null ? history.length - 1 : Math.max(0, histIdx - 1)
      setHistIdx(idx)
      setInput(history[idx])
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (histIdx === null) return
      const idx = histIdx + 1
      if (idx >= history.length) {
        setHistIdx(null)
        setInput('')
      } else {
        setHistIdx(idx)
        setInput(history[idx])
      }
    }
  }

  const toggleBtn = (p: Platform, label: string) =>
    `rounded-full px-2.5 py-1 text-[11px] md:text-xs font-semibold border transition-colors ${
      platform === p
        ? 'border-bio-blue/40 bg-bio-blue/20 text-bio-blue'
        : 'border-transparent text-gray-400 hover:text-gray-200'
    }`

  return (
    <div
      className="flex flex-col rounded-xl border border-code-border bg-code-bg overflow-hidden font-mono"
      style={{ height }}
    >
      {/* header */}
      <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-code-border bg-bio-darkest/70">
        <div className="flex items-center gap-2">
          <span className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </span>
          <span className="text-[11px] md:text-xs text-gray-500">practice terminal</span>
        </div>
        <div className="flex items-center gap-1.5">
          {showPlatformToggle && (
            <>
              <button type="button" onClick={() => setPlatform('mac')} className={toggleBtn('mac', 'mac')}>
                🍎 macOS
              </button>
              <button
                type="button"
                onClick={() => setPlatform('windows')}
                className={toggleBtn('windows', 'win')}
              >
                ⊞ Windows
              </button>
            </>
          )}
          <button
            type="button"
            onClick={reset}
            className="rounded-full px-2.5 py-1 text-[11px] md:text-xs text-gray-400 hover:text-gray-200 border border-transparent"
            title="reset the sandbox"
          >
            ↺ reset
          </button>
        </div>
      </div>

      {/* mission banner */}
      {mission && (
        <div className="px-3 py-2 border-b border-code-border bg-bio-darkest/50 text-xs md:text-sm">
          {missionDone ? (
            <span className="text-bio-green font-semibold">
              🎉 Mission complete — you made a folder and moved into it.
            </span>
          ) : (
            <>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-bio-yellow font-semibold">
                    Step {missionIndex + 1}/{mission.length}:
                  </span>{' '}
                  <span className="text-gray-200">{mission[missionIndex].instruction}</span>
                </div>
                {mission[missionIndex].hint && (
                  <button
                    type="button"
                    onClick={() => setShowHint((s) => !s)}
                    className="shrink-0 text-bio-blue hover:underline"
                  >
                    {showHint ? 'hide hint' : 'show hint'}
                  </button>
                )}
              </div>
              {showHint && mission[missionIndex].hint && (
                <div className="mt-1 text-gray-400">💡 {mission[missionIndex].hint}</div>
              )}
            </>
          )}
        </div>
      )}

      {/* body */}
      <div
        ref={bodyRef}
        onClick={() => inputRef.current?.focus()}
        className="flex-1 min-h-0 overflow-y-auto p-3 text-xs md:text-sm leading-relaxed cursor-text"
      >
        {lines.map((l, i) => {
          if (l.kind === 'command') {
            return (
              <div key={i} className="whitespace-pre-wrap break-all">
                <span className={promptTone(l.platform)}>{l.prompt}</span>
                <span className="text-white">{l.text}</span>
              </div>
            )
          }
          if (l.kind === 'ls') {
            return (
              <div key={i} className="flex flex-wrap gap-x-4 gap-y-0.5">
                {l.dirs.map((d) => (
                  <span key={d} className="text-bio-blue">
                    {d}/
                  </span>
                ))}
                {l.files.map((f) => (
                  <span key={f} className="text-gray-300">
                    {f}
                  </span>
                ))}
              </div>
            )
          }
          const tone =
            l.tone === 'error'
              ? 'text-red-400'
              : l.tone === 'muted'
                ? 'text-gray-500'
                : l.tone === 'success'
                  ? 'text-bio-green'
                  : 'text-gray-200'
          return (
            <div key={i} className={`whitespace-pre-wrap break-all ${tone}`}>
              {l.text}
            </div>
          )
        })}

        {/* live input row */}
        <div className="flex whitespace-pre-wrap break-all">
          <span className={promptTone(platform)}>{buildPrompt(platform, cwd)}</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            spellCheck={false}
            autoCapitalize="off"
            autoCorrect="off"
            autoComplete="off"
            aria-label="terminal input"
            className="flex-1 bg-transparent outline-none text-white caret-bio-blue min-w-0"
          />
        </div>
      </div>
    </div>
  )
}
