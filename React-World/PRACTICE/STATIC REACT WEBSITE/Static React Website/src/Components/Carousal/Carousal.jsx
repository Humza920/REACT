import React from 'react'
import './Carousal.css'

function Carousal() {
  return (
    <div className="carousel">
      <div className="carousel-container">
        <div className="carousel-slide">
          <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop" alt="Luxury Car 1" />
          <div className="slide-content">
            <h2>Luxury Cars</h2>
            <p>Experience the ultimate in automotive luxury</p>
          </div>
        </div>
        <div className="carousel-slide">
          <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop" alt="Sports Car 2" />
          <div className="slide-content">
            <h2>Sports Cars</h2>
            <p>Feel the thrill of high-performance driving</p>
          </div>
        </div>
        <div className="carousel-slide">
          <img src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop" alt="Classic Car 3" />
          <div className="slide-content">
            <h2>Classic Cars</h2>
            <p>Timeless beauty and elegance</p>
          </div>
        </div>
        <div className="carousel-slide">
          <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop" alt="Modern Car 4" />
          <div className="slide-content">
            <h2>Modern Cars</h2>
            <p>Innovation meets style</p>
          </div>
        </div>
        <div className="carousel-slide">
          <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2066&auto=format&fit=crop" alt="Vintage Car 5" />
          <div className="slide-content">
            <h2>Vintage Cars</h2>
            <p>A piece of automotive history</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousal
