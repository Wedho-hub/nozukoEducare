import React, { useState } from 'react'
import ClassCard from '../../components/classCard/ClassCard'
import { FaBaby, FaStar, FaPalette, FaUserTie, FaHandshake, FaCalendarAlt, FaRunning, FaBus } from 'react-icons/fa'
import ProgramCard from '../../components/programCard/ProgramCard'
import EnrollModal from '../../components/enroll/EnrollModal'
import VisualBreak from '../../components/visualBreak/VisualBreak'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import Hero from '../../components/hero/Hero'
import heroImg from '../../assets/images/nozukohero.jpg'
import './Classes.css'

// Teacher note: sample classes are local data for now. Replace with API-driven data via `useFetch` when available.
const SAMPLE_CLASSES = [
	{
		id: 'c1',
		title: 'Toddler Playgroup',
		ageRange: '0–2 years',
		times: 'Mon-Fri 07:00–17:00',
		summary: 'Play-based learning for toddlers with music and sensory play.',
		teacher: 'Nowethu',
		objectives: ['Sensory play', 'Early language exposure', 'Social routines'],
		color: 'var(--color-pink)',
		icon: 'FaBaby'
	},
	{
		id: 'c2',
		title: 'Preschool Stars',
		ageRange: '2–3 years',
		times: 'Mon–Fri 07:00–17:00',
		summary: 'Early literacy and social skills to prepare for school.',
		teacher: 'Busisiwe',
		objectives: ['Pre-literacy', 'Number play', 'Emotional learning'],
		color: 'var(--color-sky)',
		icon: 'FaStar'
	},
	{
		id: 'c3',
		title: 'Creative Explorers',
		ageRange: '4–6 years',
		times: 'Mon-Fri 07:00–17:00',
		summary: 'Arts, crafts and imaginative play.',
		teacher: 'Miranda',
		objectives: ['Arts & crafts', 'Role play', 'Gross motor skills'],
		color: 'var(--color-orange)',
		icon: 'FaPalette'
	}
]

export default function Classes() {
	useDocumentTitle('Classes')

	const [selected, setSelected] = useState(null)
	const [showEnroll, setShowEnroll] = useState(false)

	const handleEnroll = (c) => {
		setSelected(c)
		setShowEnroll(true)
	}

	const handleClose = () => {
		setShowEnroll(false)
		setSelected(null)
	}

	const handleSubmitEnrollment = (form) => {
		// Teacher note: hook this up to your backend / API
		console.log('Enroll request for', selected, form)
		// For now, show a confirmation flow (could be replaced with toaster)
		alert(`Thanks, ${form.name || 'Parent'}. We received your enrollment request for ${selected.title}.`)
		handleClose()
	}

	return (
		<>
			<Hero
				title="Our Classes"
				subtitle="Programs, schedules and what you can expect in each class"
				primaryCta={{ text: 'Enroll now', href: '#enroll' }}
				secondaryCta={{ text: 'Contact us', href: '/contact' }}
				bgImage={heroImg}
			/>
			<section className="container page-section classes-page">
				<h2 className="section-heading">Classes</h2>
				<p className="text-muted">Choose the right class for your child. Click Enroll to request a place.</p>
				<div id="enroll" />

			<div className="grid">
				{SAMPLE_CLASSES.map((c) => {
					const iconMap = { FaBaby, FaStar, FaPalette, FaUserTie }
					const Icon = iconMap[c.icon] || FaUserTie
					return <ClassCard c={c} key={c.id} onEnroll={handleEnroll} icon={Icon} color={c.color} />
				})}
			</div>

			{/* Visual break: how learning happens */}
			<VisualBreak anchorHref="/contact" />

					{/* Programs section - uniform program cards */}
			<section className="programs-section card" aria-labelledby="programs-heading">
				<h3 id="programs-heading">Programs</h3>
				<div className="programs-grid">
					{[
						{
							key: 'parent',
							title: 'Parent Partnership Program',
							Icon: FaHandshake,
							color: 'var(--color-leaf)',
							desc: 'We believe parents are our partners in a child’s development.',
							bullets: ['Regular communication about your child’s progress', 'Parent meetings and information sharing', 'Opportunities for parent involvement in special events']
						},
						{
							key: 'art',
							title: 'Creative Arts & Music',
							Icon: FaPalette,
							color: 'var(--color-orange)',
							desc: 'Creative expression is part of everyday learning at Nozuko Educare. Activities include:',
							bullets: ['Drawing and painting', 'Singing and movement', 'Rhythm and music exploration', 'Simple drama and role-play']
						},
						{
							key: 'theme',
							title: 'Theme Days & Celebrations',
							Icon: FaCalendarAlt,
							color: 'var(--color-pink)',
							desc: 'Dress-up days, cultural celebrations and fun theme days that support creativity and self-expression.'
						},
						{
							key: 'sports',
							title: 'Sports Day',
							Icon: FaRunning,
							color: 'var(--color-sky)',
							desc: 'Our annual Sports Day encourages physical fitness, teamwork and confidence through age-appropriate games in a joyful, non-competitive environment.',
							bullets: ['Fun races and relays', 'Team games and co-operative challenges']
						},
						{
							key: 'excursions',
							title: 'Excursions (Quarterly)',
							Icon: FaBus,
							color: 'var(--color-sand)',
							desc: 'Planned quarterly to enrich learning beyond the classroom.',
							bullets: ['Visits to farms, parks or nature reserves', 'Library or community centre visits', 'Animal encounters or educational shows'],
							note: 'All excursions are carefully supervised, age-appropriate and planned with child safety as the top priority; parents are informed in advance and consent is required.'
						}
					].map(p => (
						<ProgramCard key={p.key} title={p.title} Icon={p.Icon} color={p.color} desc={p.desc} bullets={p.bullets} note={p.note} />
					))}
				</div>
			</section>

			<EnrollModal show={showEnroll} onHide={handleClose} classInfo={selected} onSubmit={handleSubmitEnrollment} />
		</section>
		</>
	)
}
