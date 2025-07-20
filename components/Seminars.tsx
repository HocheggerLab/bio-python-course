export default function Seminars() {
  const expectedTopics = [
    "Genome annotation workshop",
    "Protein structure analysis",
    "Phylogenetic tree construction",
    "RNA-seq data processing",
    "Statistical analysis in biology"
  ]

  return (
    <section id="seminars" className="py-20 px-6 bg-white/5">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-header">
          Practical <span className="text-gradient-purple">Seminars</span>
        </h2>
        <p className="text-center text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Hands-on coding sessions where you'll work on real biological problems
          with support from instructors and peers
        </p>
        <div className="concept-box text-center">
          <div className="text-6xl mb-4">🚧</div>
          <h3 className="text-2xl font-bold text-bio-yellow mb-4">Coming Soon!</h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Practical seminars will be added throughout the course. Each seminar
            will focus on applying lecture concepts to solve real research problems.
          </p>
          <div className="mt-6 text-gray-400">
            <p>Expected topics include:</p>
            <ul className="mt-2 space-y-1">
              {expectedTopics.map((topic, index) => (
                <li key={index}>• {topic}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}