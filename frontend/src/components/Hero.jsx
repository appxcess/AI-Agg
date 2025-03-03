import React, { useState, useEffect, useCallback } from 'react';
import { Search } from "lucide-react";
import { FaStar, FaFire } from "react-icons/fa";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [searchTimeout, setSearchTimeout] = useState(null);

  // Custom debounced search function
  const performSearch = useCallback(async (query) => {
    if (query.length < 2) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      });

      if (!response.ok) throw new Error('Search failed');
      
      const data = await response.json();
      setSearchResults(data);
      setShowResults(true);
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Clear previous timeout
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    if (query.length >= 2) {
      // Set new timeout
      const timeoutId = setTimeout(() => {
        performSearch(query);
      }, 300);
      setSearchTimeout(timeoutId);
    } else {
      setShowResults(false);
      setSearchResults([]);
    }
  };

  // Handle click outside to close results
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.search-container')) {
        setShowResults(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      // Clear any existing timeout on cleanup
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }
    };
  }, [searchTimeout]);

  return (
    <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-2 text-center relative">
      <div className="max-w-3xl mx-auto px-6">
        <section className="py-20 text-center flex items-end">
          <div className="max-w-3xl mx-auto px-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Discover The Best AI Websites & Tools
            </h1>
          </div>
        </section>
        
        <p className="text-gray-600 text-lg mb-2">
          23,568 AIs and 233 categories in the best AI tools directory. AI tools list & GPTs store are updated daily by ChatGPT.
        </p>

        <div className="text-sm text-gray-600 mb-4">
          Sponsored by <span className="text-blue-500 font-semibold">Rubii AI</span>
        </div>

        <div className="relative search-container">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search by AI, e.g. Video Translation AI Tool"
                className="px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {isLoading && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500" />
                </div>
              )}
            </div>
            <button className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition flex items-center gap-2">
              <Search size={20} />
              Search
            </button>
          </div>

          {/* Search Results Dropdown */}
          {showResults && searchResults.length > 0 && (
            <div className="absolute z-50 w-full md:w-96 max-h-96 overflow-y-auto bg-white rounded-md shadow-lg border border-gray-200 mt-1 left-1/2 transform -translate-x-1/2">
              {searchResults.map((tool) => (
                <div
                  key={tool._id}
                  className="p-4 hover:bg-gray-50 border-b border-gray-100 cursor-pointer text-left"
                >
                  <h3 className="font-semibold text-gray-800">{tool.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{tool.description}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      {tool.rating || '4.5'}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaFire className="text-red-400" />
                      {tool.usageCount || '1.2k'} uses
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;