import React, { useState } from 'react';
import { Search } from 'lucide-react';

const AllModels = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const sources = ['All', 'replicate.com', 'huggingface.co', 'rapidapi.com', 'fal.ai', 'openart.ai'];
  const categories = ['All', 'Transportation', 'Data', 'Gaming', 'Music', 'Entertainment', 'Finance', 'Visual Recognition', 'Tools', 'Events', 'Business', 'SMS'];
  const growthTimes = ['24 hours', '3 days', '7 days', '15 days', '30 days', '2 months', '3 months'];
  
  const [selectedSource, setSelectedSource] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTime, setSelectedTime] = useState('24 hours');
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12 mt-6">
        <h1 className="text-5xl font-bold mb-2">Discover The Best Model For AI</h1>
        <p className="text-purple-600 mb-8">
          <span className="font-semibold">1659859</span> AI api's from major api running&using platforms
        </p>
        
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search model name"
            className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="absolute right-0 top-0 h-full bg-purple-600 px-4 rounded-r-lg flex items-center justify-center">
            <Search className="text-white" size={24} />
          </button>
        </div>
      </div>

      {/* Filters Section */}
      <div className="space-y-6">
        {/* Source Filter */}
        <div className="flex items-center">
          <span className="w-32 text-left font-medium">Source:</span>
          <div className="flex flex-wrap gap-2">
            {sources.map((source) => (
              <button
                key={source}
                className={`px-3 py-1 text-sm rounded-lg text-center ${
                  selectedSource === source
                    ? 'bg-purple-600 text-white'
                    : 'bg-white border hover:bg-gray-50'
                }`}
                onClick={() => setSelectedSource(source)}
              >
                {source}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex items-center">
          <span className="w-32 text-left font-medium">Category:</span>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-3 py-1 text-sm rounded-lg text-center ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-white border hover:bg-gray-50'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
            <button className="px-3 py-1 text-sm rounded-lg border hover:bg-gray-50 text-center">
              More +
            </button>
          </div>
        </div>

        {/* Data Filters */}
        <div className="flex items-center">
          <span className="w-32 text-left font-medium">Data:</span>
          <div className="flex gap-4">
            <select className="px-3 py-1 text-sm border rounded-lg bg-white w-36">
              <option>Total runs</option>
            </select>
            <select className="px-3 py-1 text-sm border rounded-lg bg-white w-36">
              <option>Growth</option>
            </select>
            <select className="px-3 py-1 text-sm border rounded-lg bg-white w-36">
              <option>Growth Rate</option>
            </select>
          </div>
        </div>

        {/* Growth Time Filter */}
        <div className="flex items-center">
          <span className="w-32 text-left font-medium">Growth Time:</span>
          <div className="flex flex-wrap gap-2">
            {growthTimes.map((time) => (
              <button
                key={time}
                className={`px-3 py-1 text-sm rounded-lg text-center ${
                  selectedTime === time
                    ? 'bg-purple-600 text-white'
                    : 'bg-white border hover:bg-gray-50'
                }`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllModels;