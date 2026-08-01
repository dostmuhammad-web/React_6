import React from "react";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import "./Blog.css";

const blogData = [
  {
    id: 1,
    title: "10 Secret Ingredients for a Perfect Healthy Salad Bowl",
    category: "Healthy Recipes",
    date: "July 28, 2026",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    excerpt: "Discover the simple ingredients and secret dressings that will elevate your daily salad bowl from simple greens to a gourmet masterpiece."
  },
  {
    id: 2,
    title: "The Art of Stretching Dough: How to Make Authentic Pizza",
    category: "Cooking Tips",
    date: "July 24, 2026",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
    excerpt: "Struggling with tough pizza crust? Learn the secrets of fermentation and dough stretching techniques directly from professional Neapolitan chefs."
  },
  {
    id: 3,
    title: "Mastering the Espresso: A Guide to Perfect Latte Art",
    category: "Coffee Guide",
    date: "July 20, 2026",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=600&q=80",
    excerpt: "Create standard coffee house aesthetics in your own kitchen. Learn how to steam milk to microfoam texture and pour leaf patterns."
  }
];

function Blog({ onReadMore = () => {} }) {
  return (
    <section className="blog-section section-padding" id="blog">
      <div className="container">
        
        {/* Section Title */}
        <div className="section-title-wrapper">
          <span className="section-subtitle">Fresh Articles</span>
          <h2 className="section-title">Latest Blog & News</h2>
          <div className="title-divider"></div>
        </div>

        {/* Blog Cards Grid */}
        <div className="blog-grid">
          {blogData.map((post) => (
            <article className="blog-card" key={post.id}>
              {/* Blog Image */}
              <div className="blog-image-wrapper">
                <span className="blog-tag-badge">
                  <Tag size={12} className="tag-icon" />
                  <span>{post.category}</span>
                </span>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="blog-img" 
                />
              </div>

              {/* Blog Content */}
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">
                    <Calendar size={14} className="meta-icon" />
                    <span>{post.date}</span>
                  </span>
                </div>
                
                <h3 className="blog-card-title">
                  <a 
                    href={`#blog-${post.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onReadMore(post);
                    }}
                  >
                    {post.title}
                  </a>
                </h3>
                
                <p className="blog-excerpt">
                  {post.excerpt}
                </p>

                <button 
                  type="button"
                  onClick={() => onReadMore(post)} 
                  className="blog-read-more-btn"
                >
                  <span>Read More</span>
                  <ArrowRight size={16} className="read-more-arrow" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Blog;
