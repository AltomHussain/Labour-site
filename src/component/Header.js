import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header>
      {/* Here */}

      <div className="jumbotron">
        <div className="header-view">
          <div className="title-container">
            <h1>A New Leadership</h1>
          </div>
          <div className="form-container">
            {/* <form> */}
            <p className="text-center text-white">GET THE LATEST FROM LABOUR</p>
            <input
              type="text"
              placeholder="Name"
              className="form-control mt-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="form-control mt-2"
            />
            <input
              type="text"
              placeholder="Postcode"
              className="form-control mt-2"
            />
            <button
              type="submit"
              className="btn btn-danger form-control mt-2 text-white"
            >
              KEEP ME UPDATED
            </button>
            <p className="form-text">
              We’ll email you about campaigns, events and opportunities to get
              involved. You can manage your preferences or unsubscribe at any
              time by contacting{" "}
              <a
                href="mailto: abc@example.com"
                className="form-email text-success"
              >
                theteam@labour.org.uk.
              </a>{" "}
              Find out more about
              <a href="#" className="form-email text-success">
                how we use your information.
              </a>
            </p>
            {/* </form> */}
          </div>
        </div>
        <div className="dow-arrow">
          <a href="#home" className="text-white">
            {" "}
            <i class="fas fa-angle-double-down"></i>
          
          <i class="fas fa-angle-double-down"></i>
          </a>
        </div>
      </div>

      
    </header>
  );
}
