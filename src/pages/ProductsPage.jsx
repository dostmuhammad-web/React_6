import React from "react";
import Products from "../components/Products/Products";

function ProductsPage({ 
  onAddToCart, 
  wishlist, 
  onToggleWishlist, 
  activeTab, 
  setActiveTab, 
  searchQuery, 
  searchCategory 
}) {
  return (
    <div style={{ paddingTop: "80px" }}>
      <div className="container" style={{ padding: "40px 20px" }}>
        <h1 style={{ textAlign: "center", fontSize: "36px", fontWeight: "700", marginBottom: "8px" }}>Shop All Products</h1>
        <p style={{ textAlign: "center", color: "var(--gray)", maxWidth: "500px", margin: "0 auto 30px auto" }}>
          Browse our extensive catalog of local organic farm products, fresh fruits, vegetables, and chef-made hot spaghetti and pizzas.
        </p>
      </div>
      <Products 
        onAddToCart={onAddToCart} 
        wishlist={wishlist}
        onToggleWishlist={onToggleWishlist}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        searchCategory={searchCategory}
      />
    </div>
  );
}

export default ProductsPage;
