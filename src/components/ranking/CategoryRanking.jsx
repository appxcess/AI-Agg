import React from 'react';

const CategoryRanking = () => {
  return (
    <div className="w-full p-4">
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-4">Top <span className="text-purple-600">All categories</span> AI Websites & AI Tools</h1>
        <p className="text-gray-600">
          A list of AI websites by category, including total website traffic and traffic growth, to see how AI websites in each category are growing and competing. (Traffic data from similarweb, automatically updated monthly.)
        </p>
        <div className="mt-4">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Ranking</th>
                <th className="text-left p-2">Tools</th>
                <th className="text-left p-2">Monthly Visit</th>
                <th className="text-left p-2">Growth</th>
                <th className="text-left p-2">Growth Rate</th>
                <th className="text-left p-2">Introduction</th>
                <th className="text-left p-2">Tags</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategoryRanking;