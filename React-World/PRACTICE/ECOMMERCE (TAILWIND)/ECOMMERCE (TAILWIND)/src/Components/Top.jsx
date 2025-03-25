import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faTwitter, faPinterest } from "@fortawesome/free-brands-svg-icons";

function Top() {
  return (
    <div className="bg-gray-100 text-gray-700 py-3 shadow-md">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-12">
        
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-8 text-base">
          <p className="flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-500" />
            <span className="hover:text-[#F1A208] font-medium transition duration-300 cursor-pointer">
              humza.rehman.779@gmail.com
            </span>
          </p>
          <p className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} className="text-gray-500" />
            <span className="hover:text-[#F1A208] font-medium transition duration-300 cursor-pointer">
              0310-8823011
            </span>
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-x-5 text-xl mt-3 md:mt-0">
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

