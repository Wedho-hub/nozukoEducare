import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: identifier, password })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Login failed')
      localStorage.setItem('token', data.token)
      navigate('/admin/write')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="container page-section" style={{ maxWidth: 400 }}>
      <h2>Admin Login</h2>
      {error && <div style={{ color: '#c00', marginBottom: 8 }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email or Username</label>
          <input type="text" className="form-control" value={identifier} onChange={e => setIdentifier(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button className="btn btn-primary" type="submit" disabled={loading}>{loading ? 'Logging in…' : 'Login'}</button>
      </form>
    </section>
  )
}
