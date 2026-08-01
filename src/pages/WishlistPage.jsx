import React from "react";
import { Link } from "react-router-dom";
import { Trash2, ShoppingCart, Heart } from "lucide-react";

function WishlistPage({ wishlistItems, onRemoveFromWishlist, onAddToCart }) {
  return (
    <div style={{ paddingTop: "100px", minHeight: "80vh" }}>
      <div className="container" style={{ padding: "40px 20px" }}>
        <h1 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "30px", display: "flex", alignItems: "center", gap: "10px" }}>
          <Heart fill="var(--secondary)" color="var(--secondary)" size={28} />
          <span>My Saved Wishlist</span>
        </h1>

        {wishlistItems.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 20px", color: "var(--gray)" }}>
            <span style={{ fontSize: "64px", display: "block", marginBottom: "20px" }}>❤️</span>
            <h2>Your Wishlist is Empty</h2>
            <p style={{ margin: "10px auto 24px auto", maxWidth: "300px" }}>Save fresh premium foods, organic ingredients or delicious spaghetti to order them easily!</p>
            <Link to="/products" className="empty-drawer-btn" style={{ display: "inline-flex", padding: "12px 24px" }}>
              <span>Browse Products</span>
            </Link>
          </div>
        ) : (
          <div className="products-grid">
            {wishlistItems.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-image-container">
                  <button 
                    className="wishlist-icon-btn wishlisted"
                    onClick={() => onRemoveFromWishlist(product.id)}
                    aria-label="Remove from Wishlist"
                  >
                    <Heart size={18} fill="var(--secondary)" color="var(--secondary)" />
                  </button>
                  <img src={product.image} alt={product.name} className="product-img" />
                </div>
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-footer" style={{ marginTop: "15px" }}>
                    <span className="current-price" style={{ fontSize: "18px" }}>${product.price.toFixed(2)}</span>
                    <button 
                      className="add-to-cart-btn" 
                      onClick={() => {
                        onAddToCart(product);
                        onRemoveFromWishlist(product.id);
                      }}
                      aria-label="Buy Now"
                    >
                      <ShoppingCart size={16} />
                      <span>Buy</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default WishlistPage;
