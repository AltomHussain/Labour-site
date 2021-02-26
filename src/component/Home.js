import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";
import "./Home.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="home-container">
      <div className="phone-view-nav">
        <div className="phone-nav">
          <NavBar />
        </div>
        <div className="features-btn">
          <button type="button" class="btn  btn-join-labour">
            <Link to="/join-labour">JOIN LABOUR</Link>
          </button>
          <button type="button" class="btn  btn-take-action">
            <Link to="take-action">TAKE ACTION</Link>
          </button>
          <button type="button" class="btn  btn-take-action">
          <Link to="/volunteers"> Volunteers</Link>
        </button>
          <button type="button" class="btn btn-donate-now">
            DONATE NOW
          </button>
        </div>
      </div>
      <Header />

      <div className="home" id="home">
        <div className="first-container">
          <h2 className="text-center bg-primary">See our latest campaigns</h2>
          <div className="first-child">
            <h4 className="text-center">Jobs, Jobs, Jobs</h4>
            <p className="text-center">
              British faces a job crises: we must fight for jobs business and
              high streets.
            </p>
          </div>
          <div className="second-child">
            <h4 className="text-center">
              Run to rebuild: Key workers standing up for their communities
            </h4>
            <p>
              Key workers you have led the way through this pandemic. You should
              be at the heard of decision-making across the country.
            </p>
          </div>
        </div>
      </div>
      {/* Second container */}
      <div className="image-and-meet-sir">
        <div className="first-child">
          <img
            className="sir-image"
            src="https://labour.org.uk/wp-content/uploads/2020/04/keir-110120-202-800x800.jpeg"
            alt="Keir Starmer"
          />
        </div>
        <div className="meet-sir-container">
          <div className="d-flex">
            <span className="hand-made-hyphen">&nbsp;&nbsp;&nbsp;&nbsp;</span>{" "}
            <h1 className="text-danger mb-3">Meet Keir Starmer</h1>
          </div>

          <p className="my-3">
            Keir Starmer is the Leader of the Labour Party. Find out more about
            Keir now.
          </p>
          <span className="text-danger my-3 font-weight-bold">
            LEARN ABOUT THE LEADER OF LABOUR{" "}
            <i class="fas fa-long-arrow-alt-right"></i>
          </span>
        </div>
      </div>

      <div className="find-local-mp">
        <h3 className="text-danger text-center pt-5">
          <i class="fas fa-user-check"></i> Find your local Labour
          representative
        </h3>
        <form className="text-center form text-center pt-3">
          <i className="fas fa-search"></i>
          <input
            className="p-2 input-search"
            type="text"
            placeholder="Search by postcode"
          />
          <i className="fas text-white seach-arrow fa-long-arrow-alt-right"></i>
        </form>
      </div>

      <div className="movement">
        <div className="questions row">
          {/* <div className=" ml-3 become-and-join"> */}

          <div className="become-member ">
            <span className="become-child">
              <p className="">
                <i class="far fa-arrow-alt-circle-right"></i>
              </p>
              <p>BECOME A MEMBER</p>
            </span>
          </div>

          <div className="why-join">
            <span className=" why-join-child">
              <p>
                <i className="far fa-arrow-alt-circle-right "></i>
              </p>
              <p>WHY JOIN LABOUR?</p>
            </span>
          </div>

          {/* </div> */}

          {/* <div className="renew-and-access ml-3"> */}
          <div className="renew">
            <span className="renew-child">
              <p className="">
                <i class="far fa-arrow-alt-circle-right"></i>
              </p>
              <p>RENEW MEMBERSHIP</p>
            </span>
          </div>

          <div className="access">
            <span className="access-child">
              <p>
                <i class="far fa-arrow-alt-circle-right"></i>
              </p>
              <p>ACCESS MY LABOUR</p>
            </span>
          </div>
        </div>

        {/* </div> */}

        <div className="people-powered">
          <div className="d-flex">
            <span className="hand-made-hyphen">&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <h2 className="text-danger mt-4">
              Join our people-powered movement
            </h2>
          </div>
          <p className="my-2">
            Labour is made up of over half a million members, determined to
            transform Britain. It's simple and affordable to become a member,
            and it unlocks a ton of opportunities.
          </p>
          <span className="text-danger">
            FIND OUT WHY YOU SHOULD JOIN LABOUR{" "}
            <i class="fas find-out fa-arrow-right"></i>
          </span>
        </div>
      </div>

      <Footer />
    </div>
  );
}
