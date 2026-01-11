import axios from 'axios'

// Simple axios instance. Change baseURL to your API when ready.
// Determine base URL for API depending on environment
let baseURL = ''
if (import.meta.env.VITE_API_URL) {
  baseURL = import.meta.env.VITE_API_URL
} else if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
  // Dev: use Vite proxy
  baseURL = ''
} else {
  // Production: assume backend serves frontend and API at same origin
  baseURL = '/api'
}

const api = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' }
})

export default api
