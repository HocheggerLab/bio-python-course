import {
  SlideTitle,
  GradientText
} from '@/components/slides'

export default function Slide04ATRBiologicalContext() {
  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        Biological Context: Why Study <GradientText>ATR</GradientText>?
      </SlideTitle>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* ATR overview */}
        <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-red-400 mb-4 text-center">
            🧬 ATR: The DNA Damage Guardian
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="text-bio-blue font-semibold mb-3">What is ATR?</h4>
              <div className="bg-bio-dark/50 rounded-lg p-4 space-y-2">
                <p className="text-gray-300 text-sm">
                  <span className="text-bio-yellow font-semibold">ATR</span> =
                  <span className="text-bio-blue font-semibold"> Ataxia Telangiectasia and Rad3-related protein</span>
                </p>
                <ul className="text-gray-300 text-sm space-y-1 ml-4">
                  <li>• A <span className="text-purple-400 font-semibold">protein kinase</span> that detects DNA damage</li>
                  <li>• Acts as a <span className="text-bio-green font-semibold">"checkpoint"</span> - stops cell division when DNA is broken</li>
                  <li>• Essential for <span className="text-amber-400 font-semibold">genome stability</span></li>
                  <li>• Part of the <span className="text-red-400 font-semibold">DNA damage response pathway</span></li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="text-bio-green font-semibold mb-3">Why is ATR Important?</h4>
              <div className="bg-bio-dark/50 rounded-lg p-4 space-y-2">
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>
                    <span className="text-bio-blue font-semibold">🛡️ Genome Protection:</span>
                    <br />Prevents cells from dividing with damaged DNA
                  </li>
                  <li>
                    <span className="text-purple-400 font-semibold">🎯 Cancer Vulnerability:</span>
                    <br />Cancer cells often rely heavily on ATR
                  </li>
                  <li>
                    <span className="text-amber-400 font-semibold">💊 Drug Target:</span>
                    <br />ATR inhibitors are being developed as cancer treatments
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ATR pathway diagram */}
        <div className="bg-gradient-to-br from-bio-blue/10 to-purple-500/10 border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-blue mb-4 text-center">
            🔄 ATR Pathway: How It Works
          </h3>

          {/* Simple pathway visualization */}
          <div className="bg-bio-dark/50 rounded-lg p-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 border border-red-500 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-2xl">💥</span>
                </div>
                <h4 className="text-red-400 font-semibold text-sm mb-1">DNA Damage</h4>
                <p className="text-gray-300 text-xs">UV, chemicals,<br />replication stress</p>
              </div>

              <div className="text-bio-blue text-2xl">→</div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-bio-blue/20 border border-bio-blue rounded-lg flex items-center justify-center mb-2">
                  <span className="text-2xl">🔍</span>
                </div>
                <h4 className="text-bio-blue font-semibold text-sm mb-1">ATR Detection</h4>
                <p className="text-gray-300 text-xs">ATRIP helps ATR<br />find the damage</p>
              </div>

              <div className="text-bio-blue text-2xl">→</div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-bio-green/20 border border-bio-green rounded-lg flex items-center justify-center mb-2">
                  <span className="text-2xl">⏸️</span>
                </div>
                <h4 className="text-bio-green font-semibold text-sm mb-1">Cell Cycle Stop</h4>
                <p className="text-gray-300 text-xs">ATR activates<br />CHEK1 checkpoint</p>
              </div>

              <div className="text-bio-blue text-2xl">→</div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-400/20 border border-purple-400 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-2xl">🔧</span>
                </div>
                <h4 className="text-purple-400 font-semibold text-sm mb-1">DNA Repair</h4>
                <p className="text-gray-300 text-xs">Fix damage before<br />cell division</p>
              </div>
            </div>
          </div>
        </div>

        {/* ATR network partners */}
        <div className="bg-gradient-to-br from-amber-400/10 to-bio-yellow/10 border border-amber-400/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-amber-400 mb-4 text-center">
            🤝 ATR's Network Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-green font-semibold mb-3 flex items-center gap-2">
                <span className="text-lg">👥</span>
                Direct Partners
              </h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <span className="text-bio-blue font-semibold">ATRIP</span> - Activates ATR</li>
                <li>• <span className="text-bio-blue font-semibold">CHEK1</span> - Main target kinase</li>
                <li>• <span className="text-bio-blue font-semibold">RPA1</span> - DNA binding protein</li>
                <li>• <span className="text-bio-blue font-semibold">TOPBP1</span> - ATR activator</li>
              </ul>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-purple-400 font-semibold mb-3 flex items-center gap-2">
                <span className="text-lg">🔧</span>
                Repair Machinery
              </h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <span className="text-purple-300">BRCA1</span> - Homologous recombination</li>
                <li>• <span className="text-purple-300">RAD51</span> - DNA strand exchange</li>
                <li>• <span className="text-purple-300">PARP1</span> - DNA break detection</li>
                <li>• <span className="text-purple-300">53BP1</span> - Damage focus formation</li>
              </ul>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                <span className="text-lg">🎯</span>
                Cancer Relevance
              </h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Cancer cells have <span className="text-red-400 font-semibold">damaged DNA</span></li>
                <li>• They depend on <span className="text-bio-blue font-semibold">ATR for survival</span></li>
                <li>• ATR inhibitors cause <span className="text-purple-400 font-semibold">selective cancer death</span></li>
                <li>• <span className="text-amber-400 font-semibold">Synthetic lethality</span> opportunity</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why we're analyzing ATR correlations */}
        <div className="bg-gradient-to-r from-bio-green/10 to-bio-blue/10 border border-bio-green/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-green mb-4 text-center">
            🔬 Why Analyze ATR Correlations in Cancer Data?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-blue font-semibold mb-3">Research Questions</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Which genes show similar dependency patterns to ATR?</li>
                <li>• Can we identify unknown members of the DNA damage response?</li>
                <li>• How does ATR dependency vary across cancer types?</li>
                <li>• Which combinations create synthetic lethal interactions?</li>
              </ul>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-purple-400 font-semibold mb-3">Clinical Applications</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Identify patients most likely to respond to ATR inhibitors</li>
                <li>• Find combination therapy targets</li>
                <li>• Predict drug resistance mechanisms</li>
                <li>• Discover biomarkers for treatment selection</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key takeaway */}
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-5">
          <h4 className="text-purple-400 font-semibold mb-3 text-center">
            💡 Key Insight: From Biology to Data Science
          </h4>
          <div className="text-center space-y-2">
            <p className="text-gray-300 text-sm">
              By understanding <span className="text-bio-blue font-semibold">ATR's biological role</span>, we can interpret our
              <span className="text-purple-400 font-semibold"> correlation analysis</span> meaningfully
            </p>
            <p className="text-gray-300 text-sm">
              High correlations with ATR likely represent <span className="text-bio-green font-semibold">DNA repair pathway members</span> -
              potential therapeutic targets!
            </p>
            <p className="text-bio-yellow font-semibold text-sm mt-3">
              🎯 Biology guides our data analysis interpretation
            </p>
          </div>
        </div>
      </div>
    </>
  )
}