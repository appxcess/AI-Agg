import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./i18n";

function Header() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isRankingOpen, setIsRankingOpen] = useState(false);
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const toggleProductsDropdown = () => setIsProductsOpen(!isProductsOpen);
  const toggleRankingDropdown = () => setIsRankingOpen(!isRankingOpen);
  const toggleSubmitDropdown = () => setIsSubmitOpen(!isSubmitOpen);
  const toggleLanguageDropdown = () => setIsLanguageOpen(!isLanguageOpen);

  const handleSubmitClick = () => {
    navigate('/submit_advertise');
    setIsSubmitOpen(false);
  };

  const changeLanguage = (language, languageLabel) => {
    i18n.changeLanguage(language);
    setSelectedLanguage(languageLabel);
    setIsLanguageOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="bg-gray-900 text-white py-2 text-center text-sm">
        <span className="text-yellow-400">
          Sponsored by Rubii AI - Rubii: AI native fandom character UGC platform. Create your character.
        </span>
      </div>

      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Toolify.ai Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold text-gray-800">Toolify.ai</span>
        </div>

        <nav className="hidden md:flex space-x-6 mr-95">
           <div className="relative group">
                      <button
                        className="flex items-center text-gray-800 font-medium hover:text-blue-500"
                        onClick={toggleProductsDropdown}
                      >
                        {t("products")} <FaChevronDown className="ml-1 text-sm transition-transform duration-300" />
                      </button>
                      {isProductsOpen && (
                        <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg flex flex-col py-2">
                          <a href="/new-ais" className="px-4 py-2 hover:bg-gray-100">New AIs</a>
                          <a href="/most-saved-ais" className="px-4 py-2 hover:bg-gray-100">Most Saved AIs</a>
                          <a href="/most-used-ais" className="px-4 py-2 hover:bg-gray-100">Most Used AIs</a>
                          <a href="/ai-apps" className="px-4 py-2 hover:bg-gray-100">AI Apps</a>
                          <a href="/discord-of-ai" className="px-4 py-2 hover:bg-gray-100">Discord of AI</a>
                          <a href="/ai-chrome-extensions" className="px-4 py-2 hover:bg-gray-100">AI Chrome Extensions</a>
                          <a href="/gpts" className="px-4 py-2 hover:bg-gray-100">GPTs</a>
                        </div>
                      )}
                    </div>
                    <a href="/category" className="text-gray-800 font-medium hover:text-blue-500">{t("Category")}</a>
          
                    {/* Ranking Dropdown */}
                    <div className="relative group">
                      <button
                        className="flex items-center text-gray-800 font-medium hover:text-blue-500"
                        onClick={toggleRankingDropdown}
                      >
                        {t("Ranking")} <FaChevronDown className="ml-1 text-sm transition-transform duration-300" />
                      </button>
                      {isRankingOpen && (
                        <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg flex flex-col py-2">
                          <a href="/top-ai-monthly" className="px-4 py-2 hover:bg-gray-100">Top AI By Monthly</a>
                          <a href="/top-ai-categories" className="px-4 py-2 hover:bg-gray-100">Top AI By Categories</a>
                          <a href="/top-ai-regions" className="px-4 py-2 hover:bg-gray-100">Top AI By Regions</a>
                          <a href="/top-ai-source" className="px-4 py-2 hover:bg-gray-100">Top AI By Source</a>
                          <a href="/top-ai-revenue" className="px-4 py-2 hover:bg-gray-100">Top AI By Revenue</a>
                        </div>
                      )}
                    </div>
          
                    <a href="/models" className="text-gray-800 font-medium hover:text-blue-500">{t("allModels")}</a>
                    <a href="/social" className="text-gray-800 font-medium hover:text-blue-500">{t("socialListening")}</a>
          
          {/* Other nav items remain the same */}
          
          {/* Submit & Advertise Dropdown - Modified to use submit_advertise.jsx */}
          <div className="relative group">
            <button
              className="flex items-center text-gray-800 font-medium hover:text-blue-500"
              onClick={toggleSubmitDropdown}
            >
              {t("submitAdvertise")} <FaChevronDown className="ml-1 text-sm transition-transform duration-300" />
            </button>
            {isSubmitOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg flex flex-col py-2">
                <button onClick={handleSubmitClick} className="px-4 py-2 text-left hover:bg-gray-100">Submit</button>
                <Link to="/submit_advertise" className="px-4 py-2 hover:bg-gray-100">Advertise</Link>
                <Link to="/submit_advertise" className="px-4 py-2 hover:bg-gray-100">Guest Posts / Link Insert</Link>
                <Link to="/submit_advertise" className="px-4 py-2 hover:bg-gray-100">Update AI</Link>
                <Link to="/submit_advertise" className="px-4 py-2 hover:bg-gray-100">Submit GPT</Link>
                <Link to="/submit_advertise" className="px-4 py-2 hover:bg-gray-100">More Business</Link>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center space-x-6">
          <Link to="/favourite" className="text-gray-800 font-medium hover:text-blue-500">{t("favourite")}</Link>
          <Link to="/login" className="text-gray-800 font-medium hover:text-blue-500">{t("login")}</Link>

          <div className="relative">
            <button className="flex items-center font-medium text-gray-800 hover:text-blue-500" onClick={toggleLanguageDropdown}>
              {selectedLanguage} <FaChevronDown className="ml-1 text-sm transition-transform duration-300" />
            </button>
            {isLanguageOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg flex flex-col py-2">
                <button className="px-4 py-2 hover:bg-gray-100" onClick={() => changeLanguage("en", "EN")}>English</button>
                <button className="px-4 py-2 hover:bg-gray-100" onClick={() => changeLanguage("es", "ES")}>Español</button>
                <button className="px-4 py-2 hover:bg-gray-100" onClick={() => changeLanguage("fr", "FR")}>Français</button>
                <button className="px-4 py-2 hover:bg-gray-100" onClick={() => changeLanguage("de", "DE")}>Deutsch</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;