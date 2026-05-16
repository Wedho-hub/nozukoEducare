import React from 'react'
import './GallerySection.css'

/**
 * Gallery images — replace the Unsplash placeholders below with
 * real Nozuko Educare photos once available.
 * All images include descriptive alt text for accessibility and SEO.
 */
const GALLERY = [
  {
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    alt: 'Teacher guiding children through a learning activity at Nozuko Educare',
    label: 'Structured Learning'
  },
  {
    src: 'https://images.unsplash.com/photo-1567448400815-c1a2c9b8d5f4?w=800&q=80',
    alt: 'Children engaged in creative art and craft session',
    label: 'Creative Arts'
  },
  {
    src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=80',
    alt: 'Young children reading books together in the classroom',
    label: 'Early Literacy'
  },
  {
    src: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80',
    alt: 'Child concentrating on a drawing activity',
    label: 'Focus & Creativity'
  },
  {
    src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
    alt: 'Children playing outdoors in a safe environment',
    label: 'Outdoor Play'
  },
  {
    src: 'https://images.unsplash.com/photo-1561525140-c2a4cc68e4bd?w=800&q=80',
    alt: 'Nutritious meal time at the educare centre',
    label: 'Nutritious Meals'
  },
]

const FALLBACK = 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80'

export default function GallerySection() {
  return (
    <section className="gallery-section page-section" id="gallery" aria-labelledby="gallery-heading">
      <div className="container">
        <span className="accent-label">Life at Nozuko</span>
        <h2 id="gallery-heading" className="section-heading mb-1">
          A Glimpse Into Our Classrooms
        </h2>
        <p className="section-subtext">
          Real learning, real play, real joy — every day at Victoria Mxenge, Philippi.
        </p>
        <div className="gallery-grid">
          {GALLERY.map((img, i) => (
            <div className="gallery-item" key={i}>
              <img
                src={img.src}
                alt={img.alt}
                className="gallery-img"
                loading="lazy"
                onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK }}
              />
              <div className="gallery-label">{img.label}</div>
            </div>
          ))}
        </div>
        <p className="gallery-note">
          📸 <em>Photos will be updated with real Nozuko Educare classroom images.</em>
        </p>
      </div>
    </section>
  )
}
