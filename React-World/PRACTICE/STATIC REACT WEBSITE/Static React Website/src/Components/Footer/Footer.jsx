import React from 'react'


function Footer() {
  return (
    <div className="container-fluid bg-dark text-white p-3">
      <div className="row ms-5 mt-5">
        <div className="col-md-4">
          <h4>Hamari Company</h4>
          <p>Hum apko behtareen products aur services dene ki koshish karte hain. Hamari team apki khidmat ke liye 24/7 hazir hai.</p>
        </div>
        <div className="col-md-4">
          <h4>Quick Links</h4>
          <ul className="list-unstyled">
            <li><a href="/" className="text-white text-decoration-none">Home</a></li>
            <li><a href="/products" className="text-white text-decoration-none">Products</a></li>
            <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
            <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h4>Rabta Karen</h4>
          <p>Address: Shop # 123, ABC Market, Karachi</p>
          <p>Phone: +92 321 1234567</p>
          <p>Email: info@company.com</p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12 text-center">
          <p className="mb-0">&copy; 2024 Company Name. Tamam haqooq mahfooz hain.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer