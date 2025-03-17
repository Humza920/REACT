import React from 'react'
import Card from '../Card/Card'
import './Product.css'

const carData = [
  {
    title: "Mercedes-Benz S-Class",
    description: "Luxury sedan with advanced technology and supreme comfort",
    price: "$94,250",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600"
  },
  {
    title: "BMW M5",
    description: "High-performance luxury sedan with twin-turbo V8",
    price: "$103,500",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600"
  },
  {
    title: "Porsche 911",
    description: "Iconic sports car with precision engineering",
    price: "$101,200",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600"
  },
  {
    title: "Audi RS7",
    description: "Sportback combining luxury and performance",
    price: "$114,000",
    image: "https://images.unsplash.com/photo-1614026480209-cd9934144671?w=600"
  },
  {
    title: "Range Rover Sport",
    description: "Luxury SUV with exceptional off-road capability",
    price: "$83,000",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600"
  },
  {
    title: "Tesla Model S",
    description: "Electric luxury sedan with cutting-edge technology",
    price: "$94,990",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600"
  },
  {
    title: "Lexus LC 500",
    description: "Luxury coupe with stunning design and V8 power",
    price: "$93,050",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8"
  },
  {
    title: "Maserati Ghibli",
    description: "Italian luxury sedan with distinctive style",
    price: "$76,200",
    image: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f"
  },
  {
    title: "Bentley Continental GT",
    description: "Ultra-luxury grand tourer with exceptional craftsmanship",
    price: "$202,500",
    image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=600"
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