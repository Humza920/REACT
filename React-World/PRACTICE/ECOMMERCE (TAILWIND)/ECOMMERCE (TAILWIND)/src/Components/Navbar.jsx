import React from "react";

function Navbar() {
  return (
<nav className="bg-gradient-to-r from-[#F1A208] to-[#E48A07] text-white flex items-center justify-center py-3 shadow-lg">
  <div className="container mx-auto py-3 flex justify-between items-center">

    <div>
      <h1 className="text-5xl font-extrabold tracking-wide">
        PETIO<span className="text-black">LOGY</span>
      </h1>
    </div>

    <div>
      <ul className="flex gap-x-10">
        <li className="relative group">
          <a
            href="#"
            className="text-2xl font-semibold tracking-wide transition-all duration-300 group-hover:text-black"
          >
            Home
          </a>
          <span className="absolute left-0 bottom-0 w-0 h-1 bg-black rounded-full transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <a
            href="#"
            className="text-2xl font-semibold tracking-wide transition-all duration-300 group-hover:text-black"
          >
            About
          </a>
          <span className="absolute left-0 bottom-0 w-0 h-1 bg-black rounded-full transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <a
            href="#"
            className="text-2xl font-semibold tracking-wide transition-all duration-300 group-hover:text-black"
          >
            Contact
          </a>
          <span className="absolute left-0 bottom-0 w-0 h-1 bg-black rounded-full transition-all duration-300 group-hover:w-full"></span>
        </li>
      </ul>
    </div>

    <div>
      <button className="flex items-center justify-center text-lg bg-gray-900 px-7 py-3 font-semibold text-white rounded-xl shadow-lg hover:scale-110 transition-transform duration-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700">
        Sign Up
      </button>
    </div>

  </div>
</nav>

  );
}

export default Navbar;
