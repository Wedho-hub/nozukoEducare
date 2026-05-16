import React from 'react'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import Hero from '../../components/hero/Hero'
import heroImg from '../../assets/images/nozukohero.jpg'
import founderImg from '../../assets/images/nozukoFounder.jpeg'
import StaffCard from '../../components/staff/StaffCard'
import './About.css'
import { FaShieldAlt, FaGraduationCap, FaHandHoldingHeart, FaLeaf, FaCheckCircle } from 'react-icons/fa'

const VALUES = [
  {
    icon: <FaHandHoldingHeart />,
    bg: '#EBF7F2',
    iconColor: '#1A5C45',
    title: 'Every Child Matters',
    desc: 'We treat each child as our own — with patience, respect, and unconditional love.'
  },
  {
    icon: <FaGraduationCap />,
    bg: '#FEF3C7',
    iconColor: '#D97706',
    title: 'Excellence in Learning',
    desc: 'CAPS-aligned and Montessori-inspired — we never compromise on the quality of education.'
  },
  {
    icon: <FaShieldAlt />,
    bg: '#EBF7F2',
    iconColor: '#1A5C45',
    title: 'Safety Above All',
    desc: 'Gated, registered premises. Our families trust us because we earn that trust every day.'
  },
  {
    icon: <FaLeaf />,
    bg: '#FEF3C7',
    iconColor: '#D97706',
    title: 'Community Roots',
    desc: "We are from Victoria Mxenge. We understand the challenges — and we're here for the long haul."
  },
]

const CURRICULUM_POINTS = [
  'South African CAPS foundation phase principles',
  'National Early Learning Development Standards (NELDS)',
  'Montessori-inspired practical life and sensorial activities',
  'Bilingual learning: isiXhosa and English',
  'Social-emotional learning (SEL) woven into every day',
  'School readiness assessment before Grade 1 transition',
]

const STAFF = [
  {
    name: 'Nowethu',
    role: 'Baby & Toddler Teacher',
    bio: 'Specialises in early infant care and sensory development for children 0–2 years.',
    favTime: 'Sensory play and singing time'
  },
  {
    name: 'Busisiwe',
    role: 'Preschool Teacher',
    bio: 'Experienced in Montessori methods and early literacy for children 2–4 years.',
    favTime: 'Montessori work-cycle'
  },
  {
    name: 'Miranda',
    role: 'Pre-Grade R & Grade R Teacher',
    bio: 'CAPS-certified Grade R practitioner dedicated to full school readiness.',
    favTime: 'Creative arts and letter formation'
  },
]

export default function About() {
  useDocumentTitle('About — Nozuko Educare Centre, Philippi')
  const [missionOpen, setMissionOpen] = React.useState(false)

  return (
    <div className="about-page">
      <Hero
        title="About Nozuko Educare"
        subtitle="A community-born early childhood centre giving children in Victoria Mxenge the foundation they deserve."
        badge="Est. in Philippi, Cape Town"
        primaryCta={{ text: 'Enrol Your Child', href: 'https://wa.me/27813872713' }}
        secondaryCta={{ text: 'Our Classes', href: '/classes' }}
        bgImage={heroImg}
      />

      {/* ── VALUES STRIP ── */}
      <section className="about-values page-section">
        <div className="container">
          <span className="accent-label">Our Core Values</span>
          <h2 className="section-heading mb-1">What We Stand For</h2>
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <div key={i} className="value-card card" style={{ background: v.bg }}>
                <div className="value-icon" style={{ color: v.iconColor }} aria-hidden="true">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER / INTRO ── */}
      <section className="page-section about-intro">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-intro-img-col">
              <img
                src={founderImg}
                alt="Nozuko Mxenge, Founder of Nozuko Educare Centre"
                className="about-founder-img"
              />
              <div className="about-founder-caption">
                <strong>Nozuko Mxenge</strong><br />
                <span>Founder &amp; Director</span>
              </div>
            </div>
            <div className="about-intro-text">
              <span className="accent-label">Our Story</span>
              <h2 className="section-heading mb-2">Born in Victoria Mxenge</h2>
              <p>
                <strong>Nozuko Educare Centre</strong> was founded with a single belief: that where
                a child grows up should not determine how far they go. Located in Victoria Mxenge,
                Philippi — one of Cape Town's most underserved communities — we provide quality
                early childhood education that is genuinely affordable and deeply loving.
              </p>
              <p className="text-muted">
                We know this neighbourhood. We know its challenges — and we know its strength.
                Our teachers live here. Our families trust us. And every day, we show up because
                the children of Philippi deserve the exact same foundation as children anywhere
                else in Cape Town.
              </p>

              <div className={`about-mission-extra ${missionOpen ? 'open' : ''}`} aria-hidden={!missionOpen}>
                <h3 className="about-subheading mt-3">Our Vision</h3>
                <p>
                  To be the most trusted and accessible community-based ECD centre in Philippi —
                  empowering every child to reach their full potential regardless of socio-economic
                  background.
                </p>
                <h3 className="about-subheading">Our Mission</h3>
                <ul className="about-mission-list">
                  <li>Affordable, quality early childhood education for Philippi families</li>
                  <li>Safe, nurturing and stimulating learning environment</li>
                  <li>NELDS and CAPS-aligned education for school readiness</li>
                  <li>Montessori-inspired independence, curiosity and creativity</li>
                  <li>Whole-child development: intellectual, social, emotional, physical</li>
                  <li>Community partnership — parents and educators working together</li>
                </ul>
              </div>

              <button
                className="btn btn-outline mt-3 read-more-btn"
                onClick={() => setMissionOpen(s => !s)}
                aria-expanded={missionOpen}
              >
                {missionOpen ? 'Show less' : 'Read our mission & vision'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CURRICULUM ── */}
      <section className="page-section about-curriculum bg-green-light">
        <div className="container">
          <span className="accent-label">Curriculum Approach</span>
          <h2 className="section-heading mb-1">How We Teach</h2>
          <p className="section-subtext">
            We combine the structure of the South African national curriculum with the
            child-led philosophy of Montessori — giving children both the skills and the love of learning.
          </p>
          <div className="curriculum-grid">
            {CURRICULUM_POINTS.map((point, i) => (
              <div key={i} className="curriculum-item">
                <FaCheckCircle className="curriculum-check" aria-hidden="true" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="page-section about-team">
        <div className="container">
          <span className="accent-label">Meet the Team</span>
          <h2 className="section-heading mb-1">Our Dedicated Educators</h2>
          <p className="section-subtext">
            ECD-trained, Montessori-aware, and deeply committed to every child in their care.
          </p>
          <div className="staff-grid">
            {STAFF.map((s, i) => (
              <StaffCard key={i} name={s.name} role={s.role} bio={s.bio} favTime={s.favTime} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
