import React from "react";
import { Star, Quote } from "lucide-react";
import "./Testimonials.css";

const testimonialsData = [
  {
    id: 1,
    name: "Sophia Martinez",
    role: "Gourmet Food Blogger",
    comment: "The Spaghetti cheese pull was out of this world! Every bite tasted like a high-end restaurant in Rome. Absolutely worth every single cent. Foodzy has completely changed how I order dinner.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Alex Thorne",
    role: "Professional Chef & Critic",
    comment: "I am incredibly critical about organic ingredients, but Foodzy exceeded my expectations. The cold pressed juices are fresh, and the lemons are vibrant. Delivery was exceptionally quick too.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Fitness Instructor",
    comment: "The healthy salad bowls are my absolute go-to after workouts! Super crispy vegetables, delicious home-made dressings, and satisfying portions. Best premium e-commerce food service available.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  }
];

function Testimonials() {
  return (
    <section className="testimonials-section section-padding" id="testimonials">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-title-wrapper">
          <span className="section-subtitle">Chef's Review</span>
          <h2 className="section-title">Customer Testimonials</h2>
          <div className="title-divider"></div>
        </div>

        {/* Testimonial Cards Layout */}
        <div className="testimonials-grid">
          {testimonialsData.map((item) => (
            <div className="testimonial-card" key={item.id}>
              <div className="card-top">
                <div className="quote-icon-box">
                  <Quote size={24} fill="rgba(255, 107, 0, 0.1)" color="var(--primary)" />
                </div>
                
                {/* 5 Star Rating */}
                <div className="rating-row">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#FFB800" color="#FFB800" />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className="testimonial-text">
                "{item.comment}"
              </p>

              {/* Customer Avatar & Bio */}
              <div className="customer-info-box">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="customer-avatar" 
                />
                <div className="customer-details">
                  <h4 className="customer-name">{item.name}</h4>
                  <span className="customer-role">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
