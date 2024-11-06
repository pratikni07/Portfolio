import React from "react";

const Thanks = () => {
  return (
    <div className="bg-white dark:bg-gray-800 h-[200px] p-6 rounded-lg shadow-md max-w-sm w-full animate-fade-in">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 animate-slide-up">
          Thank You! 🎉
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          We appreciate your input and are grateful for your feedback.
        </p>
      </div>
      <div className="mt-6 pt-4 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>© 2024 Omkar Khoche</p>
      </div>
    </div>
  );
};

export default Thanks;
