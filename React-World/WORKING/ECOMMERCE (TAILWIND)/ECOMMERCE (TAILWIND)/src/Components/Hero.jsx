import React from "react";

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
    <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-white/80 text-sm sm:text-base">
      {["Healthy Pets", "Certified Breeders", "Lifetime Support", "Affordable Prices"].map((text, idx) => (
        <div key={idx} className="flex items-center justify-center gap-2 border border-white/10 bg-white/5 backdrop-blur-sm py-2 px-4 rounded-lg hover:border-white/30 hover:bg-white/10 transition duration-200">
          <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
          <span>{text}</span>
        </div>
      ))}
    </div>
  </div>
</div>

      


    </>
  );
}

export default Hero;
