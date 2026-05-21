import {
  SlideTitle,
  GradientText
} from '@/components/slides'

export default function Slide22NextSteps() {
  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        <GradientText>Next Steps with Python</GradientText>
        <br />
        <span className="text-3xl md:text-4xl">Your Journey Continues</span>
      </SlideTitle>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Congratulations */}
        <div className="bg-gradient-to-r from-bio-green/10 to-emerald-500/10 border border-bio-green/30 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-bio-green mb-3 text-center">
            🎉 You've Completed the Core Python Course!
          </h3>
          <p className="text-gray-300 text-center text-lg">
            You now have the <span className="text-bio-yellow font-semibold">fundamental skills</span> to analyze biological data with Python.
            <br />
            <span className="text-sm text-gray-400 mt-2 block">
              But this is just the beginning of your coding journey...
            </span>
          </p>
        </div>

        {/* The Best Way Forward */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-purple-500/10 border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-blue mb-4 text-center">
            💡 The Best Way to Learn: Apply Your Skills
          </h3>
          <div className="bg-bio-dark/50 rounded-lg p-5">
            <p className="text-gray-300 text-sm mb-4 text-center">
              Reading tutorials won't make you a programmer - <span className="text-bio-yellow font-semibold">solving real problems will</span>.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-bio-darker/50 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">🔬</div>
                <p className="text-bio-green font-semibold text-sm mb-2">Start Small</p>
                <p className="text-gray-400 text-xs">
                  Automate repetitive tasks in your lab work
                </p>
              </div>
              <div className="bg-bio-darker/50 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">📊</div>
                <p className="text-purple-400 font-semibold text-sm mb-2">Build Projects</p>
                <p className="text-gray-400 text-xs">
                  Analyze your own research data
                </p>
              </div>
              <div className="bg-bio-darker/50 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">🚀</div>
                <p className="text-bio-blue font-semibold text-sm mb-2">Keep Challenging</p>
                <p className="text-gray-400 text-xs">
                  Tackle increasingly complex problems
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bioinformatics Pathways */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4 text-center">
            🧬 Bioinformatics Pathways
          </h3>

          <div className="space-y-4">
            {/* NGS Analysis */}
            <div className="bg-bio-dark/50 rounded-lg p-5">
              <h4 className="text-bio-blue font-semibold text-base mb-3 flex items-center gap-2">
                <span className="text-2xl">🧬</span>
                Next-Generation Sequencing (NGS) Analysis
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                RNA-seq, ChIP-seq, ATAC-seq, single-cell sequencing
              </p>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="bg-bio-darker/70 rounded p-3">
                  <p className="text-bio-green font-semibold text-xs mb-1">Biopython</p>
                  <p className="text-gray-400 text-xs">Sequence parsing, alignment, BLAST</p>
                </div>
                <div className="bg-bio-darker/70 rounded p-3">
                  <p className="text-bio-green font-semibold text-xs mb-1">pysam</p>
                  <p className="text-gray-400 text-xs">BAM/SAM file manipulation</p>
                </div>
                <div className="bg-bio-darker/70 rounded p-3">
                  <p className="text-bio-green font-semibold text-xs mb-1">scanpy</p>
                  <p className="text-gray-400 text-xs">Single-cell RNA-seq analysis</p>
                </div>
              </div>
            </div>

            {/* Image Analysis */}
            <div className="bg-bio-dark/50 rounded-lg p-5">
              <h4 className="text-purple-400 font-semibold text-base mb-3 flex items-center gap-2">
                <span className="text-2xl">🔬</span>
                Image Analysis
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Microscopy, cell counting, segmentation, feature extraction
              </p>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="bg-bio-darker/70 rounded p-3">
                  <p className="text-purple-400 font-semibold text-xs mb-1">scikit-image</p>
                  <p className="text-gray-400 text-xs">Image processing algorithms</p>
                </div>
                <div className="bg-bio-darker/70 rounded p-3">
                  <p className="text-purple-400 font-semibold text-xs mb-1">CellProfiler</p>
                  <p className="text-gray-400 text-xs">High-throughput cell analysis</p>
                </div>
                <div className="bg-bio-darker/70 rounded p-3">
                  <p className="text-purple-400 font-semibold text-xs mb-1">napari</p>
                  <p className="text-gray-400 text-xs">Multi-dimensional image viewer</p>
                </div>
              </div>
            </div>

            {/* Machine Learning & AI */}
            <div className="bg-bio-dark/50 rounded-lg p-5">
              <h4 className="text-amber-400 font-semibold text-base mb-3 flex items-center gap-2">
                <span className="text-2xl">🤖</span>
                Machine Learning & AI
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Predictive modeling, classification, deep learning for biology
              </p>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="bg-bio-darker/70 rounded p-3">
                  <p className="text-amber-400 font-semibold text-xs mb-1">scikit-learn</p>
                  <p className="text-gray-400 text-xs">Classical ML algorithms</p>
                </div>
                <div className="bg-bio-darker/70 rounded p-3">
                  <p className="text-amber-400 font-semibold text-xs mb-1">PyTorch</p>
                  <p className="text-gray-400 text-xs">Deep learning framework</p>
                </div>
                <div className="bg-bio-darker/70 rounded p-3">
                  <p className="text-amber-400 font-semibold text-xs mb-1">AlphaFold</p>
                  <p className="text-gray-400 text-xs">Protein structure prediction</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Development Skills */}
        <div className="bg-gradient-to-br from-bio-yellow/10 to-amber-500/10 border border-bio-yellow/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-yellow mb-4 text-center">
            🛠️ Level Up Your Development Skills
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Local Development */}
            <div className="bg-bio-dark/50 rounded-lg p-5">
              <h4 className="text-bio-blue font-semibold text-sm mb-3">Move Beyond Colab</h4>
              <div className="space-y-3">
                <div className="bg-bio-darker/50 rounded p-3">
                  <p className="text-bio-green font-semibold text-xs mb-1">VS Code</p>
                  <p className="text-gray-300 text-xs mb-1">Professional code editor with Python support</p>
                  <a
                    href="https://code.visualstudio.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bio-blue text-xs hover:underline"
                  >
                    code.visualstudio.com →
                  </a>
                </div>
                <div className="bg-bio-darker/50 rounded p-3">
                  <p className="text-bio-green font-semibold text-xs mb-1">uv</p>
                  <p className="text-gray-300 text-xs mb-1">Fast Python package & project manager</p>
                  <a
                    href="https://docs.astral.sh/uv/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bio-blue text-xs hover:underline"
                  >
                    docs.astral.sh/uv →
                  </a>
                </div>
                <div className="bg-bio-darker/50 rounded p-3">
                  <p className="text-bio-green font-semibold text-xs mb-1">Terminal Skills</p>
                  <p className="text-gray-300 text-xs">
                    Learn bash commands: <span className="font-mono text-purple-400">cd, ls, grep, find</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Version Control */}
            <div className="bg-bio-dark/50 rounded-lg p-5">
              <h4 className="text-purple-400 font-semibold text-sm mb-3">Version Control</h4>
              <div className="space-y-3">
                <div className="bg-bio-darker/50 rounded p-3">
                  <p className="text-amber-400 font-semibold text-xs mb-1">Git Basics</p>
                  <p className="text-gray-300 text-xs mb-1">
                    Track changes: <span className="font-mono text-bio-green">git add, commit, push</span>
                  </p>
                  <p className="text-gray-400 text-xs">Essential for any serious project</p>
                </div>
                <div className="bg-bio-darker/50 rounded p-3">
                  <p className="text-amber-400 font-semibold text-xs mb-1">GitHub</p>
                  <p className="text-gray-300 text-xs mb-1">Share code, collaborate, build portfolio</p>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bio-blue text-xs hover:underline"
                  >
                    github.com →
                  </a>
                </div>
                <div className="bg-bio-darker/50 rounded p-3">
                  <p className="text-amber-400 font-semibold text-xs mb-1">Why It Matters</p>
                  <p className="text-gray-300 text-xs">
                    Backup your work, collaborate with others, showcase your skills
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="bg-gradient-to-r from-bio-green/10 to-purple-500/10 border border-bio-green/30 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="text-5xl">🚀</div>
            <div>
              <h4 className="text-bio-yellow font-bold text-xl mb-3">
                You're Ready to Code
              </h4>
              <p className="text-gray-300 text-base mb-4">
                You've learned the fundamentals. Now the real learning begins through{' '}
                <span className="text-bio-green font-semibold">building, breaking, and fixing</span> real projects.
              </p>
              <div className="bg-bio-dark/50 rounded-lg p-4 space-y-2">
                <p className="text-gray-300 text-sm">
                  ✓ You can <span className="text-bio-blue font-semibold">load and manipulate data</span> with pandas
                </p>
                <p className="text-gray-300 text-sm">
                  ✓ You can <span className="text-bio-green font-semibold">perform statistical analysis</span> with scipy
                </p>
                <p className="text-gray-300 text-sm">
                  ✓ You can <span className="text-purple-400 font-semibold">create visualizations</span> with matplotlib and seaborn
                </p>
                <p className="text-gray-300 text-sm">
                  ✓ You can <span className="text-amber-400 font-semibold">read documentation</span> and learn new packages independently
                </p>
              </div>
              <p className="text-gray-300 text-base mt-4">
                These skills are <span className="text-bio-yellow font-semibold">transferable</span> - whether you pursue academia, industry, or clinical research,
                Python will amplify your impact.
              </p>
              <p className="text-bio-green font-bold text-lg mt-4 text-center">
                Keep coding. Keep learning. Keep building. 💚
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
