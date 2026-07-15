import { useState } from 'react'
import './Nutrition.css'

const nutrients = [
  { name: 'Vitamin C', value: 100, unit: '% DV', color: '#FF6B35', icon: '🍊' },
  { name: 'Vitamin A', value: 60, unit: '% DV', color: '#FFD700', icon: '🥕' },
  { name: 'Potassium', value: 45, unit: '% DV', color: '#9C27B0', icon: '🍇' },
  { name: 'Folate', value: 35, unit: '% DV', color: '#4CAF50', icon: '🥬' },
  { name: 'Calcium', value: 20, unit: '% DV', color: '#2196F3', icon: '🥛' },
  { name: 'Iron', value: 15, unit: '% DV', color: '#E91E63', icon: '💪' },
]

export default function Nutrition() {
  const [animated, setAnimated] = useState(false)

  return (
    <section
      className="nutrition-section"
      id="nutrition"
      onMouseEnter={() => setAnimated(true)}
    >
      <div className="container">
        <div className="section-header">
          <div className="section-tag">🥗 Nutrition</div>
          <h2 className="section-title">
            Packed With <span className="gradient-text">Real Goodness</span>
          </h2>
          <p className="section-subtitle">
            Every bottle of Penny Juice is bursting with essential vitamins and nutrients
            your kids need to thrive.
          </p>
        </div>

        <div className="nutrition-vertical-layout">
          
          {/* Row 1: Center Product Showcase */}
          <div className="nutrition-row-showcase">
            <div className="showcase-card-inner-new">
              <div className="showcase-image-holder">
                <img
                  src="/food.png"
                  alt="Penny Juice Food Showcase"
                  className="showcase-main-img"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Key Nutrients (All inside a single glass container card) */}
          <div className="nutrition-row-nutrients">
            <h3 className="redesign-row-title">Key Nutrients per Serving</h3>
            
            <div className="nutrients-glass-panel">
              <div className="nutrients-grid-inside">
                {nutrients.map((n, i) => (
                  <div key={i} className="nutrient-item-inside">
                    <div className="nutrient-item-header">
                      <div className="nutrient-item-label">
                        <span className="nutrient-item-icon">{n.icon}</span>
                        <span className="nutrient-item-name">{n.name}</span>
                      </div>
                      <span className="nutrient-item-val" style={{ color: n.color }}>{n.value}%</span>
                    </div>
                    
                    <div className="nutrient-item-bar-wrap">
                      <div
                        className="nutrient-item-bar-fill"
                        style={{
                          width: animated ? `${n.value}%` : '0%',
                          background: n.color,
                          transitionDelay: `${i * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Row 3: Why It Matters (Grid of 4 Cards) */}
          <div className="nutrition-row-benefits">
            <h3 className="redesign-row-title">Why It Matters</h3>
            <div className="benefits-grid-new">
              {[
                { icon: '🧠', title: 'Brain Boost', desc: 'Vitamins B and C support healthy brain development.', color: '#FF6B35' },
                { icon: '💪', title: 'Strong Bones', desc: 'Calcium and Vitamin D for growing kids.', color: '#4CAF50' },
                { icon: '🛡️', title: 'Immune Defense', desc: '100% Vitamin C strengthens immune systems.', color: '#2196F3' },
                { icon: '⚡', title: 'Natural Energy', desc: 'Natural fruit sugars for sustained energy all day.', color: '#9C27B0' },
              ].map((b, i) => (
                <div key={i} className="benefit-modern-card" style={{ '--benefit-color': b.color }}>
                  <span className="benefit-card-icon">{b.icon}</span>
                  <div className="benefit-card-info">
                    <h4>{b.title}</h4>
                    <p>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
