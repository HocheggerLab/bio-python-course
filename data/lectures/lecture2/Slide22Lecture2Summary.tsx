'use client'

import { SlideTitle } from '@/components/slides'

export default function Slide22Lecture2Summary() {
  return (
    <>
      <div className="pb-8">
        <SlideTitle>
          <span className="text-bio-blue">Lecture 2 Summary:</span> What You've Learned Today
        </SlideTitle>
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Step 1: String Operations & DNA Analysis */}
        <div className="bg-bio-dark/30 border border-bio-blue/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-bio-blue mb-4 flex items-center">
            <span className="mr-3">1️⃣</span>
            String Operations & DNA Analysis
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-bio-yellow mb-3">String Slicing</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-bio-blue mr-2">▸</span>
                  Extract sequence parts: <code className="bg-bio-dark/50 px-1 py-0.5 rounded">dna[0:3]</code>
                </li>
                <li className="flex items-start">
                  <span className="text-bio-blue mr-2">▸</span>
                  Find reading frames and ORFs
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-bio-yellow mb-3">String Methods</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-bio-blue mr-2">▸</span>
                  <code className="bg-bio-dark/50 px-1 py-0.5 rounded">.find()</code>, <code className="bg-bio-dark/50 px-1 py-0.5 rounded">.upper()</code>, <code className="bg-bio-dark/50 px-1 py-0.5 rounded">.replace()</code>
                </li>
                <li className="flex items-start">
                  <span className="text-bio-blue mr-2">▸</span>
                  Search for start/stop codons
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-bio-yellow mb-3">Biological Context</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-bio-blue mr-2">▸</span>
                  Reading frames and translation
                </li>
                <li className="flex items-start">
                  <span className="text-bio-blue mr-2">▸</span>
                  Open Reading Frame analysis
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step 2: Conditionals & Decision Making */}
        <div className="bg-bio-dark/30 border border-bio-yellow/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-bio-yellow mb-4 flex items-center">
            <span className="mr-3">2️⃣</span>
            Conditionals & Decision Making
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-bio-green mb-3">If Statements</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-bio-yellow mr-2">▸</span>
                  <code className="bg-bio-dark/50 px-1 py-0.5 rounded">if condition:</code>
                </li>
                <li className="flex items-start">
                  <span className="text-bio-yellow mr-2">▸</span>
                  Make decisions in code
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-bio-green mb-3">Logical Operators</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-bio-yellow mr-2">▸</span>
                  <code className="bg-bio-dark/50 px-1 py-0.5 rounded">and</code>, <code className="bg-bio-dark/50 px-1 py-0.5 rounded">or</code>, <code className="bg-bio-dark/50 px-1 py-0.5 rounded">not</code>
                </li>
                <li className="flex items-start">
                  <span className="text-bio-yellow mr-2">▸</span>
                  Complex condition testing
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-bio-green mb-3">Error Handling</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-bio-yellow mr-2">▸</span>
                  Validate input sequences
                </li>
                <li className="flex items-start">
                  <span className="text-bio-yellow mr-2">▸</span>
                  Defensive programming
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step 3: Dictionaries & Data Organization */}
        <div className="bg-bio-dark/30 border border-bio-green/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-bio-green mb-4 flex items-center">
            <span className="mr-3">3️⃣</span>
            Dictionaries & Data Organization
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-bio-blue mb-3">Key-Value Pairs</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-bio-green mr-2">▸</span>
                  <code className="bg-bio-dark/50 px-1 py-0.5 rounded">{`{'codon': 'amino_acid'}`}</code>
                </li>
                <li className="flex items-start">
                  <span className="text-bio-green mr-2">▸</span>
                  Store genetic code tables
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-bio-blue mb-3">Translation</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-bio-green mr-2">▸</span>
                  DNA → RNA → Protein
                </li>
                <li className="flex items-start">
                  <span className="text-bio-green mr-2">▸</span>
                  Codon table lookups
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-bio-blue mb-3">File Handling</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-bio-green mr-2">▸</span>
                  FASTA file parsing
                </li>
                <li className="flex items-start">
                  <span className="text-bio-green mr-2">▸</span>
                  <code className="bg-bio-dark/50 px-1 py-0.5 rounded">with open()</code> best practices
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Biological Applications */}
        <div className="bg-gradient-to-r from-purple-500/20 to-bio-yellow/20 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center">
            <span className="mr-3">🧬</span>
            Real Bioinformatics Applications
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="bg-bio-dark/50 rounded-lg p-4 mb-2">
                <span className="text-2xl">🔍</span>
              </div>
              <h4 className="font-semibold text-bio-yellow mb-2">ORF Finding</h4>
              <p className="text-sm text-gray-300">Identify potential protein-coding regions in DNA sequences</p>
            </div>
            <div className="text-center">
              <div className="bg-bio-dark/50 rounded-lg p-4 mb-2">
                <span className="text-2xl">🔄</span>
              </div>
              <h4 className="font-semibold text-bio-yellow mb-2">Sequence Translation</h4>
              <p className="text-sm text-gray-300">Convert DNA to protein sequences using codon tables</p>
            </div>
            <div className="text-center">
              <div className="bg-bio-dark/50 rounded-lg p-4 mb-2">
                <span className="text-2xl">📄</span>
              </div>
              <h4 className="font-semibold text-bio-yellow mb-2">File Processing</h4>
              <p className="text-sm text-gray-300">Parse and analyze biological data formats like FASTA</p>
            </div>
          </div>
        </div>

        {/* Programming Skills */}
        <div className="bg-bio-dark/50 border border-bio-blue/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-bio-blue mb-4 flex items-center">
            <span className="mr-3">💡</span>
            Advanced Programming Skills Gained
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-bio-yellow mr-2">✓</span>
                <strong>String manipulation</strong> for sequence analysis
              </li>
              <li className="flex items-start">
                <span className="text-bio-yellow mr-2">✓</span>
                <strong>Data validation</strong> with conditionals
              </li>
              <li className="flex items-start">
                <span className="text-bio-yellow mr-2">✓</span>
                <strong>Efficient data lookup</strong> using dictionaries
              </li>
            </ul>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-bio-yellow mr-2">✓</span>
                <strong>File I/O operations</strong> for real data
              </li>
              <li className="flex items-start">
                <span className="text-bio-yellow mr-2">✓</span>
                <strong>Error handling</strong> and defensive coding
              </li>
              <li className="flex items-start">
                <span className="text-bio-yellow mr-2">✓</span>
                <strong>Biological data processing</strong> workflows
              </li>
            </ul>
          </div>
        </div>

        {/* What's Next */}
        <div className="bg-gradient-to-r from-bio-dark to-purple-900/50 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center">
            <span className="mr-3">🚀</span>
            What's Coming Next
          </h3>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-bio-yellow mb-3">Lecture 3</h4>
            <h5 className="text-xl text-bio-blue mb-4">Data Analysis with Pandas: Tables, Gene Dependencies & Correlation</h5>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-bio-dark/30 rounded-lg p-4">
                <div className="text-2xl mb-2">📊</div>
                <h6 className="font-semibold text-bio-green mb-2">Pandas DataFrames</h6>
                <p className="text-sm text-gray-300">Work with tabular biological data, CSV files, and gene expression datasets</p>
              </div>
              <div className="bg-bio-dark/30 rounded-lg p-4">
                <div className="text-2xl mb-2">🔗</div>
                <h6 className="font-semibold text-bio-green mb-2">Gene Dependencies</h6>
                <p className="text-sm text-gray-300">Analyze relationships between genes, correlations, and biological networks</p>
              </div>
              <div className="bg-bio-dark/30 rounded-lg p-4">
                <div className="text-2xl mb-2">📈</div>
                <h6 className="font-semibold text-bio-green mb-2">Data Visualization</h6>
                <p className="text-sm text-gray-300">Create plots and charts to visualize biological data patterns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Encouragement */}
        <div className="bg-gradient-to-r from-bio-green/20 to-bio-blue/20 border border-bio-green/40 rounded-lg p-6 text-center">
          <h3 className="text-2xl font-bold text-bio-green mb-3">🎉 Excellent Progress!</h3>
          <p className="text-lg text-gray-300 mb-2">
            You can now analyze DNA sequences, parse biological files, and make data-driven decisions in code
          </p>
          <p className="text-gray-400">
            Next week we'll explore how to work with large datasets and discover gene relationships using Python!
          </p>
        </div>
      </div>
    </>
  )
}