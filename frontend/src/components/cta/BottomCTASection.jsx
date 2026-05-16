import React from 'react'
import './BottomCTASection.css'
import { FaWhatsapp, FaPhone } from 'react-icons/fa'
import MuralBackground from '../mural/MuralBackground'

export default function BottomCTASection() {
  return (
    <section className="bottom-cta" aria-labelledby="bottom-cta-heading" style={{ position: 'relative', overflow: 'hidden' }}>
      <MuralBackground variant="hero" />
      <div className="container bottom-cta__inner">
        <div className="bottom-cta__text">
          <div className="bottom-cta__badge">Limited spaces available for 2025</div>
          <h2 id="bottom-cta-heading" className="bottom-cta__title">
            Give Your Child the Best Start
          </h2>
          <p className="bottom-cta__sub">
            Nozuko Educare — safe, affordable, CAPS-aligned early childhood education
            in Victoria Mxenge, Philippi. Enrol today.
          </p>
        </div>
        <div className="bottom-cta__actions">
          <a
            href="https://wa.me/27813872713"
            className="cta-btn cta-btn--whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp to enrol"
          >
            <FaWhatsapp aria-hidden="true" />
            Chat on WhatsApp
          </a>
          <a href="tel:+27813872713" className="cta-btn cta-btn--phone">
            <FaPhone aria-hidden="true" />
            081 387 2713
          </a>
        </div>
      </div>
    </section>
  )
}
