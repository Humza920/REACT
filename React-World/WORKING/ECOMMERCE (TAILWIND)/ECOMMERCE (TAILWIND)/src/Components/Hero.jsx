import React from "react";

function Hero() {
  return (
    <>
      <div className="relative w-full h-[90vh] sm:h-screen overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="./src/assets/IMG@.png"
            alt="Dogs training center"
            className="w-full h-full object-cover transform scale-105 hover:scale-100 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-start justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
          {/* Main Heading */}
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight sm:leading-snug md:leading-normal text-white">
              <span className="text-amber-500 hover:text-amber-400 transition-colors duration-300">
                Shelter Pet Wants
              </span>{" "}
              <br className="hidden sm:block" />
              To Meet You!
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
              Find your perfect companion and give them a forever home. 
              <br/>
              Our 
              shelter pets are waiting to bring joy to your life.
            </p>

            {/* Buttons Container */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6">
              <button className="group relative px-8 sm:px-10 py-3 sm:py-4 bg-amber-500 text-white rounded-full font-bold text-lg sm:text-xl hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/30">
                <span className="relative z-10 flex items-center gap-2">
                  Shop Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>

              <button className="group relative px-8 sm:px-10 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg sm:text-xl hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute bottom-8 right-8 flex flex-col gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 transform hover:scale-110 transition-all duration-300 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 transform hover:scale-110 transition-all duration-300 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Second Hero Section */}
      <div className="relative w-full h-[80vh] sm:h-[90vh] overflow-hidden">
        <img 
          src="./src/assets/HERO.webp" 
          alt="Pet Care" 
          className="w-full h-full object-cover transform scale-105 hover:scale-100 transition-transform duration-700"
        />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 text-black ">
          <div className="absolute inset-0  ml-12 flex justify-start w-full sm:w-1/2 lg:w-1/3 p-8 sm:p-12 lg:p-16">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
                Premium Pet Care Services
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-amber-500/20 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-black text-lg">24/7 Veterinary Support</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-amber-500/20 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-black text-lg">Professional Grooming</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-amber-500/20 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-black text-lg">Emergency Care Available</p>
                </div>
              </div>
              
              <button className="group relative px-8 py-4 bg-amber-500 text-white rounded-full font-bold text-lg hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/30">
                <span className="relative z-10 flex items-center gap-2">
                  Book Appointment
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
