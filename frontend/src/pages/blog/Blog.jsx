import React from 'react'
import BlogCard from '../../components/blogCard/BlogCard' // Renders a summary card for each blog post
import useFetch from '../../hooks/useFetch' // Custom hook for fetching data from API
import useDocumentTitle from '../../hooks/useDocumentTitle' // Sets the document title for SEO/accessibility
import Hero from '../../components/hero/Hero' // Top-of-page hero/banner section
import heroImg from '../../assets/images/nozukohero.jpg' // Default hero image
import './Blog.css' // Page-specific styles

// Fallback sample posts for when the API returns no data (for development/demo)
const SAMPLE_POSTS = [
  {
    _id: 'p1',
    slug: 'introduction-to-play-based-learning',
    title: 'Introduction to play-based learning',
    excerpt: 'Play-based learning supports early development through guided discovery, social play and creative tasks.',
    publishedAt: new Date().toISOString(),
    author: 'Nozuko Team',
    coverImage: 'https://via.placeholder.com/480x300?text=Play+Learning'
  },
  {
    _id: 'p2',
    slug: 'why-routine-matters',
    title: 'Why routine matters for young children',
    excerpt: 'Consistent daily routines help children feel secure and build independence. Simple steps go a long way.',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(),
    author: 'Mary Nkosi',
    coverImage: 'https://via.placeholder.com/480x300?text=Routine'
  }
]

/**
 * Blog
 * Main blog listing page. Fetches blog posts from the backend API and displays them as cards.
 * If no posts are found, shows sample posts for a friendly empty state.
 */
export default function Blog() {
  // Set the page title in the browser tab
  useDocumentTitle('Blog')

  // Fetch blog posts from the API. Returns { data, loading, error }
  const { data: posts = [], loading, error } = useFetch('/api/blogs')

  // Show loading spinner/message while fetching
  if (loading) return <div className="container">Loading...</div>
  // Show error message if fetch fails
  if (error) return <div className="container">Error: {error.message}</div>

  // Defensive: ensure posts is always an array
  const safePosts = Array.isArray(posts) ? posts : []

  // Use API posts if available, otherwise show sample posts
  const displayed = safePosts.length ? safePosts : SAMPLE_POSTS

  return (
    <>
      {/* Hero/banner section at the top of the blog page */}
      <Hero
        title="Blog"
        subtitle="Insights & updates for parents"
        primaryCta={{ text: 'Read latest', href: '#blog-list' }}
        secondaryCta={{ text: 'Subscribe', href: '/contact' }}
        bgImage={heroImg}
      />

      {/* Main blog listing section */}
      <section className="container page-section blog-page">
        <h2 className="section-heading">Insights & updates</h2>
        <p className="text-muted">Parenting tips, classroom stories and centre updates.</p>

        {/* Blog post cards grid */}
        <div className="grid blog-list" id="blog-list">
          {/* Show a message if there are no posts at all */}
          {displayed.length === 0 && <p>No posts yet.</p>}
          {/* Render a BlogCard for each post */}
          {displayed.map((post) => (
            <BlogCard key={post._id || post.id} post={post} />
          ))}
        </div>
      </section>
	</>
  )
}
