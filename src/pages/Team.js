import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "Erish Gonzales",
    title: "Initial Setup Assistant",
    image: "pic1.jpg",
    description:
      "Helped in the early stage of the project by attempting to set up the development environment and tools needed for React.js.",
    socials: {
      facebook: "https://www.facebook.com/adobo.sana",
      github: "https://github.com/Erish-karl",
      instagram:
        "https://www.instagram.com/koyizhim?igsh=MTgxbDl5ZjRrZjJpYg==",
    },
    skills: ["React.js", "Node.js", "Development Setup"],
  },
  {
    id: 2,
    name: "Danne Kurt Sahagun",
    title: "Frontend Developer",
    image: "pic2.jpg",
    description:
      "Creates interactive and user-friendly web interfaces.",
    socials: {
      facebook: "https://www.facebook.com/aleck.sahagun",
      github: "https://github.com/dangkoy",
      instagram: "https://instagram.com/dannekurt",
    },
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    id: 3,
    name: "Allyssa Jhones Tañedo",
    title: "Project Manager/Frontend Developer/Designer",
    image: "pic3.jpg",
    description:
      "Leads the team with strategic planning and coordination. Develops responsive UI components for a seamless experience.",
    socials: {
      facebook: "https://www.facebook.com/profile.php?id=61563630730602",
      github: "https://github.com/miss-allyssaJ",
      instagram:
        "https://www.instagram.com/allyssa_jhones?igsh=MWh4bDR4dzRha245ZA==",
    },
    skills: ["Project Management", "UI/UX Design", "React", "Tailwind CSS"],
  },
  {
    id: 4,
    name: "Ana Rizza Espenida",
    title: "Designer",
    image: "pic4.jpg",
    description:
      "Designs visuals and ensures an appealing user experience.",
    socials: {
      facebook: "https://www.facebook.com/rzzspnda",
      github: "https://github.com/rzzspnda",
      instagram: "https://instagram.com/ana",
    },
    skills: ["Figma", "Photoshop", "UI Design", "Branding"],
  },
  {
    id: 5,
    name: "Edcel Garbanzos",
    title: "Quality Assurance (QA) Tester",
    image: "pic5.jpg",
    description:
      "Responsible for checking the website for bugs, errors, and usability issues. Provided feedback to ensure the system works smoothly and meets user expectations.",
    socials: {
      facebook: "https://www.facebook.com/profile.php?id=61564661087898",
      github: "https://github.com/Edcel-Garbanzos",
      instagram: "https://instagram.com/edcel",
    },
    skills: ["Testing", "Bug Tracking", "Quality Assurance", "Reporting"],
  },
];

const Team = () => {
  const [openMemberId, setOpenMemberId] = useState(null);

  const toggleSkills = (id) => {
    setOpenMemberId(openMemberId === id ? null : id);
  };

  return (
    <div className="text-center py-14 px-6">
      <h2 className="text-3xl font-bold uppercase tracking-wider text-gray-800">
        The People Who Make It Happen
      </h2>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex flex-col items-center">
            <div className="p-1 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 shadow-lg transition-transform hover:scale-105">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden bg-white">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            <p className="mt-3 text-sm text-gray-500 uppercase font-medium">
              {member.title}
            </p>

            <h3
              className="text-lg font-semibold text-gray-800 cursor-pointer hover:underline"
              onClick={() => toggleSkills(member.id)}
            >
              {member.name}
            </h3>

            <p className="text-xs text-gray-600 mt-2 px-4 text-center">
              {member.description}
            </p>
            {openMemberId === member.id && (
              <div className="flex flex-wrap justify-center gap-2 mt-3 px-4 transition-all duration-300">
                {member.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}

            <div className="flex gap-4 mt-3">
              <a
                href={member.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 transition"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href={member.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-600 transition"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={member.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700 transition"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
