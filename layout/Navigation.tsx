'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { isLecturePublished } from '@/data/lectures'
import { isLabPublished } from '@/app/labs/_shared/labs'

/* The menu labels are shorter than the titles on the cards, so they live
   here -- but whether an entry is *shown* is decided by the same data the
   cards use. The menu used to hardcode all eight of each, which meant every
   unpublished lecture and lab stayed one click away from every page. */
type NavEntry = { num: number; label: string; group: 'basics' | 'data' }

const LECTURE_NAV: NavEntry[] = [
  { num: 1, label: '1. Variables & Data Types', group: 'basics' },
  { num: 2, label: '2. Strings & Lists', group: 'basics' },
  { num: 3, label: '3. Loops & Dictionaries', group: 'basics' },
  { num: 4, label: '4. Functions, Files & Errors', group: 'basics' },
  { num: 5, label: '5. Arrays & numpy \u{1F42D}', group: 'data' },
  { num: 6, label: '6. DataFrames & pandas \u{1F41D}', group: 'data' },
  { num: 7, label: '7. Plotting & EDA \u{1F9EC}', group: 'data' },
  { num: 8, label: '8. Image Analysis \u{1F52C}', group: 'data' },
]

const LAB_NAV: NavEntry[] = [
  { num: 1, label: 'Lab 1. Setup & First Steps', group: 'basics' },
  { num: 2, label: 'Lab 2. Strings & Lists', group: 'basics' },
  { num: 3, label: 'Lab 3. Loops & Dictionaries', group: 'basics' },
  { num: 4, label: 'Lab 4. Functions, Files & Errors', group: 'basics' },
  { num: 5, label: 'Lab 5. Arrays & numpy \u{1F42D}', group: 'data' },
  { num: 6, label: 'Lab 6. DataFrames & pandas \u{1F41D}', group: 'data' },
  { num: 7, label: 'Lab 7. Plotting & EDA \u{1F9EC}', group: 'data' },
  { num: 8, label: 'Lab 8. Image Analysis \u{1F52C}', group: 'data' },
]

const publishedLectures = LECTURE_NAV.filter((e) => isLecturePublished(e.num))
const publishedLabs = LAB_NAV.filter((e) => isLabPublished(e.num))

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
  const [isLabsOpen, setIsLabsOpen] = useState(false)
  const resourcesRef = useRef<HTMLDivElement>(null)
  const lecturesRef = useRef<HTMLDivElement>(null)
  const labsRef = useRef<HTMLDivElement>(null)
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
      if (labsRef.current && !labsRef.current.contains(event.target as Node)) {
        setIsLabsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="fixed w-full top-0 z-50 glass-dark border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-gray-300 hover:text-white transition-colors"
            >
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
                <div className="absolute top-full mt-2 w-64 bg-bio-dark/95 backdrop-blur-md border border-bio-blue/20 rounded-lg shadow-lg overflow-hidden">
                  {(['basics', 'data'] as const).map((g) => {
                    const inGroup = publishedLectures.filter((e) => e.group === g)
                    if (!inGroup.length) return null
                    return (
                      <div key={g}>
                        <div className="px-4 py-2 text-xs font-semibold text-bio-blue/70 uppercase tracking-wider border-b border-white/10">
                          {g === 'basics' ? 'Python Basics' : 'Python & Data'}
                        </div>
                        {inGroup.map((e) => (
                          <Link key={e.num} href={`/lectures/${e.num}`} className="block px-4 py-2.5 text-gray-300 hover:bg-bio-blue/20 hover:text-bio-blue transition-colors text-sm">
                            {e.label}
                          </Link>
                        ))}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Labs Dropdown */}
            <div className="relative mr-8" ref={labsRef}>
              <button
                onClick={() => setIsLabsOpen(!isLabsOpen)}
                className="nav-link flex items-center gap-1"
              >
                Labs
                <svg className={`w-4 h-4 transition-transform ${isLabsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isLabsOpen && (
                <div className="absolute top-full mt-2 w-64 bg-bio-dark/95 backdrop-blur-md border border-bio-blue/20 rounded-lg shadow-lg overflow-hidden">
                  <Link href="/labs" className="block px-4 py-2.5 text-bio-blue hover:bg-bio-blue/20 transition-colors text-sm font-semibold border-b border-white/10">
                    All Labs
                  </Link>
                  {(['basics', 'data'] as const).map((g) => {
                    const inGroup = publishedLabs.filter((e) => e.group === g)
                    if (!inGroup.length) return null
                    return (
                      <div key={g}>
                        <div className="px-4 py-2 text-xs font-semibold text-bio-blue/70 uppercase tracking-wider border-b border-white/10">
                          {g === 'basics' ? 'Python Basics' : 'Python & Data'}
                        </div>
                        {inGroup.map((e) => (
                          <Link key={e.num} href={`/labs/${e.num}`} className="block px-4 py-2.5 text-gray-300 hover:bg-bio-blue/20 hover:text-bio-blue transition-colors text-sm">
                            {e.label}
                          </Link>
                        ))}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>


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
                  <Link href="/labs" className="block px-4 py-3 text-gray-300 hover:bg-bio-blue/20 hover:text-bio-blue transition-colors">
                    Labs
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

            <Link href="/assessment" className="nav-link mr-8">Assessment</Link>
            <Link href="/schedule" className="nav-link mr-8">Schedule</Link>
            <Link href="/about" className="nav-link mr-8">About</Link>
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
              {(['basics', 'data'] as const).map((g) => {
                const inGroup = publishedLectures.filter((e) => e.group === g)
                if (!inGroup.length) return null
                return (
                  <div key={g}>
                    <div className="text-xs font-semibold text-bio-blue/70 uppercase tracking-wider mt-2 mb-1">
                      {g === 'basics' ? 'Python Basics' : 'Python & Data'}
                    </div>
                    {inGroup.map((e) => (
                      <Link key={e.num} href={`/lectures/${e.num}`} onClick={toggleMobileMenu} className="block nav-link py-1.5 pl-4 text-sm">
                        {e.label}
                      </Link>
                    ))}
                  </div>
                )
              })}
            </div>

            {/* Labs Section */}
            <div className="border-b border-white/10 pb-3">
              <Link href="/labs" onClick={toggleMobileMenu} className="block nav-link py-1.5 text-sm font-semibold text-bio-blue">All Labs</Link>
              {(['basics', 'data'] as const).map((g) => {
                const inGroup = publishedLabs.filter((e) => e.group === g)
                if (!inGroup.length) return null
                return (
                  <div key={g}>
                    <div className="text-xs font-semibold text-bio-blue/70 uppercase tracking-wider mt-2 mb-1">
                      {g === 'basics' ? 'Python Basics' : 'Python & Data'}
                    </div>
                    {inGroup.map((e) => (
                      <Link key={e.num} href={`/labs/${e.num}`} onClick={toggleMobileMenu} className="block nav-link py-1.5 pl-4 text-sm">
                        {e.label}
                      </Link>
                    ))}
                  </div>
                )
              })}
            </div>


            {/* Resources Section */}
            <div className="border-b border-white/10 pb-3">
              <div className="text-sm font-semibold text-bio-blue mb-2">Resources</div>
              <button onClick={() => { scrollToSection('resources'); toggleMobileMenu(); }} className="block nav-link py-2 pl-4 text-left w-full">All Resources</button>
              <Link href="/labs" onClick={toggleMobileMenu} className="block nav-link py-2 pl-4">Labs</Link>
              <Link href="/data" onClick={toggleMobileMenu} className="block nav-link py-2 pl-4">Sample Datasets</Link>
              <Link href="/practice" onClick={toggleMobileMenu} className="block nav-link py-2 pl-4">Practice Sessions</Link>
              <Link href="/dev-tools" onClick={toggleMobileMenu} className="block nav-link py-2 pl-4">Development Tools</Link>
            </div>

            <Link href="/assessment" onClick={toggleMobileMenu} className="block nav-link py-2">Assessment</Link>
            <Link href="/schedule" onClick={toggleMobileMenu} className="block nav-link py-2">Schedule</Link>
            <Link href="/about" onClick={toggleMobileMenu} className="block nav-link py-2">About</Link>
            <a href="https://github.com/HocheggerLab/y3-bio-python" target="_blank" className="block nav-link py-2" onClick={toggleMobileMenu}>GitHub →</a>
          </div>
        </div>
      )}
    </nav>
  )
}