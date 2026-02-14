"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollDirection() {
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollYRef = useRef(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show header when near the top
      if (currentScrollY < 50) {
        setIsVisible(true)
        return
      }

      // Determine scroll direction
      if (currentScrollY > lastScrollYRef.current) {
        // Scrolling down - hide header
        setIsVisible(false)
      } else {
        // Scrolling up - show header
        setIsVisible(true)
      }

      lastScrollYRef.current = currentScrollY

      // Clear existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      // Reset on scroll end (after 150ms of no scroll)
      timeoutRef.current = setTimeout(() => {
        // Keep the current state
      }, 150)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return isVisible
}
