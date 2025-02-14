import React from 'react';

const RevenueRanking = () => {
  return (
    <div className="w-full p-4">
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-4">Top AI by Revenue</h1>
        <p className="text-gray-600">
          AI High Revenue Ranking based on AI website rankings on payment platforms and actual monthly traffic to the website.
        </p>
        <div className="mt-4">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Ranking</th>
                <th className="text-left p-2">Tools</th>
                <th className="text-left p-2">Website</th>
                <th className="text-left p-2">Snapshot</th>
                <th className="text-left p-2">Payment Platform</th>
                <th className="text-left p-2">Monthly visits</th>
                <th className="text-left p-2">Desc</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RevenueRanking;