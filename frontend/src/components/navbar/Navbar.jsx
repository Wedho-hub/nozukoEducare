import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FaChild } from 'react-icons/fa'
import { Navbar as RBNavbar, Nav, Container } from 'react-bootstrap'
import './Navbar.css'
import useMobileMenu from '../../hooks/useMobileMenu'

/**
 * Navbar
 * Implemented using React-Bootstrap for accessibility and responsive collapse.
 * Uses `Nav.Link` with `as={NavLink}` so active route styling works with react-router.
 */
export default function Navbar() {
  const { expanded, setExpanded, toggle, close } = useMobileMenu()
  const location = useLocation()

  // Close menu when location changes (navigation)
  React.useEffect(() => {
    setExpanded(false)
  }, [location.pathname, setExpanded])

  return (
    <RBNavbar bg="white" expand="lg" className="site-header shadow-sm" sticky="top" expanded={expanded}>
      <Container>
        <RBNavbar.Brand as={NavLink} to="/" className="brand">
          <FaChild className="brand-icon" aria-hidden="true" />
          <span className="brand-text">Nozuko Educare</span>
        </RBNavbar.Brand>

        {/* Custom Toggle content so we can reflect open/close state */}
        <RBNavbar.Toggle aria-controls="main-nav" onClick={toggle}>
          <span className={`hamburger ${expanded ? 'is-open' : ''}`} aria-hidden>{expanded ? '✕' : '☰'}</span>
        </RBNavbar.Toggle>

        <RBNavbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end onClick={close}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" onClick={close}>About</Nav.Link>
            <Nav.Link as={NavLink} to="/classes" onClick={close}>Classes</Nav.Link>
            <Nav.Link as={NavLink} to="/blog" onClick={close}>Blog</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" onClick={close}>Contact</Nav.Link>
          </Nav>
        </RBNavbar.Collapse>
      </Container>
    </RBNavbar>
  )
}

/* Teacher note: This component keeps behavior simple and accessible. Customize the
   branding and active link styles in `Navbar.css`. */
