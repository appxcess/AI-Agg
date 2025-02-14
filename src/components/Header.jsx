import React, { useState } from "react";
import { 
  FaChevronDown, 
  FaStar, 
  FaBookmark, 
  FaChartLine, 
  FaMobile, 
  FaDiscord, 
  FaChrome, 
  FaCube,
  FaCalendar,
  FaLayerGroup,
  FaGlobe,
  FaDatabase,
  FaDollarSign,
  FaFileAlt,
  FaAd,
  FaLink,
  FaUserEdit,
  FaCubes,
  FaUsers
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./i18n";

function Header() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const productItems = [
    {
      icon: <FaStar className="text-purple-500 text-xl" />,
      title: "New AIs",
      description: "The Latest AIs, every day",
      path: "/new-ais"
    },
    {
      icon: <FaBookmark className="text-purple-500 text-xl" />,
      title: "Most Saved AIs",
      description: "AIs with the most favorites on Toolify",
      path: "/most-saved-ais"
    },
    {
      icon: <FaChartLine className="text-purple-500 text-xl" />,
      title: "Most Used AIs",
      description: "AIs with the highest website traffic (monthly visits)",
      path: "/most-used-ais"
    },
    {
      icon: <FaMobile className="text-purple-500 text-xl" />,
      title: "AI Apps",
      description: "AI Tools by Apps",
      path: "/ai-apps"
    },
    {
      icon: <FaDiscord className="text-purple-500 text-xl" />,
      title: "Discord of AI",
      description: "Discover the Discord of AI",
      path: "/discord-of-ai"
    },
    {
      icon: <FaChrome className="text-purple-500 text-xl" />,
      title: "AI Chrome Extensions",
      description: "AI Tools by browser extensions",
      path: "/ai-chrome-extensions"
    },
    {
      icon: <FaCube className="text-purple-500 text-xl" />,
      title: "GPTs",
      description: "GPTs from GPT Store",
      path: "/gpts"
    }
  ];

  const rankingItems = [
    {
      icon: <FaCalendar className="text-purple-500 text-xl" />,
      title: "Top AI By Monthly",
      description: "Top AI lists by month and monthly visits.",
      path: "/Ranking"
    },
    {
      icon: <FaLayerGroup className="text-purple-500 text-xl" />,
      title: "Top AI By Categories",
      description: "Top AI lists by category and monthly visits.",
      path: "/Rankings"
    },
    {
      icon: <FaGlobe className="text-purple-500 text-xl" />,
      title: "Top AI By Regions",
      description: "Top AI lists by region and monthly visits.",
      path: "/Ranking"
    },
    {
      icon: <FaDatabase className="text-purple-500 text-xl" />,
      title: "Top AI By Source",
      description: "Top AI lists by source and monthly visits.",
      path: "/Ranking"
    },
    {
      icon: <FaDollarSign className="text-purple-500 text-xl" />,
      title: "Top AI by Revenue",
      description: "Top AI lists by revenue and real traffic.",
      path: "/Ranking"
    }
  ];

  const submitItems = [
    {
      icon: <FaFileAlt className="text-purple-500 text-xl" />,
      title: "Submit",
      path: "/submit_advertise"
    },
    {
      icon: <FaAd className="text-purple-500 text-xl" />,
      title: "Advertise",
      path: "/submit_advertise"
    },
    {
      icon: <FaLink className="text-purple-500 text-xl" />,
      title: "Guest Posts / Link Insert",
      path: "/submit_advertise"
    },
    {
      icon: <FaUserEdit className="text-purple-500 text-xl" />,
      title: "Update AI",
      path: "/submit_advertise"
    },
    {
      icon: <FaCubes className="text-purple-500 text-xl" />,
      title: "Submit GPT",
      path: "/submit_advertise"
    },
    {
      icon: <FaUsers className="text-purple-500 text-xl" />,
      title: "More Business",
      path: "/submit_advertise"
    }
  ];

  const changeLanguage = (language, languageLabel) => {
    i18n.changeLanguage(language);
    setSelectedLanguage(languageLabel);
  };

  // Common classes for reuse
  const dropdownItemClasses = "flex items-start space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-150 cursor-pointer";
  const iconContainerClasses = "flex-shrink-0 w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center";
  const dropdownMenuClasses = "absolute left-0 mt-2 bg-white shadow-lg rounded-xl py-2 invisible group-hover:visible hover:visible transition-all duration-300";

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
          {/* Products Dropdown */}
          <div className="relative group">
            <button className="flex items-center text-gray-800 font-medium hover:text-blue-500">
              {t("products")} <FaChevronDown className="ml-1 text-sm transition-transform duration-300" />
            </button>
            <div className={`${dropdownMenuClasses} w-80`}>
              {productItems.map((item, index) => (
                <Link 
                  key={index}
                  to={item.path}
                  className={dropdownItemClasses}
                >
                  <div className={iconContainerClasses}>
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-900 font-medium">{item.title}</span>
                    <span className="text-gray-500 text-sm">{item.description}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link to="/category" className="text-gray-800 font-medium hover:text-blue-500">
            {t("Category")}
          </Link>

          {/* Ranking Dropdown */}
          <div className="relative group">
            <button className="flex items-center text-gray-800 font-medium hover:text-blue-500">
              {t("Ranking")} <FaChevronDown className="ml-1 text-sm transition-transform duration-300" />
            </button>
            <div className={`${dropdownMenuClasses} w-80`}>
              {rankingItems.map((item, index) => (
                <Link 
                  key={index}
                  to={item.path}
                  className={dropdownItemClasses}
                >
                  <div className={iconContainerClasses}>
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-900 font-medium">{item.title}</span>
                    <span className="text-gray-500 text-sm">{item.description}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link to="/All_models" className="text-gray-800 font-medium hover:text-blue-500">
            All Models
          </Link>

          <Link to="/SocialListening" className="text-gray-800 font-medium hover:text-blue-500 flex items-center">
            Social Listening
            <span className="ml-1 px-1.5 py-0.5 text-xs bg-red-500 text-white rounded">New</span>
          </Link>

          {/* Submit & Advertise Dropdown */}
          <div className="relative group">
            <button className="flex items-center text-gray-800 font-medium hover:text-blue-500">
              {t("submitAdvertise")} <FaChevronDown className="ml-1 text-sm transition-transform duration-300" />
            </button>
            <div className={`${dropdownMenuClasses} w-72`}>
              {submitItems.map((item, index) => (
                <Link 
                  key={index}
                  to={item.path}
                  className={dropdownItemClasses}
                >
                  <div className={iconContainerClasses}>
                    {item.icon}
                  </div>
                  <span className="text-gray-900 font-medium">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className="flex items-center space-x-6">
          <Link to="/favourite" className="text-gray-800 font-medium hover:text-blue-500">
            {t("favourite")}
          </Link>
          
          <Link to="/SignIn" className="text-gray-800 font-medium hover:text-blue-500">
            {t("login")}
          </Link>

          {/* Language Dropdown */}
          <div className="relative group">
            <button className="flex items-center font-medium text-gray-800 hover:text-blue-500">
              {selectedLanguage} <FaChevronDown className="ml-1 text-sm transition-transform duration-300" />
            </button>
            <div className={`${dropdownMenuClasses} right-0 w-40`}>
              <button 
                className="px-4 py-2 hover:bg-gray-100 text-left w-full"
                onClick={() => changeLanguage("en", "EN")}
              >
                English
              </button>
              <button 
                className="px-4 py-2 hover:bg-gray-100 text-left w-full"
                onClick={() => changeLanguage("es", "ES")}
              >
                Español
              </button>
              <button 
                className="px-4 py-2 hover:bg-gray-100 text-left w-full"
                onClick={() => changeLanguage("fr", "FR")}
              >
                Français
              </button>
              <button 
                className="px-4 py-2 hover:bg-gray-100 text-left w-full"
                onClick={() => changeLanguage("de", "DE")}
              >
                Deutsch
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;