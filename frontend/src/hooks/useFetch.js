import { useState, useEffect } from 'react'
import api from '../services/api'

/**
 * useFetch hook
 * Lightweight data fetching hook wrapping axios. Returns { data, loading, error }
 */
export default function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      try {
        // If url starts with /api, remove duplicate /api if already in baseURL
        let finalUrl = url
        if (api.defaults.baseURL && api.defaults.baseURL.endsWith('/api') && url.startsWith('/api/')) {
          finalUrl = url.replace(/^\/api/, '')
        }
        const res = await api.get(finalUrl)
        if (!cancelled) setData(res.data)
      } catch (err) {
        if (!cancelled) setError(err)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()

    return () => { cancelled = true }
  }, [url])

  return { data, loading, error }
}

