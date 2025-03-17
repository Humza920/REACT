import React from 'react'
import Navbar from './Components/NAVBAR/Navbar'
import Hero from './Components/Hero/Hero'
import Carousal from './Components/Carousal/Carousal'
import Product from './Components/Products/Product'
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <>
    <Navbar />
    <Carousal />
    <Hero title="Audi A3" description="The Audi A3 is a luxury compact car known for its stylish design and smooth performance. The A3 comes with efficient engine options, providing a balance of power and fuel economy. It includes advanced safety features, making it a reliable choice for modern drivers. The interior showcases cutting-edge technology, including a virtual cockpit, dual touchscreen MMI system, and premium materials throughout the cabin." img="https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCElzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grzwSWC7XPNk9YO-lHtbAx79ye33EdrxhYgboYtYAEcyGQ4HsDJDiVGMAkyLwCEJEA4jM5MTMwsFYAGZEMICCoYUAkEGZ3cQ1x9PQJBgASieoX2QAAAA.webp?wid=180"/>
    
    <Hero title="Lamborghini" isdirection={true} description="Lamborghini is an Italian luxury sports car brand known for its high-performance engines and bold, aerodynamic designs. Founded in 1963, it has produced iconic models like the Aventador, Huracán, and Urus. Lamborghini cars are famous for their powerful V10 and V12 engines, delivering extreme speed and acceleration. The brand is also known for its aggressive styling, sharp lines, and scissor doors on some models" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaZ9lmE4hnNPFS20p3kdF30Ai3tXZGTVCE7w&s"/>

    <Hero title="LandCruiser" description="The Toyota Land Cruiser stands as an iconic symbol of automotive excellence, combining legendary reliability with unmatched off-road capability. This flagship SUV boasts a robust body-on-frame construction and features a powerful V8 engine or efficient twin-turbo V6, delivering impressive performance both on and off the road. The interior offers premium comfort with three rows of seating, high-quality materials, and advanced technology including multi-terrain monitoring systems and premium audio." img="https://tse1.mm.bing.net/th?id=OIP.TQxju5lZEVMpvmn69Y-x7wHaFj&pid=Api&P=0&h=220"/>

    <Product />
    <Footer />
    </>
  )
}

export default App