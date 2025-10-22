import React, { useEffect, useRef, useState } from "react";
import "../style/Contact.css";

import emailjs from "emailjs-com";


export default function Contact() {
  const sectionRef = useRef(null);
  const [sent, setSent] = useState(false);

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

const handleSubmit = (e) => {
  e.preventDefault();

  const form = e.target;

  emailjs
    .sendForm(
      "service_1xapzkv",    // Service ID
      "template_77em1w5",   // Template ID
      form,
      "F9Z3f1otxAJLKNck9"      // Clé publique
    )
    .then(() => {
      setSent(true);
      form.reset();
      setTimeout(() => setSent(false), 4000);
    })
    .catch((error) => {
      console.error("Erreur EmailJS :", error);
      alert("Une erreur est survenue. Réessayez plus tard !");
    });
};


  return (
    <section ref={sectionRef} className="contact" id="contact">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-subtitle">
        Pour toute demande de concert, collaboration ou information, contactez-nous.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          required
          className="contact-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Votre e-mail"
          required
          className="contact-input"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Votre message"
          required
          className="contact-textarea"
        ></textarea>
        <button type="submit" className="contact-button">Envoyer</button>
      </form>

      {sent && <p className="contact-success">✅ Message envoyé avec succès !</p>}
    </section>
  );
}
