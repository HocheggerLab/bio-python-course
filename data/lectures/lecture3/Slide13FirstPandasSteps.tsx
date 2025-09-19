import { 
  SlideTitle, 
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide13FirstPandasSteps() {
  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        First Steps: <GradientText>Loading & Inspecting Data</GradientText>
      </SlideTitle>
      
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Step 1: Import and load */}
        <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-blue mb-4">
            📥 Step 1: Load the Data
          </h3>
          
          <SyntaxHighlighter
            code={`import pandas as pd

# Load our DepMap CRISPR data
df = pd.read_csv('depmap_breast_myeloid.csv')

print("Data loaded successfully!")
print(f"Shape: {df.shape}")  # (rows, columns)`}
            language="python"
          />
        </div>

        {/* Step 2: Basic inspection methods */}
        <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-bio-green/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-green mb-4">
            🔍 Step 2: Inspect Your Data
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-amber-400 font-semibold text-sm mb-3">Essential DataFrame Methods</h4>
              <SyntaxHighlighter
                code={`# Get basic info
df.shape          # (rows, columns)
df.columns        # column names
df.dtypes         # data types
df.info()         # comprehensive overview

# Peek at the data  
df.head()         # first 5 rows
df.head(10)       # first 10 rows
df.tail()         # last 5 rows`}
                language="python"
              />
            </div>
            
            <div>
              <h4 className="text-purple-400 font-semibold text-sm mb-3">Statistical Summary</h4>
              <SyntaxHighlighter
                code={`# Get statistics
df.describe()     # numerical summaries
df.nunique()      # unique values per column

# Check for missing data
df.isnull().sum()  # count NaN values
df.isna().sum()    # same as above

# Sample some rows
df.sample(5)      # 5 random rows`}
                language="python"
              />
            </div>
          </div>
        </div>

        {/* What you'll see */}
        <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-amber-400/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-amber-400 mb-4">
            👀 What You'll Discover
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-bio-blue/10 rounded-lg p-4">
              <h4 className="text-bio-blue font-semibold text-sm mb-2">Dataset Size</h4>
              <p className="text-xs text-gray-300">How many cell lines? How many genes?</p>
            </div>
            
            <div className="bg-bio-green/10 rounded-lg p-4">
              <h4 className="text-bio-green font-semibold text-sm mb-2">Data Quality</h4>
              <p className="text-xs text-gray-300">Any missing values? Clean data?</p>
            </div>
            
            <div className="bg-purple-500/10 rounded-lg p-4">
              <h4 className="text-purple-400 font-semibold text-sm mb-2">Cancer Types</h4>
              <p className="text-xs text-gray-300">How many breast vs myeloid cancers?</p>
            </div>
          </div>
        </div>

        {/* Remember classes connection */}
        <div className="bg-gradient-to-r from-purple-500/10 to-bio-blue/10 border border-purple-500/30 rounded-xl p-5">
          <div className="text-center">
            <h4 className="text-purple-400 font-semibold mb-3">🎯 Remember: DataFrame = Powerful Class!</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-bio-yellow font-semibold mb-1">Our DNASequence class:</p>
                <code className="text-bio-blue">my_dna.length()</code>
              </div>
              <div>
                <p className="text-bio-yellow font-semibold mb-1">Pandas DataFrame class:</p>
                <code className="text-bio-blue">df.head()</code>, <code className="text-bio-blue">df.describe()</code>
              </div>
            </div>
            <p className="text-gray-300 text-xs mt-3">Same pattern - objects that know how to work with their data!</p>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center bg-gradient-to-r from-bio-green/10 to-amber-400/10 rounded-xl p-4">
          <p className="text-bio-green font-semibold text-lg mb-2">
            🚀 Ready to Get Hands-On?
          </p>
          <p className="text-gray-300 text-sm">
            Time to switch to <span className="text-bio-blue font-semibold">Google Colab</span> and explore real cancer data!
          </p>
        </div>
      </div>
    </>
  )
}