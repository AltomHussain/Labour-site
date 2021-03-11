import React from "react";
import LogoImages from "./LogoImages";
import "./NavBar.css";
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <LogoImages
          image={
            <img
              src="https://s3.eu-central-1.amazonaws.com/centaur-wp/designweek/prod/content/uploads/2015/05/labour-logo-1002x203.gif
"
              className="img-fluid"
              alt="labour logo"
            />
          }
        />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item about">
              <a
                className="nav-link active"
                aria-current="page"
                href="https://www.google.co.uk/"
              >
                About
              </a>
              <div className="about-children children">
                <ul>
                  <li>People</li>
                  <li>Labour’s Legacy</li>
                  <li>Work With Us</li>
                  <li> Contact</li>
                </ul>
              </div>
            </li>

            <li className="nav-item where-we-stand">
              <a className="nav-link active" href="https://www.google.co.uk/">
                Where We Stand
              </a>
              <div className="where-we-stand-children children">
                <ul>
                  <li>Campaigns</li>
                  <li>Policy Development</li>
                </ul>
              </div>
            </li>

            <li className="nav-item members">
              <a className="nav-link active" href="https://www.google.co.uk/">
                Members
              </a>
              <div className=" children">
                <ul>
                  <li> My Labour Account</li>
                  <li> Why Join Labour?</li>
                  <li className="others">
                    Others <i class="fas fa-angle-double-right"></i>
                    <div className="others-children">
                      <ul>
                        <li> New Members</li>
                        <li> Member Resources</li>
                        <li> Member Welfare</li>
                        <li>Campaign Hub</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-item latest">
              <a className="nav-link active" href="https://www.google.co.uk/">
                Latest
              </a>
              <div className="children">
                <ul>
                  <li>Press Releases</li>
                  <li>Stories</li>
                </ul>
              </div>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
