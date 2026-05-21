'use client'

import { SlideTitle } from '@/components/slides'

export default function Slide23Resources() {
  return (
    <>
      <div className="pb-8">
        <SlideTitle>
          <span className="text-bio-blue">Resources for DNA Pythonistas</span> 🐍🧬
        </SlideTitle>
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Biopython - Star of the Show */}
        <div className="bg-gradient-to-r from-bio-blue/30 to-purple-500/30 border-2 border-bio-blue/50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-4">⭐</span>
            <div>
              <h3 className="text-2xl font-bold text-bio-blue">Biopython</h3>
              <p className="text-gray-300">The essential Python library for biological computation</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-bio-yellow mb-3">What Biopython Does</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-bio-blue mr-2">▸</span>
                  Parse biological file formats (FASTA, GenBank, PDB, etc.)
                </li>
                <li className="flex items-start">
                  <span className="text-bio-blue mr-2">▸</span>
                  Sequence manipulation and translation
                </li>
                <li className="flex items-start">
                  <span className="text-bio-blue mr-2">▸</span>
                  BLAST searches and alignment tools
                </li>
                <li className="flex items-start">
                  <span className="text-bio-blue mr-2">▸</span>
                  Access NCBI databases (Entrez, PubMed)
                </li>
                <li className="flex items-start">
                  <span className="text-bio-blue mr-2">▸</span>
                  Phylogenetic tree analysis
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-bio-yellow mb-3">Getting Started</h4>
              <div className="bg-bio-dark/50 rounded-lg p-4 mb-3">
                <p className="text-sm text-gray-400 mb-2">Install with pip:</p>
                <code className="text-bio-green">pip install biopython</code>
              </div>
              <div className="bg-bio-dark/50 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-2">Quick example:</p>
                <pre className="text-sm text-bio-green">
{`from Bio.Seq import Seq
dna = Seq("ATGGCCATTGTAA")
protein = dna.translate()
print(protein)  # MAIV*`}
                </pre>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center space-x-4">
            <a
              href="https://biopython.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bio-blue/20 border border-bio-blue hover:bg-bio-blue/30 px-4 py-2 rounded-lg transition-all"
            >
              📖 Official Docs
            </a>
            <a
              href="https://biopython.org/wiki/Documentation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bio-blue/20 border border-bio-blue hover:bg-bio-blue/30 px-4 py-2 rounded-lg transition-all"
            >
              📚 Tutorial & Cookbook
            </a>
          </div>
        </div>

        {/* Other Essential Libraries */}
        <div className="bg-bio-dark/30 border border-bio-yellow/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-bio-yellow mb-4 flex items-center">
            <span className="mr-3">🧰</span>
            Other Essential Python Libraries for Biology
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-bio-green mb-2">NumPy & Pandas</h4>
              <p className="text-sm text-gray-300 mb-3">
                Numerical computing and data analysis. Essential for working with gene expression data,
                experimental results, and large datasets.
              </p>
              <a
                href="https://numpy.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-bio-blue hover:text-bio-yellow"
              >
                numpy.org
              </a>
              {' • '}
              <a
                href="https://pandas.pydata.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-bio-blue hover:text-bio-yellow"
              >
                pandas.pydata.org
              </a>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-bio-green mb-2">scikit-bio</h4>
              <p className="text-sm text-gray-300 mb-3">
                Bioinformatics library for sequence alignment, diversity analysis,
                and working with biological data structures.
              </p>
              <a
                href="http://scikit-bio.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-bio-blue hover:text-bio-yellow"
              >
                scikit-bio.org
              </a>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-bio-green mb-2">matplotlib & seaborn</h4>
              <p className="text-sm text-gray-300 mb-3">
                Data visualization libraries for creating publication-quality plots,
                charts, and figures for your biological data.
              </p>
              <a
                href="https://matplotlib.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-bio-blue hover:text-bio-yellow"
              >
                matplotlib.org
              </a>
            </div>
          </div>
        </div>

        {/* Learning Resources */}
        <div className="bg-bio-dark/30 border border-bio-green/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-bio-green mb-4 flex items-center">
            <span className="mr-3">📖</span>
            Learning Resources & Documentation
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-bio-blue mb-3">Online Courses & Tutorials</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-bio-green mr-2">▸</span>
                  <div>
                    <strong className="text-bio-yellow">Python for Biologists</strong>
                    <p className="text-sm text-gray-400">pythonforbiologists.com - Comprehensive tutorials</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-bio-green mr-2">▸</span>
                  <div>
                    <strong className="text-bio-yellow">Rosalind</strong>
                    <p className="text-sm text-gray-400">rosalind.info - Learn bioinformatics through problem solving</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-bio-green mr-2">▸</span>
                  <div>
                    <strong className="text-bio-yellow">BioPython Tutorial</strong>
                    <p className="text-sm text-gray-400">Official tutorial with real-world examples</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-bio-blue mb-3">Databases & APIs</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-bio-green mr-2">▸</span>
                  <div>
                    <strong className="text-bio-yellow">NCBI Entrez</strong>
                    <p className="text-sm text-gray-400">Access GenBank, PubMed, and other NCBI databases via Python</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-bio-green mr-2">▸</span>
                  <div>
                    <strong className="text-bio-yellow">UniProt</strong>
                    <p className="text-sm text-gray-400">Protein sequence and functional information database</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-bio-green mr-2">▸</span>
                  <div>
                    <strong className="text-bio-yellow">Ensembl REST API</strong>
                    <p className="text-sm text-gray-400">Genomic data access through Python requests</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Specialized Tools */}
        <div className="bg-bio-dark/30 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center">
            <span className="mr-3">🔬</span>
            Specialized Bioinformatics Tools
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-bio-yellow mb-2">PyMOL</h4>
              <p className="text-sm text-gray-300">
                3D molecular visualization and analysis of protein structures
              </p>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-bio-yellow mb-2">DendroPy</h4>
              <p className="text-sm text-gray-300">
                Phylogenetic computing library for tree analysis
              </p>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-bio-yellow mb-2">pysam</h4>
              <p className="text-sm text-gray-300">
                Python wrapper for SAM/BAM sequencing data formats
              </p>
            </div>
          </div>
        </div>

        {/* Community & Help */}
        <div className="bg-gradient-to-r from-bio-green/20 to-bio-blue/20 border border-bio-green/40 rounded-lg p-6">
          <h3 className="text-xl font-bold text-bio-green mb-4 flex items-center">
            <span className="mr-3">💬</span>
            Community & Getting Help
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="bg-bio-dark/50 rounded-lg p-4 mb-2">
                <span className="text-2xl">🐍</span>
              </div>
              <h4 className="font-semibold text-bio-yellow mb-2">Bioinformatics StackExchange</h4>
              <p className="text-sm text-gray-300">Ask questions, get answers from the community</p>
            </div>
            <div className="text-center">
              <div className="bg-bio-dark/50 rounded-lg p-4 mb-2">
                <span className="text-2xl">💻</span>
              </div>
              <h4 className="font-semibold text-bio-yellow mb-2">GitHub</h4>
              <p className="text-sm text-gray-300">Explore open-source bioinformatics projects</p>
            </div>
            <div className="text-center">
              <div className="bg-bio-dark/50 rounded-lg p-4 mb-2">
                <span className="text-2xl">📚</span>
              </div>
              <h4 className="font-semibold text-bio-yellow mb-2">Python Documentation</h4>
              <p className="text-sm text-gray-300">Official Python docs - your best friend!</p>
            </div>
          </div>
        </div>

        {/* Final Motivation */}
        <div className="bg-gradient-to-r from-purple-500/20 to-bio-yellow/20 border border-purple-500/40 rounded-lg p-6 text-center">
          <h3 className="text-2xl font-bold text-purple-400 mb-3">🚀 You're Now Part of the DNA Pythonista Community!</h3>
          <p className="text-lg text-gray-300 mb-2">
            These tools will empower you to tackle real biological problems with code
          </p>
          <p className="text-gray-400">
            Start exploring Biopython today and see how much time you can save in your research!
          </p>
        </div>
      </div>
    </>
  )
}
