'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

const useScrollToSection = () => {
  const router = useRouter()
  const pathname = usePathname()

  const scrollToSection = (sectionId: string) => {
    // If we're not on the homepage, navigate there first
    if (pathname !== '/') {
      router.push(`/#${sectionId}`)
      return
    }

    // If we're on the homepage, scroll to the section
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 80 // Approximate navbar height
      const elementPosition = element.offsetTop - navbarHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return scrollToSection
}

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [isLecturesOpen, setIsLecturesOpen] = useState(false)
  const resourcesRef = useRef<HTMLDivElement>(null)
  const lecturesRef = useRef<HTMLDivElement>(null)
  const scrollToSection = useScrollToSection()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setIsResourcesOpen(false)
      }
      if (lecturesRef.current && !lecturesRef.current.contains(event.target as Node)) {
        setIsLecturesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="fixed w-full top-0 z-50 glass-dark border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🧬</span>
            <Link href="/" className="text-xl font-bold text-gradient">
              Python for Biologists
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            {/* Lectures Dropdown */}
            <div className="relative mr-8" ref={lecturesRef}>
              <button
                onClick={() => setIsLecturesOpen(!isLecturesOpen)}
                className="nav-link flex items-center gap-1"
              >
                Lectures
                <svg className={`w-4 h-4 transition-transform ${isLecturesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isLecturesOpen && (
                <div className="absolute top-full mt-2 w-48 bg-bio-dark/95 backdrop-blur-md border border-bio-blue/20 rounded-lg shadow-lg overflow-hidden">
                  <Link href="/lectures/1" className="block px-4 py-3 text-gray-300 hover:bg-bio-blue/20 hover:text-bio-blue transition-colors">
                    Lecture 1: Introduction
                  </Link>
                  <Link href="/lectures/2" className="block px-4 py-3 text-gray-300 hover:bg-bio-blue/20 hover:text-bio-blue transition-colors">
                    Lecture 2: Strings & DNA
                  </Link>
                  <Link href="/lectures/3" className="block px-4 py-3 text-gray-300 hover:bg-bio-blue/20 hover:text-bio-blue transition-colors">
                    Lecture 3: Data Analysis
                  </Link>
                  <Link href="/lectures/4" className="block px-4 py-3 text-gray-300 hover:bg-bio-blue/20 hover:text-bio-blue transition-colors">
                    Lecture 4: Statistics & Visualization
                  </Link>
                  <Link href="/lectures/5" className="block px-4 py-3 text-gray-300 hover:bg-bio-blue/20 hover:text-bio-blue transition-colors">
                    Lecture 5: Advanced Statistics
                  </Link>
                </div>
              )}
            </div>

            <button onClick={() => scrollToSection('specialization-tracks')} className="nav-link mr-8">Specialisations</button>
            <button onClick={() => scrollToSection('seminars')} className="nav-link mr-8">Seminars</button>

            {/* Resources Dropdown */}
            <div className="relative mr-8" ref={resourcesRef}>
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="nav-link flex items-center gap-1"
              >
                Resources
                <svg className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isResourcesOpen && (
                <div className="absolute top-full mt-2 w-48 bg-bio-dark/95 backdrop-blur-md border border-bio-blue/20 rounded-lg shadow-lg overflow-hidden">
                  <button onClick={() => { scrollToSection('resources'); setIsResourcesOpen(false); }} className="block w-full text-left px-4 py-3 text-gray-300 hover:bg-bio-blue/20 hover:text-bio-blue transition-colors">
                    All Resources
                  </button>
                  <Link href="/notebooks" className="block px-4 py-3 text-gray-300 hover:bg-bio-blue/20 hover:text-bio-blue transition-colors">
                    Course Notebooks
                  </Link>
                  <Link href="/data" className="block px-4 py-3 text-gray-300 hover:bg-bio-blue/20 hover:text-bio-blue transition-colors">
                    Sample Datasets
                  </Link>
                  <Link href="/practice" className="block px-4 py-3 text-gray-300 hover:bg-bio-blue/20 hover:text-bio-blue transition-colors">
                    Practice Sessions
                  </Link>
                  <Link href="/dev-tools" className="block px-4 py-3 text-gray-300 hover:bg-bio-blue/20 hover:text-bio-blue transition-colors">
                    Development Tools
                  </Link>
                </div>
              )}
            </div>

            <button onClick={() => scrollToSection('schedule')} className="nav-link mr-8">Schedule</button>
            <button onClick={() => scrollToSection('about')} className="nav-link mr-8">About</button>
            <a href="https://github.com/HocheggerLab/y3-bio-python" target="_blank"
               className="btn-secondary !py-2 !px-4 text-sm">
              GitHub →
            </a>
          </div>
          <button 
            className="md:hidden text-white hover:text-bio-blue transition-colors duration-200 p-2" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden glass-dark border-t border-white/10 animate-in slide-in-from-top-2 duration-200">
          <div className="px-6 py-4 space-y-3">
            {/* Lectures Section */}
            <div className="border-b border-white/10 pb-3">
              <div className="text-sm font-semibold text-bio-blue mb-2">Lectures</div>
              <Link href="/lectures/1" onClick={toggleMobileMenu} className="block nav-link py-2 pl-4">Lecture 1: Introduction</Link>
              <Link href="/lectures/2" onClick={toggleMobileMenu} className="block nav-link py-2 pl-4">Lecture 2: Strings & DNA</Link>
              <Link href="/lectures/3" onClick={toggleMobileMenu} className="block nav-link py-2 pl-4">Lecture 3: Data Analysis</Link>
              <Link href="/lectures/4" onClick={toggleMobileMenu} className="block nav-link py-2 pl-4">Lecture 4: Statistics & Visualization</Link>
              <Link href="/lectures/5" onClick={toggleMobileMenu} className="block nav-link py-2 pl-4">Lecture 5: Advanced Statistics</Link>
            </div>

            <button onClick={() => { scrollToSection('specialization-tracks'); toggleMobileMenu(); }} className="block nav-link py-2 text-left w-full">Specializations</button>
            <button onClick={() => { scrollToSection('seminars'); toggleMobileMenu(); }} className="block nav-link py-2 text-left w-full">Seminars</button>

            {/* Resources Section */}
            <div className="border-b border-white/10 pb-3">
              <div className="text-sm font-semibold text-bio-blue mb-2">Resources</div>
              <button onClick={() => { scrollToSection('resources'); toggleMobileMenu(); }} className="block nav-link py-2 pl-4 text-left w-full">All Resources</button>
              <Link href="/notebooks" onClick={toggleMobileMenu} className="block nav-link py-2 pl-4">Course Notebooks</Link>
              <Link href="/data" onClick={toggleMobileMenu} className="block nav-link py-2 pl-4">Sample Datasets</Link>
              <Link href="/practice" onClick={toggleMobileMenu} className="block nav-link py-2 pl-4">Practice Sessions</Link>
              <Link href="/dev-tools" onClick={toggleMobileMenu} className="block nav-link py-2 pl-4">Development Tools</Link>
            </div>

            <button onClick={() => { scrollToSection('schedule'); toggleMobileMenu(); }} className="block nav-link py-2 text-left w-full">Schedule</button>
            <button onClick={() => { scrollToSection('about'); toggleMobileMenu(); }} className="block nav-link py-2 text-left w-full">About</button>
            <a href="https://github.com/HocheggerLab/y3-bio-python" target="_blank" className="block nav-link py-2" onClick={toggleMobileMenu}>GitHub →</a>
          </div>
        </div>
      )}
    </nav>
  )
}