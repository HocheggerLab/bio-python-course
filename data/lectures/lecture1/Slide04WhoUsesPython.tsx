import { 
  SlideTitle, 
  GradientText
} from '@/components/slides'

export function Slide04WhoUsesPython() {
  return (
    <>
      <div className="pb-10">
        <SlideTitle>
          Who Uses <GradientText>Python</GradientText>?
        </SlideTitle>
      </div>

      <p className="text-2xl text-center text-gray-300 mb-12">
        The same tools you'll learn power the world's biggest companies
      </p>

      {/* Company Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto mb-12">
        {[
          { name: "Netflix", color: "hover:border-red-600", desc: "Streaming & recommendations" },
          { name: "Instagram", color: "hover:border-pink-600", desc: "Backend & ML" },
          { name: "NASA", color: "hover:border-blue-600", desc: "Scientific computing" },
          { name: "Spotify", color: "hover:border-green-600", desc: "Music algorithms" },
          { name: "OpenAI", color: "hover:border-bio-blue", desc: "ChatGPT & AI" }
        ].map((company, index) => (
          <div key={index} className="group">
            <div className={`glass-dark rounded-2xl p-6 h-full flex flex-col items-center justify-center ${company.color} border-2 border-transparent transition-all hover:scale-105`}>
              <div className="h-14 mb-3 flex items-center justify-center">
                <span className="text-2xl font-bold">{company.name}</span>
              </div>
              <p className="text-xs text-gray-400 text-center">{company.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Two Section Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div>
          <h3 className="text-3xl font-bold text-center mb-6">
            <span className="text-gradient-purple">AI & Machine Learning</span>
          </h3>
          <div className="space-y-3">
            {[
              { icon: "🤖", title: "Deep Learning", desc: "TensorFlow, PyTorch, Keras" },
              { icon: "📊", title: "Data Science", desc: "Pandas, NumPy, Scikit-learn" },
              { icon: "🔍", title: "Computer Vision", desc: "OpenCV, image analysis, medical imaging" }
            ].map((item, index) => (
              <div key={index} className="glass-dark rounded-xl p-4 flex items-center">
                <span className="text-2xl mr-4">{item.icon}</span>
                <div>
                  <h4 className="font-bold text-bio-yellow">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-center mb-6">
            <span className="text-bio-green">Biology & Science</span>
          </h3>
          <div className="space-y-3">
            {[
              { icon: "🧬", title: "Bioinformatics", desc: "BioPython, sequence analysis, BLAST" },
              { icon: "💊", title: "Drug Discovery", desc: "Molecular modeling, protein folding" },
              { icon: "🔬", title: "Lab Automation", desc: "Instrument control, data pipelines" }
            ].map((item, index) => (
              <div key={index} className="glass-dark rounded-xl p-4 flex items-center">
                <span className="text-2xl mr-4">{item.icon}</span>
                <div>
                  <h4 className="font-bold text-bio-green">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}