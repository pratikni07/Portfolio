import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const ProjectsSection = () => {
  return (
    <div className="w-full lg:w-fit flex flex-col p-6 bg-gradient-to-r from-slate-100 to-slate-300 dark:from-slate-900 dark:to-slate-700 rounded-lg shadow-lg dark:bg-gray-900">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          Featured Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          A showcase of my work and accomplishments
        </p>
      </div>
      <div className="w-full flex flex-col gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
