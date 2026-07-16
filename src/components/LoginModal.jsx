import { useState } from 'react'
import './LoginModal.css'

const DEFAULT_ACCOUNTS = [
  { username: 'admin', password: 'admin123', name: 'Admin User' },
  { username: 'user', password: 'user123', name: 'Regular User' },
  { username: 'kid', password: 'kid123', name: 'Kid Family' },
]

export default function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [isSignUp, setIsSignUp] = useState(false)
  const [isForgotPassword, setIsForgotPassword] = useState(false)
  const [formData, setFormData] = useState({ username: '', password: '', name: '' })
  const [resetUsername, setResetUsername] = useState('')
  const [submitted, setSubmitted] = useState(false)
  
  const [accounts, setAccounts] = useState(() => {
    const saved = localStorage.getItem('penny_juice_accounts')
    return saved ? JSON.parse(saved) : DEFAULT_ACCOUNTS
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isForgotPassword) {
      // Mock Forgot Password Handler
      const exists = accounts.find(
        (a) => a.username.toLowerCase() === resetUsername.toLowerCase()
      )
      if (exists) {
        alert(`🔑 Password reset link generated! In a real app, it would be sent to the email associated with '${resetUsername}'.`);
      } else {
        alert(`❌ Username '${resetUsername}' not found!`);
      }
      setIsForgotPassword(false)
      setResetUsername('')
      return
    }

    if (isSignUp) {
      // Sign Up Handler
      const exists = accounts.find(
        (a) => a.username.toLowerCase() === formData.username.toLowerCase()
      )
      if (exists) {
        alert('❌ This username is already registered!')
        return
      }

      const newAccounts = [
        ...accounts,
        { username: formData.username, password: formData.password, name: formData.name },
      ]
      setAccounts(newAccounts)
      localStorage.setItem('penny_juice_accounts', JSON.stringify(newAccounts))

      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        alert('🎉 Account registered successfully! You can now log in.')
        setIsSignUp(false)
        setFormData({ username: formData.username, password: '', name: '' })
      }, 1500)

    } else {
      // Login Handler
      const user = accounts.find(
        (a) =>
          a.username.toLowerCase() === formData.username.toLowerCase() &&
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
        alert('❌ Invalid username or password. Try:\n- user / user123\n- admin / admin123')
      }
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        {submitted ? (
          <div className="login-success">
            <span className="success-emoji">✨</span>
            <h2>{isSignUp ? 'Registering Account...' : 'Logging In...'}</h2>
            <p>Please wait a moment while we set up your session.</p>
          </div>
        ) : isForgotPassword ? (
          <>
            <div className="login-header">
              <h2>Reset Password 🔑</h2>
              <p>Enter your username to request a password reset.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-field">
                <label htmlFor="reset-user">Username</label>
                <input
                  type="text"
                  id="reset-user"
                  value={resetUsername}
                  onChange={(e) => setResetUsername(e.target.value)}
                  placeholder="Enter your username"
                  required
                />
              </div>

              <button type="submit" className="btn-primary login-submit-btn">
                Send Reset Link
              </button>
            </form>

            <div className="login-links-row">
              <button className="login-action-link" onClick={() => setIsForgotPassword(false)}>
                Back to Login
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="login-header">
              <h2>{isSignUp ? 'Register' : 'Log in'}</h2>
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
                <label htmlFor="login-user">Username</label>
                <input
                  type="text"
                  id="login-user"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  placeholder="Enter your username"
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
                {isSignUp ? 'Register' : 'Log in'}
              </button>
            </form>

            <div className="login-links-row">
              {isSignUp ? (
                <button className="login-action-link" onClick={() => setIsSignUp(false)}>
                  Already have an Account? Log in
                </button>
              ) : (
                <>
                  <button className="login-action-link" onClick={() => setIsForgotPassword(true)}>
                    Forget Password ?
                  </button>
                  <button className="login-action-link" onClick={() => setIsSignUp(true)}>
                    Register new Account ?
                  </button>
                </>
              )}
            </div>

            {!isSignUp && (
              <div className="login-demo-credentials">
                <small>💡 Try demo accounts:</small>
                <small>• Username: <strong>user</strong> (pass: <strong>user123</strong>)</small>
                <small>• Username: <strong>admin</strong> (pass: <strong>admin123</strong>)</small>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
