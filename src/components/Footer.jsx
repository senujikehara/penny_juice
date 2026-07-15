import './Footer.css'

const footerLinks = {
  Products: ['Orange Juice', 'Grape Juice', 'Strawberry Juice', 'Lemon Zing', 'Mango Magic', 'Apple Crisp', 'Variety Packs'],
  Company: ['About Us', 'Our Story', 'Careers', 'Press', 'Blog', 'Contact'],
  Support: ['FAQ', 'Shipping Policy', 'Return Policy'],
  Connect: ['Instagram', 'Facebook', 'Twitter / X', 'Pinterest', 'YouTube'],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/Penny_juice_logo.png" alt="Penny Juice" className="footer-logo-img" />
              <span className="footer-logo-text">Penny<span>Juice</span></span>
            </div>
            <p className="footer-tagline">
              Pure fruit joy for every kid — no added sugar, no artificial anything.
              Made with love since 1988.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="footer-col">
              <h4 className="footer-col-title">{category}</h4>
              <ul className="footer-col-links">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2024 Penny Juice. All rights reserved. Made with ❤️ for little ones.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
