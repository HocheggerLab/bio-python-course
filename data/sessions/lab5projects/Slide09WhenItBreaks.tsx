import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardBody } from '@/components/slides/SlideCard'
import { SlideNote } from '@/components/slides/layouts'

interface Fix {
  symptom: string
  fix: React.ReactNode
}

const fixes: Fix[] = [
  {
    symptom: 'uv / uv-start: command not found',
    fix: (
      <>
        Close the terminal and open a new one. uv-start still missing? Run{' '}
        <span className="font-mono text-white">uv tool update-shell</span>, then a new terminal. uv
        missing? Re-run the installer from Lab 2.
      </>
    ),
  },
  {
    symptom: 'code: command not found (Mac)',
    fix: (
      <>
        In VS Code: <span className="text-white">⌘⇧P</span> →{' '}
        <span className="text-white">Shell Command: Install &apos;code&apos; command in PATH</span>.
        Or skip it: File → Open Folder → <span className="font-mono text-white">lab5-neurons</span>.
      </>
    ),
  },
  {
    symptom: 'No .venv in the kernel list',
    fix: (
      <>
        Check you opened the <em>folder</em>. Then run{' '}
        <span className="font-mono text-white">uv sync</span> in VS Code&apos;s terminal and{' '}
        <span className="text-white">⌘⇧P / Ctrl+Shift+P → Developer: Reload Window</span>.
      </>
    ),
  },
  {
    symptom: "ModuleNotFoundError: No module named 'numpy'",
    fix: (
      <>
        Wrong kernel. Top right of the notebook → <span className="text-white">Select Kernel</span> →{' '}
        <span className="font-mono text-white">.venv</span>. Never <span className="font-mono">pip install</span>.
      </>
    ),
  },
  {
    symptom: "PowerShell: parameter name 'O'",
    fix: (
      <>
        In PowerShell, <span className="font-mono text-white">curl</span> means something else. Type{' '}
        <span className="font-mono text-white">curl.exe</span> — with the .exe.
      </>
    ),
  },
  {
    symptom: 'Running cells… asks to install ipykernel',
    fix: (
      <>
        You picked a Python other than <span className="font-mono text-white">.venv</span>. Cancel, and
        select <span className="font-mono text-white">.venv</span> — it already has ipykernel.
      </>
    ),
  },
]

export function Slide09WhenItBreaks() {
  return (
    <>
      <SlideTitle>
        When it <GradientText variant="yellow">breaks</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-3 md:mt-5">
        {fixes.map((f) => (
          <SlideCard key={f.symptom} color="yellow" layout="start" padding="tight" className="border-l-4">
            <p className="font-mono font-semibold text-bio-yellow text-sm md:text-base xl:text-lg mb-1">
              {f.symptom}
            </p>
            <CardBody>{f.fix}</CardBody>
          </SlideCard>
        ))}
      </div>

      <SlideNote>Still stuck after that? Red sticky up — this is exactly what the lab is for.</SlideNote>
    </>
  )
}
