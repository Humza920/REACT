import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faTwitter, faPinterest } from "@fortawesome/free-brands-svg-icons";

function Top() {
  return (
    <div className="bg-gray-100 text-gray-700 py-3 shadow-md">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-12 gap-2">
        
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm sm:text-base text-center sm:text-left">
          <p className="flex items-center gap-2 justify-center sm:justify-start">
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 text-lg" />
            <span className="hover:text-[#F1A208] font-medium transition duration-300 cursor-pointer">
              humza.rehman.779@gmail.com
            </span>
          </p>
          <p className="flex items-center gap-2 justify-center sm:justify-start">
            <FontAwesomeIcon icon={faPhone} className="text-gray-500 text-lg" />
            <span className="hover:text-[#F1A208] font-medium transition duration-300 cursor-pointer">
              0310-8823011
            </span>
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-x-4 sm:gap-x-5 text-lg sm:text-xl mt-2 sm:mt-0">
          <a href="#" className="text-gray-500 hover:text-blue-600 transition duration-300">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-400 transition duration-300">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="text-gray-500 hover:text-red-600 transition duration-300">
            <FontAwesomeIcon icon={faPinterest} />
          </a>
          <a href="#" className="text-gray-500 hover:text-pink-500 transition duration-300">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Top;
