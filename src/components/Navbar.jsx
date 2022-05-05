import React from 'react';
import { NavLink } from 'react-router-dom';

export default function  () {
  return (
   
    <div><nav class="navbar navbar-expand-lg navbar-light bg-light bg-white py-3 shadow-sm">
    <div class="container">
      <NavLink class="navbar-brand fw-bold fs-4" to="">Faux Comm</NavLink>
      <button 
      class="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarSupportedContent" 
      aria-controls="navbarSupportedContent" 
      aria-expanded="false" 
       aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> 
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
       
        <li class="nav-item">
            <NavLink class="nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>
        <li class="nav-item">
            <NavLink class="nav-link" to="/products">Products</NavLink>
          </li>
        <li class="nav-item">
            <NavLink class="nav-link" to="/about">About</NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/contact">Contact</NavLink>
          </li>
        </ul>
     <div className="buttons">
       <a href="" className="btn btn-outline-dark"> 
       <i className="fa fa-sign-in-me-1" ></i>Login</a>
    <a href="" className="btn btn-outline-dark ms-2"> 
    <i className="fa-solid fa-user-plus me-1"></i>Register</a>
    <a href="" className="btn btn-outline-dark"> <i className="fa fa-shopping-cart me-1" ></i>Cart(0)</a>
    </div>
    </div>
    </div>
  </nav> 
  </div>

  );
};
