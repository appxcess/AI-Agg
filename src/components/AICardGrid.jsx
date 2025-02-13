import React from "react";
import { BrowserRouter, Routes, Route, useNavigate, useParams } from "react-router-dom";
import { FiExternalLink, FiStar } from "react-icons/fi";
import { Star, Globe, ChevronDown, Search, MessageCircle } from 'lucide-react';

// AICard Grid Component
const AICardGrid = () => {
  const navigate = useNavigate();

  return (
    <section className="p-10 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {aiTools.map((tool) => (
          <div
            key={tool.id}
            className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => navigate(`/tool/${tool.id}`)}
          >
            <img src={tool.image} alt={tool.title} className="w-full h-40 object-cover rounded-lg" />
            <div className="mt-3">
              <h3 className="text-lg font-bold">{tool.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{tool.description}</p>
              <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                <span>🔥 {tool.stats.views}</span>
                <span>📈 {tool.stats.growth}</span>
                <FiStar className="text-yellow-500" />
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {tool.category.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex justify-end">
                <button className="text-blue-500 hover:text-blue-700 text-sm flex items-center">
                  Visit <FiExternalLink className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Tool Detail Component
const ToolDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const tool = aiTools.find(t => t.id === parseInt(id));

  if (!tool) {
    return <div>Tool not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-8 h-8 bg-purple-100 rounded-lg"></div>
              <span className="ml-2 font-bold text-xl">Toolify.ai</span>
            </div>
            
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-1">Products <ChevronDown size={16} /></button>
              <button>Category</button>
              <button className="flex items-center gap-1">Ranking <ChevronDown size={16} /></button>
              <button>AI Models</button>
              <button className="flex items-center gap-1">
                Social Listening
                <span className="text-xs bg-red-500 text-white px-1 rounded">New</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <input type="text" placeholder="Search AIs" className="pl-4 pr-10 py-2 border rounded-lg" />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
            <button>Favourite</button>
            <button>Login</button>
            <button className="flex items-center gap-1">
              <Globe size={20} /> EN <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="cursor-pointer hover:text-purple-500" onClick={() => navigate('/')}>
            Home
          </span>
          <span>/</span>
          <span>{tool.title}</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-8">
          {/* Left Column */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-3xl font-bold">{tool.title}</h1>
              <button className="bg-purple-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                <Globe size={20} /> Open site
              </button>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star key={n} className="text-purple-500 fill-purple-500" size={20} />
                ))}
                <span className="ml-1">5</span>
              </div>
              <span className="text-gray-600">0 Reviews</span>
              <span className="text-gray-600">2 Saved</span>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex gap-8">
                <span className="w-32 font-semibold">Introduction:</span>
                <span>{tool.description}</span>
              </div>
              <div className="flex gap-8">
                <span className="w-32 font-semibold">Monthly Visitors:</span>
                <span>{tool.stats.views}</span>
              </div>
              <div className="flex gap-8">
                <span className="w-32 font-semibold">Growth:</span>
                <span>{tool.stats.growth}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {tool.category.map((tag, index) => (
                <span key={index} className="px-4 py-1 rounded-full bg-gray-100 text-gray-700">
                  {tag}
                </span>
              ))}
            </div>

            <div className="border-b">
              <div className="flex gap-6">
                {['Product Information', 'Reviews', 'Pricing', 'Analytics', 'Social Listening', 'Embed', 'Alternatives'].map((tab) => (
                  <button
                    key={tab}
                    className={`px-4 py-2 border-b-2 ${
                      tab === 'Product Information' ? 'border-purple-500 text-purple-500' : 'border-transparent'
                    }`}
                  >
                    {tab}
                    {tab === 'Social Listening' && (
                      <span className="ml-1 text-xs bg-red-500 text-white px-1 rounded">New</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-96">
            <img src={tool.image} alt={tool.title} className="w-full rounded-lg shadow-lg" />
            <div className="flex gap-2 mt-4">
              <button className="flex-1 bg-purple-500 text-white py-2 rounded">
                Advertise this tool
              </button>
              <button className="flex-1 border border-purple-500 text-purple-500 py-2 rounded">
                Update this tool
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AICardGrid />} />
        <Route path="/tool/:id" element={<ToolDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;