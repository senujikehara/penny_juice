import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'Home', page: 'home' },
  { label: 'Shop', page: 'shop' },
  { label: 'Ingredients', page: 'ingredients' },
  { label: 'About Us', page: 'about' },
  { label: 'Blog', page: 'blog' },
  { label: 'Contact', page: 'contact' },
]

export default function Navbar({ activePage = 'home', onPageChange, cartCount = 0, onCartClick, onLoginClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      alert(`🔍 Searching for "${searchQuery}" in Penny Juice flavors...`)
      setSearchQuery('')
    }
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          
          {/* Left: Logo & Hamburger */}
          <div className="navbar-left-group">
            <a href="#" className="navbar-logo" onClick={(e) => { e.preventDefault(); onPageChange('home'); }}>
              <img src="/Penny_juice_logo.png" alt="Penny Juice" className="logo-img" />
            </a>
            <button
              className={`nav-hamburger-btn ${sidebarOpen ? 'open' : ''}`}
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle sidebar menu"
            >
              <span /><span /><span />
            </button>
          </div>

          {/* Center: Search Bar */}
          <form className="navbar-search" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search flavors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-btn" aria-label="Search">
              🔍
            </button>
          </form>

          {/* Right: Cart & Profile Actions */}
          <div className="navbar-actions">
            <button onClick={onCartClick} className="nav-cart-orange-btn" aria-label="Cart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="nav-icon-svg">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              {cartCount > 0 && <span className="nav-orange-badge">{cartCount}</span>}
            </button>

            <button onClick={onLoginClick} className="nav-icon-btn" aria-label="Login">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="nav-icon-svg">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </button>
          </div>

        </div>
      </nav>

      {/* Left Sidebar Navigation */}
      <div className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`} onClick={() => setSidebarOpen(false)}>
        <aside className="sidebar-nav-left" onClick={(e) => e.stopPropagation()}>
          <div className="sidebar-header">
            <h3>Side Bar</h3>
            <button className="sidebar-close-btn" onClick={() => setSidebarOpen(false)}>×</button>
          </div>
          
          <ul className="sidebar-links-list">
            {navLinks.map((link) => (
              <li key={link.label} className="sidebar-item">
                <button
                  onClick={() => {
                    setSidebarOpen(false)
                    onPageChange(link.page)
                  }}
                  className={`sidebar-btn-link ${activePage === link.page ? 'active' : ''}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="sidebar-logout-container">
            <button
              onClick={() => {
                setSidebarOpen(false)
                alert('Logged out successfully! 🔒')
              }}
              className="sidebar-logout-btn"
            >
              Log Out 🔓
            </button>
          </div>
        </aside>
      </div>
    </>
  )
}
