import React from "react";
import "./TakeAction.css";
export default function TakeAction() {
  const navItems = [
    { item: " Donate", icon: `<i class="fas fa-gift"></i>` },
    { item: "Join", icon: `<i class="fas fa-plus-square"></i>` },
    {
      item: "Volunteer",
      icon: ` <i class="fas fa-users"></i>`,
    },
  ];
  const footerItems = [
    { item: "Join", link: "" },
    { item: "Donate", link: "" },
    { item: "Volunteer", link: "" },
    { item: "Privacy Policy", link: "" },
  ];
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
          <a className="navbar-brand" href="#">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  <i class="fas fa-gift"></i> Donate{" "}
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  <i class="fas fa-plus-square"></i> Join
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  <i class="fas fa-users"></i>Volunteer
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="take-action-container">
        <div className="main-container">
          <div className="search-container">
            <h4>Find a Labour campaign event near me</h4>
            <input
              type="text"
              className="form-control my-3"
              placeholder="Search for postcode or constituency"
            />
            <button className=" btn-search form-control my-3">Search</button>
          </div>
          <div className="image-container">
            <img
              className="my-3"
              src="https://labour-events-production.s3.eu-west-1.amazonaws.com/static-map.png?time=2021-01-27-22-00"
            />
          </div>
        </div>
      </div>

      <footer>
        <div className="first-container">
          <img src="logo here" alt="labout logo" />
          <p>
            Copyright Labour All rights reserved. Promoted by David Evans on
            behalf of the Labour Party both at Southside, 105 Victoria Street,
            London SW1E 6QT.
          </p>
        </div>
        <div className="second-container">
          <ul>
            <li>
              {" "}
              <a href="link">Join</a>
            </li>
            <li>
              {" "}
              <a href="link">Donate</a>
            </li>
            <li>
              {" "}
              <a href="link">Volunteer</a>
            </li>
            <li>
              {" "}
              <a href="link">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
