import axios from 'axios'

// Simple axios instance. Change baseURL to your API when ready.
// Determine base URL for API depending on environment

const baseURL = import.meta.env.VITE_API_URL || 'https://nozukoeducare.onrender.com';

const api = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' }
})

export default api
