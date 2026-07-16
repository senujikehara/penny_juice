import './CartDrawer.css'

export default function CartDrawer({ isOpen, onClose, cart, onUpdateQty, onRemoveItem, onClearCart, onShopClick }) {
  const subtotal = cart.reduce((acc, item) => {
    const priceNum = parseFloat(item.price.replace('$', ''))
    return acc + priceNum * item.qty
  }, 0)

  const shipping = subtotal > 50 || subtotal === 0 ? 0 : 9.99
  const discount = subtotal > 0 ? subtotal * 0.15 : 0 // 15% discount for prototype demo
  const total = subtotal - discount + shipping

  if (!isOpen) return null

  return (
    <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Shopping Cart 🛒</h2>
          <button className="cart-close-btn" onClick={onClose}>×</button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <span className="cart-empty-icon">🥤</span>
            <h3>Your cart is empty!</h3>
            <p>Add some delicious flavors to get started.</p>
            <button className="btn-primary" onClick={() => { onClose(); if (onShopClick) onShopClick(); }}>Shop Flavors</button>
          </div>
        ) : (
          <>
            <div className="cart-items-list">
              {cart.map((item) => (
                <div key={item.id} className="cart-item-row" style={{ '--item-color': item.color }}>
                  <div className="cart-item-emoji" style={{ background: item.bg || 'var(--bg-cream)' }}>
                    {item.emoji}
                  </div>
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <span className="cart-item-size">{item.size}</span>
                    <span className="cart-item-price">{item.price} each</span>
                  </div>
                  <div className="cart-item-actions">
                    <div className="qty-controls">
                      <button onClick={() => onUpdateQty(item.id, item.qty - 1)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => onUpdateQty(item.id, item.qty + 1)}>+</button>
                    </div>
                    <button className="remove-btn" onClick={() => onRemoveItem(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row discount">
                <span>15% Special Discount 🎉</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className="cart-checkout-actions">
                <button
                  className="btn-primary checkout-btn"
                  onClick={() => {
                    alert('🎉 Thank you for trying the Penny Juice prototype! Checkout is successful.')
                    onClearCart()
                    onClose()
                  }}
                >
                  Proceed to Checkout 🚀
                </button>
                <button className="clear-cart-btn" onClick={onClearCart}>Clear Cart</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
