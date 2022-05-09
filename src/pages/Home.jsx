import React from 'react';
import Products from './Products';
import backgroundPhoto from "../assets/backgroundmain.jpg";

export default function Home() {
  return (
    <div className="hero">
<div className="card bg-dark text-white border-0">
  <img src={backgroundPhoto} className="card-img" alt="Background" height= "550px"/>
  <div className="card-img-overlay d-flex justify-content-center flex-column ">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0 text-shadow">
              CHECK OUT THE NEW ARRIVALS
            </h5>
            <p className="card-text fs-2 text-shadow">
              WOMEN'S BATHING SUITS ON SALE!
            </p>
            <NavLink
              to="/products"
              className="btn btn-danger fs-3 fw-bold py-2 px-5"
            >
              Shop Now!
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

