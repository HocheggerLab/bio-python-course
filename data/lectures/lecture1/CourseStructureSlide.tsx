import { 
  SlideTitle, 
  GradientText
} from '@/components/slides'

export function CourseStructureSlide() {
  return (
    <>
      <div className="pb-10">
        <SlideTitle>
          Course <GradientText>Structure</GradientText>
        </SlideTitle>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {[
            { num: "1", title: "Interactive Lectures", desc: "Core concepts with biological examples", icon: "📚" },
            { num: "2", title: "Hands-on Seminars", desc: "Apply concepts to real problems", icon: "💻" },
            { num: "3", title: "Weekly Exercises", desc: "Practice with guided problems", icon: "✏️" },
            { num: "4", title: "Personal Projects", desc: "Apply to your own research", icon: "🚀", highlight: true }
          ].map((item, index) => (
            <div key={index} className="glass-dark rounded-xl p-6 flex items-center">
              <div className={`${item.highlight ? 'bg-bio-yellow/20' : 'bg-bio-blue/20'} rounded-full w-12 h-12 flex items-center justify-center mr-4`}>
                <span className={`font-bold ${item.highlight ? 'text-bio-yellow' : 'text-bio-blue'}`}>{item.num}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
              <div className="text-2xl">{item.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}