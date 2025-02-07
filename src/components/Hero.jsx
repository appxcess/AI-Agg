import React from 'react';
import { FaClock, FaStar, FaFire, FaCalendar } from 'react-icons/fa'; // Import icons
import '../assets/styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover The Best AI Websites & Tools</h1>
        <p>
          23568 AIs and 233 categories in the best AI tools directory. AI tools list & GPTs store are updated daily by ChatGPT.
        </p>
        <div className="hero-sponsored">
          <span>Sponsored by Rubii AI</span>
        </div>
        <div className="hero-search">
          <input type="text" placeholder="Search by AI, e.g. Video Translation AI Tool" />
          <button className="btn-primary">Search</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;