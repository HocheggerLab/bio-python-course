import { 
  SlideTitle, 
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide09IntroClasses() {
  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        Classes: <GradientText>Storing Data</GradientText>
      </SlideTitle>
      
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Simple explanation */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-bio-green/10 border border-bio-blue/30 rounded-xl p-6">
          <p className="text-lg text-gray-300 text-center mb-4">
            Classes let you create custom <span className="text-bio-blue font-semibold">data containers</span> with named attributes
          </p>
        </div>
        
        {/* Code example */}
        <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-gray-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-green mb-4">
            🧬 Creating a DNASequence Class
          </h3>
          
          <SyntaxHighlighter
            code={`class DNASequence:
    def __init__(self, sequence, name):
        """This runs when we create a new DNASequence object"""
        self.sequence = sequence.upper()  # Store the DNA sequence
        self.name = name                  # Store the sequence name

# Create DNA sequence objects
gene1 = DNASequence("atcgatcgatcg", "BRCA1_fragment")
gene2 = DNASequence("ggccaattggcc", "p53_exon2")

# Access the stored data using dot notation
print(f"Gene name: {gene1.name}")           # Gene name: BRCA1_fragment
print(f"Sequence: {gene1.sequence}")        # Sequence: ATCGATCGATCG
print(f"Length: {len(gene1.sequence)}")     # Length: 12

print(f"Gene 2: {gene2.name} -> {gene2.sequence}")`}
            language="python"
          />
        </div>
        
        {/* Key concepts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
            <h4 className="text-orange-400 font-semibold mb-3">🏗️ __init__ method</h4>
            <p className="text-sm text-gray-300 mb-2">
              Runs automatically when you create a new object
            </p>
            <p className="text-xs text-gray-400">
              Think of it as the "setup" function that stores your initial data
            </p>
          </div>
          
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
            <h4 className="text-purple-400 font-semibold mb-3">🔑 self keyword</h4>
            <p className="text-sm text-gray-300 mb-2">
              Refers to "this particular object"
            </p>
            <p className="text-xs text-gray-400">
              💡 Confused me at first too - just Python's way of saying "this one"!
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-bio-yellow text-sm font-semibold">
            📦 Each object stores its own copy of the data - gene1 and gene2 are separate!
          </p>
        </div>
      </div>
    </>
  )
}