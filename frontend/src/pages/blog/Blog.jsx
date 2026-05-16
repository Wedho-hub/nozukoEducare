import React from 'react'
import BlogCard from '../../components/blogCard/BlogCard'
import useFetch from '../../hooks/useFetch'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import Hero from '../../components/hero/Hero'
import heroImg from '../../assets/images/nozukohero.jpg'
import './Blog.css'
import { FaFeatherAlt, FaBookOpen, FaSmile } from 'react-icons/fa'

const CATEGORIES = [
  { icon: <FaFeatherAlt />, bg: '#EBF7F2', iconColor: '#1A5C45', title: 'Parent Tips', desc: 'Practical advice for raising curious, confident children.' },
  { icon: <FaBookOpen />, bg: '#FEF3C7', iconColor: '#D97706', title: 'Learning Stories', desc: 'How our children are growing and discovering every day.' },
  { icon: <FaSmile />, bg: '#EBF7F2', iconColor: '#1A5C45', title: 'Centre Updates', desc: 'Events, milestones and news from Nozuko Educare.' },
]

const SAMPLE_POSTS = [
  {
    _id: 'p1',
    slug: 'why-montessori-works-in-south-africa',
    title: 'Why Montessori Works in Our South African Context',
    excerpt: 'The Montessori method is not just for wealthy private schools — it is a powerful framework for any child, anywhere. Here is how we apply it in Philippi.',
    publishedAt: new Date().toISOString(),
    author: 'Nozuko Mxenge',
    coverImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80'
  },
  {
    _id: 'p2',
    slug: 'school-readiness-grade-1-checklist',
    title: 'Is Your Child Ready for Grade 1? A Practical Checklist',
    excerpt: 'School readiness is more than knowing the alphabet. Find out the 10 skills your child should have before starting Grade 1 — and how we build each one at Nozuko.',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(),
    author: 'Miranda',
    coverImage: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=80'
  },
  {
    _id: 'p3',
    slug: 'routine-and-security-for-toddlers',
    title: 'The Power of Routine: Why Predictability Feels Like Love to a Toddler',
    excerpt: 'Consistent daily routines help young children feel safe and develop independence. Our approach to structured days at Nozuko Educare.',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14).toISOString(),
    author: 'Busisiwe',
    coverImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80'
  },
]

export default function Blog() {
  useDocumentTitle('Blog — Nozuko Educare, Philippi')
  const { data: posts = [], loading, error } = useFetch('/api/blogs')

  const safePosts = Array.isArray(posts) ? posts : []
  const displayed = safePosts.length ? safePosts : SAMPLE_POSTS

  return (
    <div className="blog-page">
      <Hero
        title="Stories, Tips &amp; Updates"
        subtitle="Parenting insights, learning stories, and news from our community in Victoria Mxenge, Philippi."
        badge="Nozuko Educare Blog"
        primaryCta={{ text: 'Read latest post', href: '#blog-list' }}
        secondaryCta={{ text: 'Subscribe via WhatsApp', href: 'https://wa.me/27813872713' }}
        bgImage={heroImg}
      />

      {/* ── CATEGORY STRIPS ── */}
      <section className="page-section blog-categories">
        <div className="container">
          <div className="blog-categories-grid">
            {CATEGORIES.map((c, i) => (
              <div key={i} className="blog-cat-card card" style={{ background: c.bg }}>
                <div className="blog-cat-icon" style={{ color: c.iconColor }} aria-hidden="true">{c.icon}</div>
                <div>
                  <div className="blog-cat-title">{c.title}</div>
                  <div className="blog-cat-desc">{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG LIST ── */}
      <section className="page-section blog-list-section" id="blog-list" aria-labelledby="blog-heading">
        <div className="container">
          <span className="accent-label">Latest Posts</span>
          <h2 id="blog-heading" className="section-heading mb-1">From the Classroom &amp; Community</h2>
          <p className="section-subtext">
            Tips for parents, learning milestones, and stories from the heart of Philippi.
          </p>

          {loading && (
            <div className="blog-loading" role="status">
              <div className="blog-loading-spinner" aria-hidden="true" />
              <span>Loading posts…</span>
            </div>
          )}
          {error && !loading && (
            <div className="blog-error" role="alert">
              Could not load posts. Showing sample articles below.
            </div>
          )}

          <div className="blog-grid">
            {displayed.map((post) => (
              <BlogCard key={post._id || post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
