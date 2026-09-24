'use client'

import {
  SlideTitle,
  GradientText
} from '@/components/slides'

export default function Slide10DataTypes() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <SlideTitle size="large" className="mb-6 text-center">
        Understanding <GradientText>Data Types</GradientText> 📊
      </SlideTitle>

      <p className="text-gray-300 text-center mb-8 text-lg">
        Different data types require different visualization approaches
      </p>

      {/* Main Classification */}
      <div className="bg-gradient-to-r from-purple-500/20 to-bio-blue/20 border border-purple-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">
          🎯 Two Main Categories of Data
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-bio-dark/50 rounded-lg p-4 border border-bio-blue/30 text-center">
            <div className="text-4xl mb-2">📏</div>
            <h4 className="text-xl font-bold text-bio-blue mb-2">Continuous Data</h4>
            <p className="text-gray-300 text-sm">
              Can take any value within a range
            </p>
          </div>
          <div className="bg-bio-dark/50 rounded-lg p-4 border border-bio-green/30 text-center">
            <div className="text-4xl mb-2">🔢</div>
            <h4 className="text-xl font-bold text-bio-green mb-2">Discrete Data</h4>
            <p className="text-gray-300 text-sm">
              Can only take specific, countable values
            </p>
          </div>
        </div>
      </div>

      {/* Continuous Data */}
      <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-blue/30 rounded-xl p-6 mb-6">
        <div className="text-center mb-4">
          <div className="text-4xl mb-2">📏</div>
          <h3 className="text-2xl font-bold text-bio-blue">Continuous Data</h3>
          <p className="text-gray-400 text-sm italic">Measurements on a continuous scale</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-bio-blue/10 rounded-lg p-4">
            <h4 className="text-bio-yellow font-semibold mb-3">Characteristics:</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Can take any value in a range</li>
              <li>• Measured, not counted</li>
              <li>• Infinitely divisible (in theory)</li>
              <li>• Represented as decimals/floats</li>
            </ul>
          </div>

          <div className="bg-bio-blue/10 rounded-lg p-4">
            <h4 className="text-bio-yellow font-semibold mb-3">Biological Examples:</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• <strong>Gene expression</strong>: 5.234 TPM</li>
              <li>• <strong>Temperature</strong>: 37.5°C</li>
              <li>• <strong>Protein concentration</strong>: 2.8 mg/mL</li>
              <li>• <strong>Cell diameter</strong>: 12.3 μm</li>
              <li>• <strong>pH level</strong>: 7.42</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 bg-purple-500/10 rounded-lg p-3">
          <p className="text-purple-400 text-sm text-center">
            <strong>Best plots:</strong> Histograms, scatter plots, line plots, box plots
          </p>
        </div>
      </div>

      {/* Discrete Data - Split into two types */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Quantitative Discrete */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-green/30 rounded-xl p-6">
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">🔢</div>
            <h3 className="text-xl font-bold text-bio-green">Discrete Quantitative</h3>
            <p className="text-gray-400 text-sm italic">Countable numerical values</p>
          </div>

          <div className="space-y-4">
            <div className="bg-bio-green/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">Characteristics:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Whole numbers only</li>
                <li>• Counted, not measured</li>
                <li>• Cannot be subdivided</li>
                <li>• Still numerical</li>
              </ul>
            </div>

            <div className="bg-bio-green/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">Examples:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Cell count</strong>: 1,000 cells</li>
                <li>• <strong>Number of mutations</strong>: 15</li>
                <li>• <strong>Chromosome number</strong>: 46</li>
                <li>• <strong>Colony count</strong>: 234</li>
                <li>• <strong>Gene copy number</strong>: 3</li>
              </ul>
            </div>

            <div className="bg-purple-500/10 rounded-lg p-3">
              <p className="text-purple-400 text-sm text-center">
                <strong>Best plots:</strong> Bar charts, count plots
              </p>
            </div>
          </div>
        </div>

        {/* Qualitative (Categorical) */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-amber-400/30 rounded-xl p-6">
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">🏷️</div>
            <h3 className="text-xl font-bold text-amber-400">Discrete Qualitative</h3>
            <p className="text-gray-400 text-sm italic">Categories or labels</p>
          </div>

          <div className="space-y-4">
            <div className="bg-amber-400/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">Characteristics:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Named categories</li>
                <li>• No numerical meaning</li>
                <li>• Can be ordered or unordered</li>
                <li>• Represented as strings</li>
              </ul>
            </div>

            <div className="bg-amber-400/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">Examples:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Cancer lineage</strong>: Breast, Lung, Blood</li>
                <li>• <strong>Cell type</strong>: Neuron, Astrocyte, Glia</li>
                <li>• <strong>Treatment group</strong>: Control, Drug A, Drug B</li>
                <li>• <strong>Genotype</strong>: WT, Mutant, Knockout</li>
                <li>• <strong>Disease status</strong>: Healthy, Diseased</li>
              </ul>
            </div>

            <div className="bg-purple-500/10 rounded-lg p-3">
              <p className="text-purple-400 text-sm text-center">
                <strong>Best plots:</strong> Bar charts, box plots (grouped)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why This Matters */}
      <div className="bg-gradient-to-r from-bio-blue to-purple-600 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-3 text-center">
          💡 Why Data Type Matters
        </h3>
        <div className="grid md:grid-cols-3 gap-4 text-white/90 text-sm">
          <div className="bg-white/10 rounded-lg p-3">
            <p className="font-semibold mb-1">🎨 Choose the Right Plot</p>
            <p className="text-xs">Histograms for continuous, bar charts for categorical</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <p className="font-semibold mb-1">📊 Statistical Tests</p>
            <p className="text-xs">Different data types need different tests (t-test vs chi-square)</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <p className="font-semibold mb-1">🔍 Data Cleaning</p>
            <p className="text-xs">Identify errors when values don't match expected type</p>
          </div>
        </div>
      </div>
    </div>
  )
}
