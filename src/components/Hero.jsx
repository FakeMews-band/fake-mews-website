import React, { useEffect, useState } from "react";
import "../style/Hero.css";

export default function Hero() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200); // petit délai pour un effet smooth
  }, []);

  return (
    <section className={`hero ${visible ? "visible" : ""}`} id="hero">
      <div className="hero-content">
        <h1 className="hero-title">Fake Mews</h1>
        <p className="hero-subtitle">A Tribute to Muse</p>
        <a href="#shows" className="hero-btn">Voir les concerts</a>
      </div>
    </section>
  );
}