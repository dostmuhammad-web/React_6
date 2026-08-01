import { useState, useEffect } from "react";
import { Routes, Route, useSearchParams, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import { CartDrawer, WishlistDrawer, LoginModal, BlogModal } from "./components/Drawers/Drawers";
import { Check, X } from "lucide-react";
import "./App.css";

const allProducts = [
  {
    id: 1,
    name: "Organic Fresh Lemons",
    price: 4.99,
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    name: "Gourmet Chocolate Spread",
    price: 8.50,
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    name: "Organic Kiwi Fruit Slices",
    price: 6.20,
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1585059895524-72359e061381?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    name: "Cold Pressed Green Juice",
    price: 5.99,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 5,
    name: "Fresh Organic Vegetables Basket",
    price: 12.40,
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1566385278603-6058987838a6?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 6,
    name: "Fresh Premium Tropical Fruits",
    price: 15.00,
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 7,
    name: "Healthy Oatmeal Grain Snacks",
    price: 7.30,
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1567954970774-58d6aa69900f?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 8,
    name: "Pure Organic Honey Food",
    price: 11.20,
    category: "Organic Food",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 9,
    name: "Gourmet Spaghetti Carbonara",
    price: 14.99,
    category: "Spaghetti",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 10,
    name: "Neapolitan Margherita Pizza",
    price: 12.99,
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 11,
    name: "Red Velvet Cream Cake",
    price: 5.50,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 12,
    name: "Organic Italian Espresso",
    price: 3.50,
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 13,
    name: "Vibrant Healthy Salad Bowl",
    price: 8.99,
    category: "Salad",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 14,
    name: "Smooth Strawberry Smoothie",
    price: 6.50,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 99,
    name: "Chef's Special Noodle Dish",
    price: 9.99,
    category: "Spaghetti",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80"
  }
];

function App() {
  // Load initial state from LocalStorage or fallbacks
  const [cartItems, setCartItems] = useState(() => {
    const localData = localStorage.getItem("foodzy_cart");
    return localData ? JSON.parse(localData) : [
      {
        id: 1,
        name: "Organic Fresh Lemons",
        price: 4.99,
        quantity: 1,
        category: "Fruits",
        image: "https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: 2,
        name: "Gourmet Chocolate Spread",
        price: 8.50,
        quantity: 1,
        category: "Snacks",
        image: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=500&q=80"
      }
    ];
  });

  const [wishlist, setWishlist] = useState(() => {
    const localData = localStorage.getItem("foodzy_wishlist");
    return localData ? JSON.parse(localData) : [3, 5, 8];
  });

  const [username, setUsername] = useState(() => {
    return localStorage.getItem("foodzy_user") || "";
  });

  const [toasts, setToasts] = useState([]);
  
  // Interactions & Modal Visibility State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCategory, setSearchCategory] = useState("All Categories");
  const [activeTab, setActiveTab] = useState("All");

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Save states to LocalStorage on changes
  useEffect(() => {
    localStorage.setItem("foodzy_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("foodzy_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    if (username) {
      localStorage.setItem("foodzy_user", username);
    } else {
      localStorage.removeItem("foodzy_user");
    }
  }, [username]);

  // Synchronize category search parameter from URL (e.g. /?category=Pizza)
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      setActiveTab(cat);
      setSearchCategory(cat === "All Categories" ? "All Categories" : cat);
    }
  }, [searchParams]);

  // Scroll to top on routing changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const showToast = (message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);

    // Automatically remove after 3 seconds
    setTimeout(() => {
      removeToast(id);
    }, 3000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  // Cart operations
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        showToast(`🛒 Incremented "${product.name}" quantity in cart!`);
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      showToast(`🛒 Added "${product.name}" to your cart!`);
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id) => {
    const item = cartItems.find((p) => p.id === id);
    if (item) {
      setCartItems((prevItems) => prevItems.filter((p) => p.id !== id));
      showToast(`🗑️ Removed "${item.name}" from cart.`);
    }
  };

  const handleCheckout = () => {
    showToast("🎉 Order placed successfully! Thank you for choosing Foodzy.");
    setCartItems([]);
    setIsCartOpen(false);
  };

  // Wishlist operations
  const handleToggleWishlist = (product) => {
    const productId = typeof product === "object" && product !== null ? product.id : product;
    const fullProduct = allProducts.find((p) => p.id === productId) || product;

    setWishlist((prevWishlist) => {
      if (prevWishlist.includes(productId)) {
        showToast(`💔 Removed "${fullProduct.name || 'item'}" from your wishlist.`);
        return prevWishlist.filter((id) => id !== productId);
      } else {
        showToast(`❤️ Added "${fullProduct.name || 'item'}" to your wishlist!`);
        return [...prevWishlist, productId];
      }
    });
  };

  // Login handler
  const handleLoginSuccess = (name) => {
    setUsername(name);
    showToast(`🔑 Welcome back, ${name}! Successfully logged in.`);
  };

  // Category and search operations
  const handleCategorySelect = (category) => {
    setActiveTab(category);
    setSearchCategory(category === "All Categories" ? "All Categories" : category);
  };

  const handleSearch = (query, category) => {
    setSearchQuery(query);
    setSearchCategory(category);
    // Switch tab to All if a keyword is searched to show all matching products
    if (query.trim() !== "") {
      setActiveTab("All");
    }
  };

  const handleReadMoreBlog = (post) => {
    navigate(`/blog/${post.id}`);
  };

  // Computed state values
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const wishlistItems = allProducts.filter((p) => wishlist.includes(p.id));

  return (
    <div className="app-wrapper">
      {/* Toast Notification Container */}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div className="toast-item" key={toast.id}>
            <div className="toast-content">
              <Check size={16} className="toast-check-icon" />
              <span>{toast.message}</span>
            </div>
            <button
              className="toast-close-btn"
              onClick={() => removeToast(toast.id)}
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>

      {/* Main Navbar */}
      <Navbar 
        cartCount={cartCount} 
        wishlistCount={wishlist.length} 
        cartTotal={cartTotal}
        username={username}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
        onSearch={handleSearch}
        onCategorySelect={handleCategorySelect}
      />

      {/* Router Switchable Pages */}
      <main>
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                onAddToCart={handleAddToCart}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                searchQuery={searchQuery}
                searchCategory={searchCategory}
                onCategorySelect={handleCategorySelect}
                showToast={showToast}
                onReadMore={handleReadMoreBlog}
              />
            } 
          />
          <Route 
            path="/products" 
            element={
              <ProductsPage 
                onAddToCart={handleAddToCart}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                searchQuery={searchQuery}
                searchCategory={searchCategory}
              />
            } 
          />
          <Route 
            path="/cart" 
            element={
              <CartPage 
                cartItems={cartItems}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveItem}
                onCheckout={handleCheckout}
              />
            } 
          />
          <Route 
            path="/wishlist" 
            element={
              <WishlistPage 
                wishlistItems={wishlistItems}
                onRemoveFromWishlist={(id) => handleToggleWishlist({ id })}
                onAddToCart={handleAddToCart}
              />
            } 
          />
          <Route 
            path="/blog" 
            element={
              <BlogPage 
                onReadMore={handleReadMoreBlog}
              />
            } 
          />
          <Route 
            path="/blog/:id" 
            element={
              <BlogDetailPage />
            } 
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer onShowToast={showToast} />

      {/* Side Drawers & Modal Components */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
        onShopNow={() => {
          navigate("/products");
        }}
      />

      <WishlistDrawer 
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlistItems}
        onRemoveFromWishlist={(id) => handleToggleWishlist({ id })}
        onAddToCart={handleAddToCart}
        onShopNow={() => {
          navigate("/products");
        }}
      />

      <LoginModal 
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}

export default App;
