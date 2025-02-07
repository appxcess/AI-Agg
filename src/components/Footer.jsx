import React from 'react';
import '../assets/styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 AI-Aggregator. All rights reserved.</p>
        <div className="social-links">
          <a href="/">Twitter</a>
          <a href="/">LinkedIn</a>
          <a href="/">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;