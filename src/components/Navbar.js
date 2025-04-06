import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="w-full px-4 mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Team Portfolio</h1>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-4">
          <Link className="hover:text-gray-400" to="/">Home</Link>
          <Link className="hover:text-gray-400" to="/about">About</Link>
          <Link className="hover:text-gray-400" to="/team">Team</Link>
          <Link className="hover:text-gray-400" to="/projects">Projects</Link>
          <Link className="hover:text-gray-400" to="/contact">Contact</Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} px-4 pt-2 pb-4 space-y-2`}>
        <Link className="block py-2 hover:text-gray-400" to="/">Home</Link>
        <Link className="block py-2 hover:text-gray-400" to="/about">About</Link>
        <Link className="block py-2 hover:text-gray-400" to="/team">Team</Link>
        <Link className="block py-2 hover:text-gray-400" to="/projects">Projects</Link>
        <Link className="block py-2 hover:text-gray-400" to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
