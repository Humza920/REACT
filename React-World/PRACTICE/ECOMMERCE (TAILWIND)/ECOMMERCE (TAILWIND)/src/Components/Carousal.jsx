import React from "react";

function Carousel() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-500 via-[#F1A208] to-orange-600 h-[700px] flex items-center overflow-hidden">
        
        {/* Background Blurry Circles */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-white/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-white/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">

            {/* Left Side Content */}
            <div className="md:w-1/2 text-white space-y-8">
              
              {/* Welcome Badge */}
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-sm font-semibold hover:scale-105 transition-all duration-300 cursor-pointer">
                <span className="text-yellow-200">🔥</span>
                <span>Biggest Sale on KHAREEDO.PK</span>
                <span className="text-yellow-200">🚀</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-5">
                <h1 className="text-7xl font-extrabold leading-tight">
                  <span className="bg-gradient-to-r from-white via-yellow-300 to-white bg-clip-text text-transparent cursor-pointer">
                    Your Shopping Hub
                  </span>
                  <br />
                  <span className="relative inline-block cursor-pointer">
                    <span className="bg-gradient-to-r from-yellow-200 via-white to-yellow-200 bg-clip-text text-transparent">
                      KHAREEDO.PK
                    </span>
                    <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-yellow-200 via-white to-yellow-200 rounded-full"></div>
                  </span>
                </h1>
                <p className="text-xl text-white/90 max-w-md leading-relaxed">
                  Pakistan's most trusted online shopping platform with unbeatable deals.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-5">
                <button className="group bg-white text-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 cursor-pointer">
                  <span>SHOP NOW</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
                <button className="group border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 cursor-pointer">
                  <span>LEARN MORE</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>

              {/* Customer Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center cursor-pointer">
                  <div className="text-3xl font-bold mb-1">1M+</div>
                  <div className="text-sm text-white/80">Happy Customers</div>
                </div>
                <div className="text-center cursor-pointer">
                  <div className="text-3xl font-bold mb-1">50K+</div>
                  <div className="text-sm text-white/80">Products</div>
                </div>
                <div className="text-center cursor-pointer">
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-sm text-white/80">Support</div>
                </div>
              </div>

            </div>

            {/* Right Side Product Images */}
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative flex justify-center">
                
                {/* Floating Circles */}
                <div className="absolute -top-8 -left-8 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>

                {/* Product Images Grid */}
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-5">
                    <img 
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                      alt="Smart Watch"
                      className="rounded-xl shadow-xl w-full h-48 object-cover transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                      alt="Headphones"
                      className="rounded-xl shadow-xl w-full h-48 object-cover transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                  <div className="space-y-5 pt-8">
                    <img 
                      src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
                      alt="Camera"
                      className="rounded-xl shadow-xl w-full h-48 object-cover transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb"
                      alt="Phone"
                      className="rounded-xl shadow-xl w-full h-48 object-cover transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Floating Stickers */}
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl transform rotate-6 hover:rotate-0 transition-transform duration-300 cursor-pointer">
                  <div className="text-orange-500 text-2xl">🎁</div>
                  <p className="text-sm font-semibold">Special Offers</p>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-300 cursor-pointer">
                  <div className="text-orange-500 text-2xl">⭐</div>
                  <p className="text-sm font-semibold">Best Deals</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Carousel;
