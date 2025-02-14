import React, { useEffect, useState } from "react";
import AICard from "./features/AICard";

const CategoriesPage = () => {
  const [aiTools, setAiTools] = useState([]);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const response = await fetch("http://localhost:8000/tools");
        const data = await response.json();
        setAiTools(data);
      } catch (error) {
        console.error("Error fetching tools:", error);
      }
    };

    fetchTools();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      {aiTools.length > 0 ? <AICard aiTools={aiTools} /> : <p>Loading...</p>}
    </div>
  );
};

export default CategoriesPage;
