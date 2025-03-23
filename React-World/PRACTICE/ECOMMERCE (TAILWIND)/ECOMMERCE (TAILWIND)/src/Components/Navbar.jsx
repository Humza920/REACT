import React from 'react';

function Navbar() {
  return (
    <nav className="bg-[#F1A208] shadow-md text-white fixed top-0 w-full z-50">
      <div className="container mx-auto py-6 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="md:text-4xl text-xl font-extrabold tracking-wider hover:scale-105 transition-transform cursor-pointer">
          PETIO<span className="text-gray-900">LOGY</span>
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 pt-2">
          <li className="relative group">
            <a href="#" className="text-2xl font-semibold transition-all duration-300 group-hover:text-gray-900">
              Home
            </a>
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <a href="#" className="text-2xl font-semibold transition-all duration-300 group-hover:text-gray-900">
              About
            </a>
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <a href="#" className="text-2xl font-semibold transition-all duration-300 group-hover:text-gray-900">
              Contact
            </a>
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>

        {/* Call to Action Button */}
        <button className="flex items-center  md:block text-xl bg-gray-900 px-6 py-3 rounded-full font-semibold text-white shadow-lg hover:scale-105 transition-transform duration-300 hover:bg-gray-700 cursor-pointer">
          Sign Up
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none cursor-pointer">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
