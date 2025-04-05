import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">Team Portfolio</h1>
      <div className="space-x-4">
        <Link className="hover:text-gray-400" to="/">Home</Link>
        <Link className="hover:text-gray-400" to="/about">About</Link>
        <Link className="hover:text-gray-400" to="/team">Team</Link>
        <Link className="hover:text-gray-400" to="/projects">Projects</Link>
        <Link className="hover:text-gray-400" to="/contact">Contact</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;