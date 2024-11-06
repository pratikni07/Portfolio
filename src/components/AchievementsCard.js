import React from "react";

const AchievementsCard = ({ title, description, date, icon }) => {
  return (
    <div className="achievements-card bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow-md flex flex-col items-start gap-3 transition-transform  hover:shadow-xl">
      <div className="flex items-center gap-3">
        <div className="icon">{icon}</div>
        <h3 className="text-xl font-semibold dark:text-gray-100">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
      <span className="text-gray-500 dark:text-gray-500 text-sm">{date}</span>
    </div>
  );
};

export default AchievementsCard;
