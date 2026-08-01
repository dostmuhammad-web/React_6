import React from "react";
import Blog from "../components/Blog/Blog";

function BlogPage({ onReadMore }) {
  return (
    <div style={{ paddingTop: "80px" }}>
      <div className="container" style={{ padding: "40px 20px" }}>
        <h1 style={{ textAlign: "center", fontSize: "36px", fontWeight: "700", marginBottom: "8px" }}>Latest News & Insights</h1>
        <p style={{ textAlign: "center", color: "var(--gray)", maxWidth: "500px", margin: "0 auto 30px auto" }}>
          Read premium cooking tips, healthy recipe secrets, and guidebooks on espresso craft from our world-class professional chefs.
        </p>
      </div>
      <Blog onReadMore={onReadMore} />
    </div>
  );
}

export default BlogPage;
