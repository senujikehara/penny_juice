import './Hero.css'

export default function Hero({ onNavigate }) {
  return (
    <section className="hero" id="home">
      {/* Row 1: Top Landscape Banner Image Block (Full width, outside container) */}
      <div className="hero-banner-block">
        <div className="hero-banner-image-wrapper">
          {/* The background image /land.png is styled via CSS */}
        </div>
      </div>

      <div className="container hero-container">

        {/* Row 2: 4 Square Image Blocks Side-by-Side */}
        <div className="hero-squares-grid">
          {[
            { img: '/1.png', borderColor: '#FFB74D' },
            { img: '/2.png', borderColor: '#BA68C8' },
            { img: '/3.png', borderColor: '#81C784' },
            { img: '/4.png', borderColor: '#64B5F6' },
          ].map((item, index) => (
            <div
              key={index}
              className="hero-square-card"
              style={{ borderColor: item.borderColor }}
            >
              <img src={item.img} alt={`Feature ${index + 1}`} className="square-card-img" />
            </div>
          ))}
        </div>

        {/* Row 3: Bottom Content (Left) & 2 Buttons Stacked (Right) */}
        <div className="hero-bottom-row">
          
          {/* Left Block: Content */}
          <div className="hero-bottom-content-block">
            <div className="content-inner">
              <span className="content-badge">🌱 Healthy Choice</span>
              <h2 className="content-title">Why Parents Trust Penny Juice</h2>
              <p className="content-text">
                Penny Juice provides a convenient and cost-effective way to serve healthy, 
                100% fruit juice to children. Our concentrates are easy to store, quick to 
                prepare, and come in a variety of delicious flavors that kids love. 
                With zero artificial additives, sweeteners, or preservatives, it is the 
                perfect choice for active youngsters!
              </p>
            </div>
          </div>

          {/* Right Block: 2 Buttons Stacked */}
          <div className="hero-bottom-buttons-block">
            <button onClick={() => onNavigate('shop')} className="hero-stack-btn primary-stack-btn">
              Explore Our Shop 🛍️
            </button>
            <button onClick={() => onNavigate('about')} className="hero-stack-btn secondary-stack-btn">
              About Us 🌿
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}
