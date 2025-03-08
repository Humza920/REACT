import React from 'react'
import "./Card.css"
const Card = (prop) => {
    console.log(prop);
  return (
    <>
    <div className="card">
        <div className="card-body">
            <h2 className="card-title">{prop.name}</h2>
            <p className="card-text">{prop.text}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                
        </div>
    </div>
    </>
  )
}

export default Card