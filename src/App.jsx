import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Products from './components/Products'
import WhyUs from './components/WhyUs'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Nutrition from './components/Nutrition'
import CTA from './components/CTA'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import BlogPage from './components/BlogPage'
import ContactPage from './components/ContactPage'
import AboutPage from './components/AboutPage'
import LoginModal from './components/LoginModal'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('home')
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)

  // Current logged in user (persists in localStorage for prototype demo)
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('penny_juice_current_user')
    return saved ? JSON.parse(saved) : null
  })

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [activePage])

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
  };

  const handleUpdateQty = (id, qty) => {
    if (qty < 1) {
      handleRemoveItem(id)
      return
    }
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    )
  };

  const handleRemoveItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  };

  const handleClearCart = () => {
    setCart([])
  };

  const handleLoginSuccess = (user) => {
    setCurrentUser(user)
    localStorage.setItem('penny_juice_current_user', JSON.stringify(user))
  }

  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem('penny_juice_current_user')
    alert("Logged out successfully! 🔒")
  }

  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0)

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={setActivePage} />
            <Marquee />
          </>
        )
      case 'shop':
        return <Products onAddToCart={handleAddToCart} />
      case 'ingredients':
        return <Nutrition />
      case 'about':
        return <AboutPage />
      case 'blog':
        return <BlogPage />
      case 'contact':
        return <ContactPage />
      case 'how-it-works':
        return <HowItWorks />
      default:
        return (
          <>
            <Hero onNavigate={setActivePage} />
            <Marquee />
          </>
        )
    }
  }

  return (
    <div className="app">
      <Navbar
        activePage={activePage}
        onPageChange={setActivePage}
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
        onLoginClick={() => setLoginOpen(true)}
        currentUser={currentUser}
        onLogout={handleLogout}
      />
      
      <main className="main-content">
        {renderPage()}
      </main>

      {/* Render CTA newsletter only on non-home, non-ingredients and non-contact pages */}
      {activePage !== 'home' && activePage !== 'ingredients' && activePage !== 'contact' && activePage !== 'about' && <CTA />}
      
      <Footer />

      {/* Modals & Slide-out drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onShopClick={() => setActivePage('shop')}
        currentUser={currentUser}
        onLoginClick={() => setLoginOpen(true)}
      />

      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        currentUser={currentUser}
        onLogout={handleLogout}
      />
    </div>
  )
}

export default App
