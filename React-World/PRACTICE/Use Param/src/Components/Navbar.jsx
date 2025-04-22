import React from 'react'
import { Link } from 'react-router-dom'

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
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/services" className="hover:text-gray-300">Services</Link>
          
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar