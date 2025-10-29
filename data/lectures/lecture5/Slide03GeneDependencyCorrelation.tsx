import {
  SlideTitle,
  GradientText
} from '@/components/slides'

export default function Slide03GeneDependencyCorrelation() {
  // Fictional data for ATR vs ATRIP (high correlation, r=0.85)
  const atrAtrip = [
    {x: -3.2, y: -3.0}, {x: -2.8, y: -2.9}, {x: -4.1, y: -3.8}, {x: -1.5, y: -1.8},
    {x: -3.7, y: -3.4}, {x: -2.1, y: -2.3}, {x: -4.5, y: -4.2}, {x: -1.9, y: -2.1},
    {x: -3.4, y: -3.2}, {x: -2.6, y: -2.8}, {x: -3.9, y: -3.6}, {x: -1.7, y: -1.9},
    {x: -3.1, y: -2.9}, {x: -2.4, y: -2.6}, {x: -4.3, y: -4.0}, {x: -2.0, y: -2.2},
    {x: -3.6, y: -3.3}, {x: -2.9, y: -3.1}, {x: -1.6, y: -1.7}, {x: -3.8, y: -3.5}
  ]

  // Fictional data for ATR vs COL1A1 (no correlation, r=0.02)
  const atrCol1a1 = [
    {x: -3.2, y: -0.5}, {x: -2.8, y: -1.8}, {x: -4.1, y: -0.9}, {x: -1.5, y: -2.1},
    {x: -3.7, y: -0.3}, {x: -2.1, y: -1.6}, {x: -4.5, y: -2.3}, {x: -1.9, y: -0.7},
    {x: -3.4, y: -1.9}, {x: -2.6, y: -0.4}, {x: -3.9, y: -1.2}, {x: -1.7, y: -2.0},
    {x: -3.1, y: -0.8}, {x: -2.4, y: -1.5}, {x: -4.3, y: -0.6}, {x: -2.0, y: -1.7},
    {x: -3.6, y: -1.1}, {x: -2.9, y: -2.2}, {x: -1.6, y: -0.9}, {x: -3.8, y: -1.4}
  ]

  // Fictional data for ATR vs MDM2 (negative correlation, r=-0.72)
  const atrMdm2 = [
    {x: -3.2, y: -0.3}, {x: -2.8, y: -0.8}, {x: -4.1, y: -0.2}, {x: -1.5, y: -2.8},
    {x: -3.7, y: -0.4}, {x: -2.1, y: -1.9}, {x: -4.5, y: -0.1}, {x: -1.9, y: -2.3},
    {x: -3.4, y: -0.5}, {x: -2.6, y: -1.2}, {x: -3.9, y: -0.3}, {x: -1.7, y: -2.6},
    {x: -3.1, y: -0.6}, {x: -2.4, y: -1.5}, {x: -4.3, y: -0.2}, {x: -2.0, y: -2.1},
    {x: -3.6, y: -0.4}, {x: -2.9, y: -1.0}, {x: -1.6, y: -2.7}, {x: -3.8, y: -0.3}
  ]

  const ScatterPlot = ({ data, title, color, correlation }: {
    data: {x: number, y: number}[],
    title: string,
    color: string,
    correlation: string
  }) => (
    <div className="bg-bio-dark/50 rounded-lg p-4">
      <h4 className="font-semibold mb-3 text-center text-sm" style={{color}}>
        {title} (r = {correlation})
      </h4>
      <div className="relative">
        {/* SVG scatter plot */}
        <svg width="280" height="200" className="mx-auto">
          {/* Grid lines */}
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#374151" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="280" height="200" fill="url(#grid)" opacity="0.3" />

          {/* Axes */}
          <line x1="40" y1="160" x2="260" y2="160" stroke="#6B7280" strokeWidth="1"/>
          <line x1="40" y1="160" x2="40" y2="20" stroke="#6B7280" strokeWidth="1"/>

          {/* Axis labels */}
          <text x="150" y="190" textAnchor="middle" fill="#9CA3AF" fontSize="12">ATR Dependency</text>
          <text x="15" y="95" textAnchor="middle" fill="#9CA3AF" fontSize="12" transform="rotate(-90, 15, 95)">
            {title.includes('ATRIP') ? 'ATRIP' : 'COL1A1'} Dependency
          </text>

          {/* Data points */}
          {data.map((point, i) => {
            const plotX = 40 + ((point.x + 5) / 5) * 220  // Scale x from -5 to 0 range
            const plotY = 160 - ((point.y + 5) / 5) * 140  // Scale y from -5 to 0 range
            return (
              <circle
                key={i}
                cx={plotX}
                cy={plotY}
                r="3"
                fill={color}
                opacity="0.8"
              />
            )
          })}

          {/* Trend line for correlated data */}
          {correlation === '0.85' && (
            <line
              x1="50"
              y1="150"
              x2="250"
              y2="30"
              stroke={color}
              strokeWidth="2"
              opacity="0.6"
            />
          )}
          {correlation === '-0.72' && (
            <line
              x1="50"
              y1="30"
              x2="250"
              y2="150"
              stroke={color}
              strokeWidth="2"
              opacity="0.6"
            />
          )}

          {/* Scale markers */}
          <text x="40" y="175" textAnchor="middle" fill="#6B7280" fontSize="10">-5</text>
          <text x="150" y="175" textAnchor="middle" fill="#6B7280" fontSize="10">-2.5</text>
          <text x="260" y="175" textAnchor="middle" fill="#6B7280" fontSize="10">0</text>

          <text x="25" y="165" textAnchor="middle" fill="#6B7280" fontSize="10">-5</text>
          <text x="25" y="95" textAnchor="middle" fill="#6B7280" fontSize="10">-2.5</text>
          <text x="25" y="25" textAnchor="middle" fill="#6B7280" fontSize="10">0</text>
        </svg>
      </div>
    </div>
  )

  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        Understanding <GradientText>Gene Dependency</GradientText> Correlation
      </SlideTitle>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Core concept */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-purple-500/10 border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-bio-blue mb-4 text-center">
            🤝 What Are We Measuring?
          </h3>
          <p className="text-gray-300 text-center text-lg mb-3">
            <span className="text-bio-yellow font-semibold">Gene Dependency Correlation</span> =
            How <span className="text-purple-400 font-semibold">similarly</span> two genes behave across different cancer cell lines
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-bio-green/10 border border-bio-green/30 rounded-lg p-3">
              <p className="text-bio-green font-semibold text-sm mb-1">✓ Positive Correlation</p>
              <p className="text-gray-300 text-xs">
                Cells that depend on Gene X <span className="text-bio-yellow">also depend</span> on Gene Y
              </p>
            </div>
            <div className="bg-red-400/10 border border-red-400/30 rounded-lg p-3">
              <p className="text-red-400 font-semibold text-sm mb-1">✗ Negative Correlation</p>
              <p className="text-gray-300 text-xs">
                Cells that <span className="text-red-400">do not need</span> Gene X <span className="text-bio-yellow">need</span> Gene Y and vice versa
              </p>
            </div>
          </div>
        </div>

        {/* Scatter plot comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* High positive correlation */}
          <div className="bg-gradient-to-br from-bio-green/10 to-emerald-500/10 border border-bio-green/30 rounded-xl p-5">
            <h3 className="text-base font-semibold text-bio-green mb-3 text-center">
              ✓ Positive: ATR vs ATRIP
            </h3>
            <ScatterPlot
              data={atrAtrip}
              title="ATR vs ATRIP"
              color="#10B981"
              correlation="0.85"
            />
            <div className="mt-3 bg-bio-dark/30 rounded-lg p-2">
              <p className="text-bio-green text-xs font-semibold mb-1">Cells that depend on ATR also depend on ATRIP</p>
              <ul className="text-gray-300 text-xs space-y-1">
                <li>• Upward diagonal trend</li>
                <li>• Both genes work together</li>
                <li>• DNA repair partners</li>
              </ul>
            </div>
          </div>

          {/* Negative correlation */}
          <div className="bg-gradient-to-br from-red-400/10 to-pink-500/10 border border-red-400/30 rounded-xl p-5">
            <h3 className="text-base font-semibold text-red-400 mb-3 text-center">
              ✗ Negative: ATR vs MDM2
            </h3>
            <ScatterPlot
              data={atrMdm2}
              title="ATR vs MDM2"
              color="#F87171"
              correlation="-0.72"
            />
            <div className="mt-3 bg-bio-dark/30 rounded-lg p-2">
              <p className="text-red-400 text-xs font-semibold mb-1">Cells that don't need ATR need MDM2 and vice versa</p>
              <ul className="text-gray-300 text-xs space-y-1">
                <li>• Downward diagonal trend</li>
                <li>• Opposite dependencies</li>
                <li>• Compensatory pathways</li>
              </ul>
            </div>
          </div>

          {/* No correlation */}
          <div className="bg-gradient-to-br from-amber-400/10 to-yellow-500/10 border border-amber-400/30 rounded-xl p-5">
            <h3 className="text-base font-semibold text-amber-400 mb-3 text-center">
              ○ None: ATR vs COL1A1
            </h3>
            <ScatterPlot
              data={atrCol1a1}
              title="ATR vs COL1A1"
              color="#F59E0B"
              correlation="0.02"
            />
            <div className="mt-3 bg-bio-dark/30 rounded-lg p-2">
              <p className="text-amber-400 text-xs font-semibold mb-1">No relationship between genes</p>
              <ul className="text-gray-300 text-xs space-y-1">
                <li>• Random scatter pattern</li>
                <li>• Independent functions</li>
                <li>• Different pathways</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Data points explanation */}
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4 text-center">
            📊 What Each Point Represents
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-blue font-semibold text-sm mb-2">Each Dot = One Cancer Cell Line</h4>
              <p className="text-gray-300 text-xs">
                20 different breast cancer cell lines from our DepMap dataset
              </p>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-green font-semibold text-sm mb-2">X-Axis = ATR Dependency</h4>
              <p className="text-gray-300 text-xs">
                More negative = more essential for cell survival
              </p>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-amber-400 font-semibold text-sm mb-2">Y-Axis = Other Gene</h4>
              <p className="text-gray-300 text-xs">
                ATRIP (partner) or COL1A1 (unrelated)
              </p>
            </div>
          </div>
        </div>

        {/* Key takeaway */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-bio-green/10 border border-bio-blue/30 rounded-xl p-5">
          <h4 className="text-bio-blue font-semibold mb-3 text-center">
            💡 Key Insight: Correlation = Functional Relationship
          </h4>
          <div className="text-center space-y-2">
            <p className="text-gray-300 text-sm">
              <span className="text-bio-green font-semibold">Positive correlation (+0.85)</span> = Genes co-essential, work together
            </p>
            <p className="text-gray-300 text-sm">
              <span className="text-red-400 font-semibold">Negative correlation (-0.72)</span> = Opposite patterns, compensatory pathways
            </p>
            <p className="text-gray-300 text-sm">
              <span className="text-amber-400 font-semibold">No correlation (0.02)</span> = Genes function independently
            </p>
            <p className="text-bio-yellow font-semibold text-sm mt-3">
              🎯 This is how we discover biological networks from data!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}