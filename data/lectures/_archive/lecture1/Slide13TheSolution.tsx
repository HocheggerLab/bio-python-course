import { 
  SlideTitle, 
  ConceptCard
} from '@/components/slides'

export function Slide13TheSolution() {
  return (
    <>
      <div className="pb-8">
        <SlideTitle>
          The <span className="text-bio-green">Solution</span>: Code Planning
        </SlideTitle>
      </div>

      <div className="max-w-6xl mx-auto space-y-8">
        {/* Learning Outcomes */}
        <div className="bg-bio-dark/50 border border-bio-green/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-bio-green mb-4 flex items-center">
            <span className="mr-2">🎯</span>
            Learning Outcomes
          </h3>
          <ul className="grid md:grid-cols-2 gap-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Calculate solvent volumes programmatically
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Use functions to organize code
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Implement loops for repetitive tasks
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Read and write CSV files for data processing
            </li>
          </ul>
        </div>

        {/* Three Steps */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <ConceptCard title="Step 1: Single Calculation" icon="1️⃣" iconColor="blue">
            <div className="space-y-3 text-left">
              <p className="text-gray-300">
                Write code to calculate the solvent volume for <span className="text-bio-yellow font-semibold">one reagent</span>
              </p>
              <div className="bg-bio-dark/70 rounded-lg p-3 font-mono text-sm">
                <p className="text-bio-blue"># Calculate volume</p>
                <p className="text-gray-300">mass = 5.2</p>
                <p className="text-gray-300">mw = 342.3</p>
                <p className="text-gray-300">conc = 0.1</p>
                <p className="text-bio-green">volume = (mass/mw)/conc</p>
              </div>
              <p className="text-sm text-bio-green">
                ✓ Basic arithmetic operations
              </p>
            </div>
          </ConceptCard>

          {/* Step 2 */}
          <ConceptCard title="Step 2: Automate with Loops" icon="2️⃣" iconColor="green">
            <div className="space-y-3 text-left">
              <p className="text-gray-300">
                Use <span className="text-bio-yellow font-mono">for loops</span> and <span className="text-bio-yellow font-mono">functions</span> to process multiple reagents
              </p>
              <div className="bg-bio-dark/70 rounded-lg p-3 font-mono text-sm">
                <p className="text-bio-blue">def calculate_volume(m, mw, c):</p>
                <p className="text-gray-300 pl-4">return (m/mw)/c</p>
                <p className="text-bio-green mt-2">for reagent in reagents:</p>
                <p className="text-gray-300 pl-4">vol = calculate_volume(...)</p>
              </div>
              <p className="text-sm text-bio-green">
                ✓ Functions & iteration
              </p>
            </div>
          </ConceptCard>

          {/* Step 3 */}
          <ConceptCard title="Step 3: Data I/O" icon="3️⃣" iconColor="yellow">
            <div className="space-y-3 text-left">
              <p className="text-gray-300">
                Read reagent data from <span className="text-bio-yellow font-mono">CSV files</span> and export results
              </p>
              <div className="bg-bio-dark/70 rounded-lg p-3 font-mono text-sm">
                <p className="text-bio-blue">import csv</p>
                <p className="text-gray-300">data = read_csv('reagents.csv')</p>
                <p className="text-gray-300">results = process_data(data)</p>
                <p className="text-bio-green">write_csv('volumes.csv', results)</p>
              </div>
              <p className="text-sm text-bio-green">
                ✓ File handling & data processing
              </p>
            </div>
          </ConceptCard>
        </div>

        {/* Time Comparison */}
        <div className="bg-gradient-to-r from-bio-blue/20 to-bio-green/20 rounded-lg p-6 border border-bio-blue/30">
          <div className="flex items-center justify-center mb-4">
            <span className="text-3xl mr-2">⚡</span>
            <h4 className="text-2xl font-bold text-bio-blue">The Power of Automation</h4>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/30">
              <p className="text-red-400 font-bold text-lg">Manual Calculation</p>
              <p className="text-3xl font-bold text-red-400 mt-2">5+ hours</p>
              <p className="text-sm text-gray-400 mt-1">2-3 minutes × 100 reagents</p>
            </div>
            <div className="bg-bio-green/10 rounded-lg p-4 border border-bio-green/30">
              <p className="text-bio-green font-bold text-lg">Python Program</p>
              <p className="text-3xl font-bold text-bio-green mt-2">30 seconds</p>
              <p className="text-sm text-gray-400 mt-1">Write once, run for all</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}