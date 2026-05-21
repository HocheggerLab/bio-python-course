'use client'

import {
  SlideTitle,
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'
import Image from 'next/image'

export default function Slide12Aesthetics() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <SlideTitle size="large" className="mb-6 text-center">
        Visual <GradientText>Aesthetics</GradientText> 🎨
      </SlideTitle>

      <p className="text-gray-300 text-center mb-6 text-lg">
        Using visual properties to encode data dimensions
      </p>

      {/* Introduction */}
      <div className="bg-gradient-to-r from-purple-500/20 to-bio-blue/20 border border-purple-500/30 rounded-xl p-4 mb-6">
        <h3 className="text-lg font-bold text-purple-400 mb-2 text-center">
          What are Aesthetics?
        </h3>
        <p className="text-gray-300 text-center text-sm">
          Aesthetics are <strong>visual properties</strong> (position, color, size, shape) that we map to
          <strong> data variables</strong> to communicate information. Each aesthetic channel encodes a different
          dimension of your data.
        </p>
      </div>

      {/* Position */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-blue/30 rounded-xl p-6">
          <div className="text-center mb-4">
            <div className="flex justify-center mb-3">
              <Image src="/aesthetics/position.svg" alt="Position aesthetic" width={140} height={95} />
            </div>
            <h3 className="text-xl font-bold text-bio-blue mb-2">Position (x, y)</h3>
            <p className="text-gray-400 text-sm italic">Most powerful aesthetic - use for key variables</p>
          </div>

          <div className="space-y-4">
            <div className="bg-bio-blue/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">Characteristics:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Most accurate perception</li>
                <li>• Two independent channels (x and y)</li>
                <li>• Best for continuous data</li>
                <li>• Primary way to show relationships</li>
              </ul>
            </div>

            <div className="bg-bio-green/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">Biological Example:</h4>
              <p className="text-gray-300 text-sm mb-2">
                Gene expression scatter plot
              </p>
              <SyntaxHighlighter
                code={`fig, ax = plt.subplots()
ax.scatter(df['BRCA1'], df['TP53'])
# x-position = BRCA1 expression
# y-position = TP53 expression`}
                language="python"
              />
            </div>
          </div>
        </div>

        {/* Color */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-green/30 rounded-xl p-6">
          <div className="text-center mb-4">
            <div className="flex justify-center mb-3">
              <Image src="/aesthetics/color.svg" alt="Color aesthetic" width={140} height={95} />
            </div>
            <h3 className="text-xl font-bold text-bio-green mb-2">Color</h3>
            <p className="text-gray-400 text-sm italic">Add categorical or continuous dimensions</p>
          </div>

          <div className="space-y-4">
            <div className="bg-bio-blue/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">Two Types:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Categorical</strong>: Distinct hues for groups</li>
                <li>• <strong>Continuous</strong>: Color gradient for values</li>
                <li>• Draws attention effectively</li>
                <li>• 3-7 colors max for categories</li>
              </ul>
            </div>

            <div className="bg-bio-green/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">Biological Example:</h4>
              <p className="text-gray-300 text-sm mb-2">
                Color by cancer lineage
              </p>
              <SyntaxHighlighter
                code={`fig, ax = plt.subplots()
for lineage in df['lineage'].unique():
    subset = df[df['lineage'] == lineage]
    ax.scatter(subset['x'], subset['y'],
               label=lineage)
ax.legend()`}
                language="python"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Size and Shape */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-purple-500/30 rounded-xl p-6">
          <div className="text-center mb-4">
            <div className="flex justify-center mb-3">
              <Image src="/aesthetics/size.svg" alt="Size aesthetic" width={140} height={95} />
            </div>
            <h3 className="text-xl font-bold text-purple-400 mb-2">Size</h3>
            <p className="text-gray-400 text-sm italic">Encode magnitude or importance</p>
          </div>

          <div className="space-y-4">
            <div className="bg-bio-blue/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">Characteristics:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Best for continuous data</li>
                <li>• Shows relative magnitude</li>
                <li>• Can add a 3rd dimension</li>
                <li>• Avoid extreme size differences</li>
              </ul>
            </div>

            <div className="bg-bio-green/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">Biological Example:</h4>
              <p className="text-gray-300 text-sm mb-2">
                Bubble plot: size = cell count
              </p>
              <SyntaxHighlighter
                code={`fig, ax = plt.subplots()
ax.scatter(df['gene_A'], df['gene_B'],
           s=df['cell_count']/10,
           alpha=0.6)
# size encodes cell count`}
                language="python"
              />
            </div>
          </div>
        </div>

        {/* Shape */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-amber-400/30 rounded-xl p-6">
          <div className="text-center mb-4">
            <div className="flex justify-center mb-3">
              <Image src="/aesthetics/shape.svg" alt="Shape aesthetic" width={140} height={95} />
            </div>
            <h3 className="text-xl font-bold text-amber-400 mb-2">Shape</h3>
            <p className="text-gray-400 text-sm italic">Distinguish categories (limit to 3-5)</p>
          </div>

          <div className="space-y-4">
            <div className="bg-bio-blue/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">Characteristics:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Only for categorical data</li>
                <li>• Harder to distinguish than color</li>
                <li>• Maximum 5-6 different shapes</li>
                <li>• Combine with color for clarity</li>
              </ul>
            </div>

            <div className="bg-bio-green/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">Biological Example:</h4>
              <p className="text-gray-300 text-sm mb-2">
                Different markers for treatment groups
              </p>
              <SyntaxHighlighter
                code={`markers = {'Control': 'o',
          'Drug_A': 's',
          'Drug_B': '^'}
for treatment, marker in markers.items():
    subset = df[df['treatment'] == treatment]
    ax.scatter(subset['x'], subset['y'],
               marker=marker, label=treatment)`}
                language="python"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Line Width and Line Type */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-blue/30 rounded-xl p-6">
          <div className="text-center mb-4">
            <div className="flex justify-center mb-3">
              <Image src="/aesthetics/linewidth.svg" alt="Line width aesthetic" width={140} height={95} />
            </div>
            <h3 className="text-xl font-bold text-bio-blue mb-2">Line Width</h3>
            <p className="text-gray-400 text-sm italic">Emphasize importance or magnitude</p>
          </div>

          <div className="space-y-4">
            <div className="bg-bio-blue/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">Characteristics:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Shows importance/weight</li>
                <li>• Can encode continuous data</li>
                <li>• Use subtle variations</li>
                <li>• Effective for network graphs</li>
              </ul>
            </div>

            <div className="bg-bio-green/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">Biological Example:</h4>
              <p className="text-gray-300 text-sm mb-2">
                Line thickness by confidence
              </p>
              <SyntaxHighlighter
                code={`fig, ax = plt.subplots()
ax.plot(time, group_A, linewidth=3,
        label='High confidence')
ax.plot(time, group_B, linewidth=1,
        label='Low confidence')`}
                language="python"
              />
            </div>
          </div>
        </div>

        {/* Line Type */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-green/30 rounded-xl p-6">
          <div className="text-center mb-4">
            <div className="flex justify-center mb-3">
              <Image src="/aesthetics/linetype.svg" alt="Line type aesthetic" width={140} height={95} />
            </div>
            <h3 className="text-xl font-bold text-bio-green mb-2">Line Type</h3>
            <p className="text-gray-400 text-sm italic">Distinguish categories in line plots</p>
          </div>

          <div className="space-y-4">
            <div className="bg-bio-blue/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">Characteristics:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Solid, dashed, dotted, dash-dot</li>
                <li>• For categorical groups</li>
                <li>• Maximum 3-4 different types</li>
                <li>• Combine with color</li>
              </ul>
            </div>

            <div className="bg-bio-green/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">Biological Example:</h4>
              <p className="text-gray-300 text-sm mb-2">
                Different line styles for conditions
              </p>
              <SyntaxHighlighter
                code={`fig, ax = plt.subplots()
ax.plot(time, control, linestyle='-',
        label='Control')
ax.plot(time, treated, linestyle='--',
        label='Treated')
ax.plot(time, predicted, linestyle=':',
        label='Predicted')`}
                language="python"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Aesthetic Hierarchy */}
      <div className="bg-gradient-to-r from-bio-blue to-purple-600 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-3 text-center">
          🎯 Aesthetic Effectiveness Hierarchy
        </h3>
        <div className="grid md:grid-cols-3 gap-4 text-white/90 text-sm">
          <div className="bg-white/10 rounded-lg p-3">
            <p className="font-semibold mb-1">Most Effective:</p>
            <p className="text-xs">Position (x, y) - Use for your most important variables</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <p className="font-semibold mb-1">Moderately Effective:</p>
            <p className="text-xs">Color, Size - Good for adding dimensions</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <p className="font-semibold mb-1">Less Effective:</p>
            <p className="text-xs">Shape, Line type - Use sparingly, combine with color</p>
          </div>
        </div>
      </div>
    </div>
  )
}
