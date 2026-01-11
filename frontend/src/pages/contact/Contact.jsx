import React from 'react'
import { Form, Button } from 'react-bootstrap'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import Hero from '../../components/hero/Hero'
import heroImg from '../../assets/images/nozukohero.jpg'

export default function Contact() {
	useDocumentTitle('Contact')

	// Teacher note: this form is non-functional. Hook up submission to your backend or email service.
	return (
		<>
			<Hero
				title="Contact Us"
				subtitle="Questions, tours and enrolment enquiries — we’re here to help"
				primaryCta={{ text: 'Send a message', href: '#contact-form' }}
				secondaryCta={{ text: 'Call us', href: 'tel:+27813872713' }}
				bgImage={heroImg}
			/>
			<section className="container page-section contact-page">
				<h2 id="contact-heading">Contact Us</h2>
				<Form id="contact-form">
				<Form.Group className="mb-3" controlId="contactName">
					<Form.Label>Name</Form.Label>
					<Form.Control type="text" placeholder="Your name" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="contactEmail">
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" placeholder="name@example.com" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="contactMessage">
					<Form.Label>Message</Form.Label>
					<Form.Control as="textarea" rows={4} />
				</Form.Group>

				<Button variant="primary" type="submit">Send message</Button>
			</Form>
		</section>
		</>
	)
}
