import React from "react";
import { ArrowRight, Star } from "lucide-react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="home">
      {/* Decorative Paint Strokes in Corners */}
      <div className="paint-stroke top-left-stroke"></div>
      <div className="paint-stroke bottom-right-stroke"></div>

      <div className="container hero-container">
        {/* Left Side: Content */}
        <div className="hero-content">
          <span className="hero-subtitle">
            <span className="subtitle-line"></span>
            Super Delicious
          </span>
          <h1 className="hero-title">
            THE BEST WAY TO<br />
            <span className="highlight-text">STUFF YOUR</span><br />
            WALLET.
          </h1>
          <p className="hero-description">
            Experience the culinary art of gourmet food delivered straight to your door. 
            Crafted by world-class chefs, our dishes combine fresh, organic ingredients 
            with rich flavors that respect your tastebuds and your wallet.
          </p>

          <div className="hero-cta-wrapper">
            <a href="#products" className="hero-btn">
              <span>Order Now</span>
              <ArrowRight size={18} />
            </a>
            <div className="hero-rating">
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--primary)" color="var(--primary)" />
                ))}
              </div>
              <span className="rating-text">4.9/5 (12.5k+ Reviews)</span>
            </div>
          </div>

          {/* Large Circular 50% OFF Badge */}
          <div className="off-badge-floating pulse-animation">
            <span className="badge-percent">50%</span>
            <span className="badge-text">OFF</span>
          </div>
        </div>

        {/* Right Side: High Quality Spaghetti Image & Props */}
        <div className="hero-image-container">
          {/* Main Spaghetti Image Wrapper */}
          <div className="spaghetti-wrapper float-animation">
            {/* Background glowing circle */}
            <div className="glow-effect"></div>
            
            {/* The Main Plate */}
            <img 
              src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80" 
              alt="Gourmet Spaghetti Pasta with Tomato and Cheese pull" 
              className="spaghetti-img"
            />
            
            {/* Fork with pasta (Cheese pull effect simulation) */}
            <div className="fork-cheese-pull">
              <img 
                src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400&q=80" 
                alt="Fork lifting cheese stretching spaghetti pasta" 
                className="fork-img"
              />
            </div>
          </div>

          {/* Floating Fresh Basil Leaves */}
          <div className="basil-leaf leaf-1 float-leaves-animation">
            <img src="https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&w=150&q=80" alt="Basil leaf" />
          </div>
          <div className="basil-leaf leaf-2 float-leaves-animation" style={{ animationDelay: '1.5s' }}>
            <img src="https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&w=150&q=80" alt="Basil leaf" />
          </div>
          <div className="basil-leaf leaf-3 float-leaves-animation" style={{ animationDelay: '3s' }}>
            <img src="https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&w=150&q=80" alt="Basil leaf" />
          </div>

          {/* Extra food decoration (e.g. cherry tomato or cheese block) */}
          <div className="floating-ingredient tomato-float">
            <span>🍅</span>
          </div>
          <div className="floating-ingredient cheese-float">
            <span>🧀</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
