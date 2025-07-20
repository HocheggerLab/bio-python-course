'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
            <Link href="/#lectures" scroll={false} className="nav-link mr-8">Lectures</Link>
            <Link href="/#seminars" scroll={false} className="nav-link mr-8">Seminars</Link>
            <Link href="/#resources" scroll={false} className="nav-link mr-8">Resources</Link>
            <Link href="/#schedule" scroll={false} className="nav-link mr-8">Schedule</Link>
            <Link href="/#about" scroll={false} className="nav-link mr-8">About</Link>
            <a href="https://github.com/hochegger-lab/python-for-biologists" target="_blank"
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
            <Link href="/#lectures" scroll={false} className="block nav-link py-2" onClick={toggleMobileMenu}>Lectures</Link>
            <Link href="/#seminars" scroll={false} className="block nav-link py-2" onClick={toggleMobileMenu}>Seminars</Link>
            <Link href="/#resources" scroll={false} className="block nav-link py-2" onClick={toggleMobileMenu}>Resources</Link>
            <Link href="/#schedule" scroll={false} className="block nav-link py-2" onClick={toggleMobileMenu}>Schedule</Link>
            <Link href="/#about" scroll={false} className="block nav-link py-2" onClick={toggleMobileMenu}>About</Link>
            <a href="https://github.com/hochegger-lab/python-for-biologists" target="_blank" className="block nav-link py-2" onClick={toggleMobileMenu}>GitHub →</a>
          </div>
        </div>
      )}
    </nav>
  )
}