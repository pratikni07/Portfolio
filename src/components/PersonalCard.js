import React from "react";

const PersonalCard = () => {
  return (
    <div
      className="w-full max-w-md mx-auto p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-start justify-start
      bg-gradient-to-l from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 dark:bg-gray-800 "
    >
      <div className="text-left">
        <h3 className="font-semibold text-lg sm:text-xl md:text-2xl text-gray-800 dark:text-gray-100 mb-2">
          Hello, I'm Pratik Nikat!
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg mb-4">
        👨‍💻 Full Stack Developer and Computer Science student at PCCOE, Akurdi, passionate about building scalable web applications and implementing DevOps practices. 🛠️ Proficient in modern tech stack including React.js, Node.js, Spring Boot, and AWS cloud services. 💻 Experienced in crafting responsive interfaces and robust backend solutions, with a strong foundation in data structures and algorithms. 🚀 Currently focused on cloud architecture and open to collaborative opportunities in innovative tech projects.
        </p>
      </div>
    </div>
  );
};

export default PersonalCard;
