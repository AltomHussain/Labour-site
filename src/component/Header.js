import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      {/* Here */}
      <div
        style={{
          backgroundImage: `url("https://foreignpolicy.com/wp-content/uploads/2019/09/GettyImages-1170765134.jpg?w=1536")`,
          width: "80rem",
        }}
        className="jumbotron"
      >
        <div>
          <button type="button" class="btn  btn-join-labour">
            <Link to="/join-labour">JOIN LABOUR</Link>
          </button>
          <button type="button" class="btn  btn-take-action">
          <Link to="take-action">TAKE ACTION</Link>   
          </button>
          <button type="button" class="btn  btn-take-action">
            Volunteers
          </button>
          <button type="button" class="btn btn-donate-now">
            DONATE NOW
          </button>
        </div>
        <div className="title-container">
          <h2>A New Leadership</h2>
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
