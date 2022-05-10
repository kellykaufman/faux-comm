import React from 'react';
// Imports
import { NavLink } from "react-router-dom";
import backgroundPhoto from "../assets/backgroundmain.jpg";

const Home = () => {
  return (
    <div className="hero">
<div className="card bg-dark text-white border-0">
  <img src={backgroundPhoto} className="card-img" alt="Background" height= "700px"/>
  <div className="card-img-overlay d-flex justify-content-center flex-column ">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0 text-shadow" id="font3">
              CHECK OUT THE NEW ARRIVALS
            </h5>
            <p className="card-text fs-2 text-shadow" id="font1">
              WOMEN'S BATHING SUITS ON SALE!
            </p>
            <NavLink
              to="/products"
              className="btn btn-primary fs-3 fw-bold py-2 px-5" id="font2"
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

