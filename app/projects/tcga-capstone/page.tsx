import Link from 'next/link'
import type { ReactNode } from 'react'
import {
  CAPSTONE_REPO,
  DOWNLOAD_COMMANDS,
  extensions,
  marking,
  notebooks,
  tasks,
} from '@/data/capstone'

export const metadata = {
  title: 'Project 2: the p53 capstone — Python for Biologists',
}

export default function TcgaCapstonePage() {
  return (
    <div className="min-h-screen bg-bio-darkest pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <Link
          href="/assessment"
          className="inline-flex items-center mb-8 text-bio-blue hover:text-bio-yellow transition-colors text-sm md:text-base"
        >
          ← Back to assessment
        </Link>

        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-bio-yellow font-semibold tracking-widest uppercase text-xs md:text-sm mb-3">
            Project 2 · 70% · Week 11
          </p>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gradient-purple mb-4">
            Does your gene respond to p53 loss?
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            One gene, one cancer type, real patient data from The Cancer Genome Atlas. Decide
            whether that gene’s expression responds to loss of p53 function in human tumours
            — and if so, in which direction.
          </p>
        </div>

        <div className="flex flex-col gap-5 md:gap-6">
          {/* The question */}
          <Section icon="🧬" title="Why this is a real question">
            <p className="text-gray-300 leading-relaxed mb-4">
              <span className="font-mono text-gray-200">TP53</span> is the most frequently
              mutated gene in human cancer. Its protein, p53, is a transcription factor: when a
              cell is damaged, it switches on genes that stop the cell cycle or trigger cell
              death. So when p53 is lost, a gene can go either way:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
              <Outcome label="Direct p53 target" result="goes down" why="the switch is gone" />
              <Outcome label="Proliferation gene" result="goes up" why="the brake is gone" />
              <Outcome label="Neither" result="no change" why="nothing to release" />
            </div>
            <div className="bio-note text-gray-200 text-sm md:text-base">
              You cannot guess which your gene is — you have to measure it. “No detectable
              difference” is a real, valid, fully markable answer.
            </div>
          </Section>

          {/* Student ID */}
          <Section icon="🔑" title="Your gene is assigned to you">
            <p className="text-gray-300 leading-relaxed mb-4">
              Everyone has a different gene and cancer type. You never type them yourself: the
              setup cell at the top of each notebook asks for your{' '}
              <strong className="text-white">Sussex username</strong> (the start of your Sussex
              email, the one you log in with) and looks yours up.
            </p>
            <div className="code-block">
              <pre className="text-gray-200">
                STUDENT_ID = &quot;ab123&quot;{'   '}
                <span className="text-gray-500"># &lt;-- yours</span>
              </pre>
            </div>
            <p className="text-gray-400 text-sm mt-3">
              If the notebook says you are not on the class list, check the spelling, then email
              the convenor. Do not pick a gene yourself — you are marked on the one assigned to you.
            </p>
          </Section>

          {/* Getting started */}
          <Section icon="🚀" title="Get started — Colab or your own computer">
            <p className="text-gray-300 leading-relaxed mb-5">
              Your choice; neither route earns or loses a mark. Start with{' '}
              <span className="font-mono text-gray-200">00_start_here</span>.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="text-lg font-semibold text-white mb-1">
                  Option 1 — Google Colab
                </h3>
                <p className="text-gray-400 text-sm mb-4">Nothing to install.</p>
                <ul className="flex flex-col gap-3">
                  {notebooks.map((nb) => (
                    <li key={nb.file} className="flex items-center gap-3">
                      <a
                        href={nb.colab}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary !py-1 !px-4 text-sm shrink-0"
                      >
                        Open in Colab
                      </a>
                      <span className="text-sm leading-snug">
                        <span className="text-gray-200">{nb.title}</span>
                        {nb.optional && <span className="text-gray-500"> (optional)</span>}
                        <span className="block text-gray-500">{nb.purpose}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="exercise-box !p-4 mt-5 text-sm text-gray-200">
                  Open a notebook, then <strong>File → Save a copy in Drive</strong> before you
                  type anything — otherwise your work is not saved.
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="text-lg font-semibold text-white mb-1">
                  Option 2 — on your own computer
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Download the project and set it up the way the tech sessions showed you:
                </p>
                <div className="code-block mb-4">
                  <pre className="text-gray-200">{DOWNLOAD_COMMANDS}</pre>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  <span className="font-mono">uv sync</span> installs exactly the packages the
                  notebooks need. Open the folder in VS Code and select the{' '}
                  <span className="font-mono">.venv</span> kernel. All the data is included, so
                  it works offline.
                </p>
                <p className="text-gray-400 text-sm">
                  Git version control for local development is explained in{' '}
                  <Link href="/labs/7" className="text-bio-blue hover:text-bio-yellow underline underline-offset-4">
                    Lab 7
                  </Link>
                  . Prefer to browse first?{' '}
                  <a
                    href={`https://github.com/${CAPSTONE_REPO}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bio-blue hover:text-bio-yellow underline underline-offset-4"
                  >
                    See the repository on GitHub
                  </a>
                  .
                </p>
              </div>
            </div>
          </Section>

          {/* Tasks */}
          <Section icon="🧩" title="What you build">
            <p className="text-gray-300 leading-relaxed mb-4">
              Every task is a function with a fixed output, and every function has a check cell
              underneath that runs it on a worked example —{' '}
              <span className="font-mono text-gray-200">CDKN1A</span> in breast cancer, assigned
              to nobody. Green ticks mean it works, before you run it on your own gene.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm md:text-base">
                <thead>
                  <tr className="text-gray-500 text-xs uppercase tracking-widest">
                    <th className="py-2 pr-4 font-normal">Task</th>
                    <th className="py-2 pr-4 font-normal">Function</th>
                    <th className="py-2 font-normal">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((t) => (
                    <tr key={t.fn} className="border-t border-white/10">
                      <td className="py-2 pr-4 text-gray-400 tabular-nums">{t.task}</td>
                      <td className="py-2 pr-4 font-mono text-gray-200 whitespace-nowrap">
                        {t.fn}
                      </td>
                      <td className="py-2 text-gray-300">{t.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Each function is marked on its own. Notebook 02 does not use Notebook 01 at all,
              so getting stuck on Task 1 never blocks the rest.
            </p>
          </Section>

          {/* Marking */}
          <Section icon="✅" title="How it is marked">
            <ul className="flex flex-col divide-y divide-white/10">
              {marking.map((m) => (
                <li key={m.part} className="flex items-baseline gap-4 py-2.5">
                  <span className="text-bio-yellow text-xl md:text-2xl font-bold tabular-nums w-10 shrink-0 text-right">
                    {m.marks}
                  </span>
                  <span className="text-sm md:text-base leading-snug">
                    <span className="text-white font-semibold">{m.part}</span>
                    <span className="text-gray-400"> — {m.what}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-sm md:text-base mt-4">
              A complete, well-written, well-interpreted core is first-class work and scores
              around 70. The extension is how you move from 70 to 85 — if you are struggling, do
              the core properly and skip it.
            </p>
          </Section>

          {/* Extension */}
          <Section icon="🔭" title="The extension — choose one">
            <ul className="flex flex-col gap-3 mb-4">
              {extensions.map((e) => (
                <li key={e.option} className="flex items-start gap-3">
                  <span className="rounded-full border border-white/15 bg-white/5 w-8 h-8 shrink-0 flex items-center justify-center font-bold text-gray-200">
                    {e.option}
                  </span>
                  <span className="text-gray-200 leading-snug pt-1">
                    {e.question}
                    {e.note && <span className="block text-gray-500 text-sm">{e.note}</span>}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-gray-400 text-sm">
              Whichever you choose: the named function, the supplied checks passing, at least
              two useful checks of your own, and a short interpretation of what it changes about
              your Notebook 02 answer.
            </p>
          </Section>

          {/* GitHub */}
          <Section icon="📂" title="Your GitHub repository">
            <ul className="flex flex-col gap-2 text-gray-200 text-sm md:text-base">
              <Arrow>The link to your repo in the last cell of Notebook 02.</Arrow>
              <Arrow>
                At least 5 commits that capture meaningful steps, each with a brief message
                saying what changed and why.
              </Arrow>
              <Arrow>
                A README.md: the question, your gene and cancer type, how to run your notebooks,
                and your one-sentence answer.
              </Arrow>
            </ul>
            <p className="text-gray-400 text-sm mt-4">
              In Colab, use <strong className="text-gray-200">File → Save a copy in GitHub</strong>{' '}
              at each milestone — every save is a commit. Working locally, git is covered in Lab 7.
            </p>
          </Section>

          {/* Data */}
          <Section icon="🏥" title="About the data">
            <p className="text-gray-300 leading-relaxed">
              Real, de-identified patient data from the open-access tiers of{' '}
              <a
                href="https://www.cancer.gov/tcga"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bio-blue hover:text-bio-yellow underline underline-offset-4"
              >
                The Cancer Genome Atlas
              </a>{' '}
              and the{' '}
              <a
                href="https://gtexportal.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bio-blue hover:text-bio-yellow underline underline-offset-4"
              >
                GTEx project
              </a>
              . Treat it as you would your own medical record: never try to work out who a
              patient is. The full acknowledgements and citations are in{' '}
              <span className="font-mono text-gray-200">00_start_here</span>.
            </p>
          </Section>
        </div>

        <p className="text-center text-gray-400 text-sm md:text-base mt-8 md:mt-10">
          Submit your notebooks through{' '}
          <a
            href="https://canvas.sussex.ac.uk/courses/34489"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bio-blue hover:text-bio-yellow underline underline-offset-4 transition-colors"
          >
            Canvas
          </a>
          , where you will also find the deadline and your marks.
        </p>
      </div>
    </div>
  )
}

function Section({
  icon,
  title,
  children,
}: {
  icon: string
  title: string
  children: ReactNode
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
      <h2 className="flex items-center gap-3 text-xl md:text-2xl font-bold text-white mb-4">
        <span aria-hidden="true">{icon}</span>
        {title}
      </h2>
      {children}
    </section>
  )
}

function Outcome({ label, result, why }: { label: string; result: string; why: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center">
      <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">{label}</p>
      <p className="text-white text-lg font-bold">{result}</p>
      <p className="text-gray-500 text-sm">{why}</p>
    </div>
  )
}

function Arrow({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="text-bio-blue shrink-0">→</span>
      <span className="leading-snug">{children}</span>
    </li>
  )
}
