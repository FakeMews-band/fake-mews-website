import React from "react";
import "../style/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-logo">Fake Mews</h3>
        <p className="footer-slogan">Tribute to Muse — Passion. Energy. Light.</p>

        <div className="footer-links">
          <a href="#about">À propos</a>
          <a href="#shows">Concerts</a>
          <a href="#gallery">Galerie</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Fake Mews — Tribute to Muse. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
