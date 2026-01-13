import React from 'react'
import { Link } from 'react-router-dom'
import './BlogCard.css'
import formatDate from '../../utils/formatDate'
import defaultPostImg from '../../assets/images/nozukohero.jpg'

/**
 * BlogCard (cleaned)
 * Single responsibility: render a post summary card.
 */
export default function BlogCard({ post }) {
	if (!post) return null

	// Destructure and provide fallbacks
	const { title, excerpt, publishedAt, author, coverImage, slug, _id, id, content } = post

	// Derive a readable excerpt if none provided (keep it short)
	const teaser = excerpt || (content ? String(content).slice(0, 160).trim() + (content.length > 160 ? '…' : '') : '')

	// Prefer a URL-safe slug, fall back to id
	const postPath = `/blog/${slug || _id || id}`

	// Use correct backend URL for images in production
	const backendBase = import.meta.env.VITE_API_URL || 'https://nozukoeducare.onrender.com';
	const getImageUrl = (img) => {
		if (!img) return defaultPostImg;
		if (img.startsWith('http')) return img;
		return `${backendBase}${img}`;
	};

	return (
		<article className="blog-card card-accent-top" tabIndex={0} role="article" aria-labelledby={`post-${_id || id || slug}`} data-aos="fade-up">
			{coverImage ? (
				<img
					className="blog-card__image"
					src={getImageUrl(coverImage)}
					alt={title}
				/>
			) : (
				<img className="blog-card__image" src={defaultPostImg} alt={title} />
			)}

			<div className="blog-card__body">
				{/* Title links to post detail (assumes future route) */}
				<h3 className="blog-card__title" id={`post-${_id || id || slug}`}>
					<Link to={postPath}>{title}</Link>
				</h3>

				<div className="blog-card__meta">
					<small>{formatDate(publishedAt)}</small>
					{author && <small> — {author}</small>}
				</div>

				<p className="blog-card__excerpt">{teaser}</p>

				<Link className="blog-card__readmore" to={postPath} aria-label={`Read more about ${title}`}>
					Read more →
				</Link>
			</div>
		</article>
	)
}
