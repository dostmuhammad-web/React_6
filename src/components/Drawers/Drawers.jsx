import React, { useState } from "react";
import { X, Trash2, Plus, Minus, ShoppingBag, LogIn, Mail, Lock, Heart, Star, Calendar, User, Eye, Send, ArrowRight } from "lucide-react";
import "./Drawers.css";

// ----------------------------------------------------
// CART DRAWER
// ----------------------------------------------------
export function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem, 
  onCheckout, 
  onShopNow 
}) {
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {isOpen && <div className="drawer-overlay" onClick={onClose}></div>}
      <div className={`side-drawer ${isOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <h3>
            <ShoppingBag size={20} className="text-primary" />
            <span>Shopping Cart</span>
            <span className="drawer-header-count">
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </h3>
          <button className="drawer-close-btn" onClick={onClose} aria-label="Close Drawer">
            <X size={20} />
          </button>
        </div>

        <div className="drawer-content">
          {cartItems.length === 0 ? (
            <div className="empty-drawer-state">
              <div className="empty-drawer-icon">🛒</div>
              <h4>Your Cart is Empty</h4>
              <p>Looks like you haven't added anything to your cart yet.</p>
              <button 
                className="empty-drawer-btn" 
                onClick={() => {
                  onClose();
                  onShopNow();
                }}
              >
                <span>Shop Fresh Food</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ) : (
            <div className="drawer-items-list">
              {cartItems.map((item) => (
                <div className="drawer-item" key={item.id}>
                  <div className="drawer-item-img-wrapper">
                    <img src={item.image} alt={item.name} className="drawer-item-img" />
                  </div>
                  <div className="drawer-item-details">
                    <div>
                      <span className="drawer-item-category">{item.category}</span>
                      <h4 className="drawer-item-name">{item.name}</h4>
                    </div>
                    <div className="drawer-item-pricing-qty">
                      <span className="drawer-item-price">${(item.price * item.quantity).toFixed(2)}</span>
                      
                      <div className="qty-selector">
                        <button 
                          className="qty-btn"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={10} />
                        </button>
                        <span className="qty-val">{item.quantity}</span>
                        <button 
                          className="qty-btn"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus size={10} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button 
                    className="drawer-item-remove-btn" 
                    onClick={() => onRemoveItem(item.id)}
                    title="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="drawer-footer">
            <div className="drawer-summary-row">
              <span>Subtotal</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <div className="drawer-summary-row">
              <span>Delivery Fee</span>
              <span>FREE</span>
            </div>
            <div className="drawer-summary-row total-row">
              <span>Total Price</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <div className="drawer-action-btns">
              <button className="drawer-checkout-btn" onClick={onCheckout}>
                <span>Proceed to Checkout</span>
                <ArrowRight size={16} />
              </button>
              <button className="drawer-viewcart-btn" onClick={onClose}>
                <span>Continue Shopping</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

// ----------------------------------------------------
// WISHLIST DRAWER
// ----------------------------------------------------
export function WishlistDrawer({ 
  isOpen, 
  onClose, 
  wishlistItems, 
  onRemoveFromWishlist, 
  onAddToCart,
  onShopNow 
}) {
  return (
    <>
      {isOpen && <div className="drawer-overlay" onClick={onClose}></div>}
      <div className={`side-drawer ${isOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <h3>
            <Heart size={20} className="text-secondary" fill="var(--secondary)" />
            <span>My Wishlist</span>
            <span className="drawer-header-count">{wishlistItems.length}</span>
          </h3>
          <button className="drawer-close-btn" onClick={onClose} aria-label="Close Drawer">
            <X size={20} />
          </button>
        </div>

        <div className="drawer-content">
          {wishlistItems.length === 0 ? (
            <div className="empty-drawer-state">
              <div className="empty-drawer-icon">❤️</div>
              <h4>Your Wishlist is Empty</h4>
              <p>Save your favorite meals here to order them later easily.</p>
              <button 
                className="empty-drawer-btn" 
                onClick={() => {
                  onClose();
                  onShopNow();
                }}
              >
                <span>Browse Products</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ) : (
            <div className="drawer-items-list">
              {wishlistItems.map((item) => (
                <div className="drawer-item" key={item.id}>
                  <div className="drawer-item-img-wrapper">
                    <img src={item.image} alt={item.name} className="drawer-item-img" />
                  </div>
                  <div className="drawer-item-details">
                    <div>
                      <span className="drawer-item-category">{item.category}</span>
                      <h4 className="drawer-item-name">{item.name}</h4>
                    </div>
                    <div className="drawer-item-pricing-qty">
                      <span className="drawer-item-price">${item.price.toFixed(2)}</span>
                      <button 
                        className="wishlist-add-cart-btn"
                        onClick={() => {
                          onAddToCart(item);
                          onRemoveFromWishlist(item.id);
                        }}
                      >
                        <ShoppingBag size={12} />
                        <span>Buy Now</span>
                      </button>
                    </div>
                  </div>
                  <button 
                    className="drawer-item-remove-btn" 
                    onClick={() => onRemoveFromWishlist(item.id)}
                    title="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="drawer-footer">
          <button className="drawer-viewcart-btn" onClick={onClose} style={{ width: "100%" }}>
            <span>Continue Shopping</span>
          </button>
        </div>
      </div>
    </>
  );
}

// ----------------------------------------------------
// LOGIN / REGISTER MODAL
// ----------------------------------------------------
export function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [isLoginTab, setIsLoginTab] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginTab) {
      onLoginSuccess(email.split("@")[0] || "User");
    } else {
      onLoginSuccess(name || "User");
    }
    onClose();
    // Reset forms
    setEmail("");
    setPassword("");
    setName("");
  };

  return (
    <>
      {isOpen && <div className="modal-overlay" onClick={onClose}></div>}
      <div className={`modal-container ${isOpen ? "open" : ""}`}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Modal">
          <X size={18} />
        </button>
        
        <div className="login-modal-content">
          <div className="login-modal-header">
            <span className="logo-text">🍽️ Foodzy</span>
            <h3>{isLoginTab ? "Welcome Back!" : "Create an Account"}</h3>
            <p>{isLoginTab ? "Sign in to manage orders and checkout instantly" : "Register to start ordering premium local organic dishes"}</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            {!isLoginTab && (
              <div className="form-group">
                <label htmlFor="name-input">Full Name</label>
                <div className="input-with-icon">
                  <User size={16} className="input-icon" />
                  <input 
                    type="text" 
                    id="name-input" 
                    placeholder="John Doe" 
                    className="form-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email-input">Email Address</label>
              <div className="input-with-icon">
                <Mail size={16} className="input-icon" />
                <input 
                  type="email" 
                  id="email-input" 
                  placeholder="john@example.com" 
                  className="form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password-input">Password</label>
              <div className="input-with-icon">
                <Lock size={16} className="input-icon" />
                <input 
                  type="password" 
                  id="password-input" 
                  placeholder="••••••••" 
                  className="form-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {isLoginTab && (
              <div className="form-row-actions">
                <label className="remember-me">
                  <input type="checkbox" defaultChecked />
                  <span>Remember Me</span>
                </label>
                <a href="#forgot" className="forgot-password" onClick={(e) => { e.preventDefault(); alert("Password reset link sent to your email!"); }}>Forgot Password?</a>
              </div>
            )}

            <button type="submit" className="login-submit-btn">
              {isLoginTab ? "Sign In Now" : "Register Account"}
            </button>
          </form>

          <div className="login-modal-footer">
            <span>{isLoginTab ? "Don't have an account?" : "Already have an account?"}</span>
            <button 
              className="login-toggle-link"
              onClick={() => setIsLoginTab(!isLoginTab)}
            >
              {isLoginTab ? "Sign Up Free" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// ----------------------------------------------------
// BLOG READER MODAL
// ----------------------------------------------------
export function BlogModal({ isOpen, post, onClose }) {
  if (!post) return null;

  return (
    <>
      {isOpen && <div className="modal-overlay" onClick={onClose}></div>}
      <div className={`modal-container blog-modal-container ${isOpen ? "open" : ""}`}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Modal" style={{ background: "rgba(0,0,0,0.5)", color: "#fff" }}>
          <X size={18} />
        </button>

        <div className="blog-modal-scroll">
          <div className="blog-modal-img-wrapper">
            <img src={post.image} alt={post.title} className="blog-modal-img" />
            <span className="blog-modal-tag">{post.category}</span>
          </div>

          <div className="blog-modal-content">
            <div className="blog-modal-meta">
              <span>
                <Calendar size={14} />
                <span>{post.date}</span>
              </span>
              <span>
                <User size={14} />
                <span>By Chef Gourmet</span>
              </span>
            </div>

            <h3 className="blog-modal-title">{post.title}</h3>

            <div className="blog-modal-body">
              <p>
                {post.excerpt} That is why we are going to dive deep into this topic today. Making sure the food we put in our body matches standard organic qualities is very important for our physical and mental wellness.
              </p>
              <blockquote>
                "Good food is the foundation of genuine happiness. In culinary arts, there are no shortcuts to freshness, and the passion of the chef is always tasted in the final plate."
              </blockquote>
              <p>
                To achieve the best results, always prioritize sourcing fresh local organic ingredients. Whether you are baking bread or preparing a rich tomato pasta sauce, the raw ingredients define 90% of your flavor profile. Take time to research farmer markets around you and cook with the seasons.
              </p>
              <p>
                Enjoying healthy dishes should not mean compromising on rich taste. With custom spices, cold pressed oils, and gentle cooking methods, you can elevate any simple meal into a premium gastro feast!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
