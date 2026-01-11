import React from 'react'
import { FaPuzzlePiece, FaSearch, FaRegCheckCircle, FaSeedling } from 'react-icons/fa'
import './VisualBreak.css'

export default function VisualBreak({ anchorHref = '/contact' }) {
  const steps = [
    { id: 'play', icon: FaPuzzlePiece, title: 'Play', desc: 'Children explore through guided and free play' },
    { id: 'discover', icon: FaSearch, title: 'Discover', desc: 'Curiosity is encouraged through hands-on activities' },
    { id: 'practice', icon: FaRegCheckCircle, title: 'Practice', desc: 'Skills are reinforced through routine and repetition' },
    { id: 'grow', icon: FaSeedling, title: 'Grow', desc: 'Confidence and independence develop naturally' }
  ]

  return (
    <section className="visual-break" role="region" aria-label="How learning happens at Nozuko Educare">
      <div className="visual-break__inner container">
        <header className="visual-break__head">
          <h2 className="visual-break__title">How Learning Happens at Nozuko Educare</h2>
          <p className="visual-break__subtitle">Learning through play, structure, and care</p>
        </header>

        <div className="visual-break__steps" aria-hidden={false}>
          {steps.map((s) => {
            const Icon = s.icon
            return (
              <article key={s.id} className="visual-break__step" aria-labelledby={`vb-${s.id}`}>
                <div className="visual-break__marker" aria-hidden>
                  <Icon />
                </div>
                <div className="visual-break__step-body">
                  <h4 id={`vb-${s.id}`} className="visual-break__step-title">{s.title}</h4>
                  <p className="visual-break__step-desc">{s.desc}</p>
                </div>
              </article>
            )
          })}
        </div>

        <div className="visual-break__cta">
          <a className="btn btn-primary" href={anchorHref} aria-label="Request a site tour">Request a Site Tour</a>
        </div>
      </div>
    </section>
  )
}
