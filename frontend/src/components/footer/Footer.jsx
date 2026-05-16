import { Link } from 'react-router-dom'
import './Footer.css'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-grid">

        {/* Brand + description */}
        <div className="footer-brand">
          <div className="footer-logo-row">
            <span className="footer-logo-icon" aria-hidden="true">🌿</span>
            <span className="footer-logo-text">Nozuko <span className="footer-logo-accent">Educare</span></span>
          </div>
          <p className="footer-desc">
            A trusted early childhood development centre in Victoria Mxenge, Philippi,
            Cape Town. CAPS-aligned and Montessori-inspired — nurturing curious, confident
            learners from 0 to 6 years.
          </p>
          <div className="footer-social">
            <a href="https://www.facebook.com/NozukoEducareCentre" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/nozuko_educare/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://wa.me/27813872713" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <nav className="footer-nav" aria-label="Footer navigation">
          <h4 className="footer-heading">Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/classes">Classes &amp; Programmes</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact &amp; Enrol</Link></li>
          </ul>
        </nav>

        {/* Contact */}
        <div className="footer-contact">
          <h4 className="footer-heading">Get in Touch</h4>
          <ul className="footer-contact-list">
            <li>
              <FaMapMarkerAlt aria-hidden="true" />
              <span>148 Sanki Street, Victoria Mxenge,<br />Philippi, Cape Town, 7785</span>
            </li>
            <li>
              <FaPhone aria-hidden="true" />
              <a href="tel:+27813872713">081 387 2713</a>
            </li>
            <li>
              <FaEnvelope aria-hidden="true" />
              <a href="mailto:info@nozukoeducare.co.za">info@nozukoeducare.co.za</a>
            </li>
          </ul>
        </div>

        {/* Donate / support */}
        <div className="footer-donate">
          <h4 className="footer-heading">Support Our Work</h4>
          <p className="footer-donate-text">
            We serve one of Cape Town's most underserved communities. Your donation
            funds meals, learning materials, and field trips for children who need it most.
          </p>
          <a href="/contact#donate" className="footer-donate-btn">Donate or Partner</a>
        </div>

      </div>

      <div className="footer-bottom">
        <small>© {new Date().getFullYear()} Nozuko Educare Centre · Victoria Mxenge, Philippi, Cape Town</small>
        <span>
          Built by{' '}
          <a href="https://tishbitedigital.co.za" target="_blank" rel="noopener noreferrer">
            Tishbite Digital
          </a>
        </span>
      </div>
    </footer>
  )
}
