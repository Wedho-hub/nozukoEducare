import React from 'react'
import './ProgramCard.css'

export default function ProgramCard({ title, Icon, color = 'var(--color-sky)', desc, description, bullets = [], note, badge, className = '' }) {
  const bodyText = description || desc || ''

  return (
    <article className={`program-card ${className}`} style={{ ['--accent']: color }} aria-labelledby={`program-${title.replace(/\s+/g, '-')}`}>
      <div className="program-card__accent" aria-hidden>
        <span className="program-card__icon">{Icon ? <Icon /> : null}</span>
      </div>

      <div className="program-card__body">
        <div className="program-card__head">
          <h4 id={`program-${title.replace(/\s+/g, '-')}`}>{title}</h4>
          {badge && <span className="program-card__badge">{badge}</span>}
        </div>

        {bodyText ? <p className="program-card__desc">{bodyText}</p> : null}

        {bullets && bullets.length > 0 && (
          <ul className="program-card__list">
            {bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        )}

        {note ? <p className="program-card__note small text-muted">{note}</p> : null}

        <div className="program-card__cta">
          <a className="btn btn-outline" href="#contact">Register interest</a>
        </div>
      </div>
    </article>
  )
}
