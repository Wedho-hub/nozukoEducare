import React from 'react'
import './TestimonialSection.css'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

const TESTIMONIALS = [
  {
    name: 'Nomsa M.',
    role: 'Parent, Toddler class',
    quote: 'My child comes home singing and counting every day. I feel complete peace knowing she is safe and learning.',
    stars: 5
  },
  {
    name: 'Sipho D.',
    role: 'Parent, Pre-Grade R',
    quote: 'The teachers are so caring and patient. My son has grown so much — he can already write his name at three years old!',
    stars: 5
  },
  {
    name: 'Anele K.',
    role: 'Parent, Preschool',
    quote: 'A safe, happy place in the middle of a tough neighbourhood. Nozuko gives our children something to believe in.',
    stars: 5
  },
  {
    name: 'Thandi N.',
    role: 'Parent, Grade R',
    quote: 'My daughter started Grade 1 fully prepared — reading, counting, confident. Nozuko Educare made that possible.',
    stars: 5
  },
]

function Stars({ count }) {
  return (
    <div className="testimonial-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <FaStar key={i} aria-hidden="true" />
      ))}
    </div>
  )
}

export default function TestimonialSection() {
  return (
    <section className="testimonial-section page-section" id="testimonials" aria-labelledby="testimonial-heading">
      <div className="container">
        <span className="accent-label">Parent Voices</span>
        <h2 id="testimonial-heading" className="section-heading mb-1">What Families Say</h2>
        <p className="section-subtext">Real stories from the Victoria Mxenge community.</p>
        <div className="testimonial-grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testimonial-card card">
              <FaQuoteLeft className="testimonial-quote-icon" aria-hidden="true" />
              <Stars count={t.stars} />
              <blockquote className="testimonial-text">"{t.quote}"</blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar" aria-hidden="true">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
