import React from "react";
import { 
  Send, 
  MapPin, 
  Phone, 
  Mail 
} from "lucide-react";
import "./Footer.css";

// Custom Social SVG Components to bypass old lucide-react library issues
const Facebook = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Twitter = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Instagram = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Youtube = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const Linkedin = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const instagramPhotos = [
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=150&q=80",
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=150&q=80",
  "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=150&q=80",
  "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&w=150&q=80",
  "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=150&q=80",
  "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=150&q=80"
];

function Footer({ onShowToast = () => {} }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onShowToast("📧 Thank you for subscribing to Foodzy Newsletter!");
    e.target.reset();
  };

  return (
    <footer className="footer-section">
      <div className="container footer-top-grid">
        
        {/* Column 1: About */}
        <div className="footer-col about-col">
          <div className="footer-logo">
            <span className="logo-icon">🍽️</span>
            <span className="logo-text">Foodzy</span>
          </div>
          <p className="about-text">
            Experience food delivery redesigned. We source fresh, organic, local ingredients 
            to bring you chef-crafted, restaurant-quality dishes right to your doorstep.
          </p>
          <ul className="contact-info-list">
            <li>
              <MapPin size={16} className="info-icon" />
              <span>456 Culinary Ave, Gastronomy City</span>
            </li>
            <li>
              <Phone size={16} className="info-icon" />
              <span>+1 (234) 567-8910</span>
            </li>
            <li>
              <Mail size={16} className="info-icon" />
              <span>order@foodzy.com</span>
            </li>
          </ul>
        </div>

        {/* Column 2: Useful Links */}
        <div className="footer-col links-col">
          <h3 className="footer-col-title">Useful Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById("promotion")?.scrollIntoView({ behavior: "smooth" }); }}>Promotion Deal</a></li>
            <li><a href="#products" onClick={(e) => { e.preventDefault(); document.getElementById("products")?.scrollIntoView({ behavior: "smooth" }); }}>Popular Shop</a></li>
            <li><a href="#gallery" onClick={(e) => { e.preventDefault(); document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" }); }}>Food Gallery</a></li>
            <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" }); }}>Customer Reviews</a></li>
            <li><a href="#blog" onClick={(e) => { e.preventDefault(); document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" }); }}>Latest Blog</a></li>
          </ul>
        </div>

        {/* Column 3: Categories */}
        <div className="footer-col links-col">
          <h3 className="footer-col-title">Categories</h3>
          <ul className="footer-links">
            <li><a href="#category-spaghetti" onClick={(e) => { e.preventDefault(); document.getElementById("products")?.scrollIntoView({ behavior: "smooth" }); }}>Italian Spaghetti</a></li>
            <li><a href="#category-pizza" onClick={(e) => { e.preventDefault(); document.getElementById("products")?.scrollIntoView({ behavior: "smooth" }); }}>Gourmet Pizza</a></li>
            <li><a href="#category-salad" onClick={(e) => { e.preventDefault(); document.getElementById("products")?.scrollIntoView({ behavior: "smooth" }); }}>Healthy Bowls</a></li>
            <li><a href="#category-dessert" onClick={(e) => { e.preventDefault(); document.getElementById("products")?.scrollIntoView({ behavior: "smooth" }); }}>Cakes & Desserts</a></li>
            <li><a href="#category-coffee" onClick={(e) => { e.preventDefault(); document.getElementById("products")?.scrollIntoView({ behavior: "smooth" }); }}>Fresh Brew Coffee</a></li>
            <li><a href="#category-smoothies" onClick={(e) => { e.preventDefault(); document.getElementById("products")?.scrollIntoView({ behavior: "smooth" }); }}>Organic Smoothies</a></li>
          </ul>
        </div>

        {/* Column 4: Newsletter & Instagram Gallery */}
        <div className="footer-col newsletter-insta-col">
          <h3 className="footer-col-title">Newsletter</h3>
          <p className="newsletter-text">Subscribe to receive exclusive deals and new recipes.</p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Your email address..." 
              required
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-btn" aria-label="Subscribe">
              <Send size={16} />
            </button>
          </form>

          <h3 className="footer-col-title insta-title">Instagram Gallery</h3>
          <div className="instagram-grid">
            {instagramPhotos.map((url, idx) => (
              <a href="#instagram" className="insta-item" key={idx} onClick={(e) => { e.preventDefault(); onShowToast("📸 Instafood coming soon!"); }}>
                <img src={url} alt={`Instagram food photo ${idx + 1}`} className="insta-img" />
                <div className="insta-overlay">
                  <span>📸</span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Footer Bottom copyright */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="copyright-text">
            &copy; 2026 Foodzy. Recreated with Pixel-Perfect accuracy. All Rights Reserved.
          </p>
          <div className="footer-social-icons">
            <a href="#facebook" onClick={(e) => { e.preventDefault(); alert("Follow us on Facebook!"); }} className="social-icon-btn"><Facebook size={16} /></a>
            <a href="#twitter" onClick={(e) => { e.preventDefault(); alert("Follow us on Twitter!"); }} className="social-icon-btn"><Twitter size={16} /></a>
            <a href="#instagram" onClick={(e) => { e.preventDefault(); alert("Follow us on Instagram!"); }} className="social-icon-btn"><Instagram size={16} /></a>
            <a href="#youtube" onClick={(e) => { e.preventDefault(); alert("Subscribe to our YouTube!"); }} className="social-icon-btn"><Youtube size={16} /></a>
            <a href="#linkedin" onClick={(e) => { e.preventDefault(); alert("Connect on LinkedIn!"); }} className="social-icon-btn"><Linkedin size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
