import React from 'react'
import { motion } from 'framer-motion'
import heroDefault from '../../assets/images/nozukohero.jpg'
import MuralBackground from '../mural/MuralBackground'
import BubbleField from '../bubble/BubbleField'
import './Hero.css'

/**
 * Hero — reusable page banner.
 * Defaults are set for the homepage emotional hook.
 */
const DEFAULT_TITLE = (
  <>
    Nurturing{' '}
    <span className="hero__title-pink">Every Child</span>
    {' '}in{' '}
    <span className="hero__title-blue">Victoria Mxenge</span>
  </>
)

export default function Hero({
  title = DEFAULT_TITLE,
  subtitle = 'Quality early childhood education in the heart of Philippi, Cape Town. CAPS-aligned, Montessori-inspired — because every child deserves a great start.',
  badge = 'Ages 0 – 6 years',
  primaryCta  = { text: 'Enrol Your Child', href: 'https://wa.me/27813872713' },
  secondaryCta = { text: 'Book a Visit', href: '/contact' },
  bgImage = heroDefault,
  centered = true
}) {
  return (
    <section
      className={`hero ${centered ? 'hero--centered' : ''}`}
      role="region"
      aria-label="Page banner"
      style={bgImage ? {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top'
      } : undefined}
    >
      {/* Dark overlay for text legibility */}
      <div className="hero__overlay" aria-hidden="true" />

      {/* Repeating SVG circle texture */}
      <div className="hero__pattern" aria-hidden="true" />

      {/* Floating colour bubbles */}
      <BubbleField variant="hero" />

      {/* Abstract mural art — numbers, shapes, rings */}
      <MuralBackground variant="hero" />

      {/* Floating pill badges */}
      <div className="hero__float-badge hero__float-badge--star" aria-hidden="true">⭐ Loved by families</div>
      <div className="hero__float-badge hero__float-badge--check" aria-hidden="true">✅ DSD Registered</div>

      <div className="container hero__content">
        {/* Emoji decoration strip */}
        <motion.div
          className="hero__emoji-row"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          aria-hidden="true"
        >
          🌈 ⭐ 🎨 🎉 🏫
        </motion.div>

        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <span className="hero__badge">{badge}</span>
          </motion.div>
        )}

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          className="hero__meta-row"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          <span className="hero__meta-pill">📍 Victoria Mxenge, Philippi</span>
          <span className="hero__meta-pill">⏰ Mon–Fri 07:00–17:00</span>
        </motion.div>

        <motion.div
          className="hero__ctas"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          {primaryCta && (
            <a
              className="hero__cta hero__cta--primary cta-pulse"
              href={primaryCta.href}
              target={primaryCta.href.startsWith('http') ? '_blank' : undefined}
              rel={primaryCta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {primaryCta.text}
            </a>
          )}
          {secondaryCta && (
            <a className="hero__cta hero__cta--secondary" href={secondaryCta.href}>
              {secondaryCta.text}
            </a>
          )}
        </motion.div>
      </div>
    </section>
  )
}
