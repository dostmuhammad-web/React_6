import React, { useState } from "react";
import { Plus, Heart, Eye } from "lucide-react";
import "./Gallery.css";

const galleryData = [
  {
    id: 1,
    title: "Gourmet Neapolitan Pizza",
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Crispy Golden French Fries",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Vibrant Healthy Salad Bowl",
    category: "Salad",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Rigatoni Cherry Tomato Pasta",
    category: "Pasta",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=600&q=80"
  }
];

function Gallery({ onShowToast = () => {} }) {
  const [activePhoto, setActivePhoto] = useState(null);
  const [likedPhotos, setLikedPhotos] = useState([]);

  const openLightbox = (photo) => {
    setActivePhoto(photo);
  };

  const closeLightbox = () => {
    setActivePhoto(null);
  };

  const toggleLike = (id, title, e) => {
    e.stopPropagation(); // prevent opening lightbox
    if (likedPhotos.includes(id)) {
      setLikedPhotos(likedPhotos.filter(item => item !== id));
    } else {
      setLikedPhotos([...likedPhotos, id]);
      onShowToast(`❤️ Liked "${title}" photo!`);
    }
  };

  return (
    <section className="gallery-section section-padding" id="gallery">
      <div className="container">
        
        {/* Section Title */}
        <div className="section-title-wrapper">
          <span className="section-subtitle">Visual Feast</span>
          <h2 className="section-title">Foodzy Gallery</h2>
          <div className="title-divider"></div>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {galleryData.map((item) => (
            <div 
              key={item.id} 
              className="gallery-item"
              onClick={() => openLightbox(item)}
            >
              <div className="gallery-image-wrapper">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="gallery-img"
                />
                
                {/* Hover Overlay */}
                <div className="gallery-overlay">
                  <div className="overlay-icons">
                    <button 
                      type="button"
                      className="overlay-icon-btn" 
                      title="View Image"
                      onClick={(e) => {
                        e.stopPropagation();
                        openLightbox(item);
                      }}
                    >
                      <Eye size={20} />
                    </button>
                    <button 
                      type="button"
                      className={`overlay-icon-btn ${likedPhotos.includes(item.id) ? "liked" : ""}`} 
                      title="Like"
                      onClick={(e) => toggleLike(item.id, item.title, e)}
                    >
                      <Heart 
                        size={20} 
                        fill={likedPhotos.includes(item.id) ? "var(--secondary)" : "transparent"} 
                        color={likedPhotos.includes(item.id) ? "var(--secondary)" : "currentColor"} 
                      />
                    </button>
                  </div>
                  <div className="overlay-content">
                    <span className="gallery-item-cat">{item.category}</span>
                    <h4 className="gallery-item-title">{item.title}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activePhoto && (
          <div className="lightbox-modal" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
              <img 
                src={activePhoto.image} 
                alt={activePhoto.title} 
                className="lightbox-img" 
              />
              <div className="lightbox-caption">
                <span className="caption-cat">{activePhoto.category}</span>
                <h3 className="caption-title">{activePhoto.title}</h3>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default Gallery;
