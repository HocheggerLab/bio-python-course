export default function CapstoneProject() {
  const features = [
    "Analyse and quantify microscopy data",
    "Automate NGS sequence analysis",
    "Perform correlation analysis on complex biological data",
    "Work with an LLM to analyse text"
  ]

  return (
    <div className="card group border-bio-yellow">
      <span className="inline-block px-3 py-1 bg-bio-yellow/20 text-bio-yellow text-sm rounded-full font-semibold mb-4">
        Capstone Project
      </span>
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-2">🎯</span>
        <h3 className="text-xl font-bold">Apply what you learned to a project of your choice</h3>
      </div>
      <p className="text-gray-300 mb-6">
        Combine all your skills to:
      </p>
      <ul className="space-y-2 text-gray-300">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-bio-yellow mr-2">★</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}