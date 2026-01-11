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
            <a href="https://x.com/nozukoc7028" target="_blank" rel="noopener noreferrer" className="social-link social-link--x" title="X (formerly Twitter)" aria-label="X (formerly Twitter)">
              <FaTwitter aria-hidden="true" />
            </a>
            <a href="https://pin.it/2LpeAEMkb" target="_blank" rel="noopener noreferrer" className="social-link social-link--pinterest" title="Pinterest" aria-label="Pinterest">
              <FaPinterestP aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="footer-credit">
          <p>
            <small>
              Developed by <a href="https://tishbite.digital" target="_blank" rel="noopener noreferrer">Tishbite Digital</a>
            </small>
          </p>
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

