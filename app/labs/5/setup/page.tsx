import Link from 'next/link'
import TerminalBlock, { type TermLine } from '@/components/terminal/TerminalBlock'
import { LAB5_ZIP_PATH, LAB5_ZIP_URL } from '@/data/sessions/lab5projects/download'

export const metadata = {
  title: 'Lab 5 Setup — Step by Step',
}

/* One step = do this, check this, and the fix if the check fails.
   Students keep this page open on their own screen and tick through it at
   their own pace; the deck's first slide shows the same seven steps. */

interface Step {
  title: string
  intro: React.ReactNode
  mac?: TermLine[]
  windows?: TermLine[]
  check: React.ReactNode
  fixes?: React.ReactNode[]
}

const M = ({ children }: { children: React.ReactNode }) => (
  <code className="font-mono text-bio-yellow text-[0.92em]">{children}</code>
)

const steps: Step[] = [
  {
    title: 'Open a terminal and check uv',
    intro: (
      <>
        Mac: <b className="text-white">Terminal</b> (⌘ Space, type Terminal). Windows:{' '}
        <b className="text-white">PowerShell</b> (Start menu, type PowerShell). You installed uv in Lab 2.
      </>
    ),
    mac: [{ cmd: 'uv --version' }, { out: 'uv 0.13.7 (…)' }],
    check: <>A version number appears.</>,
    fixes: [
      <>
        <M>command not found</M> — close the terminal and open a new one. Still missing? Re-run the
        uv installer from <Link href="/labs/2" className="text-bio-yellow underline">Lab 2</Link>.
      </>,
    ],
  },
  {
    title: 'Bring uv up to date',
    intro: <>Newer uv, fewer surprises.</>,
    mac: [{ cmd: 'uv self update' }, { out: 'success: You’re already on version v0.13.7 of uv (the latest version).' }],
    check: <>It says <M>success</M> — either upgraded or already the latest.</>,
    fixes: [
      <>
        An error saying self-update is not available means uv was installed another way (Homebrew,
        winget). That is fine: skip this step.
      </>,
    ],
  },
  {
    title: 'Install uv-start — once per computer',
    intro: (
      <>
        uv-start is a tool for the whole computer, so it is installed once with{' '}
        <M>uv tool install</M>. Packages like numpy go into each project instead.
      </>
    ),
    mac: [
      { cmd: 'uv tool install uv-start' },
      { out: 'Installed 1 executable: uv-start' },
      { cmd: 'uv-start --help' },
      { out: 'Usage: uv-start [OPTIONS] [PROJECT_NAME]' },
    ],
    check: <><M>uv-start --help</M> prints the usage.</>,
    fixes: [
      <>
        <M>uv-start: command not found</M> — run <M>uv tool update-shell</M>, close the terminal,
        open a new one, try again.
      </>,
      <>
        <M>uv-start is already installed</M> — fine, you did this yesterday. Run{' '}
        <M>uv tool upgrade uv-start</M> to get the latest version.
      </>,
    ],
  },
  {
    title: 'Make the project',
    intro: (
      <>
        Go to your home folder first, so you know where the project ends up. This takes a minute: it
        downloads Python, numpy, pandas and matplotlib into the project.
      </>
    ),
    mac: [
      { cmd: 'cd ~' },
      { cmd: 'uv-start lab5-neurons --data' },
      { out: '…' },
      { out: 'Data project template files copied successfully.' },
    ],
    check: <>The last line says <M>Data project template files copied successfully.</M></>,
    fixes: [
      <>
        <M>Directory already exists</M> — you made it yesterday. Use it: carry on with step 5. Or
        start fresh with a new name, e.g. <M>uv-start lab5-neurons-2 --data</M>, and use that name
        from here on.
      </>,
    ],
  },
  {
    title: 'Get this week’s notebooks',
    intro: (
      <>
        Move into the project, download the notebooks and the two neuron recordings, and unpack them.
        On Windows it is <M>curl.exe</M>, with the <M>.exe</M>.
      </>
    ),
    mac: [
      { cmd: 'cd lab5-neurons' },
      { cmd: `curl -O ${LAB5_ZIP_URL}` },
      { cmd: 'tar -xf lab5.zip' },
      { cmd: 'ls' },
      { out: '01_numpy_small_data.ipynb  02_neuron_analysis_advanced.ipynb  02_neuron_analysis_basics.ipynb' },
      { out: 'data  lab5.zip  pyproject.toml  README.md  results  sample.ipynb  uv.lock' },
    ],
    windows: [
      { cmd: 'cd lab5-neurons' },
      { cmd: `curl.exe -O ${LAB5_ZIP_URL}` },
      { cmd: 'tar -xf lab5.zip' },
      { cmd: 'ls' },
      { out: '… 01_numpy_small_data.ipynb, 02_neuron_analysis_advanced.ipynb, 02_neuron_analysis_basics.ipynb, data …' },
    ],
    check: <>Three notebooks starting <M>01_</M> and <M>02_</M>, and a <M>data</M> folder.</>,
    fixes: [
      <>
        PowerShell: <M>parameter name &apos;O&apos;</M> — you typed <M>curl</M>; type{' '}
        <M>curl.exe</M>.
      </>,
      <>
        Still stuck? Download{' '}
        <a href={LAB5_ZIP_PATH} className="text-bio-yellow underline">lab5.zip</a> in the browser,
        unzip it, and move the three notebooks and the <M>data</M> folder into{' '}
        <M>lab5-neurons</M> (in your home folder).
      </>,
    ],
  },
  {
    title: 'Open the project in VS Code',
    intro: <>Open the <em>folder</em>, not a single file — that is how VS Code finds the project’s Python.</>,
    mac: [{ cmd: 'code .' }],
    check: (
      <>
        VS Code opens with the notebooks in the Explorer on the left. Answer{' '}
        <b className="text-white">Yes</b> to “Do you trust the authors?” and{' '}
        <b className="text-white">Install</b> to the recommended extensions (Python, Jupyter, Ruff).
      </>
    ),
    fixes: [
      <>
        <M>code: command not found</M> — open VS Code yourself: File → Open Folder →{' '}
        <M>lab5-neurons</M> in your home folder.
      </>,
      <>
        Missed the extensions pop-up? Extensions (⇧⌘X / Ctrl+Shift+X) → search{' '}
        <b className="text-white">Jupyter</b> → Install.
      </>,
    ],
  },
  {
    title: 'Pick the kernel and run the first cell',
    intro: (
      <>
        Open <M>01_numpy_small_data.ipynb</M>. Top right: <b className="text-white">Select Kernel</b>{' '}
        → <b className="text-white">Python Environments</b> → <M>.venv</M>. Click into the first code
        cell and press <b className="text-white">Shift+Enter</b>.
      </>
    ),
    check: (
      <>
        The cell prints <M>frame: [ 0  1  2 …</M> and the top right of the notebook shows{' '}
        <M>.venv</M>. You are running locally. 🎉
      </>
    ),
    fixes: [
      <>
        It asks to install ipykernel, or says <M>No module named &apos;numpy&apos;</M> — wrong kernel.
        Select Kernel again and pick <M>.venv</M>. Never <M>pip install</M>.
      </>,
      <>
        No <M>.venv</M> in the list — check you opened the folder (step 6). Then, in VS Code’s
        terminal, run <M>uv sync</M> and Developer: Reload Window (⇧⌘P / Ctrl+Shift+P).
      </>,
    ],
  },
]

export default function Lab5SetupPage() {
  return (
    <div className="min-h-screen bg-bio-darkest pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <Link
          href="/labs/5"
          className="inline-flex items-center mb-8 text-bio-blue hover:text-bio-yellow transition-colors text-sm md:text-base"
        >
          ← Back to Lab 5
        </Link>

        <p className="text-bio-blue/70 text-sm md:text-base font-semibold uppercase tracking-widest mb-2">
          Lab 5 · Setup
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Get it running, step by step</h1>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Seven steps from an empty terminal to a notebook running on your own laptop. Do them in
          order, and don’t skip a ✅ check: if it doesn’t match, use the fix underneath before you
          move on. Pick <b className="text-white">Mac</b> or <b className="text-white">Windows</b> on
          any terminal box; the whole page follows.
        </p>
        <div className="mt-4 rounded-lg border-l-4 border-bio-yellow/40 bg-bio-yellow/10 px-4 py-3 text-sm md:text-base text-gray-200">
          Green sticky up at every ✅. Red sticky if a check fails and the fix doesn’t help — that is
          what we are here for.
        </div>

        <ol className="mt-10 flex flex-col gap-10 md:gap-12">
          {steps.map((s, i) => (
            <li key={s.title} id={`step-${i + 1}`} className="scroll-mt-28">
              <h2 className="flex items-center gap-3 text-xl md:text-2xl font-bold text-white mb-3">
                <span className="inline-flex items-center justify-center rounded-full bg-bio-blue/20 text-bio-blue w-9 h-9 md:w-10 md:h-10 text-base md:text-lg shrink-0">
                  {i + 1}
                </span>
                {s.title}
              </h2>
              <div className="flex flex-col gap-3 text-gray-300 text-base md:text-lg leading-relaxed">
                <p>{s.intro}</p>
                {s.mac && <TerminalBlock mac={s.mac} windows={s.windows} />}
                <div className="rounded-lg border-l-4 border-bio-green/40 bg-bio-green/10 px-4 py-3 text-sm md:text-base">
                  ✅ {s.check}
                </div>
                {s.fixes && (
                  <div className="rounded-lg border-l-4 border-red-500/40 bg-red-500/10 px-4 py-3 text-sm md:text-base">
                    <p className="font-semibold text-white mb-1">Didn’t work?</p>
                    <ul className="flex flex-col gap-1.5 list-disc pl-5">
                      {s.fixes.map((f, j) => (
                        <li key={j}>{f}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 rounded-2xl border-2 border-bio-blue/30 bg-bio-blue/10 p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2">You’re set up — now the lab</h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Work through <M>01_numpy_small_data.ipynb</M> top to bottom, then choose{' '}
            <M>02_neuron_analysis_basics.ipynb</M> or <M>02_neuron_analysis_advanced.ipynb</M> — pick{' '}
            <M>.venv</M> as the kernel in each new notebook. Want the why behind each step? The{' '}
            <Link href="/labs/5/1" className="text-bio-yellow underline">session slides</Link> explain it.
          </p>
        </div>
      </div>
    </div>
  )
}
