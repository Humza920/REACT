const Carousal = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        src="./src/assets/IMG@.png"
        alt="Dogs training center"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-start justify-center text-white pl-46 mt-[150px]">
        {/* Main Heading */}
        <h1 className="text-[165px] leading-[150px] font-bold tracking-tight mb-4 mt-[-250px]">
          Man's best<br />friend!
        </h1>
        
        {/* Subheading */}
        <p className="text-[35px] leading-[40px]  font-bold  mb-8">
          Welcome to the no.1 rated pets training & breeding <br />center in Sydney.
        </p>
        
        {/* Buttons */}
        <div className="flex gap-4">
          <button className="bg-amber-600 text-white px-10 py-4 rounded-4xl font-bold text-[20px] cursor-pointer hover:bg-white  hover:text-[#FF5722] transition">
            LEARN MORE
          </button>
          <button className="bg-white text-amber-600 px-10 py-4 rounded-4xl font-bold text-[20px] cursor-pointer hover:bg-amber-600 hover:text-white transition">
            PURCHASE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousal;