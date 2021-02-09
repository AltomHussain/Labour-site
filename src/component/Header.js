import React from "react";
import "./Header.css";


export default function Header() {
  return (
    <header>
      {/* Here */}
     
      <div className="jumbotron">
        <div className="title-container">
          <h1>A New Leadership</h1>
        </div>
        <div>
          <i class="fas fa-chevron-down"></i>
        </div>
        <div className="form-container">
          <form>
            <p>GET THE LATEST FROM LABOUR</p>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Postcode" />
            <button type="submit" class="btn btn-danger">
              KEEP ME UPDATED
            </button>
            <p>
              We’ll email you about campaigns, events and opportunities to get
              involved. You can manage your preferences or unsubscribe at any
              time by contacting{" "}
              <a href="mailto: abc@example.com">theteam@labour.org.uk.</a> Find
              out more about<a href="#">how we use your information.</a>
            </p>
          </form>
        </div>
      </div>
    </header>
  );
}
