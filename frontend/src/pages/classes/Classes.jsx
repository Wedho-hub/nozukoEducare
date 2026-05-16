import React, { useState } from 'react'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import Hero from '../../components/hero/Hero'
import heroImg from '../../assets/images/nozukohero.jpg'
import EnrollModal from '../../components/enroll/EnrollModal'
import './Classes.css'
import { FaCheckCircle, FaWhatsapp, FaPhone } from 'react-icons/fa'

const AGE_GROUPS = [
  {
    id: 'babies',
    emoji: '👶',
    name: 'Baby Room',
    ageRange: '0 – 12 months',
    teacher: 'Nowethu',
    bg: '#EBF7F2',
    accent: '#1A5C45',
    curriculum: ['NELDS infant care guidelines', 'Sensory stimulation: texture, sound, light', 'Safe sleep routine and feeding support', 'Tummy time and gross motor development', 'Early language — songs, talking, reading aloud'],
    description: 'Gentle full-day care for our youngest learners. Every baby receives individual attention in a calm, safe, nurturing environment.',
  },
  {
    id: 'toddler',
    emoji: '🐾',
    name: 'Toddler Class',
    ageRange: '1 – 2 years',
    teacher: 'Nowethu',
    bg: '#FEF3C7',
    accent: '#D97706',
    curriculum: ['NELDS toddler milestones tracking', 'Walking, climbing, gross motor play', 'First words, songs and vocabulary building', 'Social play — learning to share and take turns', 'Sensory activities and practical life skills'],
    description: 'Exploration through movement and play. Building confidence, language, and early social skills in a structured yet joyful setting.',
  },
  {
    id: 'preschool',
    emoji: '🎨',
    name: 'Junior Preschool',
    ageRange: '2 – 3 years',
    teacher: 'Busisiwe',
    bg: '#EBF7F2',
    accent: '#1A5C45',
    curriculum: ['Montessori practical life activities', 'Early language development (isiXhosa & English)', 'Number awareness and sorting', 'Creative arts: painting, modelling, music', 'Emotional regulation and self-expression'],
    description: 'Montessori-inspired play-based learning that builds independence, language, and creativity through hands-on discovery.',
  },
  {
    id: 'senior-preschool',
    emoji: '⭐',
    name: 'Senior Preschool',
    ageRange: '3 – 4 years',
    teacher: 'Busisiwe',
    bg: '#FEF3C7',
    accent: '#D97706',
    curriculum: ['Pre-literacy: phonics, letter recognition', 'Pre-numeracy: counting, patterns, shapes', 'Montessori sensorial materials', 'Story time, drama, and role play', 'Emotional learning and peer relationships'],
    description: 'Building the cognitive and social foundations for school. Children develop a love of reading, numbers, and learning together.',
  },
  {
    id: 'pre-grade-r',
    emoji: '📖',
    name: 'Pre-Grade R',
    ageRange: '4 – 5 years',
    teacher: 'Miranda',
    bg: '#EBF7F2',
    accent: '#1A5C45',
    curriculum: ['CAPS EFAL school readiness activities', 'Early mathematics and number concepts', 'Phonics and handwriting preparation', 'Bilingual instruction (isiXhosa / English)', 'Social independence and classroom behaviour'],
    description: 'CAPS-structured preparation for Grade R. Children develop strong literacy, numeracy, and the confidence to thrive in formal schooling.',
  },
  {
    id: 'grader',
    emoji: '🎓',
    name: 'Grade R',
    ageRange: '5 – 6 years',
    teacher: 'Miranda',
    bg: '#FEF3C7',
    accent: '#D97706',
    curriculum: ['Full CAPS Grade R curriculum', 'Bilingual literacy: isiXhosa and English reading readiness', 'Mathematical concepts — addition, subtraction, measurement', 'Writing, drawing and fine motor mastery', 'School readiness assessment before Grade 1'],
    description: 'Our flagship Grade R programme delivers the full national curriculum. Children leave Nozuko ready, confident, and excited for Grade 1.',
  },
]

const DAILY_ROUTINE = [
  { time: '07:00', activity: 'Arrival & Free Play' },
  { time: '08:00', activity: 'Breakfast (nutritious, prepared fresh)' },
  { time: '08:30', activity: 'Morning Circle — songs, calendar, weather' },
  { time: '09:00', activity: 'Structured Learning (Montessori work cycle / CAPS activity)' },
  { time: '10:00', activity: 'Outdoor Play & Gross Motor Time' },
  { time: '10:30', activity: 'Morning Snack' },
  { time: '11:00', activity: 'Creative Arts / Story Time / Music' },
  { time: '12:00', activity: 'Lunch (hot, nutritious meal)' },
  { time: '12:30', activity: 'Rest / Nap Time (toddler & younger groups)' },
  { time: '13:30', activity: 'Afternoon Activities — puzzles, blocks, dramatic play' },
  { time: '15:00', activity: 'Afternoon Snack' },
  { time: '15:30', activity: 'Outdoor / Free Play' },
  { time: '17:00', activity: 'Collection' },
]

const ENROL_STEPS = [
  { step: '1', label: 'Contact Us', desc: "WhatsApp or call to check availability for your child's age group." },
  { step: '2', label: 'Visit & Tour', desc: 'Come see our classrooms, meet the teachers, and ask any questions.' },
  { step: '3', label: 'Submit Docs', desc: 'Birth certificate, clinic card, proof of address and signed registration form.' },
  { step: '4', label: 'Welcome!', desc: "Pay the registration fee to secure your child's place. We handle the rest." },
]

export default function Classes() {
  useDocumentTitle('Classes & Programmes — Nozuko Educare, Philippi')
  const [selected, setSelected] = useState(null)
  const [showEnroll, setShowEnroll] = useState(false)

  const handleEnroll = (ag) => { setSelected(ag); setShowEnroll(true) }
  const handleClose = () => { setShowEnroll(false); setSelected(null) }
  const handleSubmit = (form) => {
    console.log('Enrolment request:', selected?.name, form)
    alert(`Thank you, ${form.name || 'Parent'}! We received your enquiry for ${selected?.name}. We will contact you within 1 business day.`)
    handleClose()
  }

  return (
    <>
      <Hero
        title="Classes & Programmes"
        subtitle="Six age groups from birth to Grade R — each one structured, loving, and designed for real development milestones."
        badge="Ages 0 – 6 years"
        primaryCta={{ text: 'Enquire to Enrol', href: '#enrol-steps' }}
        secondaryCta={{ text: 'Call Us', href: 'tel:+27813872713' }}
        bgImage={heroImg}
      />

      {/* ── CURRICULUM BANNER ── */}
      <div className="curriculum-banner">
        <div className="container curriculum-banner__inner">
          <span className="curriculum-banner__pill pill pill-green">CAPS Aligned</span>
          <span className="curriculum-banner__pill pill pill-amber">Montessori-Inspired</span>
          <span className="curriculum-banner__pill pill pill-green">NELDS Framework</span>
          <span className="curriculum-banner__pill pill pill-amber">Bilingual: isiXhosa &amp; English</span>
          <span className="curriculum-banner__pill pill pill-green">DSD Registered</span>
        </div>
      </div>

      {/* ── AGE GROUP CARDS ── */}
      <section className="page-section classes-section" aria-labelledby="classes-heading">
        <div className="container">
          <span className="accent-label">Our Six Programmes</span>
          <h2 id="classes-heading" className="section-heading mb-1">
            A Class for Every Stage
          </h2>
          <p className="section-subtext">
            Each programme is crafted around child development milestones — not just age.
            Click <strong>Enquire</strong> on any class to request enrolment.
          </p>
          <div className="age-groups-grid">
            {AGE_GROUPS.map((ag) => (
              <div key={ag.id} id={ag.id} className="age-card card" style={{ background: ag.bg }}>
                <div className="age-card__header">
                  <span className="age-card__emoji" aria-hidden="true">{ag.emoji}</span>
                  <div>
                    <div className="age-card__name">{ag.name}</div>
                    <div className="age-card__range" style={{ color: ag.accent }}>{ag.ageRange}</div>
                  </div>
                </div>
                <p className="age-card__desc">{ag.description}</p>
                <ul className="age-card__curriculum">
                  {ag.curriculum.map((item, i) => (
                    <li key={i}>
                      <FaCheckCircle aria-hidden="true" style={{ color: ag.accent }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="age-card__footer">
                  <span className="age-card__teacher">Teacher: <strong>{ag.teacher}</strong></span>
                  <button
                    className="age-card__enrol-btn"
                    style={{ background: ag.accent }}
                    onClick={() => handleEnroll(ag)}
                    aria-label={`Enquire about ${ag.name}`}
                  >
                    Enquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DAILY ROUTINE ── */}
      <section className="page-section daily-routine bg-green-light" aria-labelledby="routine-heading">
        <div className="container">
          <span className="accent-label">Daily Structure</span>
          <h2 id="routine-heading" className="section-heading mb-1">A Day at Nozuko</h2>
          <p className="section-subtext">
            A consistent daily routine gives children security and maximises learning time.
            Times are approximate and adjusted per age group.
          </p>
          <div className="routine-grid">
            {DAILY_ROUTINE.map((row, i) => (
              <div key={i} className={`routine-row ${i % 2 === 0 ? 'routine-row--even' : ''}`}>
                <div className="routine-time">{row.time}</div>
                <div className="routine-activity">{row.activity}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENROLMENT STEPS ── */}
      <section id="enrol-steps" className="page-section enrol-section" aria-labelledby="enrol-heading">
        <div className="container">
          <span className="accent-label">How to Enrol</span>
          <h2 id="enrol-heading" className="section-heading mb-1">4 Simple Steps to Enrolment</h2>
          <p className="section-subtext">
            We make it easy. No forms online — just reach out and we guide you through everything.
          </p>
          <div className="enrol-steps-grid">
            {ENROL_STEPS.map((s) => (
              <div key={s.step} className="enrol-step card">
                <div className="enrol-step__num">{s.step}</div>
                <h4 className="enrol-step__label">{s.label}</h4>
                <p className="enrol-step__desc">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="enrol-ctas">
            <a href="https://wa.me/27813872713" target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn--whatsapp">
              <FaWhatsapp aria-hidden="true" /> WhatsApp to Enrol
            </a>
            <a href="tel:+27813872713" className="cta-btn cta-btn--phone">
              <FaPhone aria-hidden="true" /> 081 387 2713
            </a>
          </div>

          <div className="enrol-docs card mt-4">
            <h4>Documents to Bring</h4>
            <ul className="enrol-docs__list">
              <li>Certified copy of child's birth certificate</li>
              <li>Child's Road to Health (clinic) card</li>
              <li>Proof of address (account or letter)</li>
              <li>Parent / guardian ID copy</li>
              <li>Completed registration form (supplied on arrival)</li>
            </ul>
          </div>
        </div>
      </section>

      <EnrollModal show={showEnroll} onHide={handleClose} classInfo={selected} onSubmit={handleSubmit} />
    </>
  )
}
