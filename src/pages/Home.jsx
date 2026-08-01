import React from "react";
import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import Banner from "../components/Banner/Banner";
import Gallery from "../components/Gallery/Gallery";
import Testimonials from "../components/Testimonials/Testimonials";
import Blog from "../components/Blog/Blog";

function Home({ 
  onAddToCart, 
  wishlist, 
  onToggleWishlist, 
  activeTab, 
  setActiveTab, 
  searchQuery, 
  searchCategory, 
  onCategorySelect,
  showToast,
  onReadMore
}) {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <Categories 
        onCategorySelect={onCategorySelect} 
        activeCategory={activeTab} 
      />

      {/* Popular Products */}
      <Products 
        onAddToCart={onAddToCart} 
        wishlist={wishlist}
        onToggleWishlist={onToggleWishlist}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        searchCategory={searchCategory}
      />

      {/* Big Promotion */}
      <Banner onAddToCart={onAddToCart} />

      {/* Food Gallery */}
      <Gallery onShowToast={showToast} />

      {/* Testimonials */}
      <Testimonials />

      {/* Latest Blog */}
      <Blog onReadMore={onReadMore} />
    </>
  );
}

export default Home;
