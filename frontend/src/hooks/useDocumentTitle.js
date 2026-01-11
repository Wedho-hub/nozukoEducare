import { useEffect } from 'react'

/**
 * useDocumentTitle
 * Helper hook to set document.title in a consistent format.
 */
export default function useDocumentTitle(title) {
  useEffect(() => {
    const prev = document.title
    document.title = title ? `${title} | Nozuko Educare` : prev
    return () => { document.title = prev }
  }, [title])
}
