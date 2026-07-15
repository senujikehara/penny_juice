import { useState } from 'react'
import './ContactPage.css'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 2500)
  }

  return (
    <div className="contact-page-container container">
      <div className="contact-page-inner-split">

        {/* Left Side: Form Column */}
        <div className="contact-form-col">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="contact-page-form">
              <div className="contact-form-header">
                <span className="section-tag-form">✉️ Send a Message</span>
                <h1 className="contact-form-title">Contact Us</h1>
                <p className="contact-form-subtitle">We would love to hear from you. Fill out the details below.</p>
              </div>

              <div className="form-field">
                <label htmlFor="page-name">Your Name</label>
                <input
                  type="text"
                  id="page-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="page-email">Your Email</label>
                <input
                  type="email"
                  id="page-email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="page-phone">Contact Number</label>
                <input
                  type="tel"
                  id="page-phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Enter your contact number"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="page-subject">Subject</label>
                <input
                  type="text"
                  id="page-subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Enter the subject"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="page-msg">Your Message</label>
                <textarea
                  id="page-msg"
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  required
                />
              </div>

              <button type="submit" className="btn-primary form-submit-btn">
                Send Message ✉️
              </button>
            </form>
          ) : (
            <div className="contact-page-success">
              <span className="success-emoji">📬</span>
              <h2>Message Sent!</h2>
              <p>Thank you for reaching out. We will respond to your email as soon as possible.</p>
            </div>
          )}
        </div>

        {/* Right Side: Image Column */}
        <div className="contact-image-col">
          <img
            src="/Screenshot 2026-07-15 232947.png"
            alt="Contact Visual Showcase"
            className="contact-split-img"
            onError={(e) => {
              // Fail silently or show fallback border if image is missing
              e.target.style.display = 'none';
            }}
          />
        </div>

      </div>
    </div>
  )
}
