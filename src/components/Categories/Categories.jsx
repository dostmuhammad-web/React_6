import React from "react";
import { 
  Flame, 
  Pizza, 
  Utensils, 
  Cake, 
  Coffee, 
  Salad, 
  GlassWater, 
  ArrowRight 
} from "lucide-react";
import "./Categories.css";

function Categories({ onCategorySelect = () => {}, activeCategory = "" }) {
  const categoryList = [
    { name: "Super Spaghetti", count: "35 Items", icon: <Utensils size={20} /> },
    { name: "Gourmet Pizza", count: "42 Items", icon: <Pizza size={20} /> },
    { name: "Healthy Salad Bowls", count: "28 Items", icon: <Salad size={20} /> },
    { name: "Premium Cakes & Dessert", count: "19 Items", icon: <Cake size={20} /> },
    { name: "Espresso & Coffee", count: "25 Items", icon: <Coffee size={20} /> },
    { name: "Organic Smoothies", count: "14 Items", icon: <GlassWater size={20} /> },
    { name: "Chef Specials", count: "12 Items", icon: <Flame size={20} /> }
  ];

  const getCategoryValue = (name) => {
    if (name.includes("Spaghetti")) return "Spaghetti";
    if (name.includes("Pizza")) return "Pizza";
    if (name.includes("Salad")) return "Salad";
    if (name.includes("Cake") || name.includes("Dessert")) return "Dessert";
    if (name.includes("Coffee")) return "Coffee";
    if (name.includes("Smoothies")) return "Beverages";
    if (name.includes("Specials")) return "Organic Food";
    return "All";
  };

  return (
    <section className="categories-section section-padding" id="category">
      <div className="container categories-container">
        
        {/* Left Side: Vertical Categories Panel */}
        <div className="categories-sidebar">
          <div className="sidebar-header">
            <h3>Explore Categories</h3>
            <span className="sidebar-sub">Fresh foods for you</span>
          </div>
          <div className="sidebar-list">
            {categoryList.map((cat, idx) => {
              const catValue = getCategoryValue(cat.name);
              const isActive = activeCategory.toLowerCase() === catValue.toLowerCase();
              return (
                <div 
                  key={idx} 
                  className={`category-item-card ${isActive ? "active" : ""}`}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    onCategorySelect(catValue);
                    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <div className="item-icon-wrapper">
                    {cat.icon}
                  </div>
                  <div className="item-details">
                    <span className="item-name">{cat.name}</span>
                    <span className="item-count">{cat.count}</span>
                  </div>
                  <ArrowRight size={16} className="item-arrow" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Large Promotional Cards */}
        <div className="categories-promos">
          {/* Promo Card 1: Velvet Cake */}
          <div className="promo-card cake-promo">
            <div className="promo-badge tag-red">50% OFF</div>
            <div className="promo-content">
              <span className="promo-subtitle">Sweet Indulgence</span>
              <h2 className="promo-title">Red Velvet Cake</h2>
              <p className="promo-desc">Freshly baked rich cream cheese frost velvet cake.</p>
              <button 
                onClick={() => {
                  onCategorySelect("Dessert");
                  document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
                }} 
                className="promo-btn btn-orange"
              >
                <span>Shop Dessert</span>
                <ArrowRight size={16} />
              </button>
            </div>
            <div className="promo-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&w=600&q=80" 
                alt="Gourmet Red Velvet Cake with Cream Cheese Frosting" 
                className="promo-img zoom-img"
              />
            </div>
          </div>

          {/* Promo Card 2: Espresso Machine */}
          <div className="promo-card coffee-promo">
            <div className="promo-badge tag-dark">40% OFF</div>
            <div className="promo-content">
              <span className="promo-subtitle">Morning Freshness</span>
              <h2 className="promo-title">Espresso Coffee</h2>
              <p className="promo-desc">Experience Italian authentic roast coffee extraction.</p>
              <button 
                onClick={() => {
                  onCategorySelect("Coffee");
                  document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
                }} 
                className="promo-btn btn-dark"
              >
                <span>Brew Now</span>
                <ArrowRight size={16} />
              </button>
            </div>
            <div className="promo-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80" 
                alt="Espresso Coffee Machine Pouring Latte Macchiato" 
                className="promo-img zoom-img"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Categories;
