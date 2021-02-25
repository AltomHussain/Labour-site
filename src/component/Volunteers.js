import React from "react";
import "./Volunteers.css";
export default function Volunteers() {
  return (
    <div className="volunteers-container">
      <header className="bg-danger volunteers-header">
        <img src="https://www.labourinternational.net/wp-content/uploads/sites/70/2019/11/LabourLogoRedBackground-1200x630-c-center.jpg" />
      </header>

      <div className="sign-up-container form-group">
        <h2>Sign up to volunteer with Labour</h2>
        <h3>With your help we'll build a Britain for the many, not the few.</h3>
        <div className="main-form ">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label className="">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="form-control"
              />
            </div>
            <div className="form-group col-md-6">
              <label className="">Phone</label>
              <input type="text" placeholder="Phone" className="form-control" />
            </div>
          </div>

          <div className="form-row ">
            <div className="form-group col-md-6">
              <label className="">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="form-control"
              />
            </div>

            <div className="form-group col-md-6">
              <label className="">Postcode</label>
              <input
                type="text"
                placeholder="Postcode"
                className="form-control"
              />
            </div>
          </div>
        </div>
        <label className="">Email</label>
        <input type="text" className="form-control" />
        <p>
          Be part of our movement - with the contact details you have chosen to
          provide, the Labour Party can keep you updated via email, texts, calls
          and online advertisements on the latest campaigns, events and
          opportunities to get involved.
          <a href="https://labour.org.uk/privacy-policy/">
            Find out more about how we use your information.
          </a>
        </p>
        <button className="btn btn-sign-up form-control my-2">Sign Up</button>
      </div>

      <footer>
        it is the same as take action footer so just refactor it and make it
        reusable
      </footer>
    </div>
  );
}
