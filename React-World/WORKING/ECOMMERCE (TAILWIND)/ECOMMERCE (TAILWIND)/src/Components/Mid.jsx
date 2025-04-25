import React from 'react';

function MidSection() {
  return (
    <div className="bg-gradient-to-b from-amber-100 to-gray-50 py-16 md:py-24 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTggMThhMiAyIDAgMTAwIDQgMiAyIDAgMDAwLTQiIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')]"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
            Meet Your New Best Friend
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From playful pups to cuddly kittens, find the perfect pet to fill your home with love.
          </p>
        </div>

        {/* Featured Pets/Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Card 1: Puppy */}
          <div className="group bg-white rounded-3xl shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl relative">
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
                alt="Cute Puppy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 bg-amber-400 text-white text-xs font-semibold px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                New Arrivals
              </div>
            </div>
            <div className="p-5 sm:p-6 text-center">
              <h3 className="text-lg sm:text-xl font-bold text-amber-600 mb-2">Playful Puppies</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                Loyal and energetic friends ready for adventure.
              </p>
              <a
                href="#"
                className="inline-block px-5 py-2 bg-amber-500 text-white text-sm font-semibold rounded-full transition-all duration-300 hover:bg-amber-600 hover:shadow-md"
              >
                Meet Them
              </a>
            </div>
          </div>

          {/* Card 2: Kitten */}
          <div className="group bg-white rounded-3xl shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl relative">
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
                alt="Cute Kitten"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 bg-amber-400 text-white text-xs font-semibold px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Fan Favorite
              </div>
            </div>
            <div className="p-5 sm:p-6 text-center">
              <h3 className="text-lg sm:text-xl font-bold text-amber-600 mb-2">Charming Kittens</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                Cuddly companions for cozy moments at home.
              </p>
              <a
                href="#"
                className="inline-block px-5 py-2 bg-amber-500 text-white text-sm font-semibold rounded-full transition-all duration-300 hover:bg-amber-600 hover:shadow-md"
              >
                Meet Them
              </a>
            </div>
          </div>

          {/* Card 3: Bird */}
          <div className="group bg-white rounded-3xl shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl relative">
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
                alt="Colorful Bird"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 bg-amber-400 text-white text-xs font-semibold px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Exotic
              </div>
            </div>
            <div className="p-5 sm:p-6 text-center">
              <h3 className="text-lg sm:text-xl font-bold text-amber-600 mb-2">Vibrant Birds</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                Cheerful singers to liven up your space.
              </p>
              <a
                href="#"
                className="inline-block px-5 py-2 bg-amber-500 text-white text-sm font-semibold rounded-full transition-all duration-300 hover:bg-amber-600 hover:shadow-md"
              >
                Meet Them
              </a>
            </div>
          </div>

          {/* Card 4: Adoption Services */}
          <div className="group bg-amber-500 rounded-3xl shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl relative">
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560743641-3914f2c45636?q=80&w=600&auto=format&fit=crop"
                alt="Adoption Services"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 bg-white text-amber-500 text-xs font-semibold px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Caring
              </div>
            </div>
            <div className="p-5 sm:p-6 text-center">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Adoption Services</h3>
              <p className="text-white text-sm sm:text-base mb-4 leading-relaxed">
                Find your forever friend with our supportive process.
              </p>
              <a
                href="#"
                className="inline-block px-5 py-2 bg-white text-amber-500 text-sm font-semibold rounded-full transition-all duration-300 hover:bg-gray-100 hover:shadow-md"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Secondary CTA Section */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-base sm:text-lg text-gray-600 mb-4">
            Ready to bring home a new companion?
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3.5 bg-amber-600 text-white text-base sm:text-lg font-semibold rounded-full shadow-lg transition-all duration-300 hover:bg-amber-700 hover:shadow-xl"
          >
            Explore All Pets
          </a>
        </div>
      </div>
    </div>
  );
}

export default MidSection;