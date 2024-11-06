import React from "react";
import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
const LinkedinCard = ({ title, link }) => {
  return (
    <Link to="https://www.linkedin.com/in/pratiknikat">
    <div className="border dark:border-none dark:bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 w-[200px] md:w-full lg:w-[200px] h-auto p-4 rounded-lg shadow-lg flex flex-col items-start justify-start transition-colors duration-300">
      <div className="bg-blue-600 dark:bg-blue-600 p-2 rounded-full text-white mb-3 shadow-md">
        <Linkedin className="w-6 h-6" />
      </div>

      <div className="text-left">
        <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-200">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-400 text-sm mt-1">{link}</p>
      </div>
    </div>
    </Link>
  );
};

export default LinkedinCard;
