import React from "react";
import { ExternalLink, Flame, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const aiTools = [
  {
    id: 1,
    image: "/api/placeholder/300/200",
    title: "Snapcut.ai",
    description: "AI-powered video editing for viral shorts",
    stats: { views: "19.0K", growth: "22.70%" },
    category: ["Captions or Subtitle"],
    url: "https://snapcut.ai",
  },
  {
    id: 1,
    image: "/api/placeholder/300/200",
    title: "Snapcut.ai",
    description: "AI-powered video editing for viral shorts",
    stats: { views: "19.0K", growth: "22.70%" },
    category: ["Captions or Subtitle"],
    url: "https://snapcut.ai",
  },
  {
    id: 1,
    image: "/api/placeholder/300/200",
    title: "Snapcut.ai",
    description: "AI-powered video editing for viral shorts",
    stats: { views: "19.0K", growth: "22.70%" },
    category: ["Captions or Subtitle"],
    url: "https://snapcut.ai",
  },
  {
    id: 1,
    image: "/api/placeholder/300/200",
    title: "Snapcut.ai",
    description: "AI-powered video editing for viral shorts",
    stats: { views: "19.0K", growth: "22.70%" },
    category: ["Captions or Subtitle"],
    url: "https://snapcut.ai",
  },
  {
    id: 1,
    image: "/api/placeholder/300/200",
    title: "Snapcut.ai",
    description: "AI-powered video editing for viral shorts",
    stats: { views: "19.0K", growth: "22.70%" },
    category: ["Captions or Subtitle"],
    url: "https://snapcut.ai",
  },
  {
    id: 1,
    image: "/api/placeholder/300/200",
    title: "Snapcut.ai",
    description: "AI-powered video editing for viral shorts",
    stats: { views: "19.0K", growth: "22.70%" },
    category: ["Captions or Subtitle"],
    url: "https://snapcut.ai",
  },
  {
    id: 1,
    image: "/api/placeholder/300/200",
    title: "Snapcut.ai",
    description: "AI-powered video editing for viral shorts",
    stats: { views: "19.0K", growth: "22.70%" },
    category: ["Captions or Subtitle"],
    url: "https://snapcut.ai",
  },
  {
    id: 1,
    image: "/api/placeholder/300/200",
    title: "Snapcut.ai",
    description: "AI-powered video editing for viral shorts",
    stats: { views: "19.0K", growth: "22.70%" },
    category: ["Captions or Subtitle"],
    url: "https://snapcut.ai",
  },
  {
    id: 1,
    image: "/api/placeholder/300/200",
    title: "Snapcut.ai",
    description: "AI-powered video editing for viral shorts",
    stats: { views: "19.0K", growth: "22.70%" },
    category: ["Captions or Subtitle"],
    url: "https://snapcut.ai",
  },
  {
    id: 1,
    image: "/api/placeholder/300/200",
    title: "Snapcut.ai",
    description: "AI-powered video editing for viral shorts",
    stats: { views: "19.0K", growth: "22.70%" },
    category: ["Captions or Subtitle"],
    url: "https://snapcut.ai",
  },
];

const AICard = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle card click
  const handleCardClick = (id) => {
    navigate(`/tool/${id}`); // Navigate to the tool's detail page
  };

  return (
    <section className="p-10 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 border-amber-600">
        {aiTools.map(({ id, image, title, description, stats, category, url }) => (
          <div
            key={id}
            className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => handleCardClick(id)} // Navigate on card click
          >
            <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg" />
            <div className="mt-3">
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="text-gray-600 text-sm mt-1">{description}</p>
              <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                <span>
                  <Flame className="inline-block" /> {stats.views}
                </span>
                <span>
                  <TrendingUp className="inline-block" /> {stats.growth}
                </span>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {category.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AICard;