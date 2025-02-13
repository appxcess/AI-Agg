import React, { useState } from 'react';
import { Star, ExternalLink, Mail, Share2 } from 'lucide-react';

const ToolPage = ({ toolId = 1 }) => {
  const [activeTab, setActiveTab] = useState("product-info");

  // Sample data - in a real app, this would come from props or an API
  const tool = {
    id: 1,
    image: "/api/placeholder/300/200",
    title: "SnapCut.AI",
    description: "AI astrology site for personalized Bazi and zodiac readings.",
    rating: 4,
    reviews: 0,
    saved: 0,
    addedOn: "Feb 09 2025",
    monthlyVisitors: "--",
    category: ["Website", "Free", "Other"],
    url: "https://snapcut.ai",
  };

  const handleOpenSite = () => {
    window.open(tool.url, "_blank", "noopener,noreferrer");
  };

  const tabs = [
    { id: "product-info", label: "Product Information" },
    { id: "reviews", label: "Reviews" },
    { id: "analytics", label: "Analytics" },
    { id: "social", label: "Social Listening", isNew: true },
    { id: "embed", label: "Embed" },
    { id: "alternatives", label: "Alternatives" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Breadcrumb */}
      <div className="text-sm mb-6">
        <span className="text-gray-600">Home &gt; Other &gt; {tool.title}</span>
      </div>

      {/* Header Section */}
      <div className="flex justify-between items-start mb-6">
        <h1 className="text-3xl font-bold">{tool.title}</h1>
        <button
          onClick={handleOpenSite}
          className="bg-violet-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-violet-700"
        >
          Open site <ExternalLink className="w-4 h-4" />
        </button>
      </div>

      {/* Rating Section */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${i < tool.rating ? 'text-violet-600 fill-violet-600' : 'text-gray-300'}`}
            />
          ))}
          <span className="ml-2 text-violet-600">{tool.rating}</span>
        </div>
        <span className="text-gray-600">{tool.reviews} Reviews</span>
        <span className="text-gray-600">{tool.saved} Saved</span>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          {/* Info Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <span className="font-semibold">Introduction:</span>
                  <p>{tool.description}</p>
                </div>
                <div>
                  <span className="font-semibold">Added on:</span>
                  <p>{tool.addedOn}</p>
                </div>
                <div>
                  <span className="font-semibold">Monthly Visitors:</span>
                  <p>{tool.monthlyVisitors}</p>
                </div>
                <div>
                  <span className="font-semibold">Social & Email:</span>
                  <div className="flex gap-2 mt-2">
                    <Mail className="w-5 h-5 text-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Custom Tabs */}
          <div className="w-full">
            <div className="border-b border-gray-200">
              <div className="flex space-x-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-2 px-4 relative ${
                      activeTab === tab.id
                        ? 'text-violet-600 border-b-2 border-violet-600'
                        : 'text-gray-600 hover:text-violet-600'
                    }`}
                  >
                    {tab.label}
                    {tab.isNew && (
                      <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
                        New
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              {activeTab === "product-info" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-gray-100 rounded-lg h-64"></div>
                  ))}
                </div>
              )}
              {/* Add other tab content as needed */}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-1">
          <img 
            src="/api/placeholder/400/300" 
            alt={tool.title}
            className="w-full rounded-lg mb-4"
          />
          <div className="flex gap-2 mt-4">
            <button className="w-full bg-violet-600 text-white py-2 rounded-lg">
              Advertise this tool
            </button>
            <button className="w-full border border-violet-600 text-violet-600 py-2 rounded-lg">
              Update this tool
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolPage;