import React from "react";
import "./Hero.css";

function Hero(props) {
  return (
    <>
      <div className="container-fluid d-flex justify-content-between align-items-center mt-5" style={{
        flexDirection : props.isdirection ? "row-reverse" : "row"
      }}>
        <div className = {props.isdirection ? "me-5" : "ms-5"}>
          <div className="d-flex justify-content-start mb-4">
            <h1 className="fw-bold">{props.title}</h1>
          </div>
          <div>
            <p className="fs-4" style={{textAlign : "justify"}}>
              {props.description}
            </p>
          </div>
        </div>
        <div>
          <img
            src={props.img}
            alt="Audi A3"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
