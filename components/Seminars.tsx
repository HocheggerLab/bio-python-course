export default function Seminars() {
  const lectureSupport = [
    {
      session: 1,
      title: "Python Fundamentals Lab",
      description: "Variables, calculations, and basic programming concepts",
      notebook: "L1_P1_lab_calculator_toolkit.ipynb",
      status: "available"
    },
    {
      session: 2,
      title: "DNA Analysis Workshop",
      description: "String manipulation and sequence analysis techniques",
      notebook: "L2_P1_practice.ipynb",
      status: "available"
    },
    {
      session: 3,
      title: "Data Processing Lab",
      description: "Functions, dictionaries, and data analysis",
      notebook: "L3_P1_practice.ipynb",
      status: "available"
    },
    {
      session: 4,
      title: "File Operations Workshop",
      description: "Lists, file I/O, and data management",
      notebook: "L4_P1_practice.ipynb",
      status: "coming-soon"
    },
    {
      session: 5,
      title: "Visualization Lab",
      description: "Data visualization and advanced analysis",
      notebook: "L5_P1_practice.ipynb",
      status: "coming-soon"
    }
  ]

  return (
    <section id="seminars" className="py-20 px-6 bg-white/5">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-header">
          Practical <span className="text-gradient-purple">Seminars</span>
        </h2>
        <p className="text-center text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          10 hands-on sessions: 5 lecture support labs + 5 capstone project sessions
        </p>

        {/* Phase 1: Lecture Support Sessions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-purple-400 mb-6 text-center">
            📚 Phase 1: Lecture Support (Sessions 1-5)
          </h3>
          <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto">
            Practice sessions that reinforce each lecture with guided notebook exercises.
            Work through problems step-by-step with instructor support.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lectureSupport.map((session) => (
              <div key={session.session} className={`concept-box ${session.status === 'coming-soon' ? 'opacity-50' : ''}`}>
                <div className="text-center">
                  <div className="text-3xl mb-3">📝</div>
                  <h4 className="text-lg font-bold text-bio-blue mb-2">
                    Session {session.session}
                  </h4>
                  <h5 className="font-semibold text-white mb-3">
                    {session.title}
                  </h5>
                  <p className="text-gray-300 text-sm mb-4">
                    {session.description}
                  </p>
                  {session.status === 'available' ? (
                    <a
                      href={`https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_${session.session}/${session.notebook}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                    >
                      Open Notebook
                    </a>
                  ) : (
                    <div className="bg-gray-600 text-gray-400 py-2 px-4 rounded-lg font-medium">
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phase 2: Project Introduction */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-bio-blue mb-6 text-center">
            🚀 Phase 2: Project Launch (Session 6)
          </h3>
          <div className="concept-box text-center max-w-4xl mx-auto">
            <div className="text-4xl mb-4">🎯</div>
            <h4 className="text-xl font-bold text-bio-blue mb-4">
              Capstone Project Introduction
            </h4>
            <p className="text-gray-300 mb-6">
              Introduction to your final capstone project: building a comprehensive gene analysis pipeline.
              Learn about project requirements, choose your biological dataset, and plan your approach.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h5 className="font-semibold text-bio-yellow mb-2">Session 6 Topics:</h5>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Project overview and requirements</li>
                  <li>• Dataset selection guidance</li>
                  <li>• Pipeline architecture planning</li>
                  <li>• Collaboration and Git workflows</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-bio-yellow mb-2">Deliverables:</h5>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Project proposal draft</li>
                  <li>• Dataset identification</li>
                  <li>• Development environment setup</li>
                  <li>• Timeline and milestone planning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 3: Project Development */}
        <div>
          <h3 className="text-2xl font-bold text-bio-green mb-6 text-center">
            🛠️ Phase 3: Project Development (Sessions 7-10)
          </h3>
          <div className="concept-box text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h4 className="text-xl font-bold text-bio-green mb-4">
              Guided Project Work Sessions
            </h4>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              Four dedicated sessions to build your capstone project with instructor guidance.
              Get help debugging code, implementing features, and preparing your final presentation.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-left">
                <h5 className="font-semibold text-bio-yellow mb-3">Session Focus Areas:</h5>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-bio-green">Session 7:</strong>
                    <span className="text-gray-300 ml-2">Data preprocessing and quality control</span>
                  </div>
                  <div>
                    <strong className="text-bio-green">Session 8:</strong>
                    <span className="text-gray-300 ml-2">Analysis pipeline implementation</span>
                  </div>
                  <div>
                    <strong className="text-bio-green">Session 9:</strong>
                    <span className="text-gray-300 ml-2">Visualization and interpretation</span>
                  </div>
                  <div>
                    <strong className="text-bio-green">Session 10:</strong>
                    <span className="text-gray-300 ml-2">Final debugging and presentation prep</span>
                  </div>
                </div>
              </div>
              <div className="text-left">
                <h5 className="font-semibold text-bio-yellow mb-3">Support Available:</h5>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• One-on-one debugging sessions</li>
                  <li>• Code review and optimization</li>
                  <li>• Statistical analysis guidance</li>
                  <li>• Presentation skills workshop</li>
                  <li>• Peer collaboration time</li>
                  <li>• Final project submission prep</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}