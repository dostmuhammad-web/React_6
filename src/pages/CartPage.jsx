import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ArrowRight, CreditCard, ShieldCheck } from "lucide-react";

function CartPage({ cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) {
  const [checkoutStep, setCheckoutStep] = useState("cart"); // 'cart' or 'checkout' or 'success'
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    phone: ""
  });

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onCheckout(); // triggers toast & clears cart in App.jsx
    setCheckoutStep("success");
  };

  if (checkoutStep === "success") {
    return (
      <div className="container" style={{ padding: "120px 20px 80px 20px", textAlign: "center" }}>
        <div style={{ fontSize: "72px", marginBottom: "20px" }}>🎉</div>
        <h1 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "12px" }}>Order Placed Successfully!</h1>
        <p style={{ color: "var(--gray)", maxWidth: "500px", margin: "0 auto 30px auto" }}>
          Thank you for choosing Foodzy. Your organic dishes are currently being prepared by our chefs and will arrive at your address shortly.
        </p>
        <Link to="/" className="empty-drawer-btn" style={{ padding: "12px 30px" }} onClick={() => setCheckoutStep("cart")}>
          Back to Home Page
        </Link>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: "100px", minHeight: "80vh" }}>
      <div className="container" style={{ padding: "40px 20px" }}>
        <h1 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "30px" }}>
          {checkoutStep === "cart" ? "Shopping Cart" : "Checkout Information"}
        </h1>

        {cartItems.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 20px", color: "var(--gray)" }}>
            <span style={{ fontSize: "64px", display: "block", marginBottom: "20px" }}>🛒</span>
            <h2>Your Shopping Cart is Empty</h2>
            <p style={{ margin: "10px auto 24px auto", maxWidth: "300px" }}>Add delicious farm organic fresh meals to get free fast home delivery!</p>
            <Link to="/products" className="empty-drawer-btn" style={{ display: "inline-flex", padding: "12px 24px" }}>
              <span>Browse Products</span>
            </Link>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "40px" }} className="cart-grid-resp">
            {/* Left Column */}
            <div>
              {checkoutStep === "cart" ? (
                /* Cart Items List */
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {cartItems.map((item) => (
                    <div 
                      key={item.id} 
                      style={{ 
                        display: "flex", 
                        alignItems: "center", 
                        gap: "20px", 
                        padding: "20px", 
                        backgroundColor: "#fafafa", 
                        borderRadius: "var(--radius-md)" 
                      }}
                      className="cart-item-resp"
                    >
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        style={{ width: "90px", height: "90px", objectFit: "cover", borderRadius: "var(--radius-sm)" }} 
                      />
                      <div style={{ flex: 1 }}>
                        <span style={{ fontSize: "11px", color: "var(--gray)", textTransform: "uppercase", fontWeight: "600" }}>{item.category}</span>
                        <h4 style={{ fontSize: "16px", fontWeight: "600", color: "var(--dark)", margin: "2px 0 6px 0" }}>{item.name}</h4>
                        <span style={{ fontSize: "16px", fontWeight: "700", color: "var(--primary)" }}>${item.price.toFixed(2)}</span>
                      </div>
                      
                      {/* Qty controller */}
                      <div className="qty-selector" style={{ border: "1px solid #ddd" }}>
                        <button 
                          className="qty-btn"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          style={{ padding: "8px 12px" }}
                        >
                          <Minus size={12} />
                        </button>
                        <span className="qty-val" style={{ padding: "0 12px" }}>{item.quantity}</span>
                        <button 
                          className="qty-btn"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          style={{ padding: "8px 12px" }}
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <span style={{ fontSize: "16px", fontWeight: "700", minWidth: "80px", textAlign: "right" }}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>

                      <button 
                        onClick={() => onRemoveItem(item.id)}
                        style={{ color: "#aaa", padding: "10px" }}
                        onMouseEnter={(e) => e.target.style.color = "var(--secondary)"}
                        onMouseLeave={(e) => e.target.style.color = "#aaa"}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                /* Checkout Form */
                <form id="checkout-form" onSubmit={handleSubmit} style={{ backgroundColor: "#fafafa", padding: "30px", borderRadius: "var(--radius-md)", display: "flex", flexDirection: "column", gap: "20px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: "700", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>Shipping Address</h3>
                  
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                    <div className="form-group">
                      <label style={{ fontSize: "13px", fontWeight: "600" }}>Full Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="John Doe" 
                        className="form-input" 
                        style={{ padding: "12px" }}
                        value={shippingInfo.name}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label style={{ fontSize: "13px", fontWeight: "600" }}>Email Address</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="john@example.com" 
                        className="form-input" 
                        style={{ padding: "12px" }}
                        value={shippingInfo.email}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label style={{ fontSize: "13px", fontWeight: "600" }}>Street Address</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="123 Gastronomy St" 
                      className="form-input" 
                      style={{ padding: "12px" }}
                      value={shippingInfo.address}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                    <div className="form-group">
                      <label style={{ fontSize: "13px", fontWeight: "600" }}>City</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="New York" 
                        className="form-input" 
                        style={{ padding: "12px" }}
                        value={shippingInfo.city}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label style={{ fontSize: "13px", fontWeight: "600" }}>Phone Number</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+1 (234) 567-8910" 
                        className="form-input" 
                        style={{ padding: "12px" }}
                        value={shippingInfo.phone}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <h3 style={{ fontSize: "18px", fontWeight: "700", borderBottom: "1px solid #eee", paddingBottom: "10px", marginTop: "10px" }}>Payment Method</h3>
                  <div style={{ display: "flex", gap: "20px" }}>
                    <label style={{ flex: 1, border: "1px solid var(--primary)", padding: "16px", borderRadius: "var(--radius-md)", display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", backgroundColor: "#fff" }}>
                      <input type="radio" name="payment" defaultChecked />
                      <CreditCard size={18} color="var(--primary)" />
                      <span style={{ fontSize: "14px", fontWeight: "600" }}>Cash on Delivery</span>
                    </label>
                    <label style={{ flex: 1, border: "1px solid #ddd", padding: "16px", borderRadius: "var(--radius-md)", display: "flex", alignItems: "center", gap: "10px", cursor: "not-allowed", opacity: 0.6 }}>
                      <input type="radio" name="payment" disabled />
                      <CreditCard size={18} />
                      <span style={{ fontSize: "14px", fontWeight: "600" }}>Credit Card (Coming Soon)</span>
                    </label>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Checkout Summary */}
            <div style={{ backgroundColor: "#fafafa", padding: "30px", borderRadius: "var(--radius-md)", height: "fit-content" }}>
              <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "20px" }}>Order Summary</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", borderBottom: "1px solid #eee", paddingBottom: "16px", marginBottom: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", color: "var(--gray)", fontSize: "14px" }}>
                  <span>Items Subtotal</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", color: "var(--gray)", fontSize: "14px" }}>
                  <span>Delivery Charge</span>
                  <span style={{ color: "var(--primary)", fontWeight: "600" }}>FREE</span>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "18px", fontWeight: "700", marginBottom: "24px" }}>
                <span>Total Amount</span>
                <span style={{ color: "var(--primary)" }}>${totalAmount.toFixed(2)}</span>
              </div>

              {checkoutStep === "cart" ? (
                <button 
                  className="drawer-checkout-btn" 
                  style={{ width: "100%", padding: "14px" }}
                  onClick={() => setCheckoutStep("checkout")}
                >
                  <span>Go to Checkout</span>
                  <ArrowRight size={16} />
                </button>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <button 
                    type="submit" 
                    form="checkout-form"
                    className="drawer-checkout-btn" 
                    style={{ width: "100%", padding: "14px" }}
                  >
                    <span>Place Order</span>
                    <ArrowRight size={16} />
                  </button>
                  <button 
                    type="button"
                    className="drawer-viewcart-btn" 
                    style={{ width: "100%", padding: "14px" }}
                    onClick={() => setCheckoutStep("cart")}
                  >
                    <span>Back to Cart</span>
                  </button>
                </div>
              )}

              <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center", marginTop: "20px", color: "var(--gray)", fontSize: "12px" }}>
                <ShieldCheck size={14} color="#4caf50" />
                <span>Secure SSL Checkout Guarantee</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
