import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useDocumentTitle from '../../hooks/useDocumentTitle'

function getToken() {
  return localStorage.getItem('token')
}

function decodeToken(token) {
  try {
    const payload = token.split('.')[1]
    return JSON.parse(atob(payload))
  } catch {
    return null
  }
}

export default function AdminWrite() {
  useDocumentTitle('Write — Admin')
  const navigate = useNavigate()

  const token = getToken()
  const user = token ? decodeToken(token) : null

  const [form, setForm] = useState({ title: '', slug: '', excerpt: '', content: '', published: false })
  const [coverPreview, setCoverPreview] = useState('')
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [warningMessage, setWarningMessage] = useState("")

  React.useEffect(() => {
    if (!token) {
      setWarningMessage('No authentication token found. You may not be able to perform admin actions.')
    } else {
      setWarningMessage("")
    }
    if (!token || !user || user.role !== 'admin') {
      setErrorMessage('Not authorized')
      setTimeout(() => navigate('/'), 900)
    }
  }, [token, user, navigate])

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const onFileChange = async (e) => {
    const file = e.target.files && e.target.files[0]
    if (!file) return
    if (!file.type.startsWith('image/')) {
      setErrorMessage('Please upload an image file.')
      return
    }
    setLoading(true)
    setSuccessMessage("")
    setErrorMessage("")
    try {
      const fd = new FormData()
      fd.append('file', file)
      const res = await fetch('/api/uploads', {
        method: 'POST',
        headers: {
          Authorization: token ? `Bearer ${token}` : ''
        },
        body: fd
      })
      let body = {}
      try {
        body = await res.json()
      } catch (jsonErr) {
        // ignore JSON parse error
      }
      if (!res.ok) {
        setErrorMessage(body.message || 'Upload failed')
        return
      }
      setSuccessMessage('Image uploaded')
      setCoverPreview(body.url)
      setForm((f) => ({ ...f, coverImage: body.url }))
    } catch (err) {
      setErrorMessage(err.message)
    } finally {
      setLoading(false)
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setSuccessMessage("")
    setErrorMessage("")
    setLoading(true)
    try {
      const res = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token ? `Bearer ${token}` : ''
        },
        body: JSON.stringify(form)
      })
      let body = {}
      let rawText = ''
      try {
        rawText = await res.text()
        body = JSON.parse(rawText)
      } catch (jsonErr) {
        // If not JSON, keep rawText for debugging
      }
      if (!res.ok) {
        setErrorMessage(body.message || rawText || 'Submission failed (no details)')
        console.error('Blog POST error:', { status: res.status, body, rawText })
        return
      }
      setSuccessMessage('Post created successfully')
      setForm({ title: '', slug: '', excerpt: '', content: '', published: false })
      setCoverPreview('')
      setTimeout(() => navigate('/blog'), 900)
    } catch (err) {
      setErrorMessage(err.message || 'Network or unknown error')
      console.error('Blog POST network error:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin/login');
  };

  return (
    <section className="container page-section admin-write">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Admin: Write a blog post</h2>
        <button className="btn btn-outline-secondary btn-sm" onClick={handleLogout} type="button">Logout</button>
      </div>
      {warningMessage && <div style={{ color: '#b8860b', marginBottom: 8 }}>{warningMessage}</div>}
      {errorMessage && <div style={{ color: "#c00", marginBottom: 8 }}>{errorMessage}</div>}
      {successMessage && <div style={{ color: "#090", marginBottom: 8 }}>{successMessage}</div>}
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input name="title" required value={form.title} onChange={onChange} className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Slug (optional)</label>
          <input name="slug" value={form.slug} onChange={onChange} className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Meta description / Excerpt</label>
          <input name="excerpt" value={form.excerpt} onChange={onChange} className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Cover image (optional)</label>
          <input type="file" accept="image/*" onChange={onFileChange} className="form-control" />
          {loading && <div className="small text-muted">Uploading…</div>}
          {coverPreview && (
            <div style={{ marginTop: 8 }}>
              <img src={coverPreview} alt="cover preview" style={{ maxWidth: 240, borderRadius: 6 }} />
            </div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Content (markdown or plain text)</label>
          <textarea name="content" rows={8} required value={form.content} onChange={onChange} className="form-control" />
        </div>

        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="published" name="published" checked={form.published} onChange={onChange} />
          <label className="form-check-label" htmlFor="published">Publish now</label>
        </div>

        <div>
          <button className="btn btn-primary" type="submit" disabled={loading}>{loading ? 'Submitting…' : 'Submit'}</button>
        </div>
      </form>
    </section>
  )
}
