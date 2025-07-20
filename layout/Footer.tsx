import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <p className="font-bold text-gradient">Python for Biologists</p>
              <a 
                href="https://www.sussex.ac.uk/schools/life-sciences/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white opacity-50 rounded hover:scale-110 hover:opacity-100 transition-transform duration-200"
              >
                <Image 
                  src="/sussex.png" 
                  alt="University of Sussex" 
                  width={120}
                  height={30}
                  className="h-8 w-auto hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
            <p className="text-gray-400">© Helfrid Hochegger 2025 | All materials freely available</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex gap-4">
              <a href="mailto:hh65@sussex.ac.uk" className="nav-link">
                📧 Contact
              </a>
              <a href="https://github.com/hochegger-lab/python-for-biologists" className="nav-link">
                💻 GitHub
              </a>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="https://bsky.app/profile/hochegger.bsky.social" 
                target="_blank" 
                rel="noopener noreferrer"
                className="nav-link"
              >
                🦋 Bluesky
              </a>
              <a 
                href="https://linkedin.com/in/helfrid-hochegger" 
                target="_blank" 
                rel="noopener noreferrer"
                className="nav-link"
              >
                💼 LinkedIn
              </a>
              <a 
                href="/instructor" 
                className="nav-link"
              >
                👨‍🏫 Instructor
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}