import { useState } from 'react'
import './ContactModal.css'

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Parent',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', role: 'Parent', message: '' })
      onClose()
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        {!submitted ? (
          <>
            <div className="modal-header">
              <h2>Contact Penny Juice 📞</h2>
              <p>Have questions about our juices, wholesale orders, or ingredients? Send us a message!</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form-modal">
              <div className="form-field">
                <label htmlFor="modal-name">Your Name</label>
                <input
                  type="text"
                  id="modal-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="modal-email">Email Address</label>
                <input
                  type="email"
                  id="modal-email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="modal-role">Who are you?</label>
                <select
                  id="modal-role"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                >
                  <option value="Parent">Parent / Family</option>
                  <option value="School">School Principal / Cafeteria Director</option>
                  <option value="Distributor">Wholesale Distributor</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="modal-msg">How can we help?</label>
                <textarea
                  id="modal-msg"
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  required
                />
              </div>

              <button type="submit" className="btn-primary modal-submit-btn">
                Send Message ✉️
              </button>
            </form>
          </>
        ) : (
          <div className="modal-success">
            <span className="success-emoji">📬</span>
            <h2>Thank You!</h2>
            <p>Your message has been sent successfully. We will get back to you shortly.</p>
          </div>
        )}
      </div>
    </div>
  )
}
