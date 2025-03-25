const Carousal = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        src="./src/assets/IMG@.png"
        alt="Dogs training center"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-start justify-center text-white pl-46">
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
          <button className="bg-[#FF5722] text-white px-8 py-3 rounded-md font-bold text-[15px] hover:bg-[#E64A19] transition">
            LEARN MORE
          </button>
          <button className="bg-white text-black px-8 py-3 rounded-md font-bold text-[15px] hover:bg-gray-200 transition">
            PURCHASE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousal;
