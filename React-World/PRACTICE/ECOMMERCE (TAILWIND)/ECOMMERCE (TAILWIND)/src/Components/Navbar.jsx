import React from 'react';

function Navbar() {
  return (
    <nav className="bg-[#F1A208] shadow-md text-white fixed top-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wider hover:scale-105 transition-transform cursor-pointer">
          KHAREEDO<span className="text-gray-900">.PK</span>
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          <li className="relative group">
            <a href="#" className="text-lg font-semibold transition-all duration-300 group-hover:text-gray-900">
              Home
            </a>
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <a href="#" className="text-lg font-semibold transition-all duration-300 group-hover:text-gray-900">
              About
            </a>
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <a href="#" className="text-lg font-semibold transition-all duration-300 group-hover:text-gray-900">
              Contact
            </a>
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>

        {/* Call to Action Button */}
        <button className="hidden md:block bg-gray-900 px-6 py-3 rounded-full font-semibold text-white shadow-lg hover:scale-105 transition-transform duration-300 hover:bg-gray-700">
          Sign Up
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none">
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
