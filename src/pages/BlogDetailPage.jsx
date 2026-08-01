import React from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";

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

function BlogDetailPage() {
  const { id } = useParams();
  const post = blogData.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="container" style={{ paddingTop: "140px", textAlign: "center", minHeight: "80vh" }}>
        <h2>Blog Post Not Found</h2>
        <Link to="/blog" className="empty-drawer-btn" style={{ marginTop: "20px" }}>Back to Blogs</Link>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: "120px", paddingBottom: "80px", minHeight: "80vh" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <Link to="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--gray)", marginBottom: "30px", fontWeight: "600" }}>
          <ArrowLeft size={16} />
          <span>Back to Articles</span>
        </Link>

        <div style={{ height: "400px", width: "100%", overflow: "hidden", borderRadius: "var(--radius-lg)", marginBottom: "30px" }}>
          <img src={post.image} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        <div style={{ display: "flex", gap: "20px", color: "var(--gray)", fontSize: "14px", marginBottom: "16px" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Calendar size={14} />
            <span>{post.date}</span>
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <User size={14} />
            <span>By Chef Gourmet</span>
          </span>
          <span style={{ fontWeight: "700", color: "var(--primary)" }}>{post.category}</span>
        </div>

        <h1 style={{ fontSize: "36px", fontWeight: "800", color: "var(--dark)", lineHeight: "1.3", marginBottom: "24px" }}>{post.title}</h1>

        <div style={{ fontSize: "16px", lineHeight: "1.8", color: "#444" }}>
          <p style={{ marginBottom: "20px", fontSize: "18px", fontWeight: "500", color: "#222" }}>{post.excerpt}</p>
          <p style={{ marginBottom: "20px" }}>
            Preparing gourmet recipes at home does not have to be intimidating. By understanding standard extraction, kneading, or mixing dynamics, anyone can unlock standard culinary excellence.
          </p>
          <blockquote style={{ borderLeft: "4px solid var(--primary)", paddingLeft: "20px", margin: "30px 0", fontStyle: "italic", color: "var(--dark)", fontWeight: "600", fontSize: "18px" }}>
            "Cooking is an art, but food safety and ingredient quality is a science. A dish is only as good as the passion and seasonal quality of the ingredients you select."
          </blockquote>
          <p style={{ marginBottom: "20px" }}>
            Take time to research local markets. Connect with organic producers, and ensure your pantry contains rich base ingredients: cold pressed oils, organic wheat, and fresh lemons. A dash of clean spices and fresh herbs transforms simple ingredients into standard gourmet dishes.
          </p>
          <p>
            Stay tuned for our weekly newsletter where we release exclusive recipes and extra guidance on plating aesthetics and restaurant management. Thank you for reading!
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogDetailPage;
