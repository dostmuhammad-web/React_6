import React, { useState, useEffect } from "react";
import { ArrowRight, Clock } from "lucide-react";
import "./Banner.css";

function Banner({ onAddToCart = () => {} }) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 }; // reset loop for demo
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num) => String(num).padStart(2, "0");

  return (
    <section className="promo-banner-section" id="promotion">
      <div className="container promo-banner-container">
        
        {/* Left Side: Promotion Card */}
        <div className="promo-banner-card">
          <div className="card-badge">⚡ Deal of the Day</div>
          <h2 className="banner-title">
            Hot Delicious Noodle Dish
          </h2>
          <p className="banner-description">
            Savor our hand-pulled organic wheat noodles, simmered in a rich, 24-hour slow-cooked bone broth, topped with braised beef, soft-boiled farm egg, and fresh scallions.
          </p>

          {/* Countdown timer */}
          <div className="countdown-wrapper">
            <span className="countdown-label">
              <Clock size={16} className="clock-icon" />
              <span>Ends In:</span>
            </span>
            <div className="timer-slots">
              <div className="time-slot">
                <span className="time-num">{formatTime(timeLeft.hours)}</span>
                <span className="time-lbl">Hrs</span>
              </div>
              <span className="time-colon">:</span>
              <div className="time-slot">
                <span className="time-num">{formatTime(timeLeft.minutes)}</span>
                <span className="time-lbl">Mins</span>
              </div>
              <span className="time-colon">:</span>
              <div className="time-slot">
                <span className="time-num">{formatTime(timeLeft.seconds)}</span>
                <span className="time-lbl">Secs</span>
              </div>
            </div>
          </div>

          <div className="banner-pricing">
            <span className="promo-price">$9.99</span>
            <span className="promo-old-price">$18.90</span>
            <span className="promo-save-badge">Save 47%</span>
          </div>

          <button 
            type="button" 
            onClick={() => onAddToCart({
              id: 99,
              name: "Chef's Special Noodle Dish",
              price: 9.99,
              image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
              category: "Spaghetti"
            })}
            className="banner-cta-btn"
          >
            <span>Claim Discount</span>
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Right Side: Noodle bowl & Steam Animation */}
        <div className="noodle-image-container">
          <div className="steam-container">
            <span className="steam-line steam-1"></span>
            <span className="steam-line steam-2"></span>
            <span className="steam-line steam-3"></span>
          </div>
          <div className="noodle-glow-back"></div>
          
          <img 
            src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80" 
            alt="Gourmet Hot Ramen Noodles" 
            className="noodle-img"
          />

          <div className="banner-floating-tag">
            <span>Chef's Choice</span>
            <span className="stars-row">★★★★★</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Banner;
