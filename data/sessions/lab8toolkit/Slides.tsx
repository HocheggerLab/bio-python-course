import Link from 'next/link'
import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import { CodeBox } from '@/data/sessions/lab5projects/CodeBox'
import { ReviewSlide, SessionPills } from './ReviewSlide'

/* Lab 8 tech session: no new tool. One slide per tool from Labs 1–7, in the
   order you meet them when you start a project, then all of them at once on
   the Lab 8 notebooks. The commands come from the linked sessions. */

const k = (s: string) => <span className="font-mono text-white">{s}</span>

const RAW = 'https://raw.githubusercontent.com/HocheggerLab/y3-bio-python/main/lab08'

/* ───── 0 · the map ───── */

const tools: { n: string; tool: string; job: string; lab: string; href: string }[] = [
  { n: '1', tool: 'The terminal', job: 'move around and run things by typing', lab: 'Lab 1', href: '/labs/1/5' },
  { n: '2', tool: 'uv and Python', job: 'install Python, run a .py file', lab: 'Lab 2', href: '/labs/2/4' },
  { n: '3', tool: 'VS Code', job: 'write and run code in one window', lab: 'Lab 3', href: '/labs/3/3' },
  { n: '4', tool: 'Projects and environments', job: 'one folder, its own packages', lab: 'Lab 5', href: '/labs/5/1' },
  { n: '5', tool: 'Notebooks and scripts', job: '.ipynb to explore, .py to run', lab: 'Lab 5', href: '/labs/5/1' },
  { n: '6', tool: 'VS Code, your way', job: 'settings, shortcuts, no ghost text', lab: 'Lab 6', href: '/labs/6/1' },
  { n: '7', tool: 'git and GitHub', job: 'a lab notebook for your code', lab: 'Lab 7', href: '/labs/7/1' },
]

export function SlideMap() {
  return (
    <>
      <SlideTitle>
        Your toolkit, <GradientText>from the top</GradientText>
      </SlideTitle>
      <p className="text-center text-gray-400 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        Seven tools over seven labs, in the order you use them when you start a project. Nothing
        new today: one slide each, then you use all seven at once. Click a tile to open the
        original session.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 mt-4 md:mt-6 max-w-5xl mx-auto">
        {tools.map((t) => (
          <Link
            key={t.n}
            href={t.href}
            className="grid grid-cols-[2rem_1fr_auto] gap-x-3 items-baseline rounded-lg border border-white/10 bg-white/[0.03] hover:bg-bio-blue/10 hover:border-bio-blue/40 px-4 py-2 transition-colors"
          >
            <span className="text-bio-blue font-bold text-base md:text-lg">{t.n}</span>
            <span>
              <span className="text-white font-semibold text-sm md:text-base xl:text-lg">{t.tool}</span>
              <span className="block text-gray-400 text-xs md:text-sm xl:text-base">{t.job}</span>
            </span>
            <span className="text-bio-blue/80 text-xs md:text-sm">{t.lab} →</span>
          </Link>
        ))}
      </div>
    </>
  )
}

/* ───── 1–6 · one tool per slide ───── */

export function SlideTerminal() {
  return (
    <ReviewSlide
      title={<>1 · The <GradientText>terminal</GradientText></>}
      intro={<>The same computer, driven by typing. Terminal on a Mac, PowerShell on Windows. Every other tool today starts here.</>}
      code={`pwd              # where am I?
ls               # what is here?
mkdir bio-python # make a folder
cd bio-python    # go into it
cd ..            # one folder up`}
      remember={[
        <>Most errors that say a file cannot be found mean you are in the wrong folder: {k('pwd')}, then {k('ls')}</>,
        <>Your {k('bio-python')} folder from Lab 1 is where every lab lives</>,
        <>Press Tab to complete a file or folder name; ↑ brings back the last command</>,
      ]}
      links={[
        { href: '/labs/1/5', label: 'Lab 1 · The Terminal' },
        { href: '/labs/1/resources', label: 'Terminal cheat sheets' },
      ]}
    />
  )
}

export function SlideUv() {
  return (
    <ReviewSlide
      title={<>2 · <GradientText>uv</GradientText> and Python</>}
      intro={<>One tool installs Python, runs your files and, later, manages your packages. If a command is not found after installing, close and reopen the terminal.</>}
      code={`uv python install 3.14
uv run python --version   # Python 3.14.x
uv run python             # the >>> prompt; exit() to leave
uv run translate_bee.py   # run a program`}
      remember={[
        <>The {k('>>>')} prompt saves nothing. Real work lives in a {k('.py')} file</>,
        <>{k('uv run')} picks the right Python for you, so you never type {k('python3')} or {k('py')}</>,
        <>{k('uv self update')} keeps uv itself up to date</>,
      ]}
      links={[{ href: '/labs/2/4', label: 'Lab 2 · Local Python & uv' }]}
    />
  )
}

export function SlideVsCode() {
  return (
    <ReviewSlide
      title={<>3 · <GradientText>VS Code</GradientText>, set up your way</>}
      intro={<>Write and run in one window. Lab 3 set it up; Lab 6 made it yours.</>}
      codeLabel="VS Code"
      code={`File → Open Folder        never a lone file
⌘⇧P / Ctrl+Shift+P        find any command
  → Python: Select Interpreter
⌘, / Ctrl+,               settings
Ctrl+\`                    open the terminal
⌥Z / Alt+Z                wrap long lines`}
      remember={[
        <>Always open the <em>folder</em>: the Explorer, the terminal and the interpreter all follow it</>,
        <>The Python extension must be the one by Microsoft</>,
        <>Run with ▶ (top right) or type {k('uv run file.py')} in the terminal: same result</>,
        <>Settings: {k('"files.autoSave": "afterDelay"')}, so a script always runs what you see; {k('"chat.disableAIFeatures": true')} switches off the ghost text</>,
      ]}
      links={[
        { href: '/labs/3/3', label: 'Lab 3 · Writing code in VS Code' },
        { href: '/labs/6/1', label: 'Lab 6 · Make VS Code yours' },
        { href: '/labs/3/resources', label: 'VS Code cheat sheet' },
      ]}
    />
  )
}

export function SlideProjects() {
  return (
    <ReviewSlide
      title={<>4 · Projects and <GradientText>virtual environments</GradientText></>}
      intro={<>Colab hid this from you: on your laptop, every package has to be installed. Each project gets its own, in its own folder.</>}
      code={`uv tool install uv-start      # once per laptop
uv-start lab08 --data         # a new project folder
cd lab08
uv add scipy                  # add a package
uv sync                       # rebuild .venv from the lock`}
      remember={[
        <>{k('pyproject.toml')} is the list of packages, {k('uv.lock')} the exact versions, {k('.venv/')} the packages themselves</>,
        <>{k('ModuleNotFoundError')} means the package is not in this project yet: {k('uv add')} it</>,
        <>Never {k('pip install')} in a uv project</>,
        <>{k('data/')} goes in and is never overwritten; {k('results/')} comes out</>,
      ]}
      links={[
        { href: '/labs/5/1', label: 'Lab 5 · Projects & Environments' },
        { href: '/labs/5/setup', label: 'Lab 5 · Setup, step by step' },
      ]}
    />
  )
}

export function SlideNotebooksScripts() {
  return (
    <>
      <SlideTitle>
        5 · Notebooks and <GradientText>scripts</GradientText>
      </SlideTitle>
      <p className="text-center text-gray-400 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        Two ways to write Python. Both run with the same packages, from the same{' '}
        {k('.venv')}.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-3 md:mb-4">
            .ipynb · for data analysis
          </CardHeading>
          <CardList
            bullet="▸"
            color="blue"
            items={[
              <>Cells you run one at a time, with the output underneath</>,
              <>In VS Code: Select Kernel → Python Environments → {k('.venv')}. The kernel is the whole trick</>,
              <>The trap: cells run in any order. Restart → Run All before you trust a result</>,
            ]}
          />
        </SlideCard>
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-3 md:mb-4">
            .py · for programs
          </CardHeading>
          <CardList
            bullet="▸"
            color="green"
            items={[
              <>Plain text, run top to bottom, every time the same</>,
              <>In the terminal: {k('uv run count_trials.py')}</>,
              <>Functions you want to reuse across notebooks belong in a {k('.py')} file</>,
            ]}
          />
          <div className="mt-3">
            <CodeBox label="terminal" color="green">{`uv run count_trials.py`}</CodeBox>
          </div>
        </SlideCard>
      </div>
      <SessionPills links={[{ href: '/labs/5/1', label: 'Lab 5 · Notebooks and scripts' }]} />
    </>
  )
}

export function SlideGit() {
  return (
    <ReviewSlide
      title={<>6 · <GradientText>git</GradientText> and GitHub</>}
      intro={<>A lab notebook for code: every working state saved, with a note saying why. Commit when something works.</>}
      code={`git status                 # when lost, type it
git add .
git commit -m "why, not what"
git log --oneline          # the history
git restore analysis.py    # back to the last commit
git push                   # copy commits to GitHub`}
      remember={[
        <>{k('git init')} makes the hidden {k('.git')} folder: one repo per project. {k('uv-start')} already did it for you</>,
        <>{k('.gitignore')} keeps {k('.venv/')} and big data files out</>,
        <>{k('git restore')} throws away uncommitted work, with no undo</>,
        <>Prefer buttons? The VS Code Source Control panel runs the same commands</>,
      ]}
      links={[{ href: '/labs/7/1', label: 'Lab 7 · Git: a lab notebook for code' }]}
    />
  )
}

/* ───── 7 · all of it, once ───── */

export function SlideAllOfIt() {
  return (
    <>
      <SlideTitle>
        All of it, <GradientText>once</GradientText>
      </SlideTitle>
      <p className="text-center text-gray-400 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        Run today&apos;s two notebooks on your own laptop, as a project under git. Every step uses
        a tool from the last seven labs. Windows: type {k('curl.exe')} instead of {k('curl')}.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6">
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            1 · Terminal: a project with the notebooks in it
          </CardHeading>
          <CodeBox label="terminal" color="blue">{`cd bio-python
uv-start lab08 --data
cd lab08
uv add scipy
curl -O ${RAW}/01_quicker_figures.ipynb
curl -O ${RAW}/02_real_or_chance.ipynb
code .`}</CodeBox>
        </SlideCard>
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            2 · VS Code, then git
          </CardHeading>
          <CardList
            bullet="▸"
            color="green"
            items={[
              <>Open {k('01_quicker_figures.ipynb')}, Select Kernel → {k('.venv')}, run the first cell. It downloads {k('depmap.csv')}</>,
              <>Keep the 2 MB table out of git: add a line {k('depmap.csv')} to {k('.gitignore')}</>,
              <>In the terminal: {k('git status')}, {k('git add .')}, {k('git commit -m "lab 8 notebooks run"')}</>,
              <>Optional: make an empty {k('lab08')} repo on GitHub and push to it, as in Lab 7</>,
            ]}
          />
        </SlideCard>
      </div>
      <p className="text-center text-gray-500 text-xs md:text-sm mt-3 md:mt-4">
        Done when the notebook runs in VS Code and {k('git log --oneline')} shows your commit.
      </p>
    </>
  )
}

/* ───── 8 · when it breaks ───── */

const fixes: [string, React.ReactNode][] = [
  ['command not found: uv', <>Close and reopen the terminal. Still missing: {k('uv tool update-shell')}</>],
  ['code: command not found', <>In VS Code, ⌘⇧P → Shell Command: Install &apos;code&apos; command in PATH</>],
  ['No such file or directory', <>Wrong folder. {k('pwd')}, {k('ls')}, then {k('cd')} to the right one</>],
  ['ModuleNotFoundError', <>{k('uv add')} the package, or pick the {k('.venv')} kernel</>],
  ['VS Code asks to install ipykernel', <>You picked the wrong Python. Select Kernel → {k('.venv')}</>],
  ['Something is odd after uv add', <>{k('uv sync')}, then ⌘⇧P → Developer: Reload Window</>],
  ['fatal: not a git repository', <>You are outside the project folder. {k('cd lab08')}</>],
]

export function SlideWhenItBreaks() {
  return (
    <>
      <SlideTitle>
        When it <GradientText>breaks</GradientText>
      </SlideTitle>
      <p className="text-center text-gray-400 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        Seven messages cover most of what goes wrong. Read the last line of the error first.
      </p>
      <div className="flex flex-col gap-2 mt-4 md:mt-6 max-w-5xl mx-auto">
        {fixes.map(([msg, fix]) => (
          <div
            key={msg}
            className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-x-4 gap-y-1 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2"
          >
            <span className="font-mono text-red-400 text-xs md:text-sm xl:text-base">{msg}</span>
            <span className="text-gray-300 text-xs md:text-sm xl:text-base">{fix}</span>
          </div>
        ))}
      </div>
    </>
  )
}
