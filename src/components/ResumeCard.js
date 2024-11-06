import React from "react";

const ResumeCard = () => {
  return (
    <div className="bg-white border dark:border-none  dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 cursor-pointer">
      <a
        href="https://drive.google.com/file/d/1NMFvnGn46vdncXOblBX7tqB5unEXhhCq/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 flex-grow"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/3128/3128271.png"
          alt="Resume Icon"
          loading="lazy"
          className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 p-1"
        />
        <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Resume
        </span>
      </a>
    </div>
  );
};

export default ResumeCard;
