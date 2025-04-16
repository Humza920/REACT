import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-xl font-bold">MySite</h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Menu Links */}
    {isOpen && (
      <div className="md:hidden px-4 pb-4 space-y-2">
        <a href="#" className="block hover:text-gray-300">Home</a>
        <a href="#" className="block hover:text-gray-300">About</a>
        <a href="#" className="block hover:text-gray-300">Services</a>
        <a href="#" className="block hover:text-gray-300">Contact</a>
      </div>
    )}
  </nav>
  )
}

export default Navbar