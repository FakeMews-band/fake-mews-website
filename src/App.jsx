import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Shows from "./components/Shows";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Shows />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
