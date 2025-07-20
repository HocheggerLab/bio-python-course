export default function CapstoneProject() {
  const features = [
    "Reads multiple sequence files",
    "Finds genes and ORFs",
    "Translates to proteins",
    "Generates analysis reports"
  ]

  return (
    <div className="card group border-bio-yellow">
      <span className="inline-block px-3 py-1 bg-bio-yellow/20 text-bio-yellow text-sm rounded-full font-semibold mb-4">
        Capstone Project
      </span>
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-2">🎯</span>
        <h3 className="text-xl font-bold">Gene Analysis Pipeline</h3>
      </div>
      <p className="text-gray-300 mb-6">
        Combine all your skills to build a complete gene analysis tool that:
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