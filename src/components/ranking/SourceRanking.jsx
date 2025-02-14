import React from 'react';

const SourceRanking = () => {
  return (
    <div className="w-full p-4">
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-4">Top AI Websites & AI Tools from <span className="text-purple-600">Mail</span></h1>
        <p className="text-gray-600">
          A list of AI websites by source, including total website traffic and traffic growth, available to view the development and competition level of AI websites in each source's share.
        </p>
        <div className="flex gap-4 mt-4">
          <button className="text-purple-600 border-b-2 border-purple-600">Mail</button>
          <button className="text-gray-600">Direct</button>
          <button className="text-gray-600">Search</button>
          <button className="text-gray-600">Social</button>
          <button className="text-gray-600">Referrals</button>
          <button className="text-gray-600">Display Ads</button>
        </div>
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

export default SourceRanking;
