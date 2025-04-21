import React from "react";

const About = () => (
  <div className="max-w-4xl mx-auto mt-10 p-8 bg-white/60 backdrop-blur-md shadow-lg rounded-lg">
    <h2 className="text-4xl font-bold text-gray-800 text-center pb-2 relative inline-block">
      About Us
      <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 rounded"></span>
    </h2>
    <p className="mt-6 text-lg text-gray-700 leading-relaxed text-justify">
      We are third-year IT students who are still exploring and learning different programming languages. 
      Currently, we are familiar only with the basics of Python, HTML, CSS for styling, PHP for backend development, and MySQL for database management. 
      This semester, we are also learning React.js to enhance our front-end development skills. 
      However, we still consider ourselves beginners and are eager to expand our knowledge and skills.
    </p>
    <div className="mt-8 bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-md">
      <div className="relative pl-5">
        <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-yellow-500 rounded"></span>
        <h3 className="text-2xl font-semibold text-gray-800">Our Focus</h3>
      </div>
      <p className="mt-3 text-lg text-gray-700 leading-relaxed text-justify">
        Our main focus is to learn and adapt to the teachings of our professor, applying them in practical projects. 
        We strive to improve our problem-solving skills and teamwork while working on real-world applications.
      </p>
    </div>
  </div>
);

export default About;
