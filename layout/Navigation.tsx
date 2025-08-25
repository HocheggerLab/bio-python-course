'use client'

import { useState } from 'react'
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
  const scrollToSection = useScrollToSection()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

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
            <button onClick={() => scrollToSection('core-sessions')} className="nav-link mr-8">Core Sessions</button>
            <button onClick={() => scrollToSection('specialization-tracks')} className="nav-link mr-8">Specializations</button>
            <button onClick={() => scrollToSection('seminars')} className="nav-link mr-8">Seminars</button>
            <button onClick={() => scrollToSection('resources')} className="nav-link mr-8">Resources</button>
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
            <button onClick={() => { scrollToSection('core-sessions'); toggleMobileMenu(); }} className="block nav-link py-2 text-left w-full">Core Sessions</button>
            <button onClick={() => { scrollToSection('specialization-tracks'); toggleMobileMenu(); }} className="block nav-link py-2 text-left w-full">Specializations</button>
            <button onClick={() => { scrollToSection('seminars'); toggleMobileMenu(); }} className="block nav-link py-2 text-left w-full">Seminars</button>
            <button onClick={() => { scrollToSection('resources'); toggleMobileMenu(); }} className="block nav-link py-2 text-left w-full">Resources</button>
            <button onClick={() => { scrollToSection('schedule'); toggleMobileMenu(); }} className="block nav-link py-2 text-left w-full">Schedule</button>
            <button onClick={() => { scrollToSection('about'); toggleMobileMenu(); }} className="block nav-link py-2 text-left w-full">About</button>
            <a href="https://github.com/HocheggerLab/y3-bio-python" target="_blank" className="block nav-link py-2" onClick={toggleMobileMenu}>GitHub →</a>
          </div>
        </div>
      )}
    </nav>
  )
}