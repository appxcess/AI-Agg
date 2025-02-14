import React, { useState } from 'react';
import { Search, Download, History } from 'lucide-react';

const SocialListen = () => {
  const [searchDomain, setSearchDomain] = useState('');
  const [sortBy, setSortBy] = useState('Most Viewed');

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            AI Website Social Media Listening <span className="text-2xl">✨</span>
          </h1>
          <p className="text-gray-800 mb-2">
            Find YouTube and TikTok videos that mention competitor websites.
          </p>
          <p className="text-gray-600">
            Enter the AI Website you want to know about, and you will receive a list of Social Media for that AI Website.
          </p>
        </div>

        {/* Search Section */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex gap-2">
            <div className="flex-1 flex items-center bg-white rounded-lg border border-gray-200 px-3">
              <span className="text-gray-500">https://</span>
              <input
                type="text"
                placeholder="Enter domain (e.g. example.com)"
                value={searchDomain}
                onChange={(e) => setSearchDomain(e.target.value)}
                className="flex-1 px-2 py-3 outline-none"
              />
            </div>
            <button className="bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-lg">
              <Search className="w-5 h-5" />
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Search results: Mostly recent data (past six months), some older entries may be included.
          </p>
        </div>

        {/* Example Section */}
        <div className="bg-purple-50 rounded-lg p-4 mb-8">
          <p className="text-purple-600 mb-4">Example: Below is the social media list data for Toolify.ai</p>
        </div>
      </div>
    </div>
  );
};

export default SocialListen;