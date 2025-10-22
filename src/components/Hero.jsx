import React, { useEffect, useState } from "react";
import "../style/Hero.css";

import Background from "./Background.jsx";

export default function Hero() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200); 
  }, []);

  return (
    <section className={`hero ${visible ? "visible" : ""}`} id="hero">
      <Background />
      <div className="hero-content">
        <h1 className="hero-title">Fake Mews</h1>
        <p className="hero-subtitle">A Tribute to Muse</p>
        <a href="#shows" className="hero-btn">Voir les concerts</a>
      </div>
    </section>
  );
}