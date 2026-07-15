import './HowItWorks.css'

const steps = [
  {
    step: '01',
    emoji: '🛒',
    title: 'Choose Your Flavors',
    desc: 'Pick from 15+ delicious fruit juice concentrates. Mix and match to find your family favorites.',
    color: '#FF6B35',
  },
  {
    step: '02',
    emoji: '📦',
    title: 'We Ship to You',
    desc: 'Fast delivery right to your door. Our insulated packaging keeps everything fresh.',
    color: '#9C27B0',
  },
  {
    step: '03',
    emoji: '💧',
    title: 'Mix & Serve',
    desc: 'Just add water to the concentrate. Each bottle makes up to 8 servings of juice.',
    color: '#2196F3',
  },
  {
    step: '04',
    emoji: '😄',
    title: 'Kids Love It!',
    desc: 'Serve chilled and watch your kids enjoy every healthy, delicious sip.',
    color: '#4CAF50',
  },
]

export default function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">⚡ Simple Process</div>
          <h2 className="section-title">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="section-subtitle">
            Getting healthy juice to your kids has never been easier. Four simple steps!
          </p>
        </div>

        <div className="steps-wrapper">
          {steps.map((s, i) => (
            <div key={i} className="step-item">
              <div className="step-connector" />
              <div className="step-circle" style={{ borderColor: s.color }}>
                <span className="step-emoji">{s.emoji}</span>
                <div className="step-num" style={{ background: s.color }}>{s.step}</div>
              </div>
              <div className="step-content">
                <h3 className="step-title" style={{ color: s.color }}>{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video placeholder */}
        <div className="how-video">
          <div className="video-thumb">
            <div className="video-overlay">
              <div className="play-btn">▶</div>
              <p>Watch how easy it is</p>
            </div>
            <div className="video-bg">
              <span>🍊🍇🍓🍋</span>
            </div>
          </div>
          <div className="video-info">
            <span className="section-tag" style={{ marginBottom: 0 }}>🎬 Watch Demo</span>
            <h3>See It In Action</h3>
            <p>
              Our 2-minute video shows you exactly how to prepare the perfect glass of Penny Juice.
              It's so easy, kids can even do it themselves!
            </p>
            <div className="video-features">
              {['Quick prep in 30 seconds', 'Perfect ratio guide', 'Storage tips', 'Serving ideas'].map((f, i) => (
                <div key={i} className="video-feat">
                  <span className="feat-check">✓</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
