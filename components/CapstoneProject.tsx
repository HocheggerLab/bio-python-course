export default function CapstoneProject() {
  const features = [
    "Explore large gene effect datasets from DepMap",
    "Analyze gene expression patterns across cancer cell lines",
    "Perform correlation analysis to identify genetic dependencies",
    "Create publication-ready visualizations of genomic data"
  ]

  return (
    <div className="card group border-bio-yellow">
      <span className="inline-block px-3 py-1 bg-bio-yellow/20 text-bio-yellow text-sm rounded-full font-semibold mb-4">
        Capstone Project
      </span>
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-2">🧬</span>
        <h3 className="text-xl font-bold">Become a Bioinformatician</h3>
      </div>
      <p className="text-gray-300 mb-6">
        Explore large gene effect and expression data with EDA and correlation analysis:
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