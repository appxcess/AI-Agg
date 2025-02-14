import React from 'react';

const MonthlyRanking = () => {
  return (
    <div className="w-full p-4">
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-4">Top AI Websites & AI Tools in January 2025</h1>
        <p className="text-gray-600">
          This is an AI website growth report on the AI websites that have seen the most growth in website traffic in the last month. (Traffic data is sourced from similarweb and is automatically updated monthly.)
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

export default MonthlyRanking;