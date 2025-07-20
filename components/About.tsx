export default function About() {
  const learningOutcomes = [
    "Python programming fundamentals",
    "Biological sequence analysis",
    "Data processing and visualization",
    "Automation of lab calculations"
  ]

  const prerequisites = [
    "No programming experience needed",
    "Basic biology knowledge",
    "A Google account (for Colab)",
    "Enthusiasm to learn!"
  ]

  return (
    <section id="about" className="py-20 px-6 bg-white/5">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-header">
          About the <span className="text-gradient">Course</span>
        </h2>
        <div className="concept-box space-y-6">
          <p className="text-lg leading-relaxed">
            This course is specifically designed for Year 3 students in the Life Sciences from the University of Sussex who want to add computational skills to their toolkit.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-bio-blue mb-3">What You'll Learn</h3>
              <ul className="space-y-2">
                {learningOutcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-bio-green mr-2">✓</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-bio-blue mb-3">Prerequisites</h3>
              <ul className="space-y-2">
                {prerequisites.map((prerequisite, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-bio-green mr-2">✓</span>
                    <span>{prerequisite}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}