import React from 'react'
import Card from '../Card/Card'
import './Product.css'

const carData = [
  {
    title: "Mercedes-Benz S-Class",
    description: "Luxury sedan with cutting-edge technology and supreme comfort",
    price: "$94,250",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "BMW M5",
    description: "High-performance luxury sedan with twin-turbo V8 engine",
    price: "$103,500",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Porsche 911",
    description: "Iconic sports car with precise engineering",
    price: "$101,200",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Audi RS7",
    description: "Sportback that combines luxury and performance",
    price: "$114,000",
    image: "https://images.unsplash.com/photo-1614026480209-cd9934144671?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Range Rover Sport",
    description: "Luxury SUV with exceptional off-road capabilities",
    price: "$83,000",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Tesla Model S",
    description: "Electric luxury sedan with cutting-edge technology",
    price: "$94,990",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Lexus LC 500",
    description: "Luxury coupe with stunning design and V8 power",
    price: "$93,050", 
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2066&auto=format&fit=crop"
  },
  {
    title: "Maserati Ghibli",
    description: "Italian luxury sedan with distinctive style", 
    price: "$76,200",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Bentley Continental GT",
    description: "Ultra-luxury grand tourer with exceptional craftsmanship",
    price: "$202,500",
    image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=2070&auto=format&fit=crop"
  }
];

function Product() {
  return (
    <div className="products-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Featured Luxury Cars</h2>
        <div className="row g-4">
          {carData.map((car, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <Card 
                title={car.title}
                description={car.description}
                price={car.price}
                image={car.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product