import React from "react";
import "../style/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1 className="hero-title">Fake Mews</h1>
        <p className="hero-subtitle">A Tribute to Muse</p>
        <a href="#shows" className="hero-btn">Voir les concerts</a>
      </div>
    </section>
  );
}