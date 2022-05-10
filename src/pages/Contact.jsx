import React from 'react'

const Contact = () => {
  return (
    <div>
           <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-12 ">
            <h1 className="display-3 fw-bolder text-center text-shadow-navlinks text-primary" id="font2">
              Contact Us
            </h1>
            <hr />
          </div>
          </div>
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
                <form action="">
                    <div className="form-group">
                        <label for="name" id="font2">First Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your first name" />
                    </div>
                    <div className="form-group">
                        <label for="name" id="font2">Last Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your last name" />
                    </div>
                    <div className="form-group">
                        <label for="email" id="font2">Email</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your email address" />
                    </div>
                    <div className="form-group">
                        <label for="message" id="font2">Message</label>
                        <textarea type="text" className="form-control" id="name" placeholder="Enter a message" />
                    </div>
                    <button className="btn btn-danger mt-4 px-4 py-2" type="submit">Submit</button>
                </form>
            </div>
          </div>
        </div>
        </div>
  )
}

export default Contact