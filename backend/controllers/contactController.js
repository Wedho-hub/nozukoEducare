import { sendContactEmail } from '../utils/mailer.js'

export async function submitContact(req, res, next) {
  try {
    const { name, email, phone, subject, message } = req.body

    if (!name?.trim() || !message?.trim()) {
      return res.status(400).json({ error: 'Name and message are required.' })
    }

    const data = {
      name: name.trim(),
      email: email?.trim() || '',
      phone: phone?.trim() || '',
      subject: subject || 'general',
      message: message.trim(),
    }

    // Always log — visible in Render logs
    console.log('[CONTACT FORM]', { ...data, receivedAt: new Date().toISOString() })

    // Send email (silently skips if SMTP not configured)
    try {
      await sendContactEmail(data)
    } catch (mailErr) {
      // Don't fail the request if email delivery fails — the submission is still received
      console.error('[MAILER] Failed to send email:', mailErr.message)
    }

    return res.status(201).json({ ok: true, message: 'Message received. We will be in touch soon.' })
  } catch (err) {
    next(err)
  }
}
