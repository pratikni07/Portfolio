import React from "react";
import { Link } from "lucide-react";

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <div
      className="relative bg-blue-50 dark:bg-gray-900 w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "200px",
      }}
      onClick={() => window.open(link, "_blank")}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent dark:from-gray-900/70 dark:via-gray-800/50 dark:to-transparent"></div>

      <div className="relative flex flex-col justify-end h-full p-5 z-10">
        <h2
          className="font-semibold text-2xl text-white dark:text-gray-100 mb-2"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {title}
        </h2>
        <p className="text-base text-gray-300 dark:text-gray-400 mb-4">
          {description}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-100 dark:text-gray-200 hover:text-gray-400 dark:hover:text-gray-300 transition-colors duration-300 inline-flex items-center"
        >
          <Link className="mr-2 w-5 h-5" />
          <span>Visit Project</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
