import React from 'react';

function Mid() {
  return (
    <div className="bg-amber-600 py-20 text-center">
      {/* Heading Section */}
      <div className="flex flex-col items-center">
        <p className="text-4xl font-bold text-white">We Specialize In Our Passion</p>
        <h1 className="text-6xl font-extrabold leading-[70px] text-black max-w-3xl">
          Caring for Pets & Sheltering
        </h1>
      </div>

      {/* Cards Section */}
      <div className="mt-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 px-6 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white text-center p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
          <div className="overflow-hidden rounded-lg">
            <img
              src="./src/assets/parrot.webp"
              alt="Scarlet Macaw"
              className="w-full h-auto transition-transform duration-500 hover:scale-110"
            />
          </div>
          <h2 className="text-2xl font-bold text-[#8A4B32] mt-4">Scarlet Macaw</h2>
          <p className="text-gray-600 text-lg mt-2 px-3">
            Id volutpat lacus laoreet non curabitur. Diam phasellus vestibulum lorem sed.
          </p>
          <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-orange-600 hover:scale-105">
            Shop Now
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-center p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
          <div className="overflow-hidden rounded-lg">
            <img
              src="./src/assets/dog.webp"
              alt="Golden Retriever"
              className="w-full h-auto transition-transform duration-500 hover:scale-110"
            />
          </div>
          <h2 className="text-2xl font-bold text-[#8A4B32] mt-4">Golden Retriever</h2>
          <p className="text-gray-600 text-sm mt-2 px-3">
            A friendly and loyal companion for all pet lovers.
          </p>
          <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-orange-600 hover:scale-105">
            Shop Now
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white text-center p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
          <div className="overflow-hidden rounded-lg">
            <img
              src="./src/assets/cat.webp"
              alt="Persian Cat"
              className="w-full h-auto transition-transform duration-500 hover:scale-110"
            />
          </div>
          <h2 className="text-2xl font-bold text-[#8A4B32] mt-4">Persian Cat</h2>
          <p className="text-gray-600 text-sm mt-2 px-3">
            Elegant and beautiful, Persian cats are a favorite choice.
          </p>
          <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-orange-600 hover:scale-105">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mid;
