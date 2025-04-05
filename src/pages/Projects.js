import React from "react";

const projects = [
  {
    id: 1,
    title: "TaskMaster",
    description: "A task management app that helps teams collaborate, assign tasks, and track progress in real-time.",
    technologies: ["HTML", "PHP", "CSS", "MySQL"],
    image: "taskmaster.png", 
  },
  {
    id: 2,
    title: "Court Reservation System",
    description: "A booking system for sports courts, allowing users to check availability and reserve slots online.",
    technologies: ["HTML", "PHP", "CSS", "JavaScript"],
    image: "court-reservation.png",
  },
  {
    id: 3,
    title: "Team Portfolio Website",
    description: "A well-structured website highlighting our team, projects, and skills.",
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
    image: "team-portfolio.png",
  },
];

const Projects = () => {
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
          <div key={project.id} className="bg-white shadow-lg rounded-lg p-5 transition hover:shadow-xl">
            {/* Project Image */}
            <div className="h-48 rounded-lg overflow-hidden border">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>

            {/* Project Info */}
            <h3 className="mt-4 text-xl font-semibold text-gray-800">{project.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{project.description}</p>

            {/* Technologies Used */}
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
