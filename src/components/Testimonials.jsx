import { useState } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Mom of 3',
    avatar: '👩‍👧‍👦',
    rating: 5,
    text: 'My kids absolutely love Penny Juice! We\'ve tried every flavor and orange is their favorite. Love that there\'s no added sugar — guilt-free snack time!',
    color: '#FF6B35',
  },
  {
    name: 'Principal Davis',
    role: 'Elementary School',
    avatar: '👨‍🏫',
    rating: 5,
    text: 'We switched our entire cafeteria to Penny Juice and the kids couldn\'t be happier. Parents love the nutrition profile, and it\'s very cost-effective for us.',
    color: '#2196F3',
  },
  {
    name: 'Jennifer K.',
    role: 'Nutritionist',
    avatar: '👩‍⚕️',
    rating: 5,
    text: 'As a nutritionist, I recommend Penny Juice to all my clients with young children. Zero added sugars, 100% fruit content, and delicious flavors kids actually enjoy.',
    color: '#4CAF50',
  },
  {
    name: 'Tom & Lisa',
    role: 'Parents of Twins',
    avatar: '👨‍👩‍👧‍👦',
    rating: 5,
    text: 'We order 6 bottles every month. The variety pack is amazing — keeps our twins excited about drinking something healthy instead of soda.',
    color: '#9C27B0',
  },
  {
    name: 'Coach Rivera',
    role: 'Youth Soccer Coach',
    avatar: '⚽',
    rating: 5,
    text: 'Perfect for post-game hydration! The kids love it and I love that it\'s natural. Mango and Orange are big hits with my team every game day.',
    color: '#FF9800',
  },
  {
    name: 'Amanda T.',
    role: 'Daycare Owner',
    avatar: '🏡',
    rating: 5,
    text: 'Running a daycare, nutrition matters so much. Penny Juice has been our go-to for 5 years now. The concentrate is so easy to prepare and the kids adore it!',
    color: '#E91E63',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((a) => (a + 1) % testimonials.length)

  const visible = [
    testimonials[active],
    testimonials[(active + 1) % testimonials.length],
    testimonials[(active + 2) % testimonials.length],
  ]

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="blob" style={{ width: 400, height: 400, background: '#FFD700', top: -100, right: -100 }} />
      <div className="blob" style={{ width: 300, height: 300, background: '#FF6B35', bottom: 0, left: -80 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header">
          <div className="section-tag">⭐ Testimonials</div>
          <h2 className="section-title">
            Loved By <span className="gradient-text">Families Everywhere</span>
          </h2>
          <p className="section-subtitle">
            Over 10,000 families trust Penny Juice. Here's what they're saying.
          </p>
        </div>

        {/* Rating summary */}
        <div className="rating-summary">
          <div className="rating-big">
            <span className="rating-score">4.9</span>
            <div className="rating-stars-big">
              {[1,2,3,4,5].map(s => <span key={s} className="star-big">★</span>)}
            </div>
            <span className="rating-count">Based on 3,200+ reviews</span>
          </div>
          <div className="rating-bars">
            {[
              { stars: 5, pct: 88 },
              { stars: 4, pct: 9 },
              { stars: 3, pct: 2 },
              { stars: 2, pct: 0.5 },
              { stars: 1, pct: 0.5 },
            ].map((r, i) => (
              <div key={i} className="rating-bar-row">
                <span>{r.stars}★</span>
                <div className="rating-bar-track">
                  <div className="rating-bar-fill" style={{ width: `${r.pct}%` }} />
                </div>
                <span>{r.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="testimonials-carousel">
          {visible.map((t, i) => (
            <div
              key={`${active}-${i}`}
              className={`testimonial-card ${i === 0 ? 'featured' : ''}`}
              style={{ '--card-color': t.color }}
            >
              <div className="t-stars">
                {[1,2,3,4,5].map(s => <span key={s} className="t-star">★</span>)}
              </div>
              <p className="t-text">"{t.text}"</p>
              <div className="t-author">
                <span className="t-avatar">{t.avatar}</span>
                <div>
                  <strong className="t-name">{t.name}</strong>
                  <span className="t-role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="carousel-controls">
          <button className="carousel-btn" onClick={prev} aria-label="Previous">←</button>
          <div className="carousel-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === active ? 'active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button className="carousel-btn" onClick={next} aria-label="Next">→</button>
        </div>
      </div>
    </section>
  )
}
