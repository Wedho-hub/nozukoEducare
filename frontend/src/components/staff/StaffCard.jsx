import React from 'react'
import './StaffCard.css'

/**
 * StaffCard
 * Simple card showing a staff member's name, role/class, and a fun 'favorite time' field.
 * Props:
 *  - staff: { id, name, role, favoriteTime, bio, avatar }
 */
export default function StaffCard({ staff }) {
  if (!staff) return null

  const { id, name, role, favoriteTime, bio, avatar } = staff

  // Fallback avatar: use initials inside a colored circle
  const initials = name.split(' ').map(s => s[0]).slice(0,2).join('').toUpperCase()

  return (
    <article className="staff-card" aria-labelledby={`staff-${id}-name`} role="group">
      <div className="staff-card__media" aria-hidden>
        {avatar ? (
          <img src={avatar} alt={`Photo of ${name}`} className="staff-card__avatar" />
        ) : (
          <div className="staff-card__avatar--fallback">{initials}</div>
        )}
      </div>

      <div className="staff-card__body">
        <h4 id={`staff-${id}-name`} className="staff-card__name">{name}</h4>
        <p className="staff-card__role">{role}</p>
        {favoriteTime && <p className="staff-card__fav">Favorite time: <strong>{favoriteTime}</strong></p>}
        {bio && <p className="staff-card__bio">{bio}</p>}
      </div>
    </article>
  )
}
