import React from "react";
import { experiences } from "../data/experiences";

const ExperiencedSection = () => {
  return (
    <section className="w-full p-7 bg-gradient-to-r from-blue-50 via-purple-100 to-indigo-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
        Professional Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="p-6 bg-gradient-to-r from-white via-blue-50 to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-700 rounded-lg shadow-md transition-transform hover:shadow-2xl"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              {experience.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {experience.company} | {experience.date}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-3">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperiencedSection;
