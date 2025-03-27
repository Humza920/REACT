import React from 'react'

function Hero() {
  return (
    <div className="relative w-fit h-screen">
      <img
        src="./src/assets/HERO.webp"
        alt="Dogs training center"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-start justify-center text-black pl-46 mt-[150px]">
        {/* Main Heading */}
        <h1 className="text-[80px] leading-[100px] font-extrabold tracking-tight mb-4 mt-[-350px]">
        A <span className='text-amber-600'>Shelter Pet Wants</span> <br />To Meet You!
        </h1>
        
        
        {/* Buttons */}
        
          <button className="text-amber-600 mt-2 border-3  px-10 py-4 rounded-4xl font-bold text-[23px] cursor-pointer hover:bg-amber-600 hover:text-white transition">
            Shop Now
          </button>
        
      </div>
    </div>
  )
}

export default Hero