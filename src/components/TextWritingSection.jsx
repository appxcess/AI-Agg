import React, { useState } from "react";

function TextWritingSection() {
  const [activeTab, setActiveTab] = useState("Today");

  const tabs = [
    "Today",
    "New",
    "Most Saved",
    "Most Used",
    "Browser Extension",
    "Apps",
    "Discord of AI",
    "AI for Jobs",
    "AI for Capabilities",
  ];

  const categories = [
    "Text & Writing",
    "Image",
    "Video",
    "Code & IT",
    "Voice",
    "Business",
    "Marketing",
    "AI Detector",
    "Chatbot",
    "Design & Art",
    "Life Assistant",
    "3D",
    "Education",
    "Prompt",
    "Productivity",
    "More +",
  ];

  return (
    <section className="px-3 py-6 text-center">
      {/* Tabs Section */}
      <div className="flex justify-center gap-2 flex-wrap mb-4">
        {tabs.map((tab) => (
          <span
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 rounded-full border text-xs cursor-pointer transition-all ${
              activeTab === tab
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-gray-200 text-gray-800 border-gray-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 text-center"
            }`}
          >
            {tab}
          </span>
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 flex-wrap overflow-x-auto pb-2 scrollbar-hide w-full text-center">
  {categories.map((category) => (
    <div
      key={category}
      className="px-3 py-2 bg-gray-200 text-gray-800 text-sm border border-gray-300 rounded-full cursor-pointer whitespace-nowrap transition-all hover:bg-blue-500 hover:text-white hover:border-blue-500 flex justify-center items-center"
    >
      {category}
    </div>
  ))}
</div>

    </section>
  );
}

export default TextWritingSection;
