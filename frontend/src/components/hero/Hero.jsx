import React from 'react'
/* eslint-disable-next-line no-unused-vars */
import { motion } from 'framer-motion'
import heroDefault from '../../assets/images/nozukohero.jpg'
import './Hero.css'

/**
 * Hero
 * Reusable hero section with optional CTAs. Keep copy concise and action-oriented.
 * Props:
 *  - title: string
 *  - subtitle: string
 *  - primaryCta: { text, href } (required)
 *  - secondaryCta: { text, href } (optional)
 *
 * Example:
 * <Hero title="Hello" subtitle="Welcome" primaryCta={{text:'Join',href:'#'}} />
 */
export default function Hero({
  title = 'Nozuko Educare',
  subtitle = 'Nurturing young learners',
  primaryCta = { text: 'Explore Classes', href: '#classes' },
  secondaryCta = { text: 'Contact', href: '#contact' },
  // We enforce using the site's primary hero image to keep a consistent brand background across pages
  bgImage = heroDefault
}) {
  return (
    <section
      className="hero"
      role="region"
      aria-label="Hero"
      style={
        bgImage
          ? {
              backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.5)), url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }
          : undefined
      }
    >
      <div className="container">
        <motion.h1
          className="hero__title"
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          {subtitle}
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18 }}>
          <div className="hero__ctas">
            {primaryCta && (
              <a className="btn btn-primary hero__cta" href={primaryCta.href} aria-label={primaryCta.text}>{primaryCta.text}</a>
            )}
            {secondaryCta && (
              <a className="btn btn-outline hero__cta" href={secondaryCta.href} aria-label={secondaryCta.text}>{secondaryCta.text}</a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
