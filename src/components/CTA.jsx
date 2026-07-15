import { useState } from 'react'
import './CTA.css'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="cta-section">
      <div className="cta-blob" />

      <div className="container cta-inner">
        <div className="cta-content">
          <div className="cta-emoji-row">
            {['🍊', '🍇', '🍓', '🍋', '🥭'].map((e, i) => (
              <span key={i} className="cta-fruit" style={{ animationDelay: `${i * 0.2}s` }}>{e}</span>
            ))}
          </div>

          <h2 className="cta-title">
            Ready to Make <br />
            <span className="gradient-text">Every Sip Count?</span>
          </h2>

          <p className="cta-desc">
            Join 10,000+ families giving their kids the best juice in the world.
            Get 15% off your first order when you sign up today!
          </p>

          {!submitted ? (
            <form className="cta-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-input"
                  id="cta-email"
                />
                <button type="submit" className="btn-primary form-submit">
                  Get 15% Off 🎉
                </button>
              </div>
              <p className="form-note">🔒 No spam, ever. Unsubscribe anytime.</p>
            </form>
          ) : (
            <div className="cta-success">
              <span className="success-icon">🎉</span>
              <h3>You're in! Check your inbox for your discount code.</h3>
              <p>Welcome to the Penny Juice family!</p>
            </div>
          )}

          <div className="cta-perks">
            {[
              { icon: '🚚', text: 'Free shipping over $50' },
              { icon: '↩️', text: '30-day money back guarantee' },
              { icon: '🔁', text: 'Easy subscription & cancel anytime' },
            ].map((p, i) => (
              <div key={i} className="perk">
                <span>{p.icon}</span>
                <span>{p.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative side */}
        <div className="cta-visual">
          <div className="cta-card-image-only">
            <img
              src="/shop/all.png"
              alt="Penny Juice Flavors Showcase"
              className="cta-card-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
