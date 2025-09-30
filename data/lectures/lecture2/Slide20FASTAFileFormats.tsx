import {
  SlideTitle,
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide20FASTAFileFormats() {

  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        DNA Sequence <GradientText>File Formats</GradientText>: FASTA
      </SlideTitle>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Introduction to FASTA */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-purple-500/10 border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-bio-blue mb-4 text-center">
            📄 What is a FASTA File?
          </h3>
          <p className="text-gray-300 text-center text-lg mb-4">
            FASTA is the most common format for storing DNA, RNA, and protein sequences.
            It's a simple text format that biologists use worldwide.
          </p>
          <div className="bg-bio-dark/50 rounded-lg p-4 text-center">
            <p className="text-bio-yellow font-semibold mb-2">💡 Fun Fact</p>
            <p className="text-gray-300 text-sm">
              FASTA was named after the FASTA software program for sequence alignment,
              developed in the 1980s at the University of Virginia
            </p>
          </div>
        </div>

        {/* FASTA format structure */}
        <div className="bg-gradient-to-br from-bio-green/10 to-emerald-500/10 border border-bio-green/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-green mb-4">
            🏗️ FASTA Format Structure
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="text-purple-400 font-semibold mb-3">Basic Format Rules</h4>
              <div className="bg-bio-dark/50 rounded-lg p-4">
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• <span className="text-bio-yellow font-semibold">Header line</span> starts with <code className="text-red-400">&gt;</code></li>
                  <li>• <span className="text-bio-blue font-semibold">Sequence ID</span> comes right after <code className="text-red-400">&gt;</code></li>
                  <li>• <span className="text-bio-green font-semibold">Description</span> (optional) after the ID</li>
                  <li>• <span className="text-amber-400 font-semibold">Sequence data</span> on following lines</li>
                  <li>• <span className="text-purple-400 font-semibold">No line length limit</span> for sequence</li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="text-amber-400 font-semibold mb-3">Example FASTA File</h4>
              <div className="bg-bio-dark/50 rounded-lg p-4">
                <SyntaxHighlighter
                  code={`>NM_000546.6 Homo sapiens tumor protein p53
ATGGAGGAGCCGCAGTCAGATCCTAGCGTCGAGCCCCCTCTGAGTCAGGAAACA
TTTTCAGACCTATGGAAACTACTTCCTGAAAACAACGTTCTGTCCCCCTTGCCG
TCCCAAGCAATGGATGATTTGATGCTGTCCCCGGACGATATTGAACAATGGTTC
ACTGAAGACCCAGGTCCAGATGAAGCTCCCAGAATGCCAGAGGCTGCTCCCCG

>NM_001126115.2 Homo sapiens BRCA1 gene
ATGGATTTCCGTCTGAACAAACAACACCGCCGGCCCCGTGGGTCCGTGTCCCCG
GCAAGCCCCACCCGGGCCCTCCCTCCCGGCTGGGGGCCGCCCCCCGACACCAAT
CAGGCCCCCCACCCCGGCTCTCTACCCCCGCGCCCCCGGACACTACCCCCCGCC`}
                  language="fasta"
                />
              </div>
            </div>
          </div>
        </div>

        
        

        {/* Common file locations */}
        <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-red-400 mb-4 text-center">
            🌐 Where to Find FASTA Files
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-blue font-semibold mb-2">NCBI GenBank</h4>
              <p className="text-gray-300 text-sm mb-2">
                National Center for Biotechnology Information
              </p>
              <ul className="text-gray-300 text-xs space-y-1">
                <li>• Comprehensive gene database</li>
                <li>• Download individual genes</li>
                <li>• Genome assemblies available</li>
              </ul>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-green font-semibold mb-2">Ensembl</h4>
              <p className="text-gray-300 text-sm mb-2">
                European genome annotation database
              </p>
              <ul className="text-gray-300 text-xs space-y-1">
                <li>• High-quality annotations</li>
                <li>• Multiple species genomes</li>
                <li>• Easy bulk downloads</li>
              </ul>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-purple-400 font-semibold mb-2">UniProt</h4>
              <p className="text-gray-300 text-sm mb-2">
                Protein sequence database
              </p>
              <ul className="text-gray-300 text-xs space-y-1">
                <li>• Protein sequences only</li>
                <li>• Functional annotations</li>
                <li>• Research-quality curation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key takeaways */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-bio-green/10 border border-bio-blue/30 rounded-xl p-5">
          <h4 className="text-bio-blue font-semibold mb-3 text-center">
            💡 Key Takeaways: Working with FASTA Files
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h5 className="text-bio-green font-semibold mb-2">FASTA Essentials</h5>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Simple, universal sequence format</li>
                <li>• Header starts with <code className="text-red-400">&gt;</code></li>
                <li>• Can contain multiple sequences</li>
                <li>• Used by all major databases</li>
              </ul>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h5 className="text-purple-400 font-semibold mb-2">Python Skills</h5>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• File reading with <code className="text-bio-yellow">open()</code></li>
                <li>• String manipulation for parsing</li>
                <li>• Dictionary storage for multiple sequences</li>
                <li>• Always handle the last sequence!</li>
              </ul>
            </div>
          </div>
          <p className="text-bio-yellow font-semibold text-sm mt-4 text-center">
            🎯 FASTA files are your gateway to analyzing real biological sequences!
          </p>
        </div>

        {/* Code Example */}
        <div className="bg-gradient-to-br from-bio-green/10 to-purple-500/10 border border-bio-green/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-green mb-4 text-center">
            💻 FASTA File Parsing: Professional Approach
          </h3>
          <p className="text-gray-300 text-center mb-6">
            Here's how bioinformaticians parse FASTA files in the real world - handling multiple sequences and complex structures.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Code Display */}
            <div>
              <h4 className="text-amber-400 font-semibold mb-3">🧬 Complete FASTA Parser</h4>
              <div className="bg-bio-dark/50 rounded-lg p-4">
                <SyntaxHighlighter
                  code={`sequences = {}
current_gene_id = None
current_sequence = ""

# Use context manager to safely open and read the file
with open(filename, 'r') as file:
    for line in file:
        line = line.strip()  # Remove whitespace

        if line.startswith('>'):
            # Save previous sequence if we have one
            if current_gene_id is not None:
                sequences[current_gene_id]['sequence'] = current_sequence

            # Parse new header
            header_parts = line[1:].split(' ', 1)  # Split on first space only
            current_gene_id = header_parts[0]

            # Store header info
            sequences[current_gene_id] = {
                'header': line[1:],  # Full header without >
                'sequence': ""
            }

            current_sequence = ""  # Reset sequence
            print(f"Found sequence: {current_gene_id}")

        else:
            # Add to current sequence (sequences can span multiple lines)
            current_sequence += line.upper()

# Don't forget the last sequence!
if current_gene_id is not None:
    sequences[current_gene_id]['sequence'] = current_sequence

# Display results
for gene_id, data in sequences.items():
    print(f"\\nGene: {gene_id}")
    print(f"Header: {data['header']}")
    print(f"Length: {len(data['sequence'])} bases")
    print(f"First 50 bases: {data['sequence'][:50]}...")`}
                  language="python"
                />
              </div>
            </div>

            {/* Explanation */}
            <div>
              <h4 className="text-purple-400 font-semibold mb-3">🔍 Why This Approach Works</h4>
              <div className="space-y-4">
                <div className="bg-bio-dark/50 rounded-lg p-4">
                  <h5 className="text-bio-blue font-semibold mb-2">🧩 Handles Multiple Sequences</h5>
                  <p className="text-gray-300 text-sm">
                    Real FASTA files often contain multiple sequences. This parser stores each one with its own ID and metadata.
                  </p>
                </div>

                <div className="bg-bio-dark/50 rounded-lg p-4">
                  <h5 className="text-bio-green font-semibold mb-2">📏 Line-by-Line Processing</h5>
                  <p className="text-gray-300 text-sm">
                    Sequences can span multiple lines. This approach reads line by line and concatenates sequence data properly.
                  </p>
                </div>

                <div className="bg-bio-dark/50 rounded-lg p-4">
                  <h5 className="text-purple-400 font-semibold mb-2">💾 Smart Data Structure</h5>
                  <p className="text-gray-300 text-sm">
                    Uses nested dictionaries to store both header information and sequence data for easy access.
                  </p>
                </div>

                <div className="bg-bio-dark/50 rounded-lg p-4">
                  <h5 className="text-amber-400 font-semibold mb-2">⚠️ Edge Case Handling</h5>
                  <p className="text-gray-300 text-sm">
                    Don't forget the last sequence! The final sequence needs special handling since there's no next header.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Points */}
          <div className="mt-6 bg-bio-dark/30 rounded-lg p-4">
            <h5 className="text-bio-yellow font-semibold text-sm mb-3 text-center">💡 Key Programming Concepts</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="text-gray-300 text-xs space-y-2">
                <li>• <span className="text-bio-blue font-semibold">Context Managers</span> - <code>with open()</code> safely handles files</li>
                <li>• <span className="text-bio-green font-semibold">String Methods</span> - <code>.strip()</code>, <code>.startswith()</code>, <code>.split()</code></li>
                <li>• <span className="text-purple-400 font-semibold">State Management</span> - Tracking current sequence and ID</li>
              </ul>
              <ul className="text-gray-300 text-xs space-y-2">
                <li>• <span className="text-amber-400 font-semibold">Nested Dictionaries</span> - Complex data organization</li>
                <li>• <span className="text-red-400 font-semibold">Edge Cases</span> - Handling the last sequence properly</li>
                <li>• <span className="text-cyan-400 font-semibold">Data Validation</span> - Checking for None values</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Advanced Practice link */}
        <div className="text-center bg-gradient-to-r from-bio-blue/10 to-purple-500/10 rounded-xl p-6">
          <p className="text-bio-blue font-semibold text-lg mb-4">
            🎓 Ready for More Advanced Practice?
          </p>
          <p className="text-gray-300 text-sm mb-4">
            Build complete FASTA parsers and work with real research datasets
          </p>
          <a
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_2/L2_N7_fasta_files.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-bio-blue hover:bg-bio-blue/80 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-bio-blue/20"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.95 8.385l-1.446-.695a1.87 1.87 0 00-1.71.099l-.885.443a.59.59 0 01-.615-.009l-1.417-.816a.59.59 0 01-.294-.511V6.21c0-.21.11-.403.294-.511l1.417-.816a.59.59 0 01.615-.009l.885.443c.516.258 1.146.234 1.638-.062l1.518-.912a.59.59 0 01.885.511v2.042a.59.59 0 01-.294.511l-1.59.954z"/>
            </svg>
            Advanced FASTA Analysis
          </a>
        </div>
      </div>
    </>
  )
}