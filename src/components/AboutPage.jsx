import './AboutPage.css'

export default function AboutPage() {
  return (
    <div className="about-page-container container">
      
      <div className="about-page-header">
        <span className="section-tag-about">🌿 Our Story & Values</span>
        <h1 className="about-main-title">About Penny Juice</h1>
        <p className="about-subtitle">Farm-fresh juice crafted with love, transparency, and integrity.</p>
      </div>

      <div className="about-two-columns-layout">
        
        {/* Left Column */}
        <div className="about-column left">
          
          {/* Block 1: Who We Are Text Card */}
          <div className="about-text-card">
            <h2 className="about-row-title">Who We Are</h2>
            <p>
              Penny Juice is an organic, plant-based juice brand founded in Las Vegas, Nevada, by Petunia — 
              a passionate wellness advocate who believed that truly good health starts with simple, honest ingredients.
            </p>
            <p>
              What began as a personal mission to nourish her own family with clean, natural beverages has 
              grown into a brand dedicated to bringing farm-fresh juice to health-conscious individuals, 
              families, schools, and childcare centres across the country.
            </p>
            <p>
              Every bottle of Penny Juice is crafted from carefully selected organic fruits and vegetables, 
              sourced directly from sustainable farms. From farm to bottle, we are committed to maintaining the 
              highest standards of quality, freshness, and transparency — because we believe you deserve to know exactly what you are drinking.
            </p>
          </div>

          {/* Block 2: Our Mission Image Card (Left column, sits below Who We Are text) */}
          <div className="about-image-card-full">
            <img
              src="/vegi.png"
              alt="Our Mission Showcase"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="about-img-fallback-box">
              <span className="fallback-emoji-about">🌱</span>
              <p>Add Our Mission Image</p>
              <small>/public/vegi.png</small>
            </div>
          </div>

          {/* Block 3: Our Story Text Card */}
          <div className="about-text-card">
            <h2 className="about-row-title">Our Story</h2>
            <p>
              Penny Juice was born out of a moment of frustration. Petunia, a devoted mother and health enthusiast, 
              found it increasingly difficult to find juice products that were genuinely organic, free from artificial 
              additives, and transparent about their ingredients. Most products on the market were heavily processed, 
              loaded with added sugars, and vague about their sourcing.
            </p>
            <p>
              Determined to do better, Petunia began crafting her own juice blends at home using fresh produce from local 
              organic farmers. The response from family and friends was immediate and overwhelming.
            </p>
            <p>
              Word spread through her community, and what started in a home kitchen soon became a fully fledged brand with 
              a growing family of loyal customers. Today, Penny Juice offers eight unique juice blends, each formulated 
              to target specific wellness goals — from energy and immunity to mood enhancement and digestive health.
            </p>
          </div>

          {/* Block 4: Our Values Image Card */}
          <div className="about-image-card-full values-img-card">
            <img
              src="/7.png"
              alt="Our Values Showcase"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="about-img-fallback-box">
              <span className="fallback-emoji-about">🛡️</span>
              <p>Add Our Values Image</p>
              <small>/public/7.png</small>
            </div>
          </div>

          {/* Block 5: Meet the Founder Text Card */}
          <div className="about-text-card">
            <h2 className="about-row-title">Meet the Founder</h2>
            <p>
              Petunia is a Las Vegas based wellness advocate, mother, and entrepreneur. 
              Her passion for natural living, clean eating, and sustainable farming is the driving 
              force behind everything Penny Juice stands for.
            </p>
            <p>
              She personally oversees every recipe, every ingredient partnership, and every product 
              that carries the Penny Juice name. For Petunia, this is not just a business — it is a calling.
            </p>
          </div>

        </div>

        {/* Right Column */}
        <div className="about-column right">
          
          {/* Block 1: Who We Are Image Card (Starts at top, right column) */}
          <div className="about-image-card-full">
            <img
              src="/land 2.png"
              alt="Who We Are Showcase"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="about-img-fallback-box">
              <span className="fallback-emoji-about">🍊</span>
              <p>Add Who We Are Image</p>
              <small>/public/land 2.png</small>
            </div>
          </div>

          {/* Block 2: Our Mission Text Card (Sits directly under Who We Are image) */}
          <div className="about-text-card">
            <h2 className="about-row-title">Our Mission</h2>
            <p>
              Our mission is simple: to provide organic, plant-based juices that refresh, nourish, heal, 
              and energise the body, while protecting the planet we all share.
            </p>
            <p>
              We are committed to sustainable farming practices, minimal processing, and honest labelling — 
              so that every sip you take is as good for the earth as it is for you.
            </p>
          </div>

          {/* Block 3: Our Story Image Card */}
          <div className="about-image-card-full">
            <img
              src="/5.png"
              alt="Our Story Showcase"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="about-img-fallback-box">
              <span className="fallback-emoji-about">🍎</span>
              <p>Add Our Story Image</p>
              <small>/public/5.png</small>
            </div>
          </div>

          {/* Block 4: Why Choose Penny Juice & Our Values Text Card */}
          <div className="about-text-card">
            <h2 className="about-row-title">Why Choose Penny Juice</h2>
            <p>
              We source only certified organic ingredients from sustainable farms that share our values. 
              There are no artificial colours, flavours, or preservatives in any of our products. 
              Every ingredient is clearly listed so you always know what you are consuming.
            </p>

            <h3 className="about-values-subheading">Our Values</h3>
            <ul className="about-values-list">
              <li>
                <strong>Health First</strong> — We put the wellbeing of our customers above everything else. 
                Every product we make is designed to nourish the body and support a healthier lifestyle.
              </li>
              <li>
                <strong>Transparency</strong> — We believe in honest, clear communication about what goes 
                into our juices. No hidden ingredients, no misleading claims.
              </li>
              <li>
                <strong>Sustainability</strong> — From the farms we partner with to the packaging we use, 
                we are committed to minimising our environmental footprint at every step.
              </li>
              <li>
                <strong>Community</strong> — Penny Juice was built on community. We are proud to serve families, 
                schools, and childcare centres who trust us to provide safe, healthy, and delicious beverages.
              </li>
            </ul>
          </div>

          {/* Block 5: Meet the Founder Image Card */}
          <div className="about-image-card-full">
            <img
              src="/6.png"
              alt="Meet the Founder Showcase"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="about-img-fallback-box">
              <span className="fallback-emoji-about">👩‍🌾</span>
              <p>Add Founder Image</p>
              <small>/public/6.png</small>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
