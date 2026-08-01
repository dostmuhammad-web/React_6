import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  Search, 
  User, 
  Heart, 
  ShoppingBag, 
  Menu, 
  X, 
  ChevronDown
} from "lucide-react";
import "./Navbar.css";

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

function Navbar({ 
  cartCount = 2, 
  wishlistCount = 3, 
  cartTotal = 0,
  username = "",
  onOpenCart = () => {}, 
  onOpenWishlist = () => {}, 
  onOpenLogin = () => {},
  onSearch = () => {},
  onCategorySelect = () => {}
}) {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchInput, setSearchInput] = useState("");
  const [languageOpen, setLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("English");

  const navigate = useNavigate();
  const location = useLocation();

  const categories = [
    "All Categories",
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const selectCategory = (cat) => {
    setSelectedCategory(cat);
    setCategoryOpen(false);
    onCategorySelect(cat);
  };

  const handleNavCategoryClick = (category) => {
    onCategorySelect(category);
    // If not on Home page or Products page, redirect to products with category
    if (location.pathname !== "/" && location.pathname !== "/products") {
      navigate(`/products`);
    } else {
      const productsSection = document.getElementById("products");
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="navbar-wrapper">
      {/* Top Contact Bar */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-left">
            <span className="top-bar-item">
              <Phone size={14} className="bar-icon" />
              <span>+1 (234) 567-8910</span>
            </span>
            <span className="top-bar-item">
              <Mail size={14} className="bar-icon" />
              <span>support@foodzy.com</span>
            </span>
          </div>
          <div className="top-bar-center">
            <span className="announcement">⚡ Super Delicious Deals! Get 50% Off Spaghetti pull today.</span>
          </div>
          <div className="top-bar-right">
            <a href="#" onClick={(e) => { e.preventDefault(); alert("Follow us on Facebook!"); }} className="social-link"><Facebook size={14} /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); alert("Follow us on Twitter!"); }} className="social-link"><Twitter size={14} /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); alert("Follow us on Instagram!"); }} className="social-link"><Instagram size={14} /></a>
            <div className="language-selector-wrapper" style={{ position: 'relative' }}>
              <div className="language-selector" onClick={() => setLanguageOpen(!languageOpen)} style={{ cursor: 'pointer' }}>
                <span>{currentLanguage}</span>
                <ChevronDown size={12} />
              </div>
              {languageOpen && (
                <ul className="language-dropdown-list" style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  backgroundColor: 'var(--white)',
                  color: 'var(--dark)',
                  boxShadow: 'var(--shadow-md)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '8px 0',
                  zIndex: 100,
                  minWidth: '100px',
                  marginTop: '4px'
                }}>
                  {["English", "O'zbek", "Русский"].map((lang) => (
                    <li 
                      key={lang} 
                      onClick={() => {
                        setCurrentLanguage(lang);
                        setLanguageOpen(false);
                      }}
                      style={{
                        padding: '6px 16px',
                        cursor: 'pointer',
                        fontSize: '13px',
                        transition: 'var(--transition)'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                      {lang}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`main-nav ${isSticky ? "sticky" : ""}`}>
        <div className="container nav-container">
          {/* Logo */}
          <div className="logo-container">
            <Link to="/" className="logo-link">
              <span className="logo-icon">🍽️</span>
              <span className="logo-text">Foodzy</span>
            </Link>
          </div>

          {/* Search Box */}
          <div className="search-box-wrapper">
            <div className="category-dropdown-container">
              <button 
                type="button" 
                className="category-dropdown-btn"
                onClick={() => setCategoryOpen(!categoryOpen)}
              >
                <span>{selectedCategory}</span>
                <ChevronDown size={14} />
              </button>
              {categoryOpen && (
                <ul className="category-dropdown-list">
                  {categories.map((cat, idx) => (
                    <li key={idx} onClick={() => selectCategory(cat)}>
                      {cat}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="search-input-container">
              <input 
                type="text" 
                placeholder="Search premium food, organic vegetables..." 
                className="search-input"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    onSearch(searchInput, selectedCategory);
                    navigate("/products");
                  }
                }}
              />
              <button 
                type="button" 
                className="search-btn"
                onClick={() => {
                  onSearch(searchInput, selectedCategory);
                  navigate("/products");
                }}
              >
                <Search size={18} />
                <span>Search</span>
              </button>
            </div>
          </div>

          {/* Right Action Icons */}
          <div className="nav-actions">
            <button 
              type="button" 
              className="nav-action-item user-account" 
              title="Account"
              onClick={onOpenLogin}
            >
              <User size={20} />
              <div className="action-label" style={{ textAlign: "left" }}>
                <span className="action-sub">{username ? "Welcome" : "Hello, Sign In"}</span>
                <span className="action-main">{username || "My Account"}</span>
              </div>
            </button>
            
            <button 
              type="button" 
              className={`nav-action-item wishlist-btn ${location.pathname === "/wishlist" ? "active-icon" : ""}`} 
              title="Wishlist"
              onClick={() => navigate("/wishlist")}
            >
              <div className="icon-badge-wrapper">
                <Heart size={22} />
                {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
              </div>
              <span className="action-text">Wishlist</span>
            </button>

            <button 
              type="button" 
              className={`nav-action-item cart-btn ${location.pathname === "/cart" ? "active-icon" : ""}`} 
              title="Cart"
              onClick={() => navigate("/cart")}
            >
              <div className="icon-badge-wrapper">
                <ShoppingBag size={22} />
                {cartCount > 0 && <span className="badge secondary-badge">{cartCount}</span>}
              </div>
              <div className="action-label" style={{ textAlign: "left" }}>
                <span className="action-sub">My Cart</span>
                <span className="action-main">${cartTotal.toFixed(2)}</span>
              </div>
            </button>

            {/* Hamburger Toggle */}
            <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle Menu">
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Navigation Bar (Links) - White Background Row */}
        <div className="nav-links-row">
          <div className="container nav-links-container">
            <ul className="nav-links-list">
              <li className={`nav-link-item ${location.pathname === "/" ? "active" : ""}`}>
                <Link to="/">Home</Link>
              </li>
              <li className="nav-link-item dropdown">
                <a href="#category" onClick={(e) => e.preventDefault()}>Category <ChevronDown size={14} className="link-arrow" /></a>
                <ul className="sub-menu">
                  <li><a href="#category-spaghetti" onClick={(e) => { e.preventDefault(); handleNavCategoryClick("Spaghetti"); }}>Spaghetti</a></li>
                  <li><a href="#category-pizza" onClick={(e) => { e.preventDefault(); handleNavCategoryClick("Pizza"); }}>Pizza</a></li>
                  <li><a href="#category-burger" onClick={(e) => { e.preventDefault(); handleNavCategoryClick("Snacks"); }}>Burgers & Snacks</a></li>
                  <li><a href="#category-salad" onClick={(e) => { e.preventDefault(); handleNavCategoryClick("Salad"); }}>Salads & Bowls</a></li>
                  <li><a href="#category-dessert" onClick={(e) => { e.preventDefault(); handleNavCategoryClick("Dessert"); }}>Desserts & Cakes</a></li>
                  <li><a href="#category-coffee" onClick={(e) => { e.preventDefault(); handleNavCategoryClick("Coffee"); }}>Espresso & Coffee</a></li>
                </ul>
              </li>
              <li className={`nav-link-item ${location.pathname === "/products" ? "active" : ""}`}>
                <Link to="/products">Products</Link>
              </li>
              <li className="nav-link-item dropdown">
                <a href="#pages" onClick={(e) => e.preventDefault()}>Pages <ChevronDown size={14} className="link-arrow" /></a>
                <ul className="sub-menu">
                  <li><a href="#promotion" onClick={(e) => { e.preventDefault(); navigate("/"); setTimeout(() => document.getElementById("promotion")?.scrollIntoView({ behavior: "smooth" }), 100); }}>Promotion Deal</a></li>
                  <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); navigate("/"); setTimeout(() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" }), 100); }}>Testimonials</a></li>
                  <li><a href="#gallery" onClick={(e) => { e.preventDefault(); navigate("/"); setTimeout(() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" }), 100); }}>Food Gallery</a></li>
                  <li><a href="#faq" onClick={(e) => { e.preventDefault(); alert("FAQ content coming soon! Contact support for any queries."); }}>FAQ</a></li>
                </ul>
              </li>
              <li className={`nav-link-item ${location.pathname === "/blog" ? "active" : ""}`}>
                <Link to="/blog">Blog</Link>
              </li>
              <li className="nav-link-item">
                <a href="#footer" onClick={(e) => { e.preventDefault(); document.querySelector(".footer-section")?.scrollIntoView({ behavior: "smooth" }); }}>Contact</a>
              </li>
            </ul>
            <div className="nav-promo-text">
              <span>🔥 Free shipping on orders over <strong>$50</strong></span>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-drawer-header">
          <span className="logo-text">Foodzy</span>
          <button className="close-btn" onClick={toggleMobileMenu}><X size={24} /></button>
        </div>
        <div className="mobile-drawer-search">
          <div className="search-input-container">
            <input 
              type="text" 
              placeholder="Search..." 
              className="search-input"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSearch(searchInput, selectedCategory);
                  toggleMobileMenu();
                  navigate("/products");
                }
              }}
            />
            <button className="search-btn" onClick={() => {
              onSearch(searchInput, selectedCategory);
              toggleMobileMenu();
              navigate("/products");
            }}>
              <Search size={18} />
            </button>
          </div>
        </div>
        <ul className="mobile-nav-links">
          <li onClick={toggleMobileMenu}><Link to="/">Home</Link></li>
          <li onClick={toggleMobileMenu}><Link to="/products">Products</Link></li>
          <li onClick={toggleMobileMenu}><Link to="/blog">Blog</Link></li>
          <li onClick={() => { toggleMobileMenu(); navigate("/wishlist"); }}><a href="#wishlist">Wishlist</a></li>
          <li onClick={() => { toggleMobileMenu(); navigate("/cart"); }}><a href="#cart">Cart</a></li>
        </ul>
        <div className="mobile-drawer-info">
          <div className="info-item">
            <Phone size={16} />
            <span>+1 (234) 567-8910</span>
          </div>
          <div className="info-item">
            <Mail size={16} />
            <span>support@foodzy.com</span>
          </div>
        </div>
      </div>
      {mobileMenuOpen && <div className="drawer-overlay" onClick={toggleMobileMenu}></div>}
    </header>
  );
}

export default Navbar;
