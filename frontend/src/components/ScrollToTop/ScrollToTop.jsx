import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

// ScrollToTop runs on route change and ensures the viewport starts at 0,0.
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    // Instant scroll to top to avoid visible jump or preserving previous position
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}
