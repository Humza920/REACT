import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div className="card car-card h-100 shadow-sm">
      <div className="card-img-wrapper">
        <img src={props.image} alt={props.title} className="card-img-top" />
      </div>
      <div className="card-body">
        <h5 className="card-title fw-bold">{props.title}</h5>
        <p className="card-text text-muted">{props.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="price fw-bold text-primary">{props.price}</span>
          <button className="btn btn-outline-primary">View Details</button>
        </div>
      </div>
    </div>
  )
}

export default Card