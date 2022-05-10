import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate, NavLink } from "react-router-dom";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  let subTotal = 0;
  // used for loop to do calculations on the cart 
  for (let i = 0; i < cart.length; i++) {
    subTotal += cart[i].price*cart[i].quantity;
  }
  // created function that clears the cart state
  const ClearCart = () => {
    const [cart, setCart] = useState([])
    setCart([])
  }
  
  return (
    <div>
        <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-12 ">
            <h1 className="display-3 fw-bolder text-center text-shadow-navlinks" id="font2">
              Checkout
            </h1>
            <hr />
          </div>
        </div>
        </div>
        <div className="row">
          <div className="col-md-6">
          {cart.map((item, index) => (
          <div className="container p-5">
            <div className="row">
              <div className="col-md-2" key={index}>
                <img
                  src={item.image}
                  alt={item.title}
                  height="100px"
                  width="100px"
                />
              </div>
              <div className="col-md-4">
                <h4 className="text-uppercase fw-bold text-black">
                  {item.title}
                </h4>
                <p className="lead fw-bold">Quantity: {item.quantity}</p>
              </div>
              <div className="col-md-6 d-flex justify-content-end  mt-5 mb-5" id="cartsubtotal">
                ${(item.price*item.quantity).toFixed(2)}
              </div>
            </div>
          </div>
          
        ))}
        <div className="container border-top p-5">
          <div className="row">
            <div className="col-md-12 text-end fs-3 fw-bold d-flex flex-column align-items-end">
              <hr />
              Total: ${subTotal.toFixed(2)}
              
              </div>
              </div>
              </div>
          </div>
          
      <div class="col-md-6 container-fluid bg-default d-flex justify-content-end ">
        <form>
          <div class="form-row">
            <h4 class="my-4" id="font2">Billing Address</h4>
            <div class="col-md-4 form-group">
              <label for="firstname" id="font4">First Name</label>
              <input
                type="text"
                class="form-control"
                id="firstname"
                placeholder="First Name"
                required
              />
              <div class="invalid-feedback">Valid first name is required.</div>
            </div>
            <div class="col-md-6 form-group">
              <label for="lastname" id="font4">Last Name</label>
              <input
                type="text"
                class="form-control"
                id="lastname"
                placeholder="Last Name"
                required
              />
              <div class="invalid-feedback">Valid last name is required.</div>
            </div>
          </div>

          <div class="form-group">
            <label for="adress" id="font4">Address</label>
            <input
              type="text"
              class="form-control"
              id="adress"
              placeholder="1234 Main Street"
              required
            />
            <div class="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

          <div class="form-group">
            <label for="address2" id="font4">
              Address 2<span class="text-muted">(Optional)</span>
            </label>
            <input
              type="text"
              class="form-control"
              id="adress2"
              placeholder="Flat No"
            />
          </div>

          <div class="row">
            <div class="col-md-4 form-group">
              <label for="country" id="font4">Country</label>
              <input type="text" class="form-control" id="country" required />
            </div>

            <div class="col-md-4 form-group">
              <label for="city" id="font4">City</label>
              <input type="text" class="form-control" id="city" required/>
            </div>

            <div class="col-md-4 form-group">
              <label for="postcode" id="font4">zipcode</label>
              <input type="text" class="form-control" id="zipcode" required/>

              <div class="invalid-feedback">Postcode required.</div>
            </div>
          </div>

          <hr />

          <div class="form-check" id="font4">
            <input
              type="checkbox"
              class="form-check-input"
              id="shipping-adress"
            />
            Shipping address is the same as my billing address
            <label for="shipping-adress" class="form-check-label"></label>
          </div>

          <div class="form-check" id="font4">
            <input type="checkbox" class="form-check-input" id="same-adress" />
            Save this information for next time
            <label for="same-adress" class="form-check-label"></label>
          </div>

          <hr />

          <h4 class="mb-4" id="font4">Payment</h4>

          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="credit"
              name="payment-method"
              checked
              required
            />
            <label for="credit" class="form-check-label" id="font4">
              Credit Card
            </label>
          </div>

          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="debit"
              name="payment-method"
              required
            />
            <label for="debit" class="form-check-label" id="font4">
              Debit Card
            </label>
          </div>

          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="paypal"
              name="payment-method"
              required
            />
            <label for="paypal" class="form-check-label" id="font4">
              PayPal
            </label>
          </div>

          <div class="row mt-4">
            <div class="col-md-6 form-group">
              <label for="card-name" id="font4">Name on card</label>
              <input
                type="text"
                class="form-control"
                id="card-name"
                placeholder
                required
              />
              <div class="invalid-feedback">Name on card is required</div>
            </div>

            <div class="col-md-6 form-group">
              <label for="card-no" id="font4">Card Number</label>
              <input
                type="text"
                class="form-control"
                id="card-no"
                placeholder
                required
              />
              <div class="invalid-feedback">Credit card number is required</div>
            </div>
          </div>

          <div class="form-row">
            <div class="col-md-5 form-group">
              <label for="expiration" id="font4">Expire Date</label>
              <input
                type="text"
                class="form-control"
                id="card-name"
                placeholder
                required
              />
              <div class="invalid-feedback">Expiration date required</div>
            </div>

            <div class="col-md-5 form-group">
              <label for="ccv-no" id="font4"> CVV</label>
              <input
                type="text"
                class="form-control"
                id="sec-no"
                placeholder
                required
              />
              <div class="invalid-feedback">Security code required</div>
            </div>
          </div>

          <hr class="mb-3" />

          <NavLink to="/products" className="btn btn-primary col-md-2 fw-bold justify-content-end mt-3 mb-4" type="submit" onClick={ClearCart} id="font2">Checkout</NavLink>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Checkout;