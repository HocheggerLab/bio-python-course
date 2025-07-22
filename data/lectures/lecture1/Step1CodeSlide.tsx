import { 
  SlideTitle
} from '@/components/slides'

export function Step1CodeSlide() {
  return (
    <>
      <div className="pb-8">
        <SlideTitle>
          Step 1: <span className="text-bio-blue">The Code</span>
        </SlideTitle>
      </div>

      <div className="max-w-5xl mx-auto space-y-6">
        {/* Code explanation */}
        <div className="bg-bio-dark/50 border border-bio-blue/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-bio-blue mb-3">
            Single Reagent Calculation
          </h3>
          <p className="text-gray-300">
            Let's solve our problem for <span className="text-bio-yellow font-semibold">one reagent</span> first. 
            We'll calculate how much solvent to add to achieve the desired concentration.
          </p>
        </div>

        {/* The actual code */}
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
            <p className="text-sm text-gray-400 font-mono">calculate_volume.py</p>
          </div>
          <div className="p-4 font-mono text-sm">
            <p className="text-gray-500"># Step 1: Calculate solvent volume for one reagent</p>
            <p className="mt-2"></p>
            <p className="text-gray-500"># Define our variables</p>
            <p className="text-gray-300">mol_weight = <span className="text-bio-yellow">342.3</span>      <span className="text-gray-500"># molecular weight in g/mol</span></p>
            <p className="text-gray-300">weighed_mass = <span className="text-bio-yellow">5.2</span>      <span className="text-gray-500"># mass in mg</span></p>
            <p className="text-gray-300">end_concentration = <span className="text-bio-yellow">0.1</span> <span className="text-gray-500"># desired concentration in mM</span></p>
            <p className="mt-2"></p>
            <p className="text-gray-500"># Calculate the volume needed (in mL)</p>
            <p className="text-gray-300">volume = (weighed_mass / mol_weight) / end_concentration</p>
            <p className="mt-2"></p>
            <p className="text-gray-500"># Print the result with 2 decimal places</p>
            <p className="text-gray-300"><span className="text-bio-blue">print</span>(f<span className="text-bio-green">"Volume needed: {'{'}volume:.2f{'}'} mL"</span>)</p>
          </div>
        </div>

        {/* Output */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="text-bio-green mr-2">▶</span>
            <span className="text-sm text-gray-400">Output:</span>
          </div>
          <pre className="text-bio-green font-mono text-sm">Volume needed: 151.85 mL</pre>
        </div>

        {/* Try it yourself */}
        <div className="bg-gradient-to-r from-bio-blue/20 to-bio-green/20 rounded-lg p-6 border border-bio-blue/30">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-bold text-bio-blue mb-2">Try it Yourself!</h4>
              <p className="text-sm text-gray-300">
                Open this code in Google Colab and experiment with different values
              </p>
            </div>
            <a 
              href="https://colab.research.google.com/github/YOUR_USERNAME/python-for-biologists-nextjs/blob/main/notebooks/lecture01/step1_calculate_volume.ipynb"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bio-blue hover:bg-bio-blue/80 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.95 8.385l-1.446-.695a1.87 1.87 0 00-1.71.099l-.885.443a.59.59 0 01-.615-.009l-1.417-.816a.59.59 0 01-.294-.511V6.21c0-.21.11-.403.294-.511l1.417-.816a.59.59 0 01.615-.009l.885.443c.516.258 1.146.234 1.638-.062l1.518-.912a.59.59 0 01.885.511v2.042a.59.59 0 01-.294.511l-1.59.954z" fill="currentColor"/>
              </svg>
              Open in Colab
            </a>
          </div>
        </div>
{/* Learning outcomes */}
        <div className="bg-bio-dark/50 border border-bio-green/30 rounded-lg p-5">
          <h3 className="text-base font-bold text-bio-green mb-3 flex items-center">
            <span className="mr-2">🎯</span>
            Key Novel Concepts
          </h3>
          <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-300">
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Use Google Colab notebooks for Python programming
            </li>
             <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Run and modify code cells interactively
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Define variables and perform calculations
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Format output using f-strings
            </li>
           
          </ul>
        </div>
        {/* Key concepts */}
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="bg-bio-dark/70 rounded-lg p-4 border-l-4 border-purple-500">
            <h4 className="font-bold text-purple-400 mb-2 text-sm">Google Colab</h4>
            <p className="text-xs text-gray-300">
              Run Python code in your browser - no installation needed!
            </p>
          </div>
          <div className="bg-bio-dark/70 rounded-lg p-4 border-l-4 border-bio-yellow">
            <h4 className="font-bold text-bio-yellow mb-2 text-sm">Variables</h4>
            <p className="text-xs text-gray-300">
              Store values with meaningful names for clarity and reusability
            </p>
          </div>
          <div className="bg-bio-dark/70 rounded-lg p-4 border-l-4 border-bio-green">
            <h4 className="font-bold text-bio-green mb-2 text-sm">f-strings</h4>
            <p className="text-xs text-gray-300">
              Format output with <code className="text-bio-yellow">:.2f</code> for 2 decimal places
            </p>
          </div>
        </div>

        
      </div>
    </>
  )
}