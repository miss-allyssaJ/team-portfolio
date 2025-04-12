import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "TaskMaster",
    description: "A task management app that helps teams collaborate, assign tasks, and track progress in real-time.",
    technologies: ["HTML", "PHP", "CSS", "MySQL"],
    image: "taskmaster.png",
    images: [
      "taskmaster.png",
      "task2.jpg",
      "task3.jpg",
      "task4.jpg",
      "task5.jpg",
      "task6.jpg",
    ],
  },
  {
    id: 2,
    title: "Court Reservation System",
    description: "A booking system for sports courts...",
    technologies: ["HTML", "PHP", "CSS", "JavaScript"],
    image: "court-reservation.png",
    images: [
      "court1.jpg",
      "court2.jpg",
      "court3.jpg",
      "court4.jpg",
    ],
  },
  {
    id: 3,
    title: "Team Portfolio Website",
    description: "A well-structured website highlighting our team...",
    technologies: ["react.js", "Tailwind", "Framer Motion"],
    image: "team1.jpg",
    images: [
      "team1.jpg",
      "team2.jpg",
      "team3.jpg",
      "team4.jpg",
      "team5.jpg",
      "team6.jpg",
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentStep(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentStep(0);
  };

  const nextStep = () => {
    if (currentStep < selectedProject.images.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="text-center py-14 px-6">
      <h2 className="text-3xl font-bold uppercase tracking-wider text-gray-800">
        Our Projects
      </h2>
      <p className="mt-4 text-gray-600">
        Featuring the projects we've completed as a team last semester and our ongoing work.
      </p>

      {/* Projects Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-lg p-5 transition hover:shadow-xl cursor-pointer"
            onClick={() => openProject(project)}
          >
            <div className="h-48 rounded-lg overflow-hidden border">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm mt-2">{project.description}</p>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal - Bigger Screenshot */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4">
          <div className="relative bg-white rounded-xl p-8 w-full max-w-5xl max-h-[95vh] overflow-y-auto shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-700 hover:text-black text-3xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-3">{selectedProject.title}</h2>
            <p className="text-gray-600 mb-5">{selectedProject.description}</p>

            <div className="relative w-full h-[500px] border rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
              <img
                src={selectedProject.images[currentStep]}
                alt={`Screenshot`}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className={`px-6 py-2 rounded bg-gray-600 text-white transition ${
                  currentStep === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
                }`}
              >
                Previous
              </button>
              <button
                onClick={nextStep}
                disabled={currentStep === selectedProject.images.length - 1}
                className={`px-6 py-2 rounded bg-gray-600 text-white transition ${
                  currentStep === selectedProject.images.length - 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-blue-700"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
