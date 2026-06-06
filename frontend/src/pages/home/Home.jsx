import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../components/hero/Hero'
import GallerySection from '../../components/gallery/GallerySection'
import TestimonialSection from '../../components/testimonial/TestimonialSection'
import BottomCTASection from '../../components/cta/BottomCTASection'
import MuralBackground from '../../components/mural/MuralBackground'
import BubbleField from '../../components/bubble/BubbleField'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import './Home.css'
import {
  FaShieldAlt, FaBook, FaHeart, FaUserGraduate,
  FaUtensils, FaBus, FaChild, FaUserFriends,
  FaHandHoldingHeart, FaLeaf, FaStar
} from 'react-icons/fa'

function CountUp({ end = 0, suffix = '', duration = 1200 }) {
  const [value, setValue] = React.useState(0)
  const ref = React.useRef(null)
  const started = React.useRef(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let start = null
        const step = (ts) => {
          if (!start) start = ts
          const progress = Math.min((ts - start) / duration, 1)
          setValue(Math.floor(progress * end))
          if (progress < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      }
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration])

  return <span ref={ref} aria-label={`${end}${suffix}`}>{value}{suffix}</span>
}

/* Rainbow border colors cycling across cards */
const RAINBOW = ['#E63946','#F4A261','#FFD166','#06D6A0','#4A9FD5','#9B5DE5']

const TRUST_ITEMS = [
  { icon: <FaShieldAlt />, color: '#fff', iconColor: '#E63946', title: 'Safe & Secure', desc: 'Gated premises, child-safe facilities, registered with DSD' },
  { icon: <FaBook />, color: '#fff', iconColor: '#F4A261', title: 'CAPS + Montessori', desc: 'National curriculum aligned with Montessori principles' },
  { icon: <FaUtensils />, color: '#fff', iconColor: '#06D6A0', title: 'Nutritious Meals', desc: 'Healthy breakfast & lunch prepared fresh daily' },
  { icon: <FaUserGraduate />, color: '#fff', iconColor: '#4A9FD5', title: 'Qualified Staff', desc: 'Trained, ECD-certified and loving teachers' },
  { icon: <FaHeart />, color: '#fff', iconColor: '#D81B60', title: 'Every Child Valued', desc: 'Small classes — avg. 12 children per teacher' },
  { icon: <FaBus />, color: '#fff', iconColor: '#9B5DE5', title: '4+ Excursions/Year', desc: 'Field trips that broaden horizons and spark curiosity' },
]

/* Stat icon background chips */
const STAT_BG   = ['#FFE8EA','#E8F4FB','#FEF3C7','#E0FFF7']
const STAT_COLOR = ['#E63946','#4A9FD5','#F4A261','#06D6A0']

const STATS = [
  { icon: <FaUserFriends />, end: 50, suffix: '+', label: 'Children enrolled' },
  { icon: <FaChild />, end: 6, suffix: '', label: 'Age groups (0–6 yrs)' },
  { icon: <FaUserGraduate />, end: 5, suffix: '+', label: 'Qualified educators' },
  { icon: <FaStar />, end: 10, suffix: '+', label: 'Years serving Philippi' },
]

const PREVIEW_CLASSES = [
  { title: 'Baby & Toddler', ages: '0 – 2 years', icon: '👶', desc: 'Sensory play, songs, and loving full-day care.', color: '#E8F4FB', link: '/classes#toddler' },
  { title: 'Preschool', ages: '2 – 4 years', icon: '🎨', desc: 'Montessori materials, pre-literacy, creative arts.', color: '#FFF0F5', link: '/classes#preschool' },
  { title: 'Pre-Grade R & Grade R', ages: '4 – 6 years', icon: '📚', desc: 'Full CAPS curriculum — complete school readiness.', color: '#F3E5F5', link: '/classes#grader' },
]

export default function Home() {
  useDocumentTitle('Home — Nozuko Educare Centre, Philippi')

  return (
    <>
      <Hero />

      {/* ── COMMUNITY IMPACT BANNER ── */}
      <section className="impact-banner">
        <div className="container impact-banner__inner">
          <FaLeaf className="impact-banner__icon" aria-hidden="true" />
          <p>
            <strong>Making a difference in Victoria Mxenge, Philippi.</strong>{' '}
            In one of Cape Town's most challenging communities, Nozuko Educare gives children
            the foundation they deserve — safe, fed, loved, and learning.
          </p>
          <a href="/about" className="impact-banner__link">Our story →</a>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="page-section stats-section">
        <div className="container">
          <div className="stats-grid stagger-children">
            {STATS.map((s, i) => (
              <div key={i} className="stat-card card spring-card"
                   style={{ borderTop: `4px solid ${STAT_COLOR[i]}` }}
                   data-aos="spring-up" data-aos-delay={i * 80}>
                <div className="stat-icon" aria-hidden="true"
                     style={{ background: STAT_BG[i], color: STAT_COLOR[i] }}
                     data-aos="spin-in" data-aos-delay={i * 80 + 180}>{s.icon}</div>
                <div className="stat-number" style={{ color: STAT_COLOR[i] }}>
                  <CountUp end={s.end} suffix={s.suffix} />
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY PARENTS TRUST US ── */}
      <section className="page-section bg-green-light" style={{ position: 'relative', overflow: 'hidden' }}>
        <MuralBackground variant="light" />
        <BubbleField variant="light" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label-row">
            <span className="accent-label">Why Parents Choose Us</span>
          </div>
          <div className="emoji-row" aria-hidden="true" data-aos="fade-up">🛡️ 📚 🍽️ 🎓 ❤️ 🚌</div>
          <h2 className="section-heading text-center mb-1" data-aos="fade-up" data-aos-delay="40">A Place Where Children Thrive</h2>
          <p className="section-subtext text-center" data-aos="fade-up" data-aos-delay="80">
            Every decision we make puts your child's safety, growth, and happiness first.
          </p>
          <div className="trust-grid">
            {TRUST_ITEMS.map((item, i) => (
              <div key={i} className="trust-card card spring-card"
                   style={{ background: item.color, borderTop: `4px solid ${RAINBOW[i]}` }}
                   data-aos="spring-up" data-aos-delay={i * 70}>
                <div className="trust-icon" style={{ color: item.iconColor, background: `${RAINBOW[i]}18` }} aria-hidden="true"
                     data-aos="pop-in" data-aos-delay={i * 70 + 160}>
                  {item.icon}
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLASSES PREVIEW ── */}
      <section className="page-section classes-preview">
        <div className="container">
          <span className="accent-label">Our Programmes</span>
          <div className="emoji-row" aria-hidden="true" data-aos="fade-up">👶 🎨 📚 🌈 ⭐</div>
          <h2 className="section-heading mb-1" data-aos="fade-up" data-aos-delay="40">Learning at Every Age</h2>
          <p className="section-subtext" data-aos="fade-up" data-aos-delay="80">
            From tiny babies to Grade R school-readiness — each class is structured around
            child development milestones, CAPS requirements, and Montessori principles.
          </p>
          <div className="classes-preview-grid">
            {PREVIEW_CLASSES.map((c, i) => (
              <Link key={i} to={c.link} className="class-preview-card card spring-card"
                    style={{ background: c.color, borderTop: `4px solid ${RAINBOW[i]}` }}
                    data-aos="spring-up" data-aos-delay={i * 90}>
                <div className="class-preview-icon" aria-hidden="true"
                     data-aos="pop-in" data-aos-delay={i * 90 + 160}>{c.icon}</div>
                <div>
                  <div className="class-preview-title">{c.title}</div>
                  <div className="class-preview-ages">{c.ages}</div>
                  <p className="class-preview-desc">{c.desc}</p>
                </div>
                <span className="class-preview-link">See programme →</span>
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/classes" className="btn btn-outline px-4 py-2">View all classes &amp; schedules</Link>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <GallerySection />

      {/* ── DONOR / PARTNER SECTION ── */}
      <section className="page-section donor-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <MuralBackground variant="light" />
        <BubbleField variant="dots" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="donor-inner">
            <div className="donor-text" data-aos="fade-right">
              <span className="accent-label">Support Our Mission</span>
              <div className="emoji-row emoji-row--left" aria-hidden="true">❤️ 🌟 🤝 💛</div>
              <h2 className="section-heading mb-2">Help Us Change More Lives</h2>
              <p className="text-muted mb-3">
                Nozuko Educare operates in Victoria Mxenge — a community facing real hardship.
                We keep our fees affordable so no child is turned away. Corporate partners,
                NGOs, and individual donors make that possible.
              </p>
              <ul className="donor-list">
                <li><FaHandHoldingHeart aria-hidden="true" /> <strong>Fund a child's meals</strong> for a full term</li>
                <li><FaBook aria-hidden="true" /> <strong>Donate learning materials</strong> — books, puzzles, Montessori tools</li>
                <li><FaBus aria-hidden="true" /> <strong>Sponsor an excursion</strong> — many children have never left Philippi</li>
                <li><FaLeaf aria-hidden="true" /> <strong>Corporate CSR partnership</strong> — we issue a certificate of impact</li>
              </ul>
              <a href="/contact#donate" className="btn btn-amber mt-3 d-inline-block px-4 py-2">Get in touch to donate</a>
            </div>
            <div className="donor-badge card spring-card" data-aos="spring-up" data-aos-delay="200">
              <div className="donor-badge__number">100%</div>
              <div className="donor-badge__label">of donations go directly to children's programmes</div>
              <hr className="donor-badge__divider" />
              <p className="donor-badge__quote">
                "When a child from Philippi walks into Grade 1 ready to read and count —
                that's your donation at work."
              </p>
              <p className="donor-badge__cite">— Nozuko Mxenge, Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <TestimonialSection />

      {/* ── BOTTOM CTA ── */}
      <BottomCTASection />
    </>
  )
}
