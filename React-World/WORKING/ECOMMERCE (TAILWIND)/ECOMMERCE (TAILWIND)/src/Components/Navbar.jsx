import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faTwitter, faPinterest } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (<>
    {/* Top Bar */}
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 py-1.5 sm:py-2 shadow-lg">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 gap-1.5 sm:gap-2">
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-4 lg:gap-6 text-xs sm:text-sm text-center sm:text-left">
          <p className="flex items-center gap-1.5 sm:gap-2 justify-center sm:justify-start group">
            <FontAwesomeIcon icon={faEnvelope} className="text-[#F1A208] text-xs sm:text-sm transform group-hover:scale-110 transition-all duration-300" />
            <span className="hover:text-[#F1A208] font-medium transition-all duration-300 cursor-pointer hover:tracking-wide">
              humza.rehman.779@gmail.com
            </span>
          </p>
          <p className="flex items-center gap-1.5 sm:gap-2 justify-center sm:justify-start group">
            <FontAwesomeIcon icon={faPhone} className="text-[#F1A208] text-xs sm:text-sm transform group-hover:scale-110 transition-all duration-300" />
            <span className="hover:text-[#F1A208] font-medium transition-all duration-300 cursor-pointer hover:tracking-wide">
              0310-8823011
            </span>
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-x-3 sm:gap-x-4 lg:gap-x-5 text-sm sm:text-base mt-1.5 sm:mt-0">
          <a href="#" className="text-gray-300 hover:text-blue-500 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="text-gray-300 hover:text-red-500 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
            <FontAwesomeIcon icon={faPinterest} />
          </a>
          <a href="#" className="text-gray-300 hover:text-pink-500 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>

    {/* Main Navigation */}
    <nav className="bg-gradient-to-r from-[#E48A07] via-[#E48A07] to-[#FFA500] text-white shadow-xl sticky top-0 z-50">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex flex-col sm:flex-row justify-between items-center">
        {/* Logo */}
        <div className="flex items-center justify-between w-full sm:w-auto">
          <a href="#" className="group">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wider transform transition-all duration-500 group-hover:scale-105 font-['Montserrat'] drop-shadow-lg">
              PETIO<span className="text-gray-900 font-['Montserrat'] group-hover:text-white transition-colors duration-500">LOGY</span>
            </h1>
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="sm:hidden text-xl text-gray-900 hover:text-white transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="transform hover:scale-110 transition-transform duration-300" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:block w-full sm:w-auto mt-3 sm:mt-0`}>
          <ul className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 lg:gap-8">
            <li className="relative group w-full sm:w-auto text-center">
              <a href="#" className="text-base sm:text-lg lg:text-xl font-semibold tracking-wide transition-all duration-300 group-hover:text-gray-900 block sm:inline-block">
                Home
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-900 rounded-full transition-all duration-300 group-hover:w-full opacity-80"></span>
              </a>
            </li>
            <li className="relative group w-full sm:w-auto text-center">
              <a href="#" className="text-base sm:text-lg lg:text-xl font-semibold tracking-wide transition-all duration-300 group-hover:text-gray-900 block sm:inline-block">
                Pets
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-900 rounded-full transition-all duration-300 group-hover:w-full opacity-80"></span>
              </a>
            </li>
            <li className="relative group w-full sm:w-auto text-center">
              <a href="#" className="text-base sm:text-lg lg:text-xl font-semibold tracking-wide transition-all duration-300 group-hover:text-gray-900 block sm:inline-block">
                About
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-900 rounded-full transition-all duration-300 group-hover:w-full opacity-80"></span>
              </a>
            </li>
            <li className="relative group w-full sm:w-auto text-center">
              <a href="#" className="text-base sm:text-lg lg:text-xl font-semibold tracking-wide transition-all duration-300 group-hover:text-gray-900 block sm:inline-block">
                Contact
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-900 rounded-full transition-all duration-300 group-hover:w-full opacity-80"></span>
              </a>
            </li>
          </ul>
        </div>

        {/* Sign Up Button */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:block mt-3 sm:mt-0 w-full sm:w-auto text-center`}>
          <button className="w-full sm:w-auto flex items-center justify-center text-sm sm:text-base bg-gray-900 px-5 sm:px-6 py-2 sm:py-2.5 font-semibold text-white rounded-xl shadow-lg hover:scale-110 transition-all duration-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 hover:shadow-2xl">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  </>);
}

export default Navbar;











