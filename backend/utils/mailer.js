import nodemailer from 'nodemailer'

/**
 * Creates a nodemailer transporter from env vars.
 * Returns null when SMTP is not configured so callers can skip gracefully.
 */
function createTransporter() {
  const { SMTP_HOST, SMTP_USER, SMTP_PASS } = process.env
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null

  const port = parseInt(process.env.SMTP_PORT || '587', 10)
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })
}

/**
 * Sends a contact-form notification email to the centre.
 * Silently skips if SMTP env vars are not set.
 */
export async function sendContactEmail({ name, email, phone, subject, message }) {
  const transporter = createTransporter()
  if (!transporter) {
    console.warn('[MAILER] SMTP not configured — email not sent. Set SMTP_HOST, SMTP_USER, SMTP_PASS.')
    return
  }

  const to = process.env.CONTACT_EMAIL_TO || process.env.SMTP_USER
  const from = `"Nozuko Educare Website" <${process.env.SMTP_USER}>`
  const subjectLine = `[Nozuko Educare] ${subject || 'General enquiry'} — from ${name}`

  const html = `
    <div style="font-family:sans-serif;max-width:600px;color:#222">
      <h2 style="color:#1A5C45;border-bottom:3px solid #F59E0B;padding-bottom:8px">
        New Contact Form Submission
      </h2>
      <table style="border-collapse:collapse;width:100%;margin-bottom:24px">
        <tr style="background:#EBF7F2">
          <td style="padding:8px 12px;font-weight:700;width:120px">Name</td>
          <td style="padding:8px 12px">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;font-weight:700">Email</td>
          <td style="padding:8px 12px">${email ? `<a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>` : '—'}</td>
        </tr>
        <tr style="background:#EBF7F2">
          <td style="padding:8px 12px;font-weight:700">Phone</td>
          <td style="padding:8px 12px">${phone ? escapeHtml(phone) : '—'}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;font-weight:700">Subject</td>
          <td style="padding:8px 12px">${escapeHtml(subject || 'General')}</td>
        </tr>
      </table>
      <h3 style="color:#1A5C45">Message</h3>
      <div style="background:#F8FAF9;border-left:4px solid #1A5C45;padding:16px;border-radius:0 8px 8px 0;line-height:1.7">
        ${escapeHtml(message).replace(/\n/g, '<br>')}
      </div>
      <p style="margin-top:24px;color:#888;font-size:12px">
        Submitted at ${new Date().toUTCString()} · Nozuko Educare Centre, Victoria Mxenge, Philippi
      </p>
    </div>
  `

  await transporter.sendMail({
    from,
    to,
    subject: subjectLine,
    html,
    replyTo: email || undefined,
  })

  console.log(`[MAILER] Contact email sent to ${to} (from: ${name})`)
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
