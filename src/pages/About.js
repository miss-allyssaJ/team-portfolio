import React from "react";

const About = () => (
  <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
    <h2 className="text-4xl font-bold text-gray-800 text-center border-b-4 border-gray-600 pb-2">About Us</h2>
    <p className="mt-6 text-lg text-gray-600 leading-relaxed text-justify">
      We are third-year IT students who are still exploring and learning different programming languages. 
      Currently, we are familiar only with the basics of Python, HTML, CSS for styling, PHP for backend development, and MySQL for database management. 
      This semester, we are also learning React.js to enhance our front-end development skills. 
      However, we still consider ourselves beginners and are eager to expand our knowledge and skills.
    </p>
    <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-gray-700 border-l-4 border-gray-700 pl-3">Our Focus</h3>
      <p className="mt-3 text-lg text-gray-600 leading-relaxed text-justify">
        Our main focus is to learn and adapt to the teachings of our professor, applying them in practical projects. 
        We strive to improve our problem-solving skills and teamwork while working on real-world applications.
      </p>
    </div>
  </div>
);

export default About;
