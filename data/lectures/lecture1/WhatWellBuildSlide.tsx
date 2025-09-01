import { SlideTitle } from '@/components/slides'

export function WhatWellBuildSlide() {
  return (
    <>
      <div className="pb-8">
        <SlideTitle>
          What We'll <span className="text-gradient-purple">Build Together</span>
        </SlideTitle>
      </div>

      <div className="max-w-7xl mx-auto space-y-8">
        {/* Lecture Progression */}
        <div>
          <h3 className="text-2xl font-bold text-bio-blue mb-6 text-center">
            📚 Your Learning Journey
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Lecture 1 */}
            <div className="bg-bio-dark/50 border border-bio-blue/30 rounded-lg p-4 hover:border-bio-blue/50 transition-all">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">1️⃣</span>
                <h4 className="text-lg font-bold text-bio-blue">Lab Calculations</h4>
              </div>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Python basics & setup</li>
                <li>• Variables, lists, loops</li>
                <li>• Functions for lab math</li>
                <li>• Molarity calculators</li>
              </ul>
            </div>

            {/* Lecture 2 */}
            <div className="bg-bio-dark/50 border border-bio-yellow/30 rounded-lg p-4 hover:border-bio-yellow/50 transition-all">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">2️⃣</span>
                <h4 className="text-lg font-bold text-bio-yellow">DNA Analysis</h4>
              </div>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• String operations</li>
                <li>• Finding ORFs</li>
                <li>• Dictionaries & codons</li>
                <li>• FASTA file processing</li>
              </ul>
            </div>

            {/* Lecture 3 */}
            <div className="bg-bio-dark/50 border border-bio-green/30 rounded-lg p-4 hover:border-bio-green/50 transition-all">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">3️⃣</span>
                <h4 className="text-lg font-bold text-bio-green">Data & Statistics</h4>
              </div>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• NumPy arrays</li>
                <li>• Statistical analysis</li>
                <li>• P-value calculations</li>
                <li>• Scientific computing</li>
              </ul>
            </div>

            {/* Lecture 4 */}
            <div className="bg-bio-dark/50 border border-purple-500/30 rounded-lg p-4 hover:border-purple-500/50 transition-all">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">4️⃣</span>
                <h4 className="text-lg font-bold text-purple-400">Cancer Data</h4>
              </div>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Pandas DataFrames</li>
                <li>• Linear regression</li>
                <li>• Gene dependency</li>
                <li>• Object-oriented code</li>
              </ul>
            </div>

            {/* Lecture 5 */}
            <div className="bg-bio-dark/50 border border-bio-blue/30 rounded-lg p-4 hover:border-bio-blue/50 transition-all">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">5️⃣</span>
                <h4 className="text-lg font-bold text-bio-blue">Visualization</h4>
              </div>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Matplotlib basics</li>
                <li>• Seaborn statistics</li>
                <li>• Publication figures</li>
                <li>• Interactive plots</li>
              </ul>
            </div>

            {/* Skills Summary */}
            <div className="bg-gradient-to-br from-bio-blue/20 to-purple-500/20 border border-bio-blue/40 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">✨</span>
                <h4 className="text-lg font-bold text-bio-yellow">You'll Master</h4>
              </div>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Real lab automation</li>
                <li>• Biological data analysis</li>
                <li>• Professional coding</li>
                <li>• Problem-solving skills</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Final Project Options */}
        <div>
          <h3 className="text-2xl font-bold text-purple-400 mb-6 text-center">
            🎯 Choose Your Final Project
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Cancer Gene Analysis */}
            <div className="bg-gradient-to-br from-purple-500/20 to-bio-blue/20 border border-purple-500/30 rounded-lg p-5 hover:border-purple-500/50 transition-all">
              <div className="flex items-start mb-3">
                <span className="text-3xl mr-3">🧬</span>
                <div>
                  <h4 className="text-xl font-bold text-purple-400 mb-2">Cancer Gene Dependency Analysis</h4>
                  <p className="text-sm text-gray-300 mb-2">
                    Analyze CRISPR screen data to identify essential genes in cancer cell lines
                  </p>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>• Process DepMap datasets</li>
                    <li>• Statistical analysis of gene essentiality</li>
                    <li>• Identify therapeutic targets</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Image Analysis */}
            <div className="bg-gradient-to-br from-bio-green/20 to-bio-yellow/20 border border-bio-green/30 rounded-lg p-5 hover:border-bio-green/50 transition-all">
              <div className="flex items-start mb-3">
                <span className="text-3xl mr-3">🔬</span>
                <div>
                  <h4 className="text-xl font-bold text-bio-green mb-2">Microscopy Image Analysis</h4>
                  <p className="text-sm text-gray-300 mb-2">
                    Build automated pipelines for cell counting and fluorescence quantification
                  </p>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>• Cell segmentation & tracking</li>
                    <li>• Fluorescence intensity analysis</li>
                    <li>• Batch processing of experiments</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Neural Activity */}
            <div className="bg-gradient-to-br from-bio-yellow/20 to-purple-500/20 border border-bio-yellow/30 rounded-lg p-5 hover:border-bio-yellow/50 transition-all">
              <div className="flex items-start mb-3">
                <span className="text-3xl mr-3">🧠</span>
                <div>
                  <h4 className="text-xl font-bold text-bio-yellow mb-2">Neural Activity Data Analysis</h4>
                  <p className="text-sm text-gray-300 mb-2">
                    Process and visualize calcium imaging or electrophysiology recordings
                  </p>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>• Spike detection algorithms</li>
                    <li>• Time-series analysis</li>
                    <li>• Network activity patterns</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Literature Analysis */}
            <div className="bg-gradient-to-br from-bio-blue/20 to-bio-green/20 border border-bio-blue/30 rounded-lg p-5 hover:border-bio-blue/50 transition-all">
              <div className="flex items-start mb-3">
                <span className="text-3xl mr-3">📚</span>
                <div>
                  <h4 className="text-xl font-bold text-bio-blue mb-2">Literature Analysis with LLMs</h4>
                  <p className="text-sm text-gray-300 mb-2">
                    Use local AI models to mine scientific literature and extract insights
                  </p>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>• PubMed abstract mining</li>
                    <li>• Knowledge graph creation</li>
                    <li>• Automated literature reviews</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Encouragement */}
        <div className="bg-bio-dark/50 border border-bio-blue/30 rounded-lg p-6 text-center">
          <p className="text-lg text-bio-blue font-semibold">
            By the end of this course, you'll have the skills to tackle real biological problems with code!
          </p>
        </div>
      </div>
    </>
  )
}