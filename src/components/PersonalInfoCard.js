import React, { useState } from "react";

const PersonalInfoCard = () => {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const cardRect = e.currentTarget.getBoundingClientRect();
    const centerX = cardRect.left + cardRect.width / 2;
    const centerY = cardRect.top + cardRect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateAmountX = (mouseY / cardRect.height) * -30;
    const rotateAmountY = (mouseX / cardRect.width) * 30;

    setStyle({
      transform: `rotateX(${rotateAmountX}deg) rotateY(${rotateAmountY}deg)`,
      transition: "transform 0.1s ease-out",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: `rotateX(0deg) rotateY(0deg)`,
      transition: "transform 0.3s ease-out",
    });
  };

  const PlaneIcon =
    "https://res.cloudinary.com/dkbzscmmq/image/upload/v1726205015/plane-3d-icon_ezhxgl.png";

  return (
    <div className="parent-container">
      <div
        className="w-full bg-gradient-to-br from-blue-500 to-purple-600 dark:from-gray-800 dark:to-gray-900 shadow-lg rounded-lg relative overflow-hidden transform-gpu"
        style={style}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="p-4 flex justify-between items-start text-gray-900 dark:text-gray-100 z-10 relative">
          <div className="flex-1">
            <div className="date text-sm">29 Jan 2004</div>
            <div className="title text-xl mt-4 font-bold">WEB DEVELOPMENT</div>
          </div>
          <img
            className="absolute right-2 bottom-0 w-32 h-28 object-cover transform"
            src={PlaneIcon}
            alt="Plane"
            loading="lazy"
          />
        </div>

        <div className="bg-white mt-1 rounded-t-lg p-4 border border-gray-300 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-between text-gray-700 dark:text-gray-300">
            <div className="text-sm text-gray-400 dark:text-gray-500">
              B.TECH CSE , PCCOE '25
            </div>
          </div>

          <div className="flex flex-row sm:flex-row justify-between pt-4">
            <div className="text-center">
              <div className="text-xs text-gray-400 dark:text-gray-500">
                CGPA
              </div>
              <div className="text-base font-bold text-gray-600 dark:text-gray-300">
                7.94
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-400 dark:text-gray-500">
                12th HSC
              </div>
              <div className="text-base font-bold text-gray-600 dark:text-gray-300">
                89.33%
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-400 dark:text-gray-500">
                10th SSC
              </div>
              <div className="text-base font-bold text-gray-600 dark:text-gray-300">
                87.80%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoCard;
