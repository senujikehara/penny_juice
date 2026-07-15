import './WhyUs.css'

const reasons = [
  {
    icon: '🌿',
    title: '100% Natural',
    desc: 'No artificial colors, flavors, or preservatives. Just pure fruit goodness from nature.',
    color: '#4CAF50',
    bg: '#E8F5E9',
  },
  {
    icon: '🍬',
    title: 'Zero Added Sugar',
    desc: 'Sweetness comes only from real fruit. We never add refined sugar or sweeteners.',
    color: '#FF6B35',
    bg: '#FFF3E0',
  },
  {
    icon: '🏫',
    title: 'School Approved',
    desc: 'Meets all school nutrition guidelines. Trusted by 5,000+ schools across the country.',
    color: '#2196F3',
    bg: '#E3F2FD',
  },
  {
    icon: '💧',
    title: 'Easy to Prepare',
    desc: 'Just mix with water! Our concentrate formula makes preparation quick and easy.',
    color: '#9C27B0',
    bg: '#F3E5F5',
  },
  {
    icon: '♻️',
    title: 'Eco Friendly',
    desc: 'Sustainable packaging and responsible sourcing — good for kids and the planet.',
    color: '#009688',
    bg: '#E0F2F1',
  },
  {
    icon: '💰',
    title: 'Great Value',
    desc: 'More juice per dollar than ready-to-drink options. Smart choice for big families.',
    color: '#F9A825',
    bg: '#FFFDE7',
  },
]

export default function WhyUs() {
  return (
    <section className="whyus-section" id="why-us">
      <div className="blob" style={{ width: 500, height: 500, background: '#4CAF50', top: 0, right: -200 }} />
      <div className="blob" style={{ width: 400, height: 400, background: '#2196F3', bottom: -100, left: -100 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header">
          <div className="section-tag">💚 Why Choose Us</div>
          <h2 className="section-title">
            The <span className="gradient-text">Smartest Choice</span> for Your Kids
          </h2>
          <p className="section-subtitle">
            We believe kids deserve the best — and that means real fruit, real nutrition, and real taste.
          </p>
        </div>

        <div className="whyus-grid">
          {reasons.map((r, i) => (
            <div key={i} className="reason-card">
              <div className="reason-icon-wrap" style={{ background: r.bg }}>
                <span className="reason-icon">{r.icon}</span>
              </div>
              <h3 className="reason-title" style={{ color: r.color }}>{r.title}</h3>
              <p className="reason-desc">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Big Banner */}
        <div className="whyus-banner">
          <div className="banner-left">
            <span className="banner-emoji">🎉</span>
            <div>
              <h3>Trusted by Families Since 1988</h3>
              <p>Over 35 years of bringing joy in every drop.</p>
            </div>
          </div>
          <div className="banner-stats">
            {[
              { num: '5K+', label: 'Schools' },
              { num: '1M+', label: 'Kids' },
              { num: '35+', label: 'Years' },
              { num: '15+', label: 'Flavors' },
            ].map((s, i) => (
              <div key={i} className="banner-stat">
                <span className="banner-stat-num">{s.num}</span>
                <span className="banner-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
