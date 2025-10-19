import React, { useEffect, useRef } from "react";
import "../style/About.css";

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("visible");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="about">
      <h2 className="about-title">À propos du groupe</h2>
      <p className="about-desc">
        <strong>Fake Mews</strong> est un groupe tribute dédié à l’univers de
        <span className="muse-highlight"> Muse</span>.  
        Passionnés par leur énergie et leur créativité, nous reprenons leurs plus grands titres
        avec une mise en scène fidèle, des sonorités électrisantes et un jeu de lumière immersif.
      </p>

      <div className="about-members">
        <div className="member-card">
          <h3>Thomas</h3>
          <p>Chant/Clavier</p>
        </div>
        <div className="member-card">
          <h3>Alexandre</h3>
          <p>Guitare</p>
        </div>
        <div className="member-card">
          <h3>Isaac</h3>
          <p>Basse</p>
        </div>
        <div className="member-card">
          <h3>François</h3>
          <p>Batterie/Choeurs</p>
        </div>
      </div>
    </section>
  );
}
