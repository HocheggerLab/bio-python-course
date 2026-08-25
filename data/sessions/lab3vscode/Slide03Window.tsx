import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { CardList } from '@/components/slides/SlideCard'

/** A small numbered hotspot badge placed on the mockup. */
function Pin({ n }: { n: number }) {
  return (
    <span className="inline-flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full bg-bio-blue text-bio-dark text-[10px] md:text-xs font-bold shadow-lg">
      {n}
    </span>
  )
}

const legend: React.ReactNode[] = [
  <>
    <span className="text-white">Explorer</span> — your project folder. Always{' '}
    <span className="text-white">Open Folder</span>, never a lone file.
  </>,
  <>
    <span className="text-white">Extensions</span> — install the{' '}
    <span className="text-white">Python</span> extension here, once.
  </>,
  <>
    <span className="text-white">Editor</span> — where you write. Colours &amp; autocomplete come from the
    Python extension.
  </>,
  <>
    <span className="text-white">Terminal</span> — the Lab 2 terminal, built in. Run with{' '}
    <span className="font-mono text-white">uv run</span>.
  </>,
]

export function Slide03Window() {
  return (
    <>
      <SlideTitle>
        The <GradientText>VS Code</GradientText> window
      </SlideTitle>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6 flex-1 min-h-0">
        {/* ── the mockup ── */}
        <div className="xl:col-span-2 min-h-0">
          <div className="h-full rounded-xl overflow-hidden border border-white/15 bg-[#1e1e2e] flex flex-col text-xs md:text-sm">
            {/* title bar */}
            <div className="flex items-center gap-2 px-3 py-2 bg-black/30 border-b border-white/10">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-3 text-gray-400 font-mono">spike_detector.py — Lab3</span>
            </div>

            {/* body: activity bar · explorer · editor */}
            <div className="flex flex-1 min-h-0">
              {/* activity bar */}
              <div className="flex flex-col items-center gap-4 py-3 px-2 bg-black/20 border-r border-white/10 text-lg">
                <span>📄</span>
                <span>🔍</span>
                <span className="relative">
                  🧩
                  <span className="absolute -top-2 -right-3">
                    <Pin n={2} />
                  </span>
                </span>
              </div>

              {/* explorer */}
              <div className="w-32 md:w-44 shrink-0 py-3 px-3 bg-black/10 border-r border-white/10">
                <div className="flex items-center gap-2 text-gray-400 uppercase tracking-wider text-[10px] mb-2">
                  Lab3 <Pin n={1} />
                </div>
                <div className="font-mono text-gray-300 space-y-1">
                  <div className="rounded bg-bio-blue/20 text-white px-1.5 py-0.5">spike_detector.py</div>
                  <div className="px-1.5 text-gray-500">notes.md</div>
                </div>
              </div>

              {/* editor */}
              <div className="flex-1 min-w-0 py-3 px-3 font-mono text-gray-300 relative">
                <div className="absolute top-2 right-3">
                  <Pin n={3} />
                </div>
                <pre className="leading-relaxed overflow-x-auto">
                  <span className="text-gray-600">1  </span>
                  <span className="text-sky-300">spikes</span> = [3, 0, 7, 2, 9]{'\n'}
                  <span className="text-gray-600">2  </span>
                  <span className="text-purple-300">for</span> count{' '}
                  <span className="text-purple-300">in</span> spikes:{'\n'}
                  <span className="text-gray-600">3  </span>
                  {'    '}
                  <span className="text-purple-300">if</span> count &gt; <span className="text-amber-300">8</span>:{'\n'}
                  <span className="text-gray-600">4  </span>
                  {'        '}
                  <span className="text-sky-300">print</span>(<span className="text-green-300">&quot;burst!&quot;</span>)
                </pre>
              </div>
            </div>

            {/* terminal */}
            <div className="border-t border-white/10 bg-black/40 py-2 px-3 font-mono relative">
              <div className="absolute top-2 right-3">
                <Pin n={4} />
              </div>
              <div className="text-gray-500 uppercase tracking-wider text-[10px] mb-1">Terminal</div>
              <div className="text-green-400">
                you@mac ~ % <span className="text-gray-200">uv run spike_detector.py</span>
              </div>
              <div className="text-gray-400">burst!</div>
            </div>
          </div>
        </div>

        {/* ── legend ── */}
        <div className="min-h-0 flex flex-col justify-center">
          <CardList items={legend} numbered color="blue" />
        </div>
      </div>
    </>
  )
}
