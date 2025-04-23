import React from 'react';

function Mid() {
  return (
    <div className="bg-gradient-to-b from-amber-600 to-amber-500 py-20 text-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzQyLjYyNyAxMCAzNiAxMGMtNi42MjggMC0xMiA1LjM3My0xMiAxMnM1LjM3MiAxMiAxMiAxMnptMCAyYy03LjczMiAwLTE0LTYuMjY4LTE0LTE0czYuMjY4LTE0IDE0LTE0IDE0IDYuMjY4IDE0IDE0LTYuMjY4IDE0LTE0IDE0eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=')]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Heading Section */}
        <div className="flex flex-col items-center space-y-4">
          <p className="text-3xl sm:text-4xl font-bold text-white tracking-wide">
            We Specialize In Our Passion
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-black max-w-3xl px-4">
            Caring for Pets & Sheltering
          </h1>
        </div>

        {/* Cards Section */}
        <div className="mt-16 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-6 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="group bg-white/90 backdrop-blur-sm text-center p-8 rounded-2xl shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-white">
            <div className="overflow-hidden rounded-xl mb-6">
              <img
                src="./src/assets/parrot.webp"
                alt="Scarlet Macaw"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <h2 className="text-2xl font-bold text-amber-600 mb-4">Scarlet Macaw</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Id volutpat lacus laoreet non curabitur. Diam phasellus vestibulum lorem sed.
            </p>
            <button className="group relative px-8 py-3 bg-amber-500 text-white rounded-full text-lg font-semibold transition-all duration-300 hover:bg-amber-600 hover:scale-105 hover:shadow-lg">
              <span className="relative z-10 flex items-center gap-2">
                Shop Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>

          {/* Card 2 */}
          <div className="group bg-white/90 backdrop-blur-sm text-center p-8 rounded-2xl shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-white">
            <div className="overflow-hidden rounded-xl mb-6">
              <img
                src="./src/assets/dog.webp"
                alt="Golden Retriever"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <h2 className="text-2xl font-bold text-amber-600 mb-4">Golden Retriever</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              A friendly and loyal companion for all pet lovers.
            </p>
            <button className="group relative px-8 py-3 bg-amber-500 text-white rounded-full text-lg font-semibold transition-all duration-300 hover:bg-amber-600 hover:scale-105 hover:shadow-lg">
              <span className="relative z-10 flex items-center gap-2">
                Shop Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>

          {/* Card 3 */}
          <div className="group bg-white/90 backdrop-blur-sm text-center p-8 rounded-2xl shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-white">
            <div className="overflow-hidden rounded-xl mb-6">
              <img
                src="./src/assets/cat.webp"
                alt="Persian Cat"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <h2 className="text-2xl font-bold text-amber-600 mb-4">Persian Cat</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Elegant and beautiful, Persian cats are a favorite choice.
            </p>
            <button className="group relative px-8 py-3 bg-amber-500 text-white rounded-full text-lg font-semibold transition-all duration-300 hover:bg-amber-600 hover:scale-105 hover:shadow-lg">
              <span className="relative z-10 flex items-center gap-2">
                Shop Now
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
  );
}

export default Mid;
