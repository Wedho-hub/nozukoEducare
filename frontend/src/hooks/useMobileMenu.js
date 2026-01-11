import { useState, useEffect, useRef, useCallback } from 'react'

// Centralized mobile menu state and scroll-close logic
export default function useMobileMenu() {
  const [expanded, setExpanded] = useState(false)
  const closingRef = useRef(false)

  const close = useCallback(() => {
    if (expanded) {
      setExpanded(false)
      closingRef.current = true
      // reset after a short delay so we don't re-open immediately on scroll end
      setTimeout(() => (closingRef.current = false), 300)
    }
  }, [expanded])

  const toggle = useCallback(() => setExpanded((v) => !v), [])

  useEffect(() => {
    function onScroll() {
      // only react if menu is open and not already closing
      if (expanded && !closingRef.current) {
        close()
      }
    }

    if (expanded) {
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => window.removeEventListener('scroll', onScroll)
    }
  }, [expanded, close])

  return { expanded, setExpanded, toggle, close }
}
