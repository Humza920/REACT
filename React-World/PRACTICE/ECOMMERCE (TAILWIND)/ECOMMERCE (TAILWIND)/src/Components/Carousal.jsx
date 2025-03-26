const Carousal = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        src="./src/assets/IMG@.png"
        alt="Dogs training center"
        className="w-full h-full object-cover"
      />

      {/* Mobile Background Image (hidden on desktop) - Using direct link */}
      <img
        src="https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        alt="Dog training center mobile"
        className="md:hidden w-full h-full object-cover absolute inset-0"
      />

      <div className="absolute inset-0 flex flex-col items-start justify-center text-white pl-46 mt-[150px]">
        {/* Main Heading */}
        <h1 className="text-[165px] leading-[148px] font-bold tracking-tight mb-4 mt-[-100px]">
          Man's best<br />friend!
        </h1>
        
        {/* Subheading */}
        <p className="text-[35px] leading-[40px] font-medium mb-8">
          Welcome to the no.1 rated pets training & breeding <br />center in Sydney.
        </p>
        
        {/* Buttons */}
        <div className="flex gap-4">
          <button className="bg-[#FF5722] text-white px-10 py-4 rounded-4xl font-bold text-[20px] cursor-pointer hover:bg-white  hover:text-[#FF5722] transition">
            LEARN MORE
          </button>
          <button className="bg-white text-[#FF5722] px-10 py-4 rounded-4xl font-bold text-[20px] cursor-pointer hover:bg-[#FF5722] hover:text-white transition">
            PURCHASE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousal;
