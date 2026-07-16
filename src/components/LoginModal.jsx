import { useState } from 'react'
import './LoginModal.css'

const DEFAULT_ACCOUNTS = [
  { username: 'admin', password: 'admin123', name: 'Admin User', email: 'admin@pennyjuice.com' },
  { username: 'user', password: 'user123', name: 'Regular User', email: 'user@pennyjuice.com' },
  { username: 'kid', password: 'kid123', name: 'Kid Family', email: 'kid@pennyjuice.com' },
]

export default function LoginModal({ isOpen, onClose, onLoginSuccess, currentUser, onLogout }) {
  const [isSignUp, setIsSignUp] = useState(false)
  const [isForgotPassword, setIsForgotPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    email: '',
    contact: '',
    age: '',
    address: ''
  })
  const [resetEmail, setResetEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  
  const [accounts, setAccounts] = useState(() => {
    const saved = localStorage.getItem('penny_juice_accounts')
    return saved ? JSON.parse(saved) : DEFAULT_ACCOUNTS
  })

  const handleToggleSignUp = (val) => {
    setIsSignUp(val)
    setFormData({
      username: '',
      password: '',
      name: '',
      email: '',
      contact: '',
      age: '',
      address: ''
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isForgotPassword) {
      // Forgot Password with Email Handler
      const exists = accounts.find(
        (a) => a.email && a.email.toLowerCase() === resetEmail.toLowerCase()
      )
      if (exists) {
        alert(`🔑 Password reset link generated! In a real app, it would be sent to '${resetEmail}'.`);
      } else {
        alert(`❌ Email address '${resetEmail}' not found in our records!`);
      }
      setIsForgotPassword(false)
      setResetEmail('')
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
        {
          username: formData.username,
          password: formData.password,
          name: formData.name,
          email: formData.email,
          contact: formData.contact,
          age: formData.age,
          address: formData.address
        },
      ]
      setAccounts(newAccounts)
      localStorage.setItem('penny_juice_accounts', JSON.stringify(newAccounts))

      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        alert('🎉 Account registered successfully! You can now log in.')
        setIsSignUp(false)
        setFormData({
          username: formData.username,
          password: '',
          name: '',
          email: '',
          contact: '',
          age: '',
          address: ''
        })
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
          if (onLoginSuccess) {
            onLoginSuccess(user)
          }
          onClose()
        }, 1500)
      } else {
        alert('❌ Invalid username or password.')
      }
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className={`login-modal ${isSignUp ? 'register-wide' : ''}`} onClick={(e) => e.stopPropagation()}>
        
        {/* Top Logo instead of close button */}
        <div className="login-logo-container">
          <img src="/Penny_juice_logo.png" alt="Penny Juice Logo" className="login-modal-logo" />
        </div>

        {currentUser ? (
          <div className="profile-logged-in-view">
            <div className="login-header">
              <h2>Account Details 👤</h2>
              <p>You are currently logged in.</p>
            </div>
            
            <div className="profile-user-card" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              background: 'rgba(255, 107, 53, 0.05)',
              padding: '16px',
              borderRadius: 'var(--radius-sm)',
              border: '1.5px solid rgba(255, 107, 53, 0.15)',
              marginTop: '16px',
              textAlign: 'left'
            }}>
              <span className="profile-user-avatar" style={{ fontSize: '2.5rem' }}>👤</span>
              <div className="profile-user-details">
                <h3 style={{ margin: 0, color: 'var(--text-dark)' }}>{currentUser.name}</h3>
                <p style={{ margin: '4px 0 0', color: 'var(--text-medium)', fontSize: '0.9rem' }}>
                  Username: <strong>@{currentUser.username}</strong>
                </p>
                {currentUser.email && (
                  <p style={{ margin: '4px 0 0', color: 'var(--text-light)', fontSize: '0.82rem' }}>
                    Email: {currentUser.email}
                  </p>
                )}
              </div>
            </div>

            <button
              onClick={() => {
                if (onLogout) {
                  onLogout()
                }
                onClose()
              }}
              className="btn-primary login-submit-btn"
              style={{ background: '#FF5252', borderColor: '#FF5252', marginTop: '24px', width: '100%' }}
            >
              Log Out 🔓
            </button>
          </div>
        ) : submitted ? (
          <div className="login-success">
            <span className="success-emoji">✨</span>
            <h2>{isSignUp ? 'Registering Account...' : 'Logging In...'}</h2>
            <p>Please wait a moment while we set up your session.</p>
          </div>
        ) : isForgotPassword ? (
          <>
            <div className="login-header">
              <h2>Reset Password</h2>
              <p>Enter your email address to request a password reset.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-field">
                <label htmlFor="reset-email">Email Address</label>
                <input
                  type="email"
                  id="reset-email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  placeholder="Enter your email address"
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
              {isSignUp ? (
                <>
                  <div className="form-grid-2col">
                    <div className="form-field">
                      <label htmlFor="reg-name">Name</label>
                      <input
                        type="text"
                        id="reg-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter name"
                        required
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="reg-user">Username</label>
                      <input
                        type="text"
                        id="reg-user"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        placeholder="Enter username"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-grid-2col">
                    <div className="form-field">
                      <label htmlFor="reg-email">Email</label>
                      <input
                        type="email"
                        id="reg-email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter email address"
                        required
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="reg-contact">Contact Number</label>
                      <input
                        type="tel"
                        id="reg-contact"
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        placeholder="Enter contact number"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-grid-2col">
                    <div className="form-field">
                      <label htmlFor="reg-age">Age</label>
                      <input
                        type="text"
                        id="reg-age"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        placeholder="Enter age"
                        required
                      />
                    </div>
                    <div className="form-field-spacer" />
                  </div>

                  <div className="form-field">
                    <label htmlFor="reg-address">Address</label>
                    <input
                      type="text"
                      id="reg-address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="Enter address"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="reg-pass">Password</label>
                    <input
                      type="password"
                      id="reg-pass"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="Enter password"
                      required
                    />
                  </div>
                </>
              ) : (
                <>
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
                </>
              )}

              <button type="submit" className="btn-primary login-submit-btn">
                {isSignUp ? 'Register' : 'Log in'}
              </button>
            </form>

            <div className="login-links-row">
              {isSignUp ? (
                <button className="login-action-link" onClick={() => handleToggleSignUp(false)}>
                  Already have an Account? Log in
                </button>
              ) : (
                <>
                  <button className="login-action-link" onClick={() => setIsForgotPassword(true)}>
                    Forget Password ?
                  </button>
                  <button className="login-action-link" onClick={() => handleToggleSignUp(true)}>
                    Register new Account ?
                  </button>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
