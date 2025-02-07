import React, { useState } from 'react';
import '../assets/styles/Header.css';
import logo from '../assets/images/logo.png'; 
import { FaChevronDown } from 'react-icons/fa'; 

function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleProductsDropdown = () => {
    setIsProductsOpen(!isProductsOpen); 
  };

  return (
    <header className="header">
      <div className="header-top">
        <span>Sponsored by Rubii AI - Rubii: AI native fandom character UGC platform. Create your character.</span>
      </div>
      <div className="header-main">
        <div className="logo">
          <img src={logo} alt="Toolify.ai Logo" className="logo-image" />
          <span>Toolify.ai</span>
        </div>
        <nav className="nav">
          <ul>
            <li className="products-dropdown" onClick={toggleProductsDropdown}>
              <a href="/">Products <FaChevronDown className="dropdown-icon" /></a>
              {isProductsOpen && (
                <div className="dropdown-menu">
                  <a href="/new-ais">New AIs</a>
                  <a href="/most-saved-ais">Most Saved AIs</a>
                  <a href="/most-used-ais">Most Used AIs</a>
                  <a href="/ai-apps">AI Apps</a>
                  <a href="/discord-of-ai">Discord of AI</a>
                  <a href="/ai-chrome-extensions">AI Chrome Extensions</a>
                  <a href="/gpts">GPTs</a>
                </div>
              )}
            </li>
            <li><a href="/categories">Category Ranking</a></li>
            <li><a href="/models">All Models</a></li>
            <li><a href="/social">Social Listening</a></li>
            <li><a href="/submit">Submit & Advertise</a></li>
          </ul>
        </nav>
        <div className="header-right">
          <a href="/favourite" className="header-link">Favourite</a>
          <a href="/login" className="header-link">Login</a>
          <span className="language">EN</span>
        </div>
      </div>
    </header>
  );
}

export default Header;