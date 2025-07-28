'use client'

import { useEffect } from 'react'

export default function ScrollToHashOnLoad() {

  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = window.location.hash.replace('#', '')
    
    if (hash) {
      // Small delay to ensure the page is fully loaded
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          const navbarHeight = 80 // Same as in Navigation.tsx
          const elementPosition = element.offsetTop - navbarHeight
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          })
        }
      }, 100)
    }
  }, [])

  return null
}