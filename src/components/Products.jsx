import { useState } from 'react'
import './Products.css'

const products = [
  {
    id: 1,
    name: 'Orange Burst',
    image: '/shop/1.png',
    color: '#FF6B35',
    bg: 'linear-gradient(160deg, #FFF0E6, #FFE0CC)',
    price: '$9.99',
    size: '64 fl oz',
    tag: 'Best Seller',
    tagColor: '#FF6B35',
    desc: 'Sunshine in every sip! Our classic orange juice is packed with Vitamin C.',
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Emerald Energy',
    image: '/shop/Emerald Energy.png',
    color: '#4CAF50',
    bg: 'linear-gradient(160deg, #EBF5EB, #D6EBD6)',
    price: '$11.99',
    size: '64 fl oz',
    tag: 'Superfood',
    tagColor: '#4CAF50',
    desc: 'Power-packed green blend full of vitamins and natural energy boost.',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Golden Aura',
    image: '/shop/Golden Aura.png',
    color: '#F9A825',
    bg: 'linear-gradient(160deg, #FFFBF0, #FFF2CC)',
    price: '$12.99',
    size: '64 fl oz',
    tag: 'Fave Pick',
    tagColor: '#F9A825',
    desc: 'Crispy, sweet golden nectar loved by children and adults alike.',
    rating: 4.9,
  },
  {
    id: 4,
    name: 'Green Glow',
    image: '/shop/Green Glow.png',
    color: '#81C784',
    bg: 'linear-gradient(160deg, #EAF2EA, #D5E5D5)',
    price: '$8.99',
    size: '64 fl oz',
    tag: 'Organic',
    tagColor: '#81C784',
    desc: 'Mild and refreshing vegetable-fruit fusion that kids love drinking.',
    rating: 4.7,
  },
  {
    id: 5,
    name: 'Lemon Lift',
    image: '/shop/Lemon Lift.png',
    color: '#FFB300',
    bg: 'linear-gradient(160deg, #FFFBEB, #FFF0CC)',
    price: '$10.99',
    size: '64 fl oz',
    tag: 'Zesty',
    tagColor: '#FFB300',
    desc: 'Bright citrus lemonade taste with a soft natural sweet touch.',
    rating: 4.6,
  },
  {
    id: 6,
    name: 'Tropical Harmony',
    image: '/shop/Tropical Harmony.png',
    color: '#FF6F00',
    bg: 'linear-gradient(160deg, #FFF5EB, #FFE6CC)',
    price: '$12.49',
    size: '64 fl oz',
    tag: 'Tropical',
    tagColor: '#FF6F00',
    desc: 'Harmonious medley of mango, pineapple, and orange juices.',
    rating: 4.8,
  },
  {
    id: 7,
    name: 'Summer Punch',
    image: '/shop/Untitled design.png',
    color: '#E91E63',
    bg: 'linear-gradient(160deg, #FDF0F5, #FCE0ED)',
    price: '$11.49',
    size: '64 fl oz',
    tag: 'Summer Special',
    tagColor: '#E91E63',
    desc: 'A gorgeous berry splash mix designed to hydrate kids on warm days.',
    rating: 4.9,
  },
  {
    id: 8,
    name: 'Zen Pear',
    image: '/shop/Zen Pear.png',
    color: '#00ACC1',
    bg: 'linear-gradient(160deg, #EBF9FA, #D6F3F5)',
    price: '$9.49',
    size: '64 fl oz',
    tag: 'Zen Pick',
    tagColor: '#00ACC1',
    desc: 'Pure, calming pear essence that is exceptionally gentle on tummies.',
    rating: 4.7,
  },
]

function StarRating({ rating }) {
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= Math.round(rating) ? 'star filled' : 'star'}>★</span>
      ))}
      <span className="rating-num">{rating}</span>
    </div>
  )
}

export default function Products({ onAddToCart }) {
  const [hovered, setHovered] = useState(null)
  const [added, setAdded] = useState({})

  const handleAdd = (product) => {
    setAdded((prev) => ({ ...prev, [product.id]: true }))
    setTimeout(() => setAdded((prev) => ({ ...prev, [product.id]: false })), 1500)
    if (onAddToCart) {
      onAddToCart(product)
    }
  }

  return (
    <section className="products-section" id="products">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">🍹 Our Flavors</div>
          <h2 className="section-title">
            Pick Your <span className="gradient-text">Favorite Flavor</span>
          </h2>
          <p className="section-subtitle">
            All our juices are made from 100% real fruit concentrate with zero added sugar.
            Find the flavors your kids love most!
          </p>
        </div>

        <div className="products-grid">
          {products.map((p) => (
            <div
              key={p.id}
              className={`product-card ${hovered === p.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Tag */}
              <div className="product-tag" style={{ background: p.tagColor }}>
                {p.tag}
              </div>

              {/* Visual */}
              <div className="product-visual" style={{ background: p.bg }}>
                <img src={p.image} alt={p.name} className="product-img" />
                <div className="product-shine" />
              </div>

              {/* Info */}
              <div className="product-info">
                <h3 className="product-name">{p.name}</h3>
                <p className="product-desc">{p.desc}</p>

                <StarRating rating={p.rating} />

                <div className="product-meta">
                  <span className="product-size">📦 {p.size}</span>
                  <span className="product-price" style={{ color: p.color }}>{p.price}</span>
                </div>

                <button
                  className={`product-btn ${added[p.id] ? 'added' : ''}`}
                  style={{ '--btn-color': p.color }}
                  onClick={() => handleAdd(p)}
                >
                  {added[p.id] ? '✓ Added!' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
