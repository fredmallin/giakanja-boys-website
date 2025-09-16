import React, { useState, useEffect } from "react";
import "../App.css";

function Hero({ images, title, subtitle, height = "100vh", buttonText, buttonLink }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5s
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
          <a href={buttonLink} className="hero-btn">
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}

export default Hero;
