import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faShieldAlt, 
  faGraduationCap, 
  faShoppingCart, 
  faHeadset, 
  faFileAlt, 
  faClock 
} from "@fortawesome/free-solid-svg-icons";

function Features() {
  return (
    <div className="bg-gradient-to-b from-amber-600 to-amber-400 py-16 md:py-24 relative overflow-hidden">
      {/* Subtle Paw Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTggMTJhNiA2IDAgMTAwIDEyIDYgNiAwIDAwMC0xMnptMCAyYTYgNiAwIDEwMC0xMiA2IDYgMCAwMDAgMTJ6bS0xMC00YTQgNCAwIDEwMCA4IDQgNCAwIDAwMC04em0yMC4wNSAwYTQgNCAwIDEwMCA4IDQgNCAwIDAwMC04eiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')]"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-white max-w-3xl mx-auto leading-relaxed font-light">
            Exceptional care and quality for your furry companions, every step of the way.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Feature 1: Health Guaranteed */}
          <div className="group bg-white/95 rounded-3xl shadow-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white border border-amber-200/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-500/30 transition-colors duration-300">
              <FontAwesomeIcon icon={faShieldAlt} className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="relative text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors duration-300">Health Guaranteed</h3>
            <p className="relative text-gray-600 text-sm sm:text-base leading-relaxed">
              Complete health records and vaccinations for every pet.
            </p>
          </div>

          {/* Feature 2: Professional Training */}
          <div className="group bg-white/95 rounded-3xl shadow-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white border border-amber-200/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-500/30 transition-colors duration-300">
              <FontAwesomeIcon icon={faGraduationCap} className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="relative text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors duration-300">Professional Training</h3>
            <p className="relative text-gray-600 text-sm sm:text-base leading-relaxed">
              Basic obedience training included for a smooth transition.
            </p>
          </div>

          {/* Feature 3: Starter Kit */}
          <div className="group bg-white/95 rounded-3xl shadow-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white border border-amber-200/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-500/30 transition-colors duration-300">
              <FontAwesomeIcon icon={faShoppingCart} className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="relative text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors duration-300">Starter Kit</h3>
            <p className="relative text-gray-600 text-sm sm:text-base leading-relaxed">
              Free essentials to kickstart your pet journey.
            </p>
          </div>

          {/* Feature 4: 24/7 Support */}
          <div className="group bg-white/95 rounded-3xl shadow-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white border border-amber-200/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-500/30 transition-colors duration-300">
              <FontAwesomeIcon icon={faHeadset} className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="relative text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors duration-300">24/7 Support</h3>
            <p className="relative text-gray-600 text-sm sm:text-base leading-relaxed">
              Always here for your pet-related questions.
            </p>
          </div>

          {/* Feature 5: Documentation */}
          <div className="group bg-white/95 rounded-3xl shadow-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white border border-amber-200/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-500/30 transition-colors duration-300">
              <FontAwesomeIcon icon={faFileAlt} className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="relative text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors duration-300">Documentation</h3>
            <p className="relative text-gray-600 text-sm sm:text-base leading-relaxed">
              Full pedigree and documentation provided.
            </p>
          </div>

          {/* Feature 6: Lifetime Care */}
          <div className="group bg-white/95 rounded-3xl shadow-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white border border-amber-200/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-500/30 transition-colors duration-300">
              <FontAwesomeIcon icon={faClock} className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="relative text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors duration-300">Lifetime Care</h3>
            <p className="relative text-gray-600 text-sm sm:text-base leading-relaxed">
              Ongoing guidance for your pet’s happiness.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-base sm:text-lg text-white mb-4 font-light">
            Ready to welcome a pet into your family?
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-base sm:text-lg font-semibold rounded-full shadow-lg transition-all duration-300 hover:from-amber-600 hover:to-amber-700 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50"
          >
            Learn More About us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Features;










