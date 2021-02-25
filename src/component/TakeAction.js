import React from "react";
import "./TakeAction.css";
export default function TakeAction() {
  const navItems = [
    { id: 1, item: " Donate", icon: "fas fa-gift" },
    { id: 2, item: "Join", icon: "fas fa-plus-square" },
    {
      id: 3,
      item: "Volunteer",
      icon: "fas fa-users",
    },
  ];
  const footerItems = [
    { item: "Join", link: "" },
    { item: "Donate", link: "" },
    { item: "Volunteer", link: "" },
    { item: "Privacy Policy", link: "https://labour.org.uk/cookie-policy/" },
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
              {navItems.map((item) => {
                return (
                  <li key={item.id} className="nav-item active">
                    <i className={item.icon}></i>
                    {item.item}
                  </li>
                );
              })}
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
              alt="map-of-labour-cities"
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
            {footerItems.map((item) => (
              <a href={item.link}>
                <li> {item.item}</li>
              </a>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}
