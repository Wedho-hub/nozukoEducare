import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FaLeaf } from 'react-icons/fa'
import { Navbar as RBNavbar, Nav, Container } from 'react-bootstrap'
import './Navbar.css'
import useMobileMenu from '../../hooks/useMobileMenu'

export default function Navbar() {
  const { expanded, setExpanded, toggle, close } = useMobileMenu()
  const location = useLocation()

  React.useEffect(() => {
    setExpanded(false)
  }, [location.pathname, setExpanded])

  return (
    <RBNavbar bg="white" expand="lg" className="site-header fixed-top" expanded={expanded}>
      <Container>
        <RBNavbar.Brand as={NavLink} to="/" className="brand" aria-label="Nozuko Educare — home">
          <span className="brand-icon-wrap" aria-hidden="true">
            <FaLeaf className="brand-icon" />
          </span>
          <span className="brand-text">
            Nozuko <span className="brand-text-accent">Educare</span>
          </span>
        </RBNavbar.Brand>

        <RBNavbar.Toggle aria-controls="main-nav" onClick={toggle} aria-label="Toggle navigation">
          <span className={`hamburger ${expanded ? 'is-open' : ''}`} aria-hidden="true">
            {expanded ? '✕' : '☰'}
          </span>
        </RBNavbar.Toggle>

        <RBNavbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-center gap-1">
            <Nav.Link as={NavLink} to="/" end onClick={close}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" onClick={close}>About</Nav.Link>
            <Nav.Link as={NavLink} to="/classes" onClick={close}>Classes</Nav.Link>
            <Nav.Link as={NavLink} to="/blog" onClick={close}>Blog</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" onClick={close}>Contact</Nav.Link>
            <a
              href="https://wa.me/27813872713"
              className="nav-cta ms-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enrol now via WhatsApp"
              onClick={close}
            >
              Enrol Now
            </a>
          </Nav>
        </RBNavbar.Collapse>
      </Container>
    </RBNavbar>
  )
}
