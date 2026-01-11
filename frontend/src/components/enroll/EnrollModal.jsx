import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

/**
 * EnrollModal
 * Small modal with a name/email form that simulates an enrollment request.
 * Props: show, onHide, classInfo, onSubmit
 */
export default function EnrollModal({ show, onHide, classInfo, onSubmit }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  // NOTE: modal is keyed by `show` below to ensure it remounts when opened,
  // which resets local form state without calling setState inside an effect.

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubmit) onSubmit({ name, email })
  }

  return (
    <Modal key={show ? `open-${classInfo?.id || 'none'}` : 'closed'} show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Enroll{classInfo ? ` — ${classInfo.title}` : ''}</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="enrollName">
            <Form.Label>Your name</Form.Label>
            <Form.Control value={name} onChange={(e) => setName(e.target.value)} placeholder="Parent / guardian name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="enrollEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" required />
          </Form.Group>

          <p className="text-muted">We'll contact you to confirm availability and next steps.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>Cancel</Button>
          <Button variant="primary" type="submit">Request enrollment</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}
