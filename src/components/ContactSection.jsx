import { useState } from 'react'
import { PhoneIcon, EmailIcon, LocationIcon, WhatsAppIcon, SuccessIcon, ErrorIcon } from './Icons.jsx'
import { buildWhatsAppUrl } from '../utils/whatsapp.js'
import { businessInfo } from '../data/businessInfo.js'
import '../styles/sections.css'

export default function ContactSection() {
  const whatsappUrl = buildWhatsAppUrl(
    businessInfo.whatsappNumber,
    businessInfo.whatsappMessage,
  )

  const contactDetails = [
    {
      icon: <PhoneIcon />,
      label: 'Phone',
      value: businessInfo.phone,
      isPlaceholder: businessInfo.phone.includes('PLACEHOLDER'),
    },
    {
      icon: <WhatsAppIcon size={20} />,
      label: 'WhatsApp',
      value: businessInfo.whatsappNumber,
      link: whatsappUrl,
      isPlaceholder: businessInfo.whatsappNumber.includes('PLACEHOLDER'),
      linkLabel: 'Open WhatsApp chat',
    },
    {
      icon: <EmailIcon />,
      label: 'Email',
      value: businessInfo.email,
      isPlaceholder: businessInfo.email.includes('PLACEHOLDER'),
    },
    {
      icon: <LocationIcon />,
      label: 'Location',
      value: `${businessInfo.location.city}, ${businessInfo.location.state}, ${businessInfo.location.country}`,
      isPlaceholder: false,
    },
  ]

  // Form validation
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  function validate() {
    const newErrors = {}
    if (!form.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!form.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters'
    }
    return newErrors
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simulate submission — replace with real API call when backend is ready
    setTimeout(() => {
      setSubmitStatus('success')
      setForm({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 800)
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-title">
          <span className="overline">Contact Us</span>
          <h2>Get in Touch</h2>
        </div>

        <div className="contact-container">
          <div className="contact-details">
            {contactDetails.map((item) => (
              <div key={item.label} className="contact-item">
                <div className="contact-icon">{item.icon}</div>
                <div className="contact-info">
                  <h3>{item.label}</h3>
                  {item.isPlaceholder ? (
                    <p style={{ fontStyle: 'italic', opacity: 0.7 }}>
                      {item.value} <em>(to be confirmed)</em>
                    </p>
                  ) : item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.linkLabel || `Contact via ${item.label}`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p>{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="contact-item">
              <div className="contact-icon">
                <WhatsAppIcon size={20} />
              </div>
              <div className="contact-info">
                <h3>WhatsApp Chat</h3>
                <p>Chat with us on WhatsApp for quick enquiries</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                  aria-label="Open WhatsApp chat with DARB Formulation Enterprise"
                >
                  <WhatsAppIcon size={16} />
                  Open in WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send us a Message</h3>

            {submitStatus === 'success' && (
              <div className="form-success" role="status" aria-live="polite">
                <SuccessIcon />
                <span>Thank you! Your message has been sent. We will reply soon.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-grid">
                <div className="form-group full-width">
                  <label htmlFor="name" className="form-label">
                    Full Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    value={form.name}
                    onChange={handleChange}
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    required
                  />
                  {errors.name && (
                    <span id="name-error" className="form-error" role="alert">
                      <ErrorIcon /> {errors.name}
                    </span>
                  )}
                </div>

                <div className="form-group full-width">
                  <label htmlFor="email" className="form-label">
                    Email Address <span aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={form.email}
                    onChange={handleChange}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    required
                  />
                  {errors.email && (
                    <span id="email-error" className="form-error" role="alert">
                      <ErrorIcon /> {errors.email}
                    </span>
                  )}
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message" className="form-label">
                    Your Message <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input form-textarea"
                    value={form.message}
                    onChange={handleChange}
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    required
                  />
                  {errors.message && (
                    <span id="message-error" className="form-error" role="alert">
                      <ErrorIcon /> {errors.message}
                    </span>
                  )}
                </div>

                <div className="form-submit">
                  <button
                    type="submit"
                    className={`btn btn--primary ${isSubmitting ? 'btn--submitting' : ''}`}
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </div>
            </form>

            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: 'var(--space-sm)' }}>
              Your message will be sent to DARB Formulation Enterprise. For immediate assistance,
              use the <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp chat above</a> as a fallback.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
