import React from 'react';

const RegionRanking = () => {
  return (
    <div className="w-full p-4">
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-4">Top AI Websites & AI Tools in <span className="text-purple-600">United States</span></h1>
        <p className="text-gray-600">
          A list of AI websites by region, including total website traffic and traffic growth, available to view the level of development and competition for AI websites in each regional share.
        </p>
        <div className="mt-4">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Ranking</th>
                <th className="text-left p-2">Tools</th>
                <th className="text-left p-2">Total Traffic</th>
                <th className="text-left p-2">Region Traffic</th>
                <th className="text-left p-2">Growth</th>
                <th className="text-left p-2">Growth Rate</th>
                <th className="text-left p-2">Tags</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RegionRanking;