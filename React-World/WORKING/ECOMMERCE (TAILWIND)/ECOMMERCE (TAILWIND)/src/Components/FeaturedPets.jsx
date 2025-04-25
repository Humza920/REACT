import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHeart, 
  faShoppingCart,
  faStar
} from "@fortawesome/free-solid-svg-icons";

function FeaturedPets() {
  return (
    <div className="bg-gradient-to-b from-amber-50 to-white py-16 md:py-24 relative overflow-hidden">
      {/* Subtle Paw Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTggMTJhNiA2IDAgMTAwIDEyIDYgNiAwIDAwMC0xMnptMCAyYTYgNiAwIDEwMC0xMiA2IDYgMCAwMDAgMTJ6bS0xMC00YTQgNCAwIDEwMCA4IDQgNCAwIDAwMC04em0yMC4wNSAwYTQgNCAwIDEwMCA4IDQgNCAwIDAwMC04eiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')]"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
            Our <span className="text-amber-600">Star Pets</span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Meet the adorable pets stealing hearts and ready for their forever homes.
          </p>
        </div>

        {/* Pets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Pet Card 1: Persian Cat */}
          <div className="group bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl relative">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=600&auto=format&fit=crop" 
                alt="Persian Cat" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-amber-600 hover:bg-amber-100/80 transition-all duration-300">
                  <FontAwesomeIcon icon={faHeart} className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-amber-600 hover:bg-amber-100/80 transition-all duration-300">
                  <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                New Arrival
              </div>
            </div>
            <div className="p-6 relative">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors">Persian Cat</h3>
                  <p className="text-gray-600 text-sm mt-1">Pure Breed</p>
                </div>
                <div className="flex items-center space-x-1">
                  <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-amber-400" />
                  <span className="text-gray-600 text-sm">4.9</span>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-2xl font-bold text-amber-600">$1,200</span>
                <button className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Pet Card 2: Golden Retriever */}
          <div className="group bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl relative">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=600&auto=format&fit=crop" 
                alt="Golden Retriever" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-amber-600 hover:bg-amber-100/80 transition-all duration-300">
                  <FontAwesomeIcon icon={faHeart} className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-amber-600 hover:bg-amber-100/80 transition-all duration-300">
                  <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Popular
              </div>
            </div>
            <div className="p-6 relative">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors">Golden Retriever</h3>
                  <p className="text-gray-600 text-sm mt-1">Pure Breed</p>
                </div>
                <div className="flex items-center space-x-1">
                  <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-amber-400" />
                  <span className="text-gray-600 text-sm">4.8</span>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-2xl font-bold text-amber-600">$1,500</span>
                <button className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Pet Card 3: African Grey Parrot */}
          <div className="group bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl relative">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1552728089-57681efc24a0?q=80&w=600&auto=format&fit=crop" 
                alt="African Grey Parrot" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-amber-600 hover:bg-amber-100/80 transition-all duration-300">
                  <FontAwesomeIcon icon={faHeart} className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-amber-600 hover:bg-amber-100/80 transition-all duration-300">
                  <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Exotic
              </div>
            </div>
            <div className="p-6 relative">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors">African Grey Parrot</h3>
                  <p className="text-gray-600 text-sm mt-1">Exotic Bird</p>
                </div>
                <div className="flex items-center space-x-1">
                  <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-amber-400" />
                  <span className="text-gray-600 text-sm">4.7</span>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-2xl font-bold text-amber-600">$800</span>
                <button className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Pet Card 4: Siberian Husky */}
          <div className="group bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl relative">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1591946614720-90a587da4a36?q=80&w=600&auto=format&fit=crop" 
                alt="Siberian Husky" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-amber-600 hover:bg-amber-100/80 transition-all duration-300">
                  <FontAwesomeIcon icon={faHeart} className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-amber-600 hover:bg-amber-100/80 transition-all duration-300">
                  <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Best Seller
              </div>
            </div>
            <div className="p-6 relative">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors">Siberian Husky</h3>
                  <p className="text-gray-600 text-sm mt-1">Pure Breed</p>
                </div>
                <div className="flex items-center space-x-1">
                  <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-amber-400" />
                  <span className="text-gray-600 text-sm">4.9</span>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-2xl font-bold text-amber-600">$1,800</span>
                <button className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Pet Card 5: British Shorthair */}
          <div className="group bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl relative">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop" 
                alt="British Shorthair" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-amber-600 hover:bg-amber-100/80 transition-all duration-300">
                  <FontAwesomeIcon icon={faHeart} className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-amber-600 hover:bg-amber-100/80 transition-all duration-300">
                  <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Fan Favorite
              </div>
            </div>
            <div className="p-6 relative">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors">British Shorthair</h3>
                  <p className="text-gray-600 text-sm mt-1">Pure Breed</p>
                </div>
                <div className="flex items-center space-x-1">
                  <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-amber-400" />
                  <span className="text-gray-600 text-sm">4.9</span>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-2xl font-bold text-amber-600">$1,400</span>
                <button className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Pet Card 6: Holland Lop Rabbit */}
          <div className="group bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl relative">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1591711598037-6e4d1eecf5e9?q=80&w=600&auto=format&fit=crop" 
                alt="Holland Lop Rabbit" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-amber-600 hover:bg-amber-100/80 transition-all duration-300">
                  <FontAwesomeIcon icon={faHeart} className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-amber-600 hover:bg-amber-100/80 transition-all duration-300">
                  <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Adorable
              </div>
            </div>
            <div className="p-6 relative">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors">Holland Lop Rabbit</h3>
                  <p className="text-gray-600 text-sm mt-1">Pure Breed</p>
                </div>
                <div className="flex items-center space-x-1">
                  <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-amber-400" />
                  <span className="text-gray-600 text-sm">4.6</span>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-2xl font-bold text-amber-600">$600</span>
                <button className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Pet Card 7: Red-Eared Slider */}
          <div className="group bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl relative">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1592311617768-74a36b1e3b94?q=80&w=600&auto=format&fit=crop" 
                alt="Red-Eared Slider" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-amber-600 hover:bg-amber-100/80 transition-all duration-300">
                  <FontAwesomeIcon icon={faHeart} className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-amber-600 hover:bg-amber-100/80 transition-all duration-300">
                  <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                New Arrival
              </div>
            </div>
            <div className="p-6 relative">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors">Red-Eared Slider</h3>
                  <p className="text-gray-600 text-sm mt-1">Exotic Pet</p>
                </div>
                <div className="flex items-center space-x-1">
                  <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-amber-400" />
                  <span className="text-gray-600 text-sm">4.5</span>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-2xl font-bold text-amber-600">$400</span>
                <button className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Pet Card 8: Syrian Hamster */}
          <div className="group bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl relative">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1584284041107-9dede985a6db?q=80&w=600&auto=format&fit=crop" 
                alt="Syrian Hamster" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-amber-600 hover:bg-amber-100/80 transition-all duration-300">
                  <FontAwesomeIcon icon={faHeart} className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-amber-600 hover:bg-amber-100/80 transition-all duration-300">
                  <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Cute & Small
              </div>
            </div>
            <div className="p-6 relative">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors">Syrian Hamster</h3>
                  <p className="text-gray-600 text-sm mt-1">Small Pet</p>
                </div>
                <div className="flex items-center space-x-1">
                  <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-amber-400" />
                  <span className="text-gray-600 text-sm">4.7</span>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-2xl font-bold text-amber-600">$300</span>
                <button className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Pet Card 9: Betta Fish */}
          <div className="group bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl relative">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1535591273668-578e311ae987?q=80&w=600&auto=format&fit=crop" 
                alt="Betta Fish" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-amber-600 hover:bg-amber-100/80 transition-all duration-300">
                  <FontAwesomeIcon icon={faHeart} className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-amber-600 hover:bg-amber-100/80 transition-all duration-300">
                  <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Vibrant
              </div>
            </div>
            <div className="p-6 relative">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors">Betta Fish</h3>
                  <p className="text-gray-600 text-sm mt-1">Aquatic Pet</p>
                </div>
                <div className="flex items-center space-x-1">
                  <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-amber-400" />
                  <span className="text-gray-600 text-sm">4.8</span>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-2xl font-bold text-amber-600">$250</span>
                <button className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-base sm:text-lg text-gray-600 mb-4 font-light">
            Can't find the perfect pet? Browse our full collection!
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-base sm:text-lg font-semibold rounded-full shadow-lg transition-all duration-300 hover:from-amber-600 hover:to-amber-700 hover:shadow-xl"
          >
            Explore All Pets
          </a>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPets;