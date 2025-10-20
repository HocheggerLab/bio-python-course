import {
  SlideTitle,
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide05PearsonCorrelationCode() {
  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        Calculating <GradientText>Pearson Correlation</GradientText> with Pandas
      </SlideTitle>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Core concept */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-purple-500/10 border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-blue mb-4 text-center">
            📊 Goal: Calculate ATR vs ATRIP Correlation
          </h3>
          <p className="text-gray-300 text-center">
            Use pandas to compute the Pearson correlation coefficient between ATR and ATRIP gene dependencies
            across all cancer cell lines in our dataset
          </p>
        </div>

        {/* Step-by-step code */}
        <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-gray-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-green mb-4">
            🔧 Step-by-Step Implementation
          </h3>

          <div className="grid grid-cols-1 gap-6">
            {/* Step 1: Load and filter data */}
            <div>
              <h4 className="text-purple-400 font-semibold text-sm mb-3">Step 1: Load and Filter Data</h4>
              <SyntaxHighlighter
                code={`# Load the DepMap dataset
import pandas as pd

df = pd.read_csv('DepMap_gene_dependency.csv')
print(f"Dataset shape: {df.shape}")

# Filter for breast cancer cell lines
breast_df = df.loc[df['oncotree_lineage'] == 'Breast']
print(f"Breast cancer lines: {len(breast_df)}")

# Extract ATR and ATRIP columns
atr_data = breast_df['ATR']
atrip_data = breast_df['ATRIP']

print(f"ATR data: {len(atr_data)} cell lines")
print(f"ATRIP data: {len(atrip_data)} cell lines")`}
                language="python"
              />
            </div>

            {/* Step 2: Calculate correlation */}
            <div>
              <h4 className="text-bio-blue font-semibold text-sm mb-3">Step 2: Calculate Pearson Correlation</h4>
              <SyntaxHighlighter
                code={`# Method 1: Using pandas corr() method (recommended)
correlation = atr_data.corr(atrip_data)
print(f"ATR vs ATRIP correlation: {correlation:.3f}")

# Method 2: Using correlation matrix for multiple comparisons
genes_of_interest = ['ATR', 'ATRIP', 'CHEK1', 'RPA1']
correlation_matrix = breast_df[genes_of_interest].corr()
print("Correlation matrix:")
print(correlation_matrix.round(3))

# Extract specific correlation
atr_atrip_corr = correlation_matrix.loc['ATR', 'ATRIP']
print(f"ATR-ATRIP correlation: {atr_atrip_corr:.3f}")`}
                language="python"
              />
            </div>

            {/* Step 3: Interpret results */}
            <div>
              <h4 className="text-amber-400 font-semibold text-sm mb-3">Step 3: Interpret the Results</h4>
              <SyntaxHighlighter
                code={`# Interpret correlation strength
def interpret_correlation(r):
    if abs(r) >= 0.7:
        return "Strong correlation"
    elif abs(r) >= 0.3:
        return "Moderate correlation"
    else:
        return "Weak correlation"

interpretation = interpret_correlation(correlation)
print(f"Interpretation: {interpretation}")

# Check if correlation is positive or negative
if correlation > 0:
    print("Positive correlation: genes move together")
else:
    print("Negative correlation: genes move opposite")

# Statistical significance (basic check)
if abs(correlation) > 0.5:
    print("⚠️  Likely biologically significant")
else:
    print("ℹ️  May not be biologically meaningful")`}
                language="python"
              />
            </div>
          </div>
        </div>

        {/* Code explanation */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4">
            💡 Code Explanation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-bio-green font-semibold mb-3">Key Pandas Methods</h4>
              <div className="bg-bio-dark/50 rounded-lg p-4 space-y-3">
                <div>
                  <span className="text-bio-blue font-semibold text-sm">.corr()</span>
                  <p className="text-gray-300 text-xs">
                    Calculates Pearson correlation between two Series
                  </p>
                </div>
                <div>
                  <span className="text-bio-blue font-semibold text-sm">.corr() matrix</span>
                  <p className="text-gray-300 text-xs">
                    Creates correlation matrix for multiple columns at once
                  </p>
                </div>
                <div>
                  <span className="text-bio-blue font-semibold text-sm">.loc[]</span>
                  <p className="text-gray-300 text-xs">
                    Extracts specific values from correlation matrix
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-amber-400 font-semibold mb-3">Correlation Interpretation</h4>
              <div className="bg-bio-dark/50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-bio-green text-xs">Strong (+/- 0.7 to 1.0)</span>
                  <span className="text-bio-green text-xs">Biologically meaningful</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-400 text-xs">Moderate (+/- 0.3 to 0.7)</span>
                  <span className="text-amber-400 text-xs">Potentially interesting</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-xs">Weak (+/- 0.0 to 0.3)</span>
                  <span className="text-gray-400 text-xs">Probably not related</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expected output */}
        <div className="bg-gradient-to-r from-bio-green/10 to-emerald-500/10 border border-bio-green/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-green mb-4">
            📈 Expected Output
          </h3>
          <div className="bg-bio-dark/50 rounded-lg p-4">
            <SyntaxHighlighter
              code={`Dataset shape: (1213, 30001)
Breast cancer lines: 47
ATR data: 47 cell lines
ATRIP data: 47 cell lines
ATR vs ATRIP correlation: 0.847
Correlation matrix:
        ATR   ATRIP  CHEK1   RPA1
ATR   1.000   0.847  0.731  0.692
ATRIP 0.847   1.000  0.625  0.634
CHEK1 0.731   0.625  1.000  0.542
RPA1  0.692   0.634  0.542  1.000
ATR-ATRIP correlation: 0.847
Interpretation: Strong correlation
Positive correlation: genes move together
⚠️  Likely biologically significant`}
              language="console"
            />
          </div>
        </div>

        {/* Key insights */}
        <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-red-400 mb-4 text-center">
            🧬 Biological Interpretation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-blue font-semibold mb-2">What r = 0.847 Means</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <span className="text-bio-green font-semibold">84.7%</span> of ATR variance explained by ATRIP</li>
                <li>• Very <span className="text-purple-400 font-semibold">predictable relationship</span></li>
                <li>• Strong evidence of <span className="text-amber-400 font-semibold">functional partnership</span></li>
              </ul>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-purple-400 font-semibold mb-2">Why This Makes Sense</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• ATRIP directly <span className="text-bio-blue font-semibold">activates ATR</span></li>
                <li>• They form a <span className="text-bio-green font-semibold">protein complex</span></li>
                <li>• Both essential for <span className="text-red-400 font-semibold">DNA damage response</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Practice notebook link */}
        <div className="text-center bg-gradient-to-r from-bio-green/10 to-purple-500/10 rounded-xl p-6">
          <p className="text-bio-green font-semibold text-lg mb-4">
            🚀 Practice This Analysis!
          </p>
          <p className="text-gray-300 text-sm mb-4">
            Try the correlation analysis yourself with real DepMap data
          </p>
          <a
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_4/L4_N1_pearson_correlation.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-bio-blue hover:bg-bio-blue/80 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-bio-blue/20"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.95 8.385l-1.446-.695a1.87 1.87 0 00-1.71.099l-.885.443a.59.59 0 01-.615-.009l-1.417-.816a.59.59 0 01-.294-.511V6.21c0-.21.11-.403.294-.511l1.417-.816a.59.59 0 01.615-.009l.885.443c.516.258 1.146.234 1.638-.062l1.518-.912a.59.59 0 01.885.511v2.042a.59.59 0 01-.294.511l-1.59.954z"/>
            </svg>
            Practice Pearson Correlation
          </a>
        </div>
      </div>
    </>
  )
}