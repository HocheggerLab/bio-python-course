import { 
  SlideTitle, 
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide10ClassMethods() {
  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        Classes: <GradientText>Adding Methods</GradientText>
      </SlideTitle>
      
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Simple explanation */}
        <div className="bg-gradient-to-r from-bio-green/10 to-bio-blue/10 border border-bio-green/30 rounded-xl p-6">
          <p className="text-lg text-gray-300 text-center mb-4">
            Classes can also include <span className="text-bio-green font-semibold">methods</span> - functions that work with the stored data
          </p>
        </div>
        
        {/* Code example */}
        <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-gray-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-green mb-4">
            ⚙️ Adding Functionality to Our DNASequence
          </h3>
          
          <SyntaxHighlighter
            code={`class DNASequence:
    def __init__(self, sequence, name):
        self.sequence = sequence.upper()
        self.name = name
    
    def length(self):
        """Return the length of the sequence"""
        return len(self.sequence)
    
    def gc_content(self):
        """Calculate GC content as percentage"""
        gc_count = self.sequence.count('G') + self.sequence.count('C')
        return (gc_count / len(self.sequence)) * 100
    
    def reverse_complement(self):
        """Return the reverse complement"""
        complement = {'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G'}
        rev_comp = ''.join(complement[base] for base in reversed(self.sequence))
        return rev_comp

# Now our objects can DO things!
my_gene = DNASequence("atcgatcgatcg", "test_gene")
print(f"Length: {my_gene.length()}")                    # Length: 12
print(f"GC%: {my_gene.gc_content():.1f}")               # GC%: 50.0
print(f"Reverse complement: {my_gene.reverse_complement()}")  # CGATCGATCGAT`}
            language="python"
          />
        </div>
        
        {/* Key insight */}
        <div className="bg-gradient-to-r from-purple-500/10 to-bio-blue/10 border border-purple-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4 text-center">
            🎯 This is Exactly How Pandas Works!
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-purple-500/10 rounded-lg p-4">
              <p className="text-bio-yellow font-semibold text-sm mb-2">Our DNASequence Class</p>
              <SyntaxHighlighter
                code={`my_gene.length()
my_gene.gc_content()
my_gene.reverse_complement()`}
                language="python"
              />
            </div>
            
            <div className="bg-purple-500/10 rounded-lg p-4">
              <p className="text-bio-blue font-semibold text-sm mb-2">Pandas DataFrame Class</p>
              <SyntaxHighlighter
                code={`df.head()
df.describe()
df.groupby('gene')`}
                language="python"
              />
            </div>
          </div>
          
          <p className="text-center text-sm text-gray-300 mt-4">
            Same pattern: <span className="text-bio-blue">object.method()</span> - the object knows how to work with its own data!
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-bio-yellow text-sm font-semibold">
            ✨ Methods make your code readable: <code className="text-bio-blue">gene.gc_content()</code> vs <code className="text-gray-400">calculate_gc(gene_sequence)</code>
          </p>
        </div>
      </div>
    </>
  )
}