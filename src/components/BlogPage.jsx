import { useState } from 'react'
import './BlogPage.css'

const posts = [
  {
    id: 1,
    title: 'The Importance of Real Fruit Nutrition for Toddlers 🍊',
    date: 'July 10, 2026',
    author: 'Dr. Jane Smith, Pediatrician',
    summary: 'Discover how 100% pure juice concentrates provide crucial daily vitamins and help support healthy development in children.',
    content: 'Juice can be a healthy part of a child\'s diet when served correctly. Pediatricians recommend 100% fruit juice without added sugar. Our juices are packed with Vitamin C to support toddlers\' growing immune systems, and they offer vitamins A and B, which aid healthy brain development and overall cell growth. By choosing 100% natural options, you ensure your child gets the vitamins they need without any toxic additives.',
    color: '#FF6B35',
    emoji: '/ar1.png',
  },
  {
    id: 2,
    title: '5 Creative Ways to Keep Kids Hydrated in Summer 🍇',
    date: 'June 28, 2026',
    author: 'Emily Watson, Health Blogger',
    summary: 'Staying hydrated doesn\'t have to be boring. Read our tips on fun juice popsicle recipes and active hydration hacks.',
    content: 'Keeping children hydrated during summer heat can be challenging. A fun way is to freeze Penny Juice concentrate mixed with water in popsicle molds for a delicious, healthy icy treat! You can also dilute our juice with sparkling mineral water to make a sparkling mocktail kids will love, or play hydration games with colorful reusable cups. These alternatives keep hydration levels up without high-fructose corn syrups.',
    color: '#9C27B0',
    emoji: '/ar2.png',
  },
  {
    id: 3,
    title: 'School Nutrition Standards: What Parents Should Know 🏫',
    date: 'June 15, 2026',
    author: 'Principal Arthur Davis',
    summary: 'Learn about USDA standards for school lunches and why Penny Juice is approved by over 5,000 schools nationwide.',
    content: 'USDA school nutrition guidelines are strict. School juices must be 100% fruit juice, without sweeteners. Penny Juice concentrate is fully school-approved, meeting and exceeding these standards for vitamin content per serving. Switching to Penny Juice allows schools to deliver high-quality nutrition to students cost-effectively. It is easy to store and prepare, making it the perfect beverage partner for educational institutions.',
    color: '#4CAF50',
    emoji: '🏫',
  },
]

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null)

  const renderEmojiOrImage = (emoji, title, className) => {
    if (emoji.startsWith('/')) {
      return (
        <img
          src={emoji}
          alt={title}
          className={`${className}-img`}
          style={{ width: '70%', height: '70%', objectFit: 'contain', display: 'block' }}
        />
      )
    }
    return emoji
  }

  return (
    <div className="blog-page-container container">
      <div className="blog-page-header">
        {selectedPost ? (
          <button className="blog-page-back-btn" onClick={() => setSelectedPost(null)}>
            ← Back to Articles
          </button>
        ) : (
          <>
            <span className="section-tag">📝 Blog & News</span>
            <h1 className="blog-page-main-title">Penny Juice Blog</h1>
            <p className="blog-page-subtitle">Expert advice, nutrition tips, and recipes for healthy kids.</p>
          </>
        )}
      </div>

      <div className="blog-page-content">
        {selectedPost ? (
          <article className="full-blog-post">
            <div className="post-meta-full">
              <span className="post-date">{selectedPost.date}</span> • <span className="post-author">{selectedPost.author}</span>
            </div>
            <h1 className="post-title-full" style={{ color: selectedPost.color }}>
              {selectedPost.title}
            </h1>
            <div className="post-emoji-big" style={{ background: `${selectedPost.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              {renderEmojiOrImage(selectedPost.emoji, selectedPost.title, 'post-emoji-big-custom')}
            </div>
            <div className="post-body">
              <p>{selectedPost.content}</p>
              <p>
                To learn more about how our juices are formulated and check out our flavor selection,
                explore our products and find the flavors your kids love most.
              </p>
            </div>
          </article>
        ) : (
          <div className="blog-posts-grid">
            {posts.map((post) => (
              <div
                key={post.id}
                className="blog-post-card"
                onClick={() => setSelectedPost(post)}
                style={{ '--post-color': post.color }}
              >
                <div className="post-emoji-wrap" style={{ background: `${post.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  {renderEmojiOrImage(post.emoji, post.title, 'post-emoji-wrap-custom')}
                </div>
                <span className="post-date">{post.date}</span>
                <h3 className="post-card-title">{post.title}</h3>
                <p className="post-summary">{post.summary}</p>
                <span className="read-more-link" style={{ color: post.color }}>
                  Read Article →
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
