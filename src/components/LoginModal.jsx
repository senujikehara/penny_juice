import { useState } from 'react'
import './LoginModal.css'

export default function LoginModal({ isOpen, onClose }) {
  const [isSignUp, setIsSignUp] = useState(false)
  const [formData, setFormData] = useState({ email: '', password: '', name: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      alert(isSignUp ? '🎉 Account created successfully!' : '🎉 Logged in successfully!')
      onClose()
    }, 1500)
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        {!submitted ? (
          <>
            <div className="login-header">
              <h2>{isSignUp ? 'Create Account 🚀' : 'Welcome Back! 👋'}</h2>
              <p>
                {isSignUp
                  ? 'Join us to get the best healthy juices for your kids.'
                  : 'Log in to manage your juice orders & subscriptions.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              {isSignUp && (
                <div className="form-field">
                  <label htmlFor="login-name">Your Name</label>
                  <input
                    type="text"
                    id="login-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    required
                  />
                </div>
              )}

              <div className="form-field">
                <label htmlFor="login-email">Email Address</label>
                <input
                  type="email"
                  id="login-email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="login-pass">Password</label>
                <input
                  type="password"
                  id="login-pass"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Enter password"
                  required
                />
              </div>

              <button type="submit" className="btn-primary login-submit-btn">
                {isSignUp ? 'Sign Up' : 'Log In'}
              </button>
            </form>

            <div className="login-toggle">
              <span>{isSignUp ? 'Already have an account?' : "Don't have an account?"}</span>
              <button onClick={() => setIsSignUp(!isSignUp)}>
                {isSignUp ? 'Log In' : 'Sign Up'}
              </button>
            </div>
          </>
        ) : (
          <div className="login-success">
            <span className="success-emoji">✨</span>
            <h2>{isSignUp ? 'Creating Account...' : 'Logging In...'}</h2>
            <p>Please wait a moment while we set up your session.</p>
          </div>
        )}
      </div>
    </div>
  )
}
