import { useState } from 'react'
import './LoginModal.css'

const DEFAULT_ACCOUNTS = [
  { email: 'admin@pennyjuice.com', password: 'admin123', name: 'Admin User' },
  { email: 'user@pennyjuice.com', password: 'user123', name: 'Regular User' },
  { email: 'kid@pennyjuice.com', password: 'kid123', name: 'Kid Family' },
]

export default function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [isSignUp, setIsSignUp] = useState(false)
  const [formData, setFormData] = useState({ email: '', password: '', name: '' })
  const [submitted, setSubmitted] = useState(false)
  
  const [accounts, setAccounts] = useState(() => {
    const saved = localStorage.getItem('penny_juice_accounts')
    return saved ? JSON.parse(saved) : DEFAULT_ACCOUNTS
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isSignUp) {
      // Sign Up Handler
      const exists = accounts.find(
        (a) => a.email.toLowerCase() === formData.email.toLowerCase()
      )
      if (exists) {
        alert('❌ This email address is already registered!')
        return
      }

      const newAccounts = [
        ...accounts,
        { email: formData.email, password: formData.password, name: formData.name },
      ]
      setAccounts(newAccounts)
      localStorage.setItem('penny_juice_accounts', JSON.stringify(newAccounts))

      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        alert('🎉 Account created successfully! You can now log in.')
        setIsSignUp(false)
        setFormData({ email: formData.email, password: '', name: '' })
      }, 1500)

    } else {
      // Login Handler
      const user = accounts.find(
        (a) =>
          a.email.toLowerCase() === formData.email.toLowerCase() &&
          a.password === formData.password
      )

      if (user) {
        setSubmitted(true)
        setTimeout(() => {
          setSubmitted(false)
          alert(`🎉 Welcome back, ${user.name}! Logged in successfully.`)
          if (onLoginSuccess) {
            onLoginSuccess(user)
          }
          onClose()
        }, 1500)
      } else {
        alert('❌ Invalid email or password. Try:\n- user@pennyjuice.com / user123\n- admin@pennyjuice.com / admin123')
      }
    }
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

            {!isSignUp && (
              <div className="login-demo-credentials">
                <small>💡 Try demo accounts:</small>
                <small>• <strong>user@pennyjuice.com</strong> (pass: <strong>user123</strong>)</small>
                <small>• <strong>admin@pennyjuice.com</strong> (pass: <strong>admin123</strong>)</small>
              </div>
            )}
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
