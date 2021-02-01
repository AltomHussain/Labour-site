import React from "react";
import "./Volunteers.css"
export default function Volunteers() {
  return (
    <div className="volunteers-container">
      <header className="bg-danger">
        <img src="labour logo" />
      </header>
      <div className="sign-up-container">
        <h2>Sign up to volunteer with Labour</h2>
        <h3>With your help we'll build a Britain for the many, not the few.</h3>
        <div className="main-form row">
          <div className="first-div col">
            <div className="col">
              <label className="col">First Name</label>
              <input type="text" placeholder="First Name" className="col" />
            </div>

            <div className="col">
              <label className="col">Phone</label>
              <input type="text" placeholder="Phone" className="col" />
            </div>
          </div>
          <div className="second-div col">
            <div className="col">
              <label className="col">First Name</label>
              <input type="text" placeholder="First Name" className="col" />
            </div>

            <div className="col">
              {" "}
              <label className="col">Postcode</label>
              <input type="text" placeholder="Postcode" className="col" />
            </div>
          </div>
        </div>
        <label className="col">Email</label>
        <input type="text" className="col" />
        <p>
          Be part of our movement - with the contact details you have chosen to
          provide, the Labour Party can keep you updated via email, texts, calls
          and online advertisements on the latest campaigns, events and
          opportunities to get involved.<a href="https://labour.org.uk/privacy-policy/">Find out more about how we use your
          information.</a> 
        </p>
        <button className="btn btn-sign-up form-control my-2" >Sign Up</button>
      </div>

      <footer>
          it is the same as take action footer so just refactor it and make it reusable
      </footer>
    </div>
  );
}
