import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../components/hero/Hero'
import ClassCard from '../../components/classCard/ClassCard'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import './Home.css'
import { FaUserFriends, FaBus, FaUtensils, FaChild, FaBaby, FaStar, FaPalette, FaBullhorn, FaBook } from 'react-icons/fa'
import heroImg from '../../assets/images/nozukohero.jpg'

// Sample classes for preview. Replace with API data later.
const SAMPLE_CLASSES = [
  { id: 'c1', title: 'Toddler Playgroup', ageRange: '2–3 years', times: 'Mon/Wed/Fri 9:00–11:00', summary: 'Play-based learning with story time, music and sensory play.', color: 'var(--color-pink)', icon: 'FaBaby' },
  { id: 'c2', title: 'Preschool Stars', ageRange: '3–5 years', times: 'Mon–Fri 9:00–12:00', summary: 'Early literacy, numeracy and social skills in a nurturing setting.', color: 'var(--color-sky)', icon: 'FaStar' },
  { id: 'c3', title: 'Creative Explorers', ageRange: '4–6 years', times: 'Tue/Thu 13:00–15:00', summary: 'Arts, crafts and imaginative play to encourage creativity.', color: 'var(--color-orange)', icon: 'FaPalette' }
]

export default function Home() {
  useDocumentTitle('Home')

  // Small inline CountUp component for stats animation
  function CountUp({ end = 0, duration = 1200 }) {
    const [value, setValue] = React.useState(0)

    React.useEffect(() => {
      let start = null
      let rafId

      const step = (timestamp) => {
        if (!start) start = timestamp
        const progress = Math.min((timestamp - start) / duration, 1)
        setValue(Math.floor(progress * end))
        if (progress < 1) rafId = requestAnimationFrame(step)
      }

      rafId = requestAnimationFrame(step)
      return () => cancelAnimationFrame(rafId)
    }, [end, duration])

    return <span aria-hidden="true">{value}</span>
  }

  return (
    <>
      <Hero
        title="Welcome to Nozuko Educare"
        subtitle="A safe, nurturing space for early childhood development and playful learning."
        primaryCta={{ text: 'Enrol now', href: 'whatsapp://send?phone=27813872713' }}
        secondaryCta={{ text: 'Contact us', href: '/contact' }}
        bgImage={heroImg}
      />

      <section className="container page-section intro">
        <div className="intro-grid">
          {/* Left: Promotions & Blog tease (now inside .intro-text so .intro-text .card-entrance is the promo) */}
          <div className="intro-text">
            <aside className="blog-promo card card-entrance" aria-labelledby="promotions">
              <h3 id="promotions">Promotions & Programs</h3>
              <p className="text-muted">New at Nozuko — programs designed to enrich learning and family life.</p>
              <article className="featured-post">
                <div className="blog-promo__icon" aria-hidden="true"><FaBullhorn /></div>
                <h4>Introducing <span className="highlight">English lessons</span></h4>
                <p className="text-muted small">Structured <span className="highlight">English</span> language lessons for preschoolers — starting Feb 2026. Small groups and play-based activities to make learning fun.</p>
                <h4 style={{ marginTop: 6 }}><span className="highlight">Excursions</span> — 2026 plan</h4>
                <p className="text-muted small">4 educational excursions planned for 2026 (one each quarter): cultural visits, nature walks and museum days.</p>
                <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                  <Link to="/classes" className="btn btn-outline">View programs</Link>
                  <Link to="/contact" className="btn btn-primary">Register interest</Link>
                </div>
              </article>
            </aside>
          </div>

          {/* Right: Blog promotion (reusing .welcome-card element to promote latest blog) */}
          <div className="welcome-card blog-feature card card-entrance" aria-labelledby="latest-blog">
            <h3 id="latest-blog">From our blog</h3>
            <article className="featured-post">
              <div className="blog-feature__icon" aria-hidden="true"><FaBook /></div>
              <h4>How <span className="highlight">play</span> prepares children for school</h4>
              <p className="text-muted small">A quick read about the role of play in early development, activities you can try at home, and what we focus on in our classes.</p>
              <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                <Link to="/blog" className="btn btn-primary">Read latest</Link>
                <Link to="/blog" className="btn btn-outline">View all posts</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="container page-section stats-section">
        <div className="stats-grid">
          <div className="stat card card-entrance" role="figure" aria-labelledby="staff-stat">
            <div className="stat-icon" aria-hidden="true"><FaUserFriends /></div>
            <div>
              <div id="staff-stat" className="stat-number"><CountUp end={5} duration={900} />+</div>
              <div className="stat-label">Trained staff</div>
            </div>
          </div>

          <div className="stat card card-entrance" role="figure" aria-labelledby="excursion-stat">
            <div className="stat-icon" aria-hidden="true"><FaBus /></div>
            <div>
              <div id="excursion-stat" className="stat-number"><CountUp end={4} duration={900} />+</div>
              <div className="stat-label">Excursion per year</div>
            </div>
          </div>

          <div className="stat card card-entrance" role="figure" aria-labelledby="meals-stat">
            <div className="stat-icon" aria-hidden="true"><FaUtensils /></div>
            <div>
              <div id="meals-stat" className="stat-number"><CountUp end={2} duration={900} />+</div>
              <div className="stat-label">Meals: breakfast & lunch</div>
            </div>
          </div>

          <div className="stat card card-entrance" role="figure" aria-labelledby="size-stat">
            <div className="stat-icon" aria-hidden="true"><FaChild /></div>
            <div>
              <div id="size-stat" className="stat-number"><CountUp end={12} duration={900} />+/-</div>
              <div className="stat-label">Avg class size</div>
            </div>
          </div>
        </div>
      </section>

      <section id="classes" className="container classes-preview">
        <h2>Our classes</h2>
        <p className="text-muted">A selection of classes we offer. View all classes for schedules and full details.</p>

        <div className="grid" aria-live="polite">
          {SAMPLE_CLASSES.map((c) => {
            // map icon name string to actual component
            const iconMap = { FaBaby, FaStar, FaPalette }
            const Icon = iconMap[c.icon] || FaChild
            return (
              <ClassCard key={c.id} c={c} variant="teaser" icon={Icon} color={c.color} />
            )
          })}
        </div>

        <div style={{ marginTop: 16 }}>
          <Link to="/classes" className="btn btn-outline">View all classes</Link>
        </div>
      </section>
    </>
  )
}
