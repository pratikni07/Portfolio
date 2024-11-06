import React from "react";
import AchievementsCard from "./AchievementsCard";
import { Trophy, Award, BookOpen } from "lucide-react";
import { achievements } from "../data/achievements";

const getIcon = (iconName) => {
  switch (iconName) {
    case "Trophy":
      return <Trophy className="w-8 h-8 text-yellow-400" />;
    case "Award":
      return <Award className="w-8 h-8 text-blue-400" />;
    case "BookOpen":
      return <BookOpen className="w-8 h-8 text-green-400" />;
    default:
      return null;
  }
};

const AchievementsSection = () => {
  return (
    <section className="w-full h-fit lg:w-fit flex flex-col p-6 bg-gradient-to-r from-slate-100 to-slate-300 dark:from-slate-900 dark:to-slate-700 rounded-lg shadow-lg dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
        Achievements
      </h2>
      <p className="text-[17px] text-center mb-6 text-gray-600 dark:text-gray-300">
        Here are some of the milestones I’ve achieved in my career. These
        accomplishments reflect my dedication and passion for technology and
        innovation.
      </p>
      <div className="flex flex-wrap gap-6 justify-center">
        {achievements.map((ach, index) => (
          <AchievementsCard
            key={index}
            title={ach.title}
            description={ach.description}
            date={ach.date}
            icon={getIcon(ach.icon)}
          />
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
