import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const icons = [
  "fas fa-laptop-code",
  "fas fa-cogs",
  "fas fa-code",
  "fas fa-project-diagram",
  "fas fa-code-branch",
  "fas fa-tools",
  "fas fa-database",
  "fas fa-cloud",
  "fas fa-server",
  "fas fa-mobile-alt",
  "fas fa-desktop",
  "fas fa-network-wired",
  "fas fa-cloud-upload-alt",
  "fas fa-share-alt",
  "fas fa-robot",
  "fas fa-palette",
  "fas fa-sync-alt",
  "fas fa-file-code",
  "fas fa-clipboard-list",
  "fas fa-bolt",
  "fas fa-lightbulb",
  "fas fa-wrench",
  "fas fa-wifi",
  "fas fa-plug",
  "fas fa-lock",
  "fas fa-unlock",
  "fas fa-exclamation-circle",
  "fas fa-globe",
  "fas fa-codepen",
  "fas fa-atom",
  "fas fa-sitemap",
  "fas fa-search-plus",
  "fas fa-search-minus",
  "fas fa-fingerprint",
  "fas fa-plus-circle",
  "fas fa-minus-circle",
  "fas fa-arrow-right",
];

const Home = () => {
  const [inView, setInView] = useState(false);
  const [iconPositions, setIconPositions] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const handleScroll = () => {
      const missionSection = document.getElementById("mission-vision");
      const missionPosition = missionSection.getBoundingClientRect().top;
      if (missionPosition <= window.innerHeight / 1.3) {
        setInView(true);
      } else {
        setInView(false);
      }
    };

    const generateRandomPositions = () => {
      const positions = [];
      const numberOfIcons = 50;

      for (let i = 0; i < numberOfIcons; i++) {
        const icon = icons[Math.floor(Math.random() * icons.length)];
        const top = Math.floor(Math.random() * 85) + 5 + "%";
        const left = Math.floor(Math.random() * 85) + 5 + "%";
        const rotate = Math.floor(Math.random() * 360);
        const opacity = Math.random() * 0.5 + 0.3;

        positions.push({
          icon,
          top,
          left,
          rotate,
          opacity,
        });
      }
      setIconPositions(positions);
    };

    generateRandomPositions();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleExploreClick = () => {
    navigate("/projects"); // Navigate to /projects
  };

  return (
    
    <div className="w-full min-h-screen bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden max-w-full">
        {iconPositions.map((position, index) => (
          <div
            key={index}
            className={`absolute text-gray-300 text-5xl`}
            style={{
              top: position.top,
              left: position.left,
              transform: `rotate(${position.rotate}deg)`,
              opacity: position.opacity,
            }}
          >
            <i className={position.icon}></i>
          </div>
        ))}
      </div>

      <div className="w-full h-screen flex flex-col items-center justify-center text-center px-6 py-12 z-10 relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black mb-6 tracking-tight">
          Welcome to Team 2F3M
        </h1>

        <section className="w-full max-w-3xl mx-auto px-6">
          <p className="text-lg sm:text-xl text-black leading-relaxed max-w-2xl mx-auto">
            We are Team 2F3M, a group of five 3rd-year IT students exploring the world of web development.
            Our journey has been filled with challenges, discoveries, and growth as we dive into new technologies,
            including our first deep dive into React.js this semester.
          </p>
        </section>
      </div>

      <section
        id="mission-vision"
        className={`w-full max-w-3xl mx-auto px-6 mb-16 bg-white opacity-0 transform transition-all duration-700 ease-in-out ${
          inView ? "opacity-100 translate-y-0" : "translate-y-24"
        }`}
      >
        <h2 className="text-3xl font-semibold text-black mb-6">Our Mission & Vision</h2>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-black mb-2">Our Mission</h3>
          <p className="text-lg text-black leading-relaxed">
            Our mission is to foster creativity, innovation, and collaboration among team members. We aim to build meaningful web applications that provide real value to users.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-black mb-2">Our Vision</h3>
          <p className="text-lg text-black leading-relaxed">
            Our vision is to be a team that constantly pushes the boundaries of technology, while developing as well-rounded professionals who are ready to tackle real-world challenges.
          </p>
        </div>
      </section>

      <div className="text-center mb-12 z-10 relative">
        <button
          onClick={handleExploreClick}
          className="mt-8 px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
        >
          Explore Our Work
        </button>
      </div>
    </div>
  );
};

export default Home;
