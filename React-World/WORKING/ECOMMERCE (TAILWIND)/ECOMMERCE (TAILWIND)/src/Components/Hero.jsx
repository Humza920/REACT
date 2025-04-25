import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRibbon } from "@fortawesome/free-solid-svg-icons";


function Hero() {
  return (
    <>
      <div className="bg-black w-full min-h-screen flex justify-center items-center relative overflow-hidden font-[Poppins]">
  {/* Background image with gradient overlay */}
  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601758003122-53c40e686a19?q=80&w=2940')] bg-cover bg-center opacity-20 scale-105"></div>
  <div className="absolute inset-0 "></div>

  {/* Main Content */}
  <div className="relative z-10 w-full max-w-6xl px-6 py-16 text-center space-y-8">
    {/* Heading */}
    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
    Give <span className="text-amber-400">Love & Care</span> to Your New Best Friend
    </h1>

    {/* Subheading */}
    <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
    We provide not just pets, but lifelong companions. Healthy, trained, and full of love!
    </p>

    {/* Call to Action Buttons */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
  {/* Book Appointment Button */}
  <button className="bg-gradient-to-r from-amber-500 to-yellow-400 text-white font-semibold px-8 py-3 rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:from-amber-600 hover:to-yellow-500 hover:shadow-lg focus:outline-none">
  Explore Breeds →
  </button>

  {/* Our Services Button */}
  <button className="bg-white text-amber-700 font-semibold px-8 py-3 rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white/90 hover:text-amber-800 hover:shadow-lg focus:outline-none">
  Contact Us ↓
  </button>
</div>
{/* Trust indicators */}
<div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 text-white/90">
            {["Healthy Pets", "Certified Breeders", "Lifetime Support", "Affordable Prices"].map((text, idx) => (
              <div key={idx} className="flex items-center justify-center gap-3 border border-white/20 bg-white/5 backdrop-blur-sm py-4 px-6 rounded-xl hover:border-white/40 hover:bg-white/10 transition-all duration-300 group">
                <span className="text-amber-400 group-hover:text-amber-300 transition-colors duration-300">
                  <FontAwesomeIcon icon={faRibbon} className="w-5 h-5" />
                </span>
                <span className="font-medium group-hover:text-white transition-colors duration-300">{text}</span>
              </div>
            ))}
          </div>
  </div>
</div>

      


    </>
  );
}

export default Hero;
