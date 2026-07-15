import './Marquee.css'

const items = [
  { emoji: '🍊', text: 'Orange Juice' },
  { emoji: '🍇', text: 'Grape Juice' },
  { emoji: '🍓', text: 'Strawberry Juice' },
  { emoji: '🍋', text: 'Lemonade' },
  { emoji: '🍑', text: 'Peach Juice' },
  { emoji: '🥭', text: 'Mango Juice' },
  { emoji: '🍎', text: 'Apple Juice' },
  { emoji: '🫐', text: 'Blueberry Juice' },
  { emoji: '🍍', text: 'Pineapple Juice' },
  { emoji: '🍒', text: 'Cherry Juice' },
]

export default function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div key={i} className="marquee-item">
            <span className="marquee-emoji">{item.emoji}</span>
            <span className="marquee-text">{item.text}</span>
            <span className="marquee-dot">✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}
