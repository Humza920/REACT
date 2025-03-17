import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4 className="footer-title">Our Company</h4>
            <p className="footer-description">We strive to provide you with the best products and services. Our team is available 24/7 to serve you.</p>
          </div>
          <div className="col-md-4">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/products" className="footer-link">Products</a></li>
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4 className="footer-title">Contact Us</h4>
            <div className="contact-info">
              <p><i className="fas fa-map-marker-alt"></i> Address: Shop # 123, ABC Market, Karachi</p>
              <p><i className="fas fa-phone"></i> Phone: +92 321 1234567</p>
              <p><i className="fas fa-envelope"></i> Email: info@company.com</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">&copy; 2024 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer