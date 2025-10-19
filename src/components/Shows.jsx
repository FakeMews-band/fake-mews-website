import React, { useEffect, useRef } from "react";
import "../style/Shows.css";

export default function Shows() {
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

  const shows = [
    {
      date: "22 novembre 2025",
      lieu: "Le Trianon, Paris",
      description: "Soirée Tribute Rock — avec Fake Mews + invités",
    },
    {
      date: "14 décembre 2025",
      lieu: "Le Bikini, Toulouse",
      description: "Concert live complet — sons et lumières inspirés de Muse",
    },
    {
      date: "18 janvier 2026",
      lieu: "La Laiterie, Strasbourg",
      description: "Fake Mews en tournée — ouverture par groupe local",
    },
  ];

  return (
    <section ref={sectionRef} className="shows" id="shows">
      <h2 className="shows-title">Prochains concerts</h2>
      <p className="shows-subtitle">Retrouvez-nous sur scène à travers la France 🇫🇷</p>

      <div className="shows-container">
        {shows.map((show, index) => (
          <div className="show-card" key={index}>
            <div className="show-date">{show.date}</div>
            <div className="show-lieu">{show.lieu}</div>
            <p className="show-desc">{show.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
