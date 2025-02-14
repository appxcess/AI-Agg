import React, { useState } from 'react';
import MonthlyRanking from './ranking/MonthlyRanking';
import CategoryRanking from './ranking/CategoryRanking';
import RegionRanking from './ranking/RegionRanking';
import SourceRanking from './ranking/SourceRanking';
import RevenueRanking from './ranking/RevenueRanking';
import RankingNavigation from './ranking/RankingNavigation';
import SocialButtons from './ranking/SocialButtons';

const Ranking = () => {
  const [activeTab, setActiveTab] = useState("Top AI by Monthly");

  const renderContent = () => {
    switch (activeTab) {
      case "Top AI by Monthly":
        return <MonthlyRanking />;
      case "Top AI by Categories":
        return <CategoryRanking />;
      case "Top AI by Regions":
        return <RegionRanking />;
      case "Top AI by Source":
        return <SourceRanking />;
      case "Top AI by Revenue":
        return <RevenueRanking />;
      default:
        return <MonthlyRanking />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-start mb-8">
        <div>
          <p className="text-sm text-gray-600 mt-5">AI Ranking by Toolify</p>
          <div className="flex items-center gap-4">
          </div>
        </div>
        <SocialButtons />
      </div>
      <RankingNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderContent()}
    </div>
  );
};

export default Ranking;