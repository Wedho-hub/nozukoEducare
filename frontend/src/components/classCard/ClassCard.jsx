import React from 'react'
import './ClassCard.css'

/**
 * ClassCard
 * Displays a short card describing a class offering.
 * Props:
 *  - c: { title, ageRange, times, summary, image }
 */
export default function ClassCard({ c, onEnroll, color, icon: Icon, variant }) {
	// Accepts either a single `c` prop (existing data shape) or individual props in future.
	if (!c) return null

	const { title, ageRange, times, summary, image, id, teacher, capacity, price, objectives } = c

	const handleEnroll = (e) => {
		if (onEnroll) {
			e.preventDefault()
			onEnroll(c)
		}
		// otherwise the button is unopinionated and can be wired to a modal or link
	}

	const isTeaser = variant === 'teaser'

	const styleAccent = color ? { borderLeft: `6px solid ${color}` } : {}

	return (
		<article className={`class-card ${isTeaser ? 'class-card--teaser' : ''}`} style={styleAccent} data-aos="fade-up" aria-labelledby={`class-${id || title}`} role="group">
			<div className="class-card__media">
				{Icon ? (
					<span className="class-card__icon" aria-hidden="true" style={{background: color || undefined}}><Icon /></span>
				) : image ? (
					<img className="class-card__img" src={image} alt={title} />
				) : (
					<div className="class-card__avatar--fallback" style={{background: color || undefined}}>{(title || '').split(' ').map(s => s[0]).slice(0,2).join('')}</div>
				)}
			</div>

			<div className="class-card__body">
				<h4 className="class-card__title" id={`class-${id || title}`}>{title}</h4>
				<p className="class-card__meta">{ageRange} • {times}</p>

				{!isTeaser && (
					<>
						<p className="class-card__summary">{summary}</p>
						{(teacher || capacity || price) && (
							<p className="class-card__meta-lines"><strong>{teacher}</strong> • <span>{capacity ? `${capacity} places` : ''}</span> {price ? `• ${price}` : ''}</p>
						)}
						{objectives && objectives.length > 0 && (
							<ul className="class-card__objectives" aria-label={`Objectives for ${title}`}>
								{objectives.map((o, i) => <li key={i}>{o}</li>)}
							</ul>
						)}
						<button className="btn btn-sm btn-primary" type="button" onClick={handleEnroll} aria-label={`Enroll in ${title}`}>
							Enroll
						</button>
					</>
				)}
			</div>
		</article>
	)
}
