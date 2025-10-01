import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";  
import "../App.css";

function Hero({ images, title, subtitle, height = "100vh", buttonText, buttonLink }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="hero-section zoom-effect"
      style={{
        backgroundImage: `url(${images[current]})`,
        height: height,
      }}
    >
      <div className="hero-overlay">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {buttonText && buttonLink && (
          <Link to={buttonLink} className="hero-btn">
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
}

export default Hero;
