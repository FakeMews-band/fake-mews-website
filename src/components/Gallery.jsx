import React, { useEffect, useRef } from "react";
import "../style/Gallery.css";

export default function Gallery() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) section.classList.add("visible");
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Tu pourras remplacer ces images par les tiennes dans /public/images
  const images = [
    { src: "/images/fakemews1.jpg", alt: "Fake Mews en concert" },
    { src: "/images/fakemews2.jpg", alt: "Ambiance lumière rouge" },
    { src: "/images/fakemews3.jpg", alt: "Guitariste sur scène" },
    { src: "/images/fakemews4.jpg", alt: "Batteur live" },
    { src: "/images/fakemews5.jpg", alt: "Public en feu" },
    { src: "/images/fakemews6.jpg", alt: "Jeu de lumière Muse-style" },
  ];

  return (
    <section ref={sectionRef} className="gallery" id="gallery">
      <h2 className="gallery-title">Galerie</h2>
      <p className="gallery-subtitle">Un aperçu de nos concerts et répétitions</p>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
