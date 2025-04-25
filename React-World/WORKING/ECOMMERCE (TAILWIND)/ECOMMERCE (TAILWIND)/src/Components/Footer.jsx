import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faYoutube,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { 
  faPhone, 
  faEnvelope, 
  faLocationDot 
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#E48A07]">Pet Paradise</h3>
            <p className="text-gray-400 text-sm">
              Your trusted partner in finding the perfect pet companion. We provide quality pets and excellent service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#1877F2] transition-colors">
                <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#1DA1F2] transition-colors">
                <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E1306C] transition-colors">
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF0000] transition-colors">
                <FontAwesomeIcon icon={faYoutube} className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0A66C2] transition-colors">
                <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#E48A07]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#E48A07] transition-colors text-sm">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#E48A07] transition-colors text-sm">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#E48A07] transition-colors text-sm">Our Pets</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#E48A07] transition-colors text-sm">Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#E48A07] transition-colors text-sm">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#E48A07]">About Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#E48A07] transition-colors text-sm">
                Health Guaranteed</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#E48A07] transition-colors text-sm">Professional Training</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#E48A07] transition-colors text-sm">Lifetime Care</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#E48A07] transition-colors text-sm">
                24/7 Support</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#E48A07] transition-colors text-sm">Documentation</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#E48A07]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-[#E48A07] mt-1" />
                <span className="text-gray-400 text-sm">+92 301-882-3011</span>
              </li>
              <li className="flex items-start space-x-3">
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-[#E48A07] mt-1" />
                <span className="text-gray-400 text-sm">humza.rehman.779@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5 text-[#E48A07] mt-1" />
                <span className="text-gray-400 text-sm">Area 36C Landhi Karachi Pakistan</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 PETIOLOGY. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#E48A07] transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#E48A07] transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-[#E48A07] transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;