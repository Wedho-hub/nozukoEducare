import React, { useState } from 'react'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import Hero from '../../components/hero/Hero'
import heroImg from '../../assets/images/nozukohero.jpg'
import './Contact.css'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaHandHoldingHeart } from 'react-icons/fa'
import api from '../../services/api'

const INITIAL = { name: '', email: '', phone: '', subject: 'enrolment', message: '' }

export default function Contact() {
  useDocumentTitle('Contact — Nozuko Educare, Philippi')
  const [form, setForm] = useState(INITIAL)
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.message.trim()) return
    setStatus('sending')
    try {
      await api.post('/api/contact', form)
      setStatus('success')
      setForm(INITIAL)
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Hero
        title="Contact &amp; Enrol"
        subtitle="We respond within 1 business day. Come visit — our door is always open."
        badge="Victoria Mxenge, Philippi"
        primaryCta={{ text: 'WhatsApp Us', href: 'https://wa.me/27813872713' }}
        secondaryCta={{ text: 'Call 081 387 2713', href: 'tel:+27813872713' }}
        bgImage={heroImg}
      />

      {/* ── CONTACT CARDS ── */}
      <section className="page-section contact-cards-section">
        <div className="container">
          <div className="contact-cards-grid">
            <a href="https://wa.me/27813872713" target="_blank" rel="noopener noreferrer" className="contact-card card">
              <FaWhatsapp className="contact-card__icon" aria-hidden="true" style={{ color: '#25D366' }} />
              <h4>WhatsApp</h4>
              <p>Quickest way to reach us — we reply fast</p>
              <span className="contact-card__value">081 387 2713</span>
            </a>
            <a href="tel:+27813872713" className="contact-card card">
              <FaPhone className="contact-card__icon" aria-hidden="true" style={{ color: '#1A5C45' }} />
              <h4>Call Us</h4>
              <p>Mon–Fri 07:00–17:00</p>
              <span className="contact-card__value">081 387 2713</span>
            </a>
            <a href="mailto:info@nozukoeducare.co.za" className="contact-card card">
              <FaEnvelope className="contact-card__icon" aria-hidden="true" style={{ color: '#D97706' }} />
              <h4>Email</h4>
              <p>We reply within 1 business day</p>
              <span className="contact-card__value">info@nozukoeducare.co.za</span>
            </a>
            <div className="contact-card card">
              <FaMapMarkerAlt className="contact-card__icon" aria-hidden="true" style={{ color: '#1A5C45' }} />
              <h4>Visit Us</h4>
              <p>148 Sanki Street, Victoria Mxenge</p>
              <span className="contact-card__value">Philippi, Cape Town, 7785</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FORM + DONATE ── */}
      <section className="page-section contact-main-section bg-green-light">
        <div className="container">
          <div className="contact-main-grid">

            {/* Message form */}
            <div className="contact-form-col">
              <span className="accent-label">Send a Message</span>
              <h2 className="section-heading mb-2" id="contact-form">Get in Touch</h2>
              <p className="text-muted mb-3">
                Whether you want to enrol your child, ask about fees, arrange a visit, or
                discuss a donation — fill in the form and we will get back to you.
              </p>

              {status === 'success' && (
                <div className="contact-alert contact-alert--success" role="alert">
                  ✅ Thank you! We received your message and will be in touch shortly.
                </div>
              )}
              {status === 'error' && (
                <div className="contact-alert contact-alert--error" role="alert">
                  ❌ Something went wrong. Please try WhatsApp or call us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your name *</label>
                    <input
                      id="name" name="name" type="text"
                      placeholder="e.g. Nomsa Dlamini"
                      value={form.name} onChange={handleChange}
                      required
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone number</label>
                    <input
                      id="phone" name="phone" type="tel"
                      placeholder="e.g. 082 000 0000"
                      value={form.phone} onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email" name="email" type="email"
                    placeholder="name@example.com"
                    value={form.email} onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">What is this about?</label>
                  <select id="subject" name="subject" value={form.subject} onChange={handleChange} className="form-select">
                    <option value="enrolment">Enrolling my child</option>
                    <option value="visit">Booking a visit / tour</option>
                    <option value="fees">Fees and payment</option>
                    <option value="donate">Donation or partnership</option>
                    <option value="other">Other enquiry</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message" name="message" rows={5}
                    placeholder="Tell us about your child, what you need, or how you'd like to help..."
                    value={form.message} onChange={handleChange}
                    required
                    className="form-control"
                  />
                </div>
                <button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Donate / support sidebar */}
            <div id="donate" className="contact-donate-col">
              <div className="donate-box card">
                <FaHandHoldingHeart className="donate-box__icon" aria-hidden="true" />
                <h3 className="donate-box__title">Support Nozuko Educare</h3>
                <p>
                  We serve Victoria Mxenge — one of Cape Town's most underserved communities.
                  Your support keeps quality education accessible for every child, regardless
                  of what their family can afford.
                </p>
                <h4>Ways to Give</h4>
                <ul className="donate-list">
                  <li>💳 <strong>EFT Donation</strong> — contact us for banking details</li>
                  <li>🎒 <strong>School supplies</strong> — books, stationery, art materials</li>
                  <li>🥗 <strong>Food donations</strong> — non-perishables welcome</li>
                  <li>🏢 <strong>Corporate CSR</strong> — we provide impact certificates</li>
                  <li>🤝 <strong>Skills volunteering</strong> — teaching, admin, building</li>
                </ul>
                <a href="https://wa.me/27813872713" target="_blank" rel="noopener noreferrer" className="donate-cta-btn">
                  <FaWhatsapp aria-hidden="true" /> Talk to us about donating
                </a>
              </div>

              <div className="address-box card mt-3">
                <h4>Find Us</h4>
                <address>
                  <strong>Nozuko Educare Centre</strong><br />
                  148 Sanki Street<br />
                  Victoria Mxenge, Philippi<br />
                  Cape Town, Western Cape, 7785
                </address>
                <p className="address-box__hours">
                  <strong>Hours:</strong> Mon–Fri, 07:00 – 17:00
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
