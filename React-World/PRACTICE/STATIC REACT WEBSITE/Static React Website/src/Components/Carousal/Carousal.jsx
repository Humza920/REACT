import React from 'react'
import './Carousal.css'

function Carousal() {
  return (
    <section className="hero">
    <div className="hero-container">
      <div className="carousel">
        <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop" alt="Luxury Car 1" />
        <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop" alt="Sports Car 2" />
        <img src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop" alt="Classic Car 3" />
        <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop" alt="Modern Car 4" />
        <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2066&auto=format&fit=crop" alt="Vintage Car 5" />
      </div>
    </div>
        </section>
  )
}

export default Carousal;
