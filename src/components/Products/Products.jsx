import React, { useState, useEffect } from "react";
import { Star, Heart, ShoppingCart } from "lucide-react";
import "./Products.css";

const productData = [
  {
    id: 1,
    name: "Organic Fresh Lemons",
    price: 4.99,
    oldPrice: 6.99,
    rating: 4.8,
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=500&q=80",
    badge: "15% OFF"
  },
  {
    id: 2,
    name: "Gourmet Chocolate Spread",
    price: 8.50,
    oldPrice: 9.99,
    rating: 4.9,
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=500&q=80",
    badge: "New"
  },
  {
    id: 3,
    name: "Organic Kiwi Fruit Slices",
    price: 6.20,
    oldPrice: 7.50,
    rating: 4.7,
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1585059895524-72359e061381?auto=format&fit=crop&w=500&q=80",
    badge: ""
  },
  {
    id: 4,
    name: "Cold Pressed Green Juice",
    price: 5.99,
    oldPrice: 7.99,
    rating: 4.6,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80",
    badge: "Hot"
  },
  {
    id: 5,
    name: "Fresh Organic Vegetables Basket",
    price: 12.40,
    oldPrice: 15.00,
    rating: 4.9,
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1566385278603-6058987838a6?auto=format&fit=crop&w=500&q=80",
    badge: "Best Seller"
  },
  {
    id: 6,
    name: "Fresh Premium Tropical Fruits",
    price: 15.00,
    oldPrice: 18.50,
    rating: 4.8,
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?auto=format&fit=crop&w=500&q=80",
    badge: ""
  },
  {
    id: 7,
    name: "Healthy Oatmeal Grain Snacks",
    price: 7.30,
    oldPrice: 8.99,
    rating: 4.5,
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1567954970774-58d6aa69900f?auto=format&fit=crop&w=500&q=80",
    badge: "Popular"
  },
  {
    id: 8,
    name: "Pure Organic Honey Food",
    price: 11.20,
    oldPrice: 13.99,
    rating: 4.9,
    category: "Organic Food",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=500&q=80",
    badge: "10% OFF"
  },
  {
    id: 9,
    name: "Gourmet Spaghetti Carbonara",
    price: 14.99,
    oldPrice: 19.99,
    rating: 4.9,
    category: "Spaghetti",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80",
    badge: "Chef Choice"
  },
  {
    id: 10,
    name: "Neapolitan Margherita Pizza",
    price: 12.99,
    oldPrice: 16.99,
    rating: 4.8,
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80",
    badge: "Hot"
  },
  {
    id: 11,
    name: "Red Velvet Cream Cake",
    price: 5.50,
    oldPrice: 7.99,
    rating: 4.9,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&w=500&q=80",
    badge: "50% OFF"
  },
  {
    id: 12,
    name: "Organic Italian Espresso",
    price: 3.50,
    oldPrice: 4.50,
    rating: 4.7,
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80",
    badge: "Fresh"
  },
  {
    id: 13,
    name: "Vibrant Healthy Salad Bowl",
    price: 8.99,
    oldPrice: 10.99,
    rating: 4.8,
    category: "Salad",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80",
    badge: "Healthy"
  },
  {
    id: 14,
    name: "Smooth Strawberry Smoothie",
    price: 6.50,
    oldPrice: 7.90,
    rating: 4.6,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=500&q=80",
    badge: "Fresh"
  }
];

function Products({ 
  onAddToCart = () => {}, 
  wishlist = [], 
  onToggleWishlist = () => {},
  activeTab = "All",
  setActiveTab = () => {},
  searchQuery = "",
  searchCategory = "All Categories"
}) {
  const tabs = [
    "All", 
    "Spaghetti", 
    "Pizza", 
    "Dessert", 
    "Salad", 
    "Beverages", 
    "Coffee", 
    "Fruits", 
    "Vegetables", 
    "Snacks", 
    "Organic Food"
  ];

  // Perform filtering logic
  const filteredProducts = productData.filter((product) => {
    // 1. Category Tab Filter
    const matchesTab = activeTab === "All" || product.category.toLowerCase() === activeTab.toLowerCase();
    
    // 2. Search Box Category Filter
    const matchesSearchCategory = searchCategory === "All Categories" || product.category.toLowerCase() === searchCategory.toLowerCase();

    // 3. Search Box Text Filter
    const matchesSearchQuery = searchQuery.trim() === "" || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearchCategory && matchesSearchQuery;
  });

  return (
    <section className="products-section section-padding" id="products">
      <div className="container">
        
        {/* Section Title */}
        <div className="section-title-wrapper">
          <span className="section-subtitle">Foodzy Market</span>
          <h2 className="section-title">Popular Products</h2>
          <div className="title-divider"></div>
        </div>

        {/* Tab Filters */}
        <div className="products-tabs" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px" }}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab-btn ${activeTab.toLowerCase() === tab.toLowerCase() ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
              style={{ marginBottom: "8px" }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Responsive Grid */}
        {filteredProducts.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 20px", color: "var(--gray)" }}>
            <span style={{ fontSize: "40px", display: "block", marginBottom: "16px" }}>🔍</span>
            <h3>No Products Found</h3>
            <p style={{ fontSize: "14px", marginTop: "4px" }}>Try searching for a different keyword or reset filters.</p>
            <button 
              onClick={() => {
                setActiveTab("All");
                // We would ideally reset search query in parent, but this is a nice fallback
              }} 
              style={{ 
                marginTop: "16px", 
                backgroundColor: "var(--primary)", 
                color: "var(--white)", 
                padding: "8px 18px", 
                borderRadius: "var(--radius-sm)",
                fontWeight: "600",
                fontSize: "13px"
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="products-grid">
            {filteredProducts.map((product) => {
              const isWishlisted = wishlist.includes(product.id);
              return (
                <div className="product-card" key={product.id}>
                  {/* Image Container */}
                  <div className="product-image-container">
                    {product.badge && (
                      <span className={`product-badge ${product.badge.includes('OFF') ? 'badge-orange' : 'badge-dark'}`}>
                        {product.badge}
                      </span>
                    )}
                    <button 
                      className={`wishlist-icon-btn ${isWishlisted ? "wishlisted" : ""}`}
                      onClick={() => onToggleWishlist(product)}
                      aria-label="Add to Wishlist"
                    >
                      <Heart size={18} fill={isWishlisted ? "var(--secondary)" : "transparent"} color={isWishlisted ? "var(--secondary)" : "currentColor"} />
                    </button>
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="product-img" 
                    />
                  </div>

                  {/* Info Container */}
                  <div className="product-info">
                    <span className="product-category">{product.category}</span>
                    <h3 className="product-name">{product.name}</h3>
                    
                    {/* Rating */}
                    <div className="product-rating">
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            fill={i < Math.floor(product.rating) ? "#FFB800" : "transparent"} 
                            color="#FFB800" 
                          />
                        ))}
                      </div>
                      <span className="rating-val">{product.rating}</span>
                    </div>

                    {/* Pricing and Action */}
                    <div className="product-footer">
                      <div className="product-price-box">
                        <span className="current-price">${product.price.toFixed(2)}</span>
                        {product.oldPrice && (
                          <span className="old-price">${product.oldPrice.toFixed(2)}</span>
                        )}
                      </div>
                      
                      <button 
                        className="add-to-cart-btn" 
                        onClick={() => onAddToCart(product)}
                        aria-label="Add to Cart"
                      >
                        <ShoppingCart size={16} />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}

export default Products;
