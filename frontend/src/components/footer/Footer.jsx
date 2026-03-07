import { Link } from 'react-router-dom'
import './Footer.css'
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-grid">
        <nav className="footer-nav" aria-label="Footer navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/classes">Classes</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="footer-slogan" aria-hidden>
          <p className="slogan"><em>Learning Through Play</em></p>
          <div className="footer-social" aria-label="Follow Nozuko Educare on social media">
            <a href="https://www.facebook.com/Nozuko Educare Centre" target="_blank" rel="noopener noreferrer" className="social-link social-link--facebook" title="Facebook" aria-label="Facebook">
              <FaFacebookF aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com/nozuko_educare/" target="_blank" rel="noopener noreferrer" className="social-link social-link--instagram" title="Instagram" aria-label="Instagram">
              <FaInstagram aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="footer-credit">
          <div className="developer-credit">
            <span className="credit-label">Site developed by</span>
            <a
              href="https://tishbite.digital"
              target="_blank"
              rel="noopener noreferrer"
              className="developer-link"
              title="Visit Tishbite Digital - Professional Web Solutions"
              aria-label="Tishbite Digital website"
            >
              <strong>Tishbite Digital</strong>
            </a>
          </div>
          <address className="footer-address">
            <strong>Address:</strong><br />
            148 Sanki Street, Victoria Mxenge, Philippi, Cape Town
          </address>
        </div>
      </div>

      <div className="container footer-bottom">
        <div className="copyright">
          <small>© {new Date().getFullYear()} Nozuko Educare Centre</small>
        </div>
      </div>
    </footer>
  )
}

