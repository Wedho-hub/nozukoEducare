import React from 'react'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import Hero from '../../components/hero/Hero'
import heroImg from '../../assets/images/nozukohero.jpg'
import './About.css'
import StaffCard from '../../components/staff/StaffCard'
import founderImg from '../../assets/images/nozukoFounder.jpeg'
import { FaShieldAlt, FaPlay, FaUsers } from 'react-icons/fa'

// Small ReadMore component to progressively disclose long about text
function ReadMore() {
	const [open, setOpen] = React.useState(false)
	const id = 'about-more'

	return (
		<div className="about-more">
			<div id={id} className={`about-more__content ${open ? 'open' : ''}`} aria-hidden={!open}>
				<p>
					Nozuko Educare offers a nurturing, safe, and stimulating environment where children are encouraged to learn through play, exploration, and guided discovery. The centre is fully aligned with the South African National Early Learning Development Standards (NELDS) and CAPS-informed foundation phase principles, ensuring that children are well prepared for the transition into formal schooling.
				</p>

				<p>
					In addition to national curriculum requirements, Nozuko Educare is inspired by Montessori educational principles, promoting independence, curiosity, creativity, and confidence. Each child is supported to grow at their own pace while developing essential cognitive, social, emotional, and physical skills.
				</p>

				<p>
					At Nozuko Educare, we believe that early learning shapes lifelong success. Our commitment is to educate, nurture, and empower young minds — building confident learners who are ready to thrive both in school and in life.
				</p>

				<h3 className="about-subheading">Our Vision</h3>
				<p>
					To be a leading community-based early childhood development centre that provides accessible, high-quality foundation education and empowers children to reach their full potential, regardless of socio-economic background.
				</p>

				<h3 className="about-subheading">Our Mission</h3>
				<ul>
					<li>To provide affordable, quality early childhood education to Kasi communities</li>
					<li>To create a safe, caring, and stimulating learning environment</li>
					<li>To deliver education aligned with NELDS and CAPS standards</li>
					<li>To incorporate Montessori-inspired learning that encourages independence and curiosity</li>
					<li>To nurture the whole child — intellectually, socially, emotionally, and physically</li>
					<li>To partner with parents and the community in shaping confident, lifelong learners</li>
				</ul>
			</div>

			<div style={{ marginTop: 12 }}>
				<button className="btn btn-outline read-more-btn" aria-controls={id} aria-expanded={open} onClick={() => setOpen((s) => !s)}>
					{open ? 'Read less' : 'Read more'}
				</button>
			</div>
		</div>
	)
}

/**
 * About page
 * Use this page to tell parents/stakeholders about your philosophy, teachers and facilities.
 */
export default function About() {
	useDocumentTitle('About')

	return (
		<>
			<Hero
				title="About Nozuko Educare"
				subtitle="Our mission, values and the team who care for your children"
				primaryCta={{ text: 'Meet our staff', href: '#meet-team' }}
				secondaryCta={{ text: 'Contact us', href: '/contact' }}
				bgImage={heroImg}
			/>
			<section className="container page-section about-page">
				<h2 className="section-heading">About Nozuko Educare</h2>
								 <div className="about-intro card about-intro-flex">
									 {/* Flexbox: founder image floats right, bottom-aligned with text */}
									 <div className="about-text">
										 <p>
											 Nozuko Educare was founded in 2001 with a simple but powerful vision: to ensure that every child has access to quality early childhood education, regardless of their background or circumstances.
										 </p>
										 <p>
											 Inspired by her own experiences growing up in the township, the founder of Nozuko Educare recognised the urgent need for affordable, high-quality foundation education for Kasi (township) children. What began as a passion to serve the community has grown into a trusted early learning centre committed to laying strong educational foundations for young learners.
										 </p>
										 {/* Read more hidden section */}
										 <ReadMore />
									 </div>
									 <figure className="founder-figure founder-figure-bottom">
										 <img src={founderImg} alt="Elizabeth Madolo, Founder" className="founder-photo" />
										 <figcaption className="founder-caption">Elizabeth Madolo - founder</figcaption>
									 </figure>
								 </div>
            
				<h3>Our Values</h3>
				<ul className="values">
					<li>
						<span className="val-icon" style={{background:'linear-gradient(90deg,var(--color-teal),var(--color-sky))'}} aria-hidden><FaShieldAlt /></span>
						<strong>Safety first:</strong> We prioritise wellbeing and secure environments.
					</li>
					<li>
						<span className="val-icon" style={{background:'linear-gradient(90deg,var(--color-pink),var(--color-orange))'}} aria-hidden><FaPlay /></span>
						<strong>Playful learning:</strong> Learning through play and exploration.
					</li>
					<li>
						<span className="val-icon" style={{background:'linear-gradient(90deg,var(--color-sky),var(--color-mint))'}} aria-hidden><FaUsers /></span>
						<strong>Inclusivity:</strong> We welcome children from diverse backgrounds.
					</li>
				</ul>

			<section id="meet-team" className="staff-section">
				<h3>Meet the staff</h3>
				<p className="text-muted">Our experienced and caring team. Click a profile to learn more (future work).</p>

				<div className="staff-grid">
					{[
						{ id: 's1', name: 'Namhla Mlonyeni', role: 'Cook', favoriteTime: 'Lunch time', bio: 'Namhla is passionate about preparing healthy meals and creating a warm dining atmosphere for children.', avatar: null },
						{ id: 's2', name: 'Nowetu Mancangaza', role: 'Toddlers', favoriteTime: 'Story time', bio: 'Nowetu has 8 years of experience and a passion for music and movement.', avatar: null },
						{ id: 's3', name: 'Busisiwe Mafanya', role: 'Preschool Teacher', favoriteTime: 'Creative play', bio: 'Busisiwe loves art projects and early literacy activities.', avatar: null },
						{ id: 's4', name: 'Miranda Dhliwayo', role: 'Lead Teacher', favoriteTime: 'Outdoor play', bio: 'Miranda is trained in early childhood development and loves outdoor exploration.', avatar: null }
					].map(s => (
						<StaffCard key={s.id} staff={s} />
					))}
				</div>
			</section>
		</section>
		</>
	)
}
