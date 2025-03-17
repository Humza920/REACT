import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.navbar.png'


function Navbar() {
  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <img src={logo} alt="logo" className="navbar-logo" />
            <ul className="navbar-menu d-flex justify-content-end align-items-center mt-3">
                <li className="navbar-item">
                Home
                </li>
                <li className="navbar-item">
                About
                </li>
                <li className="navbar-item">
                Contact
                </li>
                <li className="navbar-item">
                Services
                </li>

            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar