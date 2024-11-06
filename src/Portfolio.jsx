import React, { useState, useEffect } from "react";
import { Moon, SunMoon } from "lucide-react";
import PersonalInfoCard from "./components/PersonalInfoCard";
import LinkedinCard from "./components/LinkedInCard";
import GitHubCard from "./components/GitHubCard";
import PersonalCard from "./components/PersonalCard";
import ResumeCard from "./components/ResumeCard";
import { skills } from "./data/skills";
import AchievementsSection from "./components/AchievementsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperiencedSection from "./components/ExperiencedSection";
import ContactForm from "./components/ContactForm";
import Map from "./components/Map";
import Thanks from "./components/Thanks";
import { socialLinks } from "./data/socialLinks";
import resumePhoto from "./resumephotot.png"

const Portfolio = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const resumephoto =
    "https://res.cloudinary.com/dkbzscmmq/image/upload/v1726205015/ProfilePhoto_kezly8.png";

  return (
    <div
      className={`relative flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between w-full lg:w-[90%] mx-auto p-6 lg:p-10 ${theme}`}
    >
      <div
        className="w-full lg:w-[30%] text-center lg:text-left mb-10 lg:mb-0 lg:fixed"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div className="blob-container mx-auto lg:mx-0 mb-8 lg:mb-5">
          <img
            src={resumePhoto}
            alt="Profile"
            loading="lazy"
            className="blob-image w-48 h-48 rounded-full object-cover mx-auto lg:mx-0"
          />
        </div>
        <h1 className="font-bold text-4xl" style={{ fontWeight: "800" }}>
          Pratik Nikat👋
        </h1>
        <p className="text-xl mt-3" style={{ fontWeight: "600" }}>
          Full Stack Developer 💻
        </p>
        <p
          className="text-base mt-3 text-gray-600"
          style={{ fontWeight: "400" }}
        >
          Passionate about building scalable applications 🚀
        </p>

        <div className="flex justify-center lg:justify-start gap-4 mt-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              {link.icon}
            </a>
          ))}
          <button
            className="text-gray-600 hover:text-black cursor-pointer transition-colors duration-300"
            onClick={toggleTheme}
          >
            {theme === "light" ? <Moon /> : <SunMoon />}
          </button>
        </div>

        <div className="flex bottom-0 left-0 text-text-size flex-col">
          <div className="logos">
            <p className="font-semibold mt-3 text-[17px] text-center lg:text-left">
              Tech Stack
            </p>

            <ul className="flex flex-wrap gap-2 justify-center lg:justify-start items-center mt-1">
              {skills.map((icon) => (
                <li key={icon.alt} className="cursor-pointer">
                  <link rel="preload" href={icon.src} as="image" />
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    loading="lazy"
                    className="w-[40px] h-[40px] transition-transform duration-300 ease-in-out hover:scale-125 object-cover"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-[64%] lg:ml-[36%]">
        <div className="grid grid-cols-1 lg:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 auto-rows-auto">
          <PersonalCard />
          <div className="flex flex-col gap-4 md:gap-4">
            <PersonalInfoCard />
            <div className="flex flex-row lg:flex-row gap-4 md:flex-col md:justify-between lg:gap-7">
              <GitHubCard title="GitHub" link="github.com" color="github" />
              <LinkedinCard
                title="LinkedIn"
                link="linkedin.com"
                color="linkedin"
              />
            </div>
            <ResumeCard />
          </div>
          <ExperiencedSection />
          <ProjectsSection />
          <div>
            <AchievementsSection />
            <div className="mt-11 lg:block hidden">
              <Thanks />
            </div>
          </div>

          <div>
            <Map
              center={[18.5204, 73.8567]}
              zoom={13}
              markerPosition={[18.5204, 73.8567]}
              popupText="Pune, Maharashtra, India"
            />
            <ContactForm />
          </div>
          <div className="mt-7 lg:hidden block">
            <Thanks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
