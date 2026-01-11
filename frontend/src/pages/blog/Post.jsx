import React from 'react'
import { useParams, Link } from 'react-router-dom' // For route params and navigation
import useFetch from '../../hooks/useFetch' // Custom hook for API data fetching
import useDocumentTitle from '../../hooks/useDocumentTitle' // Sets document title
import './Post.css' // Page-specific styles
import { marked } from 'marked' // Markdown parser

/**
 * Post
 * Blog post detail page. Fetches a single post by slug or ID from the API and renders it.
 * Renders markdown content as HTML for rich formatting.
 */
export default function Post() {
  // Get the postId (slug or MongoDB _id) from the route
  const { postId } = useParams()
  // Set the page title in the browser tab
  useDocumentTitle('Post')

  // Fetch the blog post from the API
  const { data: post, loading, error } = useFetch(`/api/blogs/${postId}`)

  // Show loading spinner/message while fetching
  if (loading) return <div className="container">Loading post...</div>
  // Show error message if fetch fails
  if (error) return <div className="container">Error loading post: {error.message}</div>
  // Show not found message if no post is returned
  if (!post) return <div className="container">Post not found.</div>

  // Convert markdown content to HTML for rendering
  const html = post.content ? marked.parse(post.content) : (post.excerpt || '')

  return (
    <section className="container post-page">
      {/* Back navigation button */}
      <Link to="/blog" className="btn btn-outline">← Back to Blog</Link>
      {/* Blog post title */}
      <h1>{post.title}</h1>
      {/* Author and published date */}
      <div className="post-meta text-muted">{post.author} — {new Date(post.publishedAt).toLocaleDateString()}</div>

      {/* Cover image if present */}
      {post.coverImage && (
        <img
          className="post-cover"
          src={post.coverImage.startsWith('http') ? post.coverImage : `http://localhost:5000${post.coverImage}`}
          alt={post.title}
        />
      )}

      {/* Render markdown content as HTML. Safe because content is trusted/admin-only. */}
      <article className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  )
}
