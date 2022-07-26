import React from "react";

const Login = () => {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-md-12 d-flex flex-column align-items-center mt-5 border mb-5"
          id="box-shadow"
        >
          <h1
            className="display-3 fw-bolder text-center text-shadow-navlinks mt-5 text-primary"
            id="font2"
          >
            Login
          </h1>
          <form>
            <label className="mt-5 mb-3 fs-5" id="font2">
              Username:
            </label>
            <input type="text" placeholder="Username" />
            <br />
            <label className="mt-1 mb-5 fs-5" id="font2">
              Password:
            </label>
            <input type="password" placeholder="Password" />
            <button
              className="btn btn-primary fw-bold px-4 py-2 mx-3"
              type="submit"
              id="font2"
            >
              Login
            </button>
          </form>

          <p className="mt-5">
            Don't have an account? <a href="/register">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
