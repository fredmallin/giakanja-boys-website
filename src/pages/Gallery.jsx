import React from "react";
import "../App.css"; // Make sure path is correct

// Sample images (replace with your actual image paths in public/images)
const galleryImages = [
  "/images/classroom1.jpg",
  "/images/classroom2.jpg",
  "/images/sports.jpg",
  "/images/events.jpg",
  "/images/lab.jpg",
  "/images/library.jpg",
];

function Gallery() {
  return (
    <div className="page-container">
      <section className="gallery">
        <h1>Gallery</h1>
        <p>Explore moments from our school life, classrooms, events, and student activities.</p>
        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <div key={index} className="gallery-item">
              <img src={img} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Gallery;
